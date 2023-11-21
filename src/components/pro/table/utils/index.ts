import { Key } from 'react'
import type React from 'react'
import { useIntl } from 'react-intl'
import type { IntlShape } from 'react-intl'

import type { TablePaginationConfig } from '@/components/base'
import type { SortOrder } from '@/components/base/table/interface'
import type {
  ActionType,
  Bordered,
  BorderedType,
  ProColumns,
  ProColumnType,
  UseFetchDataAction,
} from '../typing'

/**
 * 檢查值是否存在 為了 避開 0 和 false
 *
 * @param value
 */
export const checkUndefinedOrNull = (value: any) =>
  value !== undefined && value !== null

/**
 * 合併用戶 props 和 預設的 props
 *
 * @param pagination
 * @param action
 * @param intl
 */
export function mergePagination<T>(
  pagination: TablePaginationConfig | boolean | undefined,
  pageInfo: UseFetchDataAction<T>['pageInfo'] & {
    setPageInfo: any
  },
  intl: IntlShape,
): TablePaginationConfig | false | undefined {
  if (pagination === false) {
    return false
  }
  const { total, current, pageSize, setPageInfo } = pageInfo
  const defaultPagination: TablePaginationConfig =
    typeof pagination === 'object' ? pagination : {}

  return {
    showTotal: (all, range) =>
      `${intl.formatMessage({ id: 'pagination.total.range', defaultMessage: '第' })} ${range[0]}-${range[1]
      } ${intl.formatMessage({
        id: 'pagination.total.total',
        defaultMessage: '條/總共',
      })} ${all} ${intl.formatMessage({ id: 'pagination.total.item', defaultMessage: '條' })}`,
    total,
    ...(defaultPagination as TablePaginationConfig),
    current:
      pagination !== true && pagination
        ? pagination.current ?? current
        : current,
    pageSize:
      pagination !== true && pagination
        ? pagination.pageSize ?? pageSize
        : pageSize,
    onChange: (page: number, newPageSize?: number) => {
      const { onChange } = pagination as TablePaginationConfig
      onChange?.(page, newPageSize || 20)
      // pageSize 改變之後就沒必要切換頁碼
      if (newPageSize !== pageSize || current !== page) {
        setPageInfo({ pageSize: newPageSize, current: page })
      }
    },
  }
}

/**
 * 獲取用戶的 action 資訊
 *
 * @param actionRef
 * @param counter
 * @param onCleanSelected
 */
export function useActionType<T>(
  ref: React.MutableRefObject<ActionType | undefined>,
  action: UseFetchDataAction<T>,
  props: {
    fullScreen: () => void
    onCleanSelected: () => void
    resetAll: () => void
  },
) {
  /** 這裡生成action的映射，保證 action 總是使用的最新 只需要渲染一次即可 */
  const userAction: ActionType = {
    pageInfo: action.pageInfo,
    reload: async (resetPageIndex?: boolean) => {
      // 如果為 true，回到第一頁
      if (resetPageIndex) {
        await action.setPageInfo({
          current: 1,
        })
      }
      await action?.reload()
    },
    reloadAndRest: async () => {
      // reload 之後高機率會切換資料，清空一下選擇。
      props.onCleanSelected()
      await action.setPageInfo({
        current: 1,
      })
      await action?.reload()
    },
    reset: async () => {
      await props.resetAll()
      await action?.reset?.()
      await action?.reload()
    },
    fullScreen: () => props.fullScreen(),
    clearSelected: () => props.onCleanSelected(),
    setPageInfo: (rest: any) => action.setPageInfo(rest),
  }
  // eslint-disable-next-line no-param-reassign
  ref.current = userAction
}

type PostDataType<T> = (data: T) => T

/**
 * 一個轉化的 pipeline 列表
 *
 * @param data
 * @param pipeline
 */
export function postDataPipeline<T>(data: T, pipeline: PostDataType<T>[]) {
  if (pipeline.filter((item) => item).length < 1) {
    return data
  }
  return pipeline.reduce((pre, postData) => {
    return postData(pre)
  }, data)
}

export const isBordered = (borderType: BorderedType, border?: Bordered) => {
  if (border === undefined) {
    return false
  }
  if (typeof border === 'boolean') {
    return border
  }
  return border[borderType]
}

export const isMergeCell = (
  dom: any, // 如果是合併單元格的，直接返回對象
) => dom && typeof dom === 'object' && dom?.props?.colSpan

/**
 * 根據 key 和 dataIndex 生成唯一 id
 *
 * @param key 用戶設置的 key
 * @param dataIndex 在對象中的資料
 * @param index 序號，理論上唯一
 */
export const genColumnKey = (
  key?: string | number | Key,
  index?: number | string,
): string => {
  if (key) {
    return Array.isArray(key) ? key.join('-') : key.toString()
  }
  return `${index}`
}

/**
 * 將 ProTable - column - dataIndex 轉為字串形式
 *
 * @param dataIndex Column 中的 dataIndex
 */
function parseDataIndex(
  dataIndex: ProColumnType['dataIndex'],
): string | undefined {
  if (Array.isArray(dataIndex)) {
    return dataIndex.join(',')
  }
  return dataIndex?.toString()
}

/**
 * 從 ProColumns 數組中取出預設的排序和篩選資料
 *
 * @param columns ProColumns
 */
export function parseDefaultColumnConfig<T, Value>(
  columns: ProColumns<T, Value>[],
) {
  const filter: Record<string, (string | number)[] | null> = {}
  const sort: Record<string, SortOrder> = {}
  columns.forEach((column) => {
    // 轉換 dataIndex
    const dataIndex = parseDataIndex(column.dataIndex)
    if (!dataIndex) {
      return
    }
    // 當 column 啟用 filters 功能時，取出預設的篩選值
    if (column.filters) {
      const defaultFilteredValue = column.defaultFilteredValue as (
        | string
        | number
      )[]
      if (defaultFilteredValue === undefined) {
        filter[dataIndex] = null
      } else {
        filter[dataIndex] = column.defaultFilteredValue as (string | number)[]
      }
    }
    // 當 column 啟用 sorter 功能時，取出預設的排序值
    if (column.sorter && column.defaultSortOrder) {
      sort[dataIndex] = column.defaultSortOrder!
    }
  })
  return { sort, filter }
}
