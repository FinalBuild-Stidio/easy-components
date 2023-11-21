import { useEffect, useRef } from 'react'
import { unstable_batchedUpdates } from 'react-dom'
import type {
  PageInfo,
  RequestData,
  UseFetchDataAction,
  UseFetchProps,
} from './typing'
import { postDataPipeline } from './utils/index'
import {
  runFunction,
  useDebounceFn,
  useDeepCompareEffect,
  useMountMergeState,
  usePrevious,
  useRefFunction,
} from '../utils'

/**
 * 組合用戶的配置和預設值
 *
 * @param param0
 */
const mergeOptionAndPageInfo = ({ pageInfo }: UseFetchProps) => {
  if (pageInfo) {
    const { current, defaultCurrent, pageSize, defaultPageSize } = pageInfo
    return {
      current: current || defaultCurrent || 1,
      total: 0,
      pageSize: pageSize || defaultPageSize || 20,
    }
  }
  return { current: 1, total: 0, pageSize: 20 }
}

/**
 * useFetchData hook 用來獲取資料並控制資料的狀態和分頁
 * @template T
 * @param {(undefined | ((params?: { pageSize: number; current: number }) => Promise<DataSource>))} getData - 獲取資料的函數，參數為分頁參數，
 * 返回一個 Promise 類型的 T 類型的資料
 * @param {(undefined | any[])} defaultData - 預設的資料
 * @param {UseFetchProps} options - 配置項，包括了預設的分頁參數、格式化資料的函數等
 * @returns {UseFetchDataAction} 返回一個對象，包含當前的資料列表、loading 狀態、error、以及可控制的分頁參數等
 */
const useFetchData = <DataSource extends RequestData<any>>(
  getData:
    | undefined
    | ((params?: { pageSize: number; current: number }) => Promise<DataSource>),
  defaultData: any[] | undefined,
  options: UseFetchProps,
): UseFetchDataAction => {
  /**
   * 用於保存組件是否被卸載的狀態的引用
   * @type {React.MutableRefObject<boolean>}
   */
  const umountRef = useRef<boolean>(false)
  /**
   * 用於保存 AbortController 實例的引用，方便需要時進行請求的取消操作
   * @type {React.MutableRefObject<AbortController | null>}
   */
  const abortRef = useRef<AbortController | null>(null)
  /**
   * useFetchData 鉤子的配置項
   * @typedef {object} UseFetchProps
   * @property {boolean} [onLoad=false] 是否在頁面載入時執行請求，預設為 false
   * @property {boolean} [manual=false] 是否手動觸發請求，預設為 false
   * @property {number | boolean} [polling=false] 是否開啟輪詢，可以為數字表示輪詢的時間間隔，也可以為 true 表示開啟默認時間為 1s 的輪詢
   * @property {function} [onRequestError] 請求錯誤的回調函數
   * @property {number} [debounceTime=20] 防抖時間，單位為毫秒，預設為 20ms
   */
  const {
    onLoad,
    manual,
    polling,
    onRequestError,
    debounceTime = 20,
    effects = [],
  } = options || {}

  /** 是否首次載入的指示器 */
  const manualRequestRef = useRef<boolean>(manual)

  /** 輪詢的setTime ID 儲存 */
  const pollingSetTimeRef = useRef<any>()

  /**
   * 用於儲存最新的資料，這樣可以在切換的時候保持資料的一致性
   */
  const [tableDataList, setTableDataList] = useMountMergeState<
    DataSource[] | undefined
  >(defaultData, {
    value: options?.dataSource,
    onChange: options?.onDataSourceChange,
  })

  /**
   * 表格的載入狀態
   */
  const [tableLoading, setTableLoading] = useMountMergeState<boolean>(false, {
    value: options?.loading,
    onChange: options?.onLoadingChange,
  })

  /**
   * 表示頁面資訊的類型  useMountMergeState 鉤子的初始值和參數
   * @typedef {object} PageInfo
   * @property {number} current 當前頁碼
   * @property {number} pageSize 頁面大小
   * @property {number} total 資料總量
   * @type {[PageInfo, React.Dispatch<React.SetStateAction<PageInfo>>]}
   */
  const [pageInfo, setPageInfoState] = useMountMergeState<PageInfo>(
    () => mergeOptionAndPageInfo(options),
    {
      onChange: options?.onPageInfoChange,
    },
  )

  /**
   * 用於比較並設置頁面資訊和回調函數的引用更新
   * @type {React.MutableRefObject<(changePageInfo: PageInfo) => void>}
   */
  const setPageInfo = useRefFunction((changePageInfo: PageInfo) => {
    if (
      changePageInfo.current !== pageInfo.current ||
      changePageInfo.pageSize !== pageInfo.pageSize ||
      changePageInfo.total !== pageInfo.total
    ) {
      setPageInfoState(changePageInfo)
    }
  })

  const [pollingLoading, setPollingLoading] = useMountMergeState(false)

  // Batching update  https://github.com/facebook/react/issues/14259
  const setDataAndLoading = (newData: DataSource[], dataTotal: number) => {
    unstable_batchedUpdates(() => {
      setTableDataList(newData)
      if (pageInfo?.total !== dataTotal) {
        setPageInfo({
          ...pageInfo,
          total: dataTotal || newData.length,
        })
      }
    })
  }

  /**
   * 上一頁的頁碼
   * @type {number}
   */
  const prePage = usePrevious(pageInfo?.current)

  /**
   * 上一頁的頁面大小
   * @type {number}
   */
  const prePageSize = usePrevious(pageInfo?.pageSize)

  /**
   * 上一頁的輪詢時間
   * @type {number|boolean}
   */
  const prePolling = usePrevious(polling)

  /**
   * 不這樣做會導致狀態不更新
   */
  const requestFinally = useRefFunction(() => {
    unstable_batchedUpdates(() => {
      setTableLoading(false)
      setPollingLoading(false)
    })
  })
  /** 請求資料 */
  const fetchList = async (isPolling: boolean) => {
    // 需要手動觸發的首次請求
    if (manualRequestRef.current) {
      manualRequestRef.current = false
      return
    }
    if (!isPolling) {
      setTableLoading(true)
    } else {
      setPollingLoading(true)
    }

    const { pageSize, current } = pageInfo || {}
    try {
      const pageParams =
        options?.pageInfo !== false
          ? {
            current,
            pageSize,
          }
          : undefined
      const {
        data = [],
        success,
        total = 0,
        ...rest
      } = (await getData?.(pageParams)) || {}
      // 如果失敗了，直接返回，不走剩下的邏輯了
      if (success === false) return []

      const responseData = postDataPipeline<DataSource[]>(
        data!,
        [options.postData].filter((item) => item) as any,
      )
      // 設置表格資料
      setDataAndLoading(responseData, total)
      onLoad?.(responseData, rest)
      return responseData
    } catch (e) {
      // 如果沒有傳遞這個方法的話，需要把錯誤拋出去，以免吞掉錯誤
      if (onRequestError === undefined) throw new Error(e as string)
      if (tableDataList === undefined) setTableDataList([])
      onRequestError(e as Error)
    } finally {
      requestFinally()
    }

    return []
  }

  /**
   * 該函數用於進行資料請求，可以用於輪詢或單次請求。
   * 透過使用 AbortController 取消之前的請求，避免出現請求堆積。
   * 若需要輪詢，則在一定時間後再次調用該函數，最小時間為 200ms，避免一直處於 loading 狀態。
   * 如果請求被取消，則返回空。
   */
  const fetchListDebounce = useDebounceFn(async (isPolling: boolean) => {
    if (pollingSetTimeRef.current) {
      clearTimeout(pollingSetTimeRef.current)
    }
    if (!getData) {
      return
    }

    const abort = new AbortController()
    abortRef.current = abort
    try {
      /**
       * 這段 code 使用了 Promise.race，同時發起了兩個非同步請求。
       * fetchList 函數發起一個資料請求，而第二個 Promise 是等待通過 AbortSignal 取得一個信號。
       * 如果第二個 Promise 得到了一個 AbortSignal 的信號，就會觸發 reject，Promise.race 的結果也會結束。
       * 這樣，就達到了取消請求的目的。如果 fetchList 函數先返回了結果，那麼該結果就是 Promise.race 的結果，
       * 此時第二個 Promise 就會被取消。
       */
      const msg = (await Promise.race([
        fetchList(isPolling),
        new Promise((_, reject) => {
          abortRef.current?.signal?.addEventListener?.('abort', () => {
            reject('aborted')
            // 結束強求，並且清空loading控制
            fetchListDebounce.cancel()
            requestFinally()
          })
        }),
      ])) as DataSource[]

      if (abort.signal.aborted) return
      // 放到請求前面會導致資料是上一次的
      const needPolling = runFunction(polling, msg)

      /*
       * 這段 code 是用於控制輪詢的。其中，needPolling 參數表明當前是否需要進行輪詢，umountRef 是一個 ref，用來記錄組件是否被卸載。
       * 如果需要輪詢並且組件沒有被卸載，就會調用 setTimeout，等待一定的時間，然後再次調用 fetchListDebounce 函數，並傳入需要輪詢的時間參數。
       * 其中 Math.max(needPolling, 2000) 用於確定最小的輪詢時間為 2000ms，避免頻繁請求導致一直處於 loading 狀態。
       */
      if (needPolling && !umountRef.current) {
        pollingSetTimeRef.current = setTimeout(() => {
          fetchListDebounce.run(needPolling)
          // 這裡判斷最小要2000ms，不然一直loading
        }, Math.max(needPolling, 2000))
      }

      return msg
    } catch (error) {
      if (error === 'aborted') {
        return
      }
      throw error
    }
  }, debounceTime || 30)

  /**
   * 取消請求
   */
  const abortFetch = () => {
    abortRef.current?.abort()
    fetchListDebounce.cancel()
    requestFinally()
  }

  // 如果輪詢結束了，直接銷毀定時器
  useEffect(() => {
    if (!polling) {
      clearTimeout(pollingSetTimeRef.current)
    }
    if (!prePolling && polling) {
      fetchListDebounce.run(true)
    }
    return () => {
      clearTimeout(pollingSetTimeRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [polling])

  useEffect(() => {
    umountRef.current = false

    return () => {
      umountRef.current = true
    }
  }, [])

  /** PageIndex 改變的時候自動刷新 */
  useEffect(() => {
    const { current, pageSize } = pageInfo || {}
    // 如果上次的頁碼為空或者兩次頁碼等於是沒必要查詢的
    // 如果 pageSize 發生變化是需要查詢的，所以又加了 prePageSize
    if (
      (!prePage || prePage === current) &&
      (!prePageSize || prePageSize === pageSize)
    ) {
      return
    }

    if (
      (options.pageInfo && tableDataList && tableDataList?.length > pageSize) ||
      0
    ) {
      return
    }

    // 如果 list 的長度大於 pageSize 的長度
    // 說明是一個假分頁
    // (pageIndex - 1 || 1) 至少要第一頁
    // 在第一頁大於 10
    // 第二頁也應該是大於 10
    if (
      current !== undefined &&
      tableDataList &&
      tableDataList.length <= pageSize
    ) {
      abortFetch()
      fetchListDebounce.run(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageInfo?.current])

  // pageSize 修改後返回第一頁
  useEffect(() => {
    if (!prePageSize) {
      return
    }
    abortFetch()
    fetchListDebounce.run(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageInfo?.pageSize])

  /**
   * 檢查是否有正在進行的請求需要被中止。如果是，則使用 abortRef 中的方法來中止請求。
   * 接下來，使用名為 fetchListDebounce 的防抖函數並傳入 false 參數。這個函數可以防止請求過於頻繁地發出，透過延遲執行傳遞給它的函數來實現。
   * 最後，檢查是否有正在進行的請求，如果有，則中止它。
   */
  useDeepCompareEffect(() => {
    abortFetch()
    fetchListDebounce.run(false)
    if (!manual) {
      // 如果 manual 標誌未設置，則將 manualRequestRef 設置為 false。
      // 用於跟蹤當前的請求是否是手動發起的。
      manualRequestRef.current = false
    }
    return () => {
      abortFetch()
    }
  }, [...effects, manual])

  return {
    /**
     * 表格的資料列表。
     * @type {DataSource[]}
     */
    dataSource: tableDataList! as DataSource[],
    /**
     * 用於設置表格資料列表的 setter 函數。
     * @type {function}
     * @param {DataSource[]} list - 更新後的表格資料列表。
     */
    setDataSource: setTableDataList,
    /**
     * 表示表格是否正在載入資料的標誌。
     * @type {boolean}
     */
    loading: tableLoading,
    /**
     * 重新載入表格資料的函數。
     * @type {function}
     * @async
     * @returns {Promise<boolean>} - 資料重新載入完成後解決為 true 的 Promise。
     */
    reload: async () => {
      abortFetch()
      return fetchListDebounce.run(false)
    },
    /**
     * 當前的分頁資訊。
     * @type {Object}
     * @prop {number} current - 當前頁碼。
     * @prop {number} total - 總資料數量。
     * @prop {number} pageSize - 每頁資料數量。
     */
    pageInfo,
    /**
     * 表示表格是否正在進行輪詢請求的標誌。
     * @type {boolean}
     */
    pollingLoading,

    /**
     * 重設分頁資訊為其初始值的函數。
     * @type {function}
     * @async
     * @returns {Promise<void>} - 重設完成後解決的 Promise。
     */
    reset: async () => {
      const { pageInfo: optionPageInfo } = options || {}
      const { defaultCurrent = 1, defaultPageSize = 20 } = optionPageInfo || {}
      const initialPageInfo = {
        current: defaultCurrent,
        total: 0,
        pageSize: defaultPageSize,
      }
      setPageInfo(initialPageInfo)
    },
    /**
     * 更新分頁資訊的函數。
     * @type {function}
     * @async
     * @param {Object} info - 新的分頁資訊。
     * @prop {number} [current] - 新的當前頁碼。
     * @prop {number} [total] - 新的總資料數量。
     * @prop {number} [pageSize] - 新的每頁資料數量。
     * @returns {Promise<void>} - 更新完成後解決的 Promise。
     */
    setPageInfo: async (info) => {
      setPageInfo({
        ...pageInfo,
        ...info,
      })
    },
  }
}

export default useFetchData
