import { useIntl } from 'react-intl'

import ProCard from '@/pro/card'
import { GridContext } from '@/pro/form'
import type { ParamsType } from '@/providers'
import { ProConfigProvider, proTheme } from '@/providers'
import type { TablePaginationConfig } from '@/base'
import { ConfigProvider, Table } from '@/base'
import type {
  GetRowKey,
  SortOrder,
  TableCurrentDataSource,
} from '@/base/table/interface'
import classNames from 'classnames'
import type Summary from 'rc-table/lib/Footer/Summary'
import React, {
  Key,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import type { ActionType } from '.'
import FormRender from './components/Form'
import Toolbar from './components/ToolBar'
import { Container, TableContext } from './Store/Provide'
import { useStyle } from './style'
import type {
  OptionSearchProps,
  PageInfo,
  ProTableProps,
  RequestData,
  UseFetchDataAction,
} from './typing'
import useFetchData from './useFetchData'
import {
  genColumnKey,
  isBordered,
  mergePagination,
  parseDefaultColumnConfig,
  useActionType,
} from './utils'
import { columnSort } from './utils/columnSort'
import { genProColumnToColumn } from './utils/genProColumnToColumn'

import {
  ErrorBoundary,
  omitUndefined,
  stringify,
  useDeepCompareEffect,
  useDeepCompareEffectDebounce,
  useMountMergeState,
} from '../utils'

function TableRender<T extends Record<string, any>, U, ValueType>(
  props: ProTableProps<T, U, ValueType> & {
    action: UseFetchDataAction<any>
    defaultClassName: string
    tableColumn: any[]
    toolbarDom: JSX.Element | null
    searchNode: JSX.Element | null
    alertDom: JSX.Element | null
    isLightFilter: boolean
    onSortChange: (sort: any) => void
    onFilterChange: (sort: any) => void
    getRowKey: GetRowKey<any>
  },
) {
  const {
    rowKey,
    tableClassName,
    defaultClassName,
    action,
    tableColumn: tableColumns,
    type,
    pagination,
    size,
    defaultSize,
    tableStyle,
    toolbarDom,
    searchNode,
    style,
    cardProps: propsCardProps,
    alertDom,
    name,
    onSortChange,
    onFilterChange,
    options,
    isLightFilter,
    className,
    cardBordered,
    getRowKey,
    ...rest
  } = props
  const counter = useContext(TableContext)

  /** 需要遍歷一下，不然不支持嵌套表格 */
  const columns = useMemo(() => {
    const loopFilter = (column: any[]): any[] => {
      return column
        .map((item) => {
          // 刪掉不應該顯示的
          const columnKey = genColumnKey(item.key, item.index)
          const config = counter.columnsMap[columnKey]
          if (config && config.show === false) {
            return false
          }
          if (item.children) {
            return {
              ...item,
              children: loopFilter(item.children),
            }
          }
          return item
        })
        .filter(Boolean)
    }
    return loopFilter(tableColumns)
  }, [counter.columnsMap, tableColumns])

  /** 如果所有列中的 filters = true | undefined 說明是用的是本地篩選 任何一列配置 filters=false，就能繞過這個判斷 */
  const useLocaleFilter = useMemo(() => {
    const _columns: any[] = []
    // 平鋪所有columns, 用於判斷是用的是本地篩選
    const loopColumns = (data: any[]) => {
      for (let i = 0; i < data.length; i++) {
        const _curItem = data[i]
        if (_curItem.children) {
          loopColumns(_curItem.children)
        } else {
          _columns.push(_curItem)
        }
      }
    }
    loopColumns(columns)
    return _columns?.every((column) => {
      return (
        (!!column.filters && !!column.onFilter) ||
        (column.filters === undefined && column.onFilter === undefined)
      )
    })
  }, [columns])

  const getTableProps = () => ({
    ...rest,
    size,
    className: tableClassName,
    style: tableStyle,
    columns: columns.map((item) =>
      item.isExtraColumns ? item.extraColumn : item,
    ),
    loading: action.loading,
    dataSource: action.dataSource,
    pagination,
    onChange: (
      changePagination: TablePaginationConfig,
      filters: Record<string, (React.Key | boolean)[] | null>,
      sorter: any,
      extra: TableCurrentDataSource<T>,
    ) => {
      rest.onChange?.(changePagination, filters, sorter, extra)
      if (!useLocaleFilter) {
        onFilterChange(omitUndefined<any>(filters))
      }

      // 製造篩選的資料
      // 製造一個排序的資料
      if (Array.isArray(sorter)) {
        const data = sorter.reduce<Record<string, any>>(
          (pre, value) => ({
            ...pre,
            [`${value.field}`]: value.order,
          }),
          {},
        )
        onSortChange(omitUndefined<any>(data))
      } else {
        const sorterOfColumn = sorter.column?.sorter
        const isSortByField = sorterOfColumn?.toString() === sorterOfColumn

        onSortChange(
          omitUndefined({
            [`${isSortByField ? sorterOfColumn : sorter.field}`]:
              sorter.order as SortOrder,
          }),
        )
      }
    },
  })

  /**
   * 是否需要 card 來包裹
   */
  const notNeedCardDom = useMemo(() => {
    if (
      props.search === false &&
      !props.headerTitle &&
      props.toolBarRender === false
    ) {
      return true
    }
    return false
  }, [])

  /** 默認的 table dom，如果是編輯模式，外面還要包個 form */
  const baseTableDom = (
    <GridContext.Provider
      value={{
        grid: false,
        colProps: undefined,
        rowProps: undefined,
      }}
    >
      <Table<T> {...getTableProps()} rowKey={rowKey} />
    </GridContext.Provider>
  )

  /** 自訂的 render */
  const tableDom = props.tableViewRender
    ? props.tableViewRender(
      {
        ...getTableProps(),
      },
      baseTableDom,
    )
    : baseTableDom

  /**
   * 這段 code 使用了 useMemo 進行了性能最佳化，根據 props.editable 和 props.name 的不同情況，渲染不同的頁面組件。
   * 當 props.editable 為 true 並且 props.name 不存在時，渲染一個帶有表單和工具欄的頁面組件，否則只渲染工具欄和表格組件。
   * renderContent 函數會在 alertDom、props.loading、props.editable、tableDom、toolbarDom 發生變化時重新執行。
   * */
  const tableContentDom = useMemo(() => {
    return (
      <>
        {toolbarDom}
        {alertDom}

        {tableDom}
      </>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alertDom, props.loading, tableDom, toolbarDom])

  const cardBodyStyle = useMemo(() => {
    if (propsCardProps === false || notNeedCardDom === true || !!props.name)
      return {}

    if (toolbarDom) {
      return {
        paddingBlockStart: 0,
      }
    }
    if (toolbarDom && pagination === false) {
      return {
        paddingBlockStart: 0,
      }
    }
    // if (!toolbarDom)
    return {
      padding: 0,
    }
  }, [notNeedCardDom, pagination, props.name, propsCardProps, toolbarDom])

  /** Table 區域的 dom，為了方便 render */
  const tableAreaDom =
    // cardProps 或者 有了name 就不需要這個padding了，不然會導致不好對齊
    propsCardProps === false || notNeedCardDom === true || !!props.name ? (
      tableContentDom
    ) : (
      <ProCard
        ghost={props.ghost}
        bordered={isBordered('table', cardBordered)}
        bodyStyle={cardBodyStyle}
        {...propsCardProps}
      >
        {tableContentDom}
      </ProCard>
    )

  const renderTable = () => {
    if (props.tableRender) {
      return props.tableRender(props, tableAreaDom, {
        toolbar: toolbarDom || undefined,
        alert: alertDom || undefined,
        table: tableDom || undefined,
      })
    }
    return tableAreaDom
  }

  const proTableDom = (
    <div
      className={classNames(className, {
        [`${defaultClassName}-polling`]: action.pollingLoading,
      })}
      style={style}
      ref={counter.rootDomRef}
    >
      {isLightFilter ? null : searchNode}
      {/* 渲染一個額外的區域，用於一些自訂 */}
      {type !== 'form' && props.tableExtraRender && (
        <div className={classNames(className, `${defaultClassName}-extra`)}>
          {props.tableExtraRender(props, action.dataSource || [])}
        </div>
      )}
      {type !== 'form' && renderTable()}
    </div>
  )

  // 如果不需要的全螢幕，ConfigProvider 沒有意義
  if (!options || !options?.fullScreen) {
    return proTableDom
  }
  return (
    <ConfigProvider
      getPopupContainer={() => {
        return (counter.rootDomRef.current ||
          document.body) as any as HTMLElement
      }}
    >
      {proTableDom}
    </ConfigProvider>
  )
}

const emptyObj = {}

const ProTable = <
  T extends Record<string, any>,
  U extends ParamsType,
  ValueType,
>(
  props: ProTableProps<T, U, ValueType> & {
    defaultClassName: string
  },
) => {
  const {
    cardBordered,
    request,
    className: propsClassName,
    params = emptyObj,
    defaultData,
    headerTitle,
    postData,
    ghost,
    pagination: propsPagination,
    actionRef: propsActionRef,
    columns: propsColumns = [],
    toolBarRender,
    optionsRender,
    onLoad,
    onRequestError,
    style,
    cardProps,
    tableStyle,
    tableClassName,
    columnsStateMap,
    onColumnsStateChange,
    options,
    search,
    name: isEditorTable,
    onLoadingChange,
    beforeSearchSubmit,
    tableAlertRender,
    defaultClassName,
    formRef: propRef,
    type = 'table',
    columnEmptyText = '-',
    toolbar,
    rowKey,
    manualRequest,
    polling,
    tooltip,
    revalidateOnFocus = false,
    searchFormRender,
    ...rest
  } = props
  const { wrapSSR, hashId } = useStyle(props.defaultClassName)

  const className = classNames(defaultClassName, propsClassName, hashId)

  /** 通用的來操作子節點的工具類 */
  const actionRef = useRef<ActionType>()

  const defaultFormRef = useRef()
  const formRef = propRef || defaultFormRef

  useImperativeHandle(propsActionRef, () => actionRef.current)

  const [formSearch, setFormSearch] = useMountMergeState<
    Record<string, any> | undefined
  >(() => {
    // 如果手動模式，或者 search 不存在的時候設置為 undefined
    // undefined 就不會觸發首次載入
    if (manualRequest || search !== false) {
      return undefined
    }
    return {}
  })

  const [proFilter, setProFilter] = useMountMergeState<
    Record<string, (string | number)[] | null>
  >({})
  const [proSort, setProSort] = useMountMergeState<Record<string, SortOrder>>(
    {},
  )

  /** 設置默認排序和篩選值 */
  useEffect(() => {
    const { sort, filter } = parseDefaultColumnConfig(propsColumns)
    setProFilter(filter)
    setProSort(sort)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const intl = useIntl()

  /** 需要初始化 不然默認可能報錯 這裡取了 defaultCurrent 和 current 為了保證不會重複刷新 */
  const fetchPagination =
    typeof propsPagination === 'object'
      ? (propsPagination as TablePaginationConfig)
      : { defaultCurrent: 1, defaultPageSize: 20, pageSize: 20, current: 1 }

  const counter = useContext(TableContext)

  // ============================ useFetchData ============================
  const fetchData = useMemo(() => {
    if (!request) return undefined
    return async (pageParams?: Record<string, any>) => {
      const actionParams = {
        ...(pageParams || {}),
        ...formSearch,
        ...params,
      }

      // eslint-disable-next-line no-underscore-dangle
      delete (actionParams as any)._timestamp
      const response = await request(
        actionParams as unknown as U,
        proSort,
        proFilter,
      )
      return response as RequestData<T>
    }
  }, [formSearch, params, proFilter, proSort, request])

  const action = useFetchData(fetchData, defaultData, {
    pageInfo: propsPagination === false ? false : fetchPagination,
    loading: props.loading,
    dataSource: props.dataSource,
    onDataSourceChange: props.onDataSourceChange,
    onLoad,
    onLoadingChange,
    onRequestError,
    postData,
    revalidateOnFocus,
    manual: formSearch === undefined,
    polling,
    effects: [
      stringify(params),
      stringify(formSearch),
      stringify(proFilter),
      stringify(proSort),
    ],
    debounceTime: props.debounceTime,
    onPageInfoChange: (pageInfo) => {
      if (!propsPagination || !fetchData) return

      // 總是觸發一下 onChange 和  onShowSizeChange
      // 目前只有 List 和 Table 支持分頁, List 有分頁的時候打斷 Table 的分頁
      propsPagination?.onChange?.(pageInfo.current, pageInfo.pageSize)
      propsPagination?.onShowSizeChange?.(pageInfo.current, pageInfo.pageSize)
    },
  })
  // ============================ END ============================

  /** 默認聚焦的時候重新請求資料，這樣可以保證資料都是最新的。 */
  useEffect(() => {
    // 手動模式和 request 為空都不生效
    if (
      props.manualRequest ||
      !props.request ||
      !revalidateOnFocus ||
      props.form?.ignoreRules
    )
      return

    // 聚焦時重新請求事件
    const visibilitychange = () => {
      if (document.visibilityState === 'visible') {
        action.reload()
      }
    }

    document.addEventListener('visibilitychange', visibilitychange)
    return () =>
      document.removeEventListener('visibilitychange', visibilitychange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /** SelectedRowKeys受控處理selectRows */
  const preserveRecordsRef = React.useRef(new Map<any, T>())

  // ============================ RowKey ============================
  const getRowKey = React.useMemo<GetRowKey<any>>(() => {
    if (typeof rowKey === 'function') {
      return rowKey
    }
    return (record: T, index?: number) => {
      if (index === -1) {
        return (record as any)?.[rowKey as string]
      }
      // 如果 props 中有name 的話，用index 來做行號，這樣方便轉化為 index
      if (props.name) {
        return index?.toString()
      }
      return (record as any)?.[rowKey as string] ?? index?.toString()
    }
  }, [props.name, rowKey])

  useMemo(() => {
    if (action.dataSource?.length) {
      const keys = action.dataSource.map((data) => {
        const dataRowKey = getRowKey(data, -1)
        preserveRecordsRef.current.set(dataRowKey, data)
        return dataRowKey
      })
      return keys
    }
    return []
  }, [action.dataSource, getRowKey])

  /** 頁面編輯的計算 */
  const pagination = useMemo(() => {
    const newPropsPagination =
      propsPagination === false ? false : { ...propsPagination }
    const pageConfig = {
      ...action.pageInfo,
      setPageInfo: ({ pageSize, current }: PageInfo) => {
        const { pageInfo } = action

        // pageSize 發生改變，並且你不是在第一頁，切回到第一頁
        // 這樣可以防止出現 跳轉到一個空的資料頁的問題
        if (pageSize === pageInfo.pageSize || pageInfo.current === 1) {
          action.setPageInfo({ pageSize, current })

          return
        }

        // 通過request的時候清空資料，然後刷新不然可能會導致 pageSize 沒有資料多
        if (request) action.setDataSource([])
        action.setPageInfo({
          pageSize,
          // 目前只有 List 和 Table 支持分頁, List 有分頁的時候 還是使用之前的當前頁碼
          current: type === 'list' ? current : 1,
        })
      },
    }
    if (request && newPropsPagination) {
      delete newPropsPagination.onChange
      delete newPropsPagination.onShowSizeChange
    }
    return mergePagination<T>(newPropsPagination, pageConfig, intl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propsPagination, action, intl])
  useDeepCompareEffect(() => {
    // request 存在且params不為空，且已經請求過資料才需要設置。
    if (
      props.request &&
      params &&
      action.dataSource &&
      action?.pageInfo?.current !== 1
    ) {
      action.setPageInfo({
        current: 1,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  // 設置 name 到 store 中，裡面用了 ref ，所以不用擔心直接 set
  counter.setPrefixName(props.name)

  counter.propsRef.current = props as ProTableProps<any, any, any>

  // ============================ Render ============================
  const { token } = proTheme?.useToken()

  /** 綁定 action */
  useActionType(actionRef, action, {
    fullScreen: () => {
      if (!counter.rootDomRef?.current || !document.fullscreenEnabled) {
        return
      }
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        counter.rootDomRef?.current.requestFullscreen()
      }
    },
    onCleanSelected: () => {
      // 清空選中行
      // onCleanSelected()
    },
    resetAll: () => {
      // 清空選中行
      // onCleanSelected()
      // 清空篩選
      setProFilter({})
      // 清空排序
      setProSort({})
      // 清空 toolbar 搜索
      counter.setKeyWords(undefined)
      // 重設頁碼
      action.setPageInfo({
        current: 1,
      })

      // 重設表單
      formRef?.current?.resetFields()
      setFormSearch({})
    },
  })

  /** 同步 action */
  counter.setAction(actionRef.current)

  if (propsActionRef) {
    // @ts-ignore
    propsActionRef.current = actionRef.current
  }

  // ---------- 列計算相關 start  -----------------
  const tableColumn = useMemo(() => {
    return genProColumnToColumn<T>({
      columns: propsColumns,
      counter,
      columnEmptyText,
      type,
      marginSM: token.marginSM,
      rowKey,
      childrenColumnName: props.expandable?.childrenColumnName,
    }).sort(columnSort(counter.columnsMap))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    propsColumns,
    counter?.sortKeyColumns,
    counter?.columnsMap,
    columnEmptyText,
    type,
  ])

  /** Table Column 變化的時候更新一下，這個參數將會用於渲染 */
  useDeepCompareEffectDebounce(
    () => {
      if (tableColumn && tableColumn.length > 0) {
        // 重新生成key的字串用於排序
        const columnKeys = tableColumn.map((item) =>
          genColumnKey(item.key, item.index),
        )
        counter.setSortKeyColumns(columnKeys)
      }
    },
    [tableColumn],
    ['render', 'renderFormItem'],
    100,
  )

  /** 同步 Pagination，支持受控的 頁碼 和 pageSize */
  useDeepCompareEffect(() => {
    const { pageInfo } = action
    const { current = pageInfo?.current, pageSize = pageInfo?.pageSize } =
      propsPagination || {}
    if (
      propsPagination &&
      (current || pageSize) &&
      (pageSize !== pageInfo?.pageSize || current !== pageInfo?.current)
    ) {
      action.setPageInfo({
        pageSize: pageSize || pageInfo.pageSize,
        current: current || pageInfo.current,
      })
    }
  }, [
    propsPagination && propsPagination.pageSize,
    propsPagination && propsPagination.current,
  ])

  /** 是不是 LightFilter, LightFilter 有一些特殊的處理 */
  const isLightFilter: boolean =
    search !== false && search?.filterType === 'light'

  const onFormSearchSubmit = useCallback(
    <Y extends ParamsType>(values: Y): any => {
      // 判斷search.onSearch返回值決定是否更新formSearch
      if (options && options.search) {
        const { name = 'keyword' } =
          options.search === true ? {} : options.search

        /** 如果傳入的 onSearch 返回值為 false，則不要把options.search.name對應的值set到formSearch */
        const success = (options.search as OptionSearchProps)?.onSearch?.(
          counter.keyWords!,
        )

        if (success !== false) {
          setFormSearch({
            ...values,
            [name]: counter.keyWords,
          })
          return
        }
      }

      setFormSearch(values)
    },
    [counter.keyWords, options, setFormSearch],
  )

  const loading = useMemo(() => {
    if (typeof action.loading === 'object') {
      return action.loading || false
    }
    return action.loading
  }, [action.loading])

  const searchNode = useMemo(() => {
    const node =
      search === false && type !== 'form' ? null : (
        <FormRender<T, U>
          pagination={pagination}
          beforeSearchSubmit={beforeSearchSubmit}
          action={actionRef}
          columns={propsColumns}
          onFormSearchSubmit={(values) => {
            onFormSearchSubmit(values)
          }}
          ghost={ghost}
          onReset={props.onReset}
          onSubmit={props.onSubmit}
          loading={!!loading}
          manualRequest={manualRequest}
          search={search}
          form={props.form}
          formRef={formRef}
          type={props.type || 'table'}
          cardBordered={props.cardBordered}
          dateFormatter={props.dateFormatter}
        />
      )

    if (searchFormRender && node) {
      return <>{searchFormRender(props, node)}</>
    } else {
      return node
    }
  }, [
    beforeSearchSubmit,
    formRef,
    ghost,
    loading,
    manualRequest,
    onFormSearchSubmit,
    pagination,
    props,
    propsColumns,
    search,
    searchFormRender,
    type,
  ])

  /** 內建的工具欄 */
  const toolbarDom =
    toolBarRender === false ? null : (
      <Toolbar<T>
        headerTitle={headerTitle}
        hideToolbar={
          options === false &&
          !headerTitle &&
          !toolBarRender &&
          !toolbar &&
          !isLightFilter
        }
        selectedRows={[]}
        selectedRowKeys={[]}
        tableColumn={tableColumn}
        tooltip={tooltip}
        toolbar={toolbar}
        onFormSearchSubmit={(newValues) => {
          setFormSearch({
            ...formSearch,
            ...newValues,
          })
        }}
        searchNode={isLightFilter ? searchNode : null}
        options={options}
        optionsRender={optionsRender}
        actionRef={actionRef}
        toolBarRender={toolBarRender}
      />
    )

  return wrapSSR(
    <TableRender
      {...props}
      name={isEditorTable}
      defaultClassName={defaultClassName}
      size={counter.tableSize}
      onSizeChange={counter.setTableSize}
      pagination={pagination}
      searchNode={searchNode}
      className={className}
      tableColumn={tableColumn}
      isLightFilter={isLightFilter}
      action={action}
      alertDom={null}
      toolbarDom={toolbarDom}
      onSortChange={(sortConfig) => {
        if (proSort === sortConfig) return
        setProSort(sortConfig ?? {})
      }}
      onFilterChange={(filterConfig) => {
        if (filterConfig === proFilter) return
        setProFilter(filterConfig)
      }}
      getRowKey={getRowKey}
    />,
  )
}

/**
 * 🏆 Use Ant Design Table like a Pro! 更快 更好 更方便
 *
 * @param props
 */
const ProviderTableContainer = <
  DataType extends Record<string, any>,
  Params extends ParamsType = ParamsType,
  ValueType = 'text',
>(
  props: ProTableProps<DataType, Params, ValueType>,
) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)

  const ErrorComponent =
    props.ErrorBoundary === false
      ? React.Fragment
      : props.ErrorBoundary || ErrorBoundary

  return (
    <Container initValue={props}>
      <ProConfigProvider needDeps>
        <ErrorComponent>
          <ProTable<DataType, Params, ValueType>
            defaultClassName={`${getPrefixCls('pro-table')}`}
            {...props}
          />
        </ErrorComponent>
      </ProConfigProvider>
    </Container>
  )
}

ProviderTableContainer.Summary = Table.Summary as typeof Summary

export default ProviderTableContainer
