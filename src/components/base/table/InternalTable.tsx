import * as React from 'react'
import classNames from 'classnames'
import { INTERNAL_HOOKS, type TableProps as RcTableProps } from 'rc-table'
import { convertChildrenToColumns } from 'rc-table/lib/hooks/useColumns'
import omit from 'rc-util/lib/omit'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

import type { Breakpoint } from '../_util/responsiveObserver'
import scrollTo from '../_util/scrollTo'
import type { AnyObject } from '../_util/type'
import { devUseWarning } from '../_util/warning'
import type { ConfigConsumerProps } from '../Config/ConfigContext'
import { ConfigContext } from '../Config/ConfigContext'
import DefaultRenderEmpty from '../Config/defaultRenderEmpty'
import useSize from '../Config/hooks/useSize'
import type { SizeType } from '../Config/SizeContext'
import useBreakpoint from '../grid/hooks/useBreakpoint'
import defaultLocale from '../locale/en_US'
import Pagination from '../pagination'
import { useToken } from '../theme/internal'
import type { TooltipProps } from '../tooltip'
import renderExpandIcon from './ExpandIcon'
import useContainerWidth from './hooks/useContainerWidth'
import useLazyKVMap from './hooks/useLazyKVMap'
import usePagination, { DEFAULT_PAGE_SIZE, getPaginationParam } from './hooks/usePagination'
import type { SortState } from './hooks/useSorter'
import useSorter, { getSortData } from './hooks/useSorter'
import useTitleColumns from './hooks/useTitleColumns'
import type {
  ColumnsType,
  ColumnTitleProps,
  ColumnType,
  ExpandableConfig,
  ExpandType,
  FilterValue,
  GetPopupContainer,
  GetRowKey,
  RefInternalTable,
  SorterResult,
  SortOrder,
  TableAction,
  TableCurrentDataSource,
  TableLocale,
  TablePaginationConfig,
} from './interface'
import RcTable from './RcTable'
import RcVirtualTable from './RcTable/VirtualTable'
import useStyle from './style'

export type { ColumnsType, TablePaginationConfig }

const EMPTY_LIST: any[] = []

interface ChangeEventInfo<RecordType> {
  pagination: {
    current?: number
    pageSize?: number
    total?: number
  }
  filters: Record<string, FilterValue | null>
  sorter: SorterResult<RecordType> | SorterResult<RecordType>[]

  sorterStates: SortState<RecordType>[]

  resetPagination: (current?: number, pageSize?: number) => void
}

/** Same as `TableProps` but we need record parent render times */
export interface InternalTableProps<RecordType> extends TableProps<RecordType> {
  _renderTimes: number
}

export interface TableProps<RecordType>
  extends Omit<
    RcTableProps<RecordType>,
    | 'transformColumns'
    | 'internalHooks'
    | 'internalRefs'
    | 'data'
    | 'columns'
    | 'scroll'
    | 'emptyText'
  > {
  dropdownPrefixCls?: string
  dataSource?: RcTableProps<RecordType>['data']
  columns?: ColumnsType<RecordType>
  pagination?: false | TablePaginationConfig
  loading?: boolean
  size?: SizeType
  bordered?: boolean
  locale?: TableLocale
  rootClassName?: string

  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<RecordType> | SorterResult<RecordType>[],
    extra: TableCurrentDataSource<RecordType>,
  ) => void

  getPopupContainer?: GetPopupContainer
  scroll?: RcTableProps<RecordType>['scroll'] & {
    scrollToFirstRowOnChange?: boolean
  }
  sortDirections?: SortOrder[]
  showSorterTooltip?: boolean | TooltipProps
  virtual?: boolean
}

const InternalTable = <RecordType extends AnyObject = AnyObject>(
  props: InternalTableProps<RecordType>,
  ref: React.MutableRefObject<HTMLDivElement>,
) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    size: customizeSize,
    bordered,
    dropdownPrefixCls: customizeDropdownPrefixCls,
    dataSource,
    pagination,
    rowKey = 'key',
    rowClassName,
    columns,
    children,
    childrenColumnName: legacyChildrenColumnName,
    onChange,
    getPopupContainer,
    loading,
    expandIcon,
    expandable,
    expandedRowRender,
    expandIconColumnIndex,
    indentSize,
    scroll,
    sortDirections,
    locale,
    showSorterTooltip = true,
    virtual,
  } = props

  const warning = devUseWarning('Table')

  if (process.env.NODE_ENV !== 'production') {
    warning(
      !(typeof rowKey === 'function' && rowKey.length > 1),
      'usage',
      '`index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected.',
    )
  }

  const baseColumns = React.useMemo(
    () => columns || (convertChildrenToColumns(children) as ColumnsType<RecordType>),
    [columns, children],
  )
  const needResponsive = React.useMemo(
    () => baseColumns.some((col: ColumnType<RecordType>) => col.responsive),
    [baseColumns],
  )

  const screens = useBreakpoint(needResponsive)

  const mergedColumns = React.useMemo(() => {
    // @ts-ignore
    const matched = new Set(Object.keys(screens).filter((m: string) => screens[m]))

    return baseColumns.filter(
      (c) => !c.responsive || c.responsive.some((r: Breakpoint) => matched.has(r)),
    )
  }, [baseColumns, screens])

  const tableProps: TableProps<RecordType> = omit(props, ['className', 'style', 'columns'])

  const {
    locale: contextLocale = defaultLocale,
    table,
    renderEmpty,
    getPrefixCls,
    getPopupContainer: getContextPopupContainer,
  } = React.useContext<ConfigConsumerProps>(ConfigContext)

  const mergedSize = useSize(customizeSize)
  const tableLocale: TableLocale = { ...contextLocale.Table, ...locale }
  const rawData: readonly RecordType[] = dataSource || EMPTY_LIST

  const prefixCls = getPrefixCls('table', customizePrefixCls)
  const dropdownPrefixCls = getPrefixCls('dropdown', customizeDropdownPrefixCls)

  const mergedExpandable: ExpandableConfig<RecordType> = {
    childrenColumnName: legacyChildrenColumnName,
    expandIconColumnIndex,
    ...expandable,
  }
  const { childrenColumnName = 'children' } = mergedExpandable

  const expandType = React.useMemo<ExpandType>(() => {
    if (rawData.some((item) => item?.[childrenColumnName])) {
      return 'nest'
    }

    if (expandedRowRender || (expandable && expandable.expandedRowRender)) {
      return 'row'
    }

    return null
  }, [rawData])

  const internalRefs = {
    body: React.useRef<HTMLDivElement>(),
  }

  // ============================ Width =============================
  const getContainerWidth = useContainerWidth(prefixCls)

  // ============================ RowKey ============================
  const getRowKey = React.useMemo<GetRowKey<RecordType>>(() => {
    if (typeof rowKey === 'function') {
      return rowKey
    }

    return (record: RecordType) => (record as any)?.[rowKey as string]
  }, [rowKey])

  const [getRecordByKey] = useLazyKVMap(rawData, childrenColumnName, getRowKey)

  // ============================ Events =============================
  const changeEventInfo: Partial<ChangeEventInfo<RecordType>> = {}

  const triggerOnChange = (
    info: Partial<ChangeEventInfo<RecordType>>,
    action: TableAction,
    reset: boolean = false,
  ) => {
    const changeInfo = {
      ...changeEventInfo,
      ...info,
    }

    if (reset) {
      changeEventInfo.resetPagination?.()

      // Reset event param
      if (changeInfo.pagination?.current) {
        changeInfo.pagination.current = 1
      }

      // Trigger pagination events
      if (pagination && pagination.onChange) {
        pagination.onChange(1, changeInfo.pagination?.pageSize!)
      }
    }

    if (scroll && scroll.scrollToFirstRowOnChange !== false && internalRefs.body.current) {
      scrollTo(0, {
        getContainer: () => internalRefs.body.current!,
      })
    }

    onChange?.(changeInfo.pagination!, changeInfo.filters!, changeInfo.sorter!, {
      currentDataSource: getSortData(rawData, changeInfo.sorterStates!, childrenColumnName),
      action,
    })
  }

  /**
   * Controlled state in `columns` is not a good idea that makes too many code (1000+ line?) to read
   * state out and then put it back to title render. Move these code into `hooks` but still too
   * complex. We should provides Table props like `sorter` & `filter` to handle control in next big
   * version.
   */

  // ============================ Sorter =============================
  const onSorterChange = (
    sorter: SorterResult<RecordType> | SorterResult<RecordType>[],
    sorterStates: SortState<RecordType>[],
  ) => {
    triggerOnChange(
      {
        sorter,
        sorterStates,
      },
      'sort',
      false,
    )
  }
  const [transformSorterColumns, sortStates, sorterTitleProps, getSorters] = useSorter<RecordType>({
    prefixCls,
    mergedColumns,
    onSorterChange,
    sortDirections: sortDirections || ['ascend', 'descend'],
    tableLocale,
    showSorterTooltip,
  })
  const sortedData = React.useMemo(
    () => getSortData(rawData, sortStates, childrenColumnName),
    [rawData, sortStates],
  )

  changeEventInfo.sorter = getSorters()
  changeEventInfo.sorterStates = sortStates

  // ============================ Column ============================
  const columnTitleProps = sorterTitleProps

  const [transformTitleColumns] = useTitleColumns(columnTitleProps)

  // ========================== Pagination ==========================
  const onPaginationChange = (current: number, pageSize: number) => {
    triggerOnChange(
      {
        pagination: { ...changeEventInfo.pagination, current, pageSize },
      },
      'paginate',
    )
  }

  const [mergedPagination, resetPagination] = usePagination(
    sortedData.length,
    onPaginationChange,
    pagination,
  )

  changeEventInfo.pagination =
    pagination === false ? {} : getPaginationParam(mergedPagination, pagination)

  changeEventInfo.resetPagination = resetPagination

  // ============================= Data =============================
  const pageData = React.useMemo<RecordType[]>(() => {
    if (pagination === false || !mergedPagination.pageSize) {
      return sortedData
    }

    const { current = 1, total, pageSize = DEFAULT_PAGE_SIZE } = mergedPagination
    warning(current > 0, 'usage', '`current` should be positive number.')

    // Dynamic table data
    if (sortedData.length < total!) {
      if (sortedData.length > pageSize) {
        warning(
          false,
          'usage',
          '`dataSource` length is less than `pagination.total` but large than `pagination.pageSize`. Please make sure your config correct data with async mode.',
        )
        return sortedData.slice((current - 1) * pageSize, current * pageSize)
      }
      return sortedData
    }

    return sortedData.slice((current - 1) * pageSize, current * pageSize)
  }, [
    !!pagination,
    sortedData,
    mergedPagination && mergedPagination.current,
    mergedPagination && mergedPagination.pageSize,
    mergedPagination && mergedPagination.total,
  ])

  const internalRowClassName = (record: RecordType, index: number, indent: number) => {
    let mergedRowClassName: string
    if (typeof rowClassName === 'function') {
      mergedRowClassName = classNames(rowClassName(record, index, indent))
    } else {
      mergedRowClassName = classNames(rowClassName)
    }

    return mergedRowClassName
  };

  // ========================== Expandable ==========================

  // Pass origin render status into `rc-table`, this can be removed when refactor with `rc-table`
  (mergedExpandable as any).__PARENT_RENDER_ICON__ = mergedExpandable.expandIcon

  // Customize expandable icon
  mergedExpandable.expandIcon =
    mergedExpandable.expandIcon || expandIcon || renderExpandIcon(tableLocale!)

  // Adjust expand icon index, no overwrite expandIconColumnIndex if set.
  if (expandType === 'nest' && mergedExpandable.expandIconColumnIndex === undefined) {
    mergedExpandable.expandIconColumnIndex = 0
  } else if (mergedExpandable.expandIconColumnIndex! > 0) {
    mergedExpandable.expandIconColumnIndex! -= 1
  }

  // Indent size
  if (typeof mergedExpandable.indentSize !== 'number') {
    mergedExpandable.indentSize = typeof indentSize === 'number' ? indentSize : 15
  }

  // ============================ Render ============================
  const transformColumns = React.useCallback(
    (innerColumns: ColumnsType<RecordType>): ColumnsType<RecordType> =>
      transformTitleColumns(
        transformSorterColumns(innerColumns),
      ),
    [transformSorterColumns],
  )

  let topPaginationNode: React.ReactNode
  let bottomPaginationNode: React.ReactNode
  if (pagination !== false && mergedPagination?.total) {
    let paginationSize: TablePaginationConfig['size']
    if (mergedPagination.size) {
      paginationSize = mergedPagination.size
    } else {
      paginationSize = mergedSize === 'small' || mergedSize === 'medium' ? 'small' : undefined
    }

    const renderPagination = (position: string) => (
      <Pagination
        {...mergedPagination}
        className={classNames(
          `${prefixCls}-pagination ${prefixCls}-pagination-${position}`,
          mergedPagination.className,
        )}
        size={paginationSize}
      />
    )
    const defaultPosition = 'left'
    const { position } = mergedPagination
    if (position !== null && Array.isArray(position)) {
      const topPos = position.find((p) => p.includes('top'))
      const bottomPos = position.find((p) => p.includes('bottom'))
      const isDisable = position.every((p) => `${p}` === 'none')
      if (!topPos && !bottomPos && !isDisable) {
        bottomPaginationNode = renderPagination(defaultPosition)
      }
      if (topPos) {
        topPaginationNode = renderPagination(topPos.toLowerCase().replace('top', ''))
      }
      if (bottomPos) {
        bottomPaginationNode = renderPagination(bottomPos.toLowerCase().replace('bottom', ''))
      }
    } else {
      bottomPaginationNode = renderPagination(defaultPosition)
    }
  }

  // Style
  const [wrapSSR, hashId] = useStyle(prefixCls)
  const [, token] = useToken()

  const wrapperClassNames = classNames(
    `${prefixCls}-wrapper`,
    table?.className,
    className,
    rootClassName,
    hashId,
  )

  const mergedStyle: React.CSSProperties = { ...table?.style, ...style, position: 'relative' }

  const emptyText = (locale && locale.emptyText) || renderEmpty?.('Table') || (
    <DefaultRenderEmpty componentName="Table" />
  )

  // ========================== Render ==========================
  const TableComponent = virtual ? RcVirtualTable : RcTable

  // >>> Virtual Table props. We set height here since it will affect height collection
  const virtualProps: { listItemHeight?: number } = {}

  const listItemHeight = React.useMemo(() => {
    const { fontSize, lineHeight, padding, paddingXS, paddingSM } = token
    const fontHeight = Math.floor(fontSize * lineHeight)

    switch (mergedSize) {
      case 'large':
        return padding * 2 + fontHeight

      case 'small':
        return paddingXS * 2 + fontHeight

      default:
        return paddingSM * 2 + fontHeight
    }
  }, [token, mergedSize])

  if (virtual) {
    virtualProps.listItemHeight = listItemHeight
  }

  return wrapSSR(
    <div ref={ref} className={wrapperClassNames} style={mergedStyle}>
      {topPaginationNode}
      <TableComponent
        {...virtualProps}
        {...tableProps}
        columns={mergedColumns as RcTableProps<RecordType>['columns']}
        direction="ltr"
        expandable={mergedExpandable}
        prefixCls={prefixCls}
        className={classNames({
          [`${prefixCls}-medium`]: mergedSize === 'medium',
          [`${prefixCls}-small`]: mergedSize === 'small',
          [`${prefixCls}-bordered`]: bordered,
          [`${prefixCls}-empty`]: rawData.length === 0,
        })}
        data={pageData}
        rowKey={getRowKey}
        rowClassName={internalRowClassName}
        emptyText={emptyText}
        // Internal
        internalHooks={INTERNAL_HOOKS}
        internalRefs={internalRefs as any}
        transformColumns={transformColumns as any}
        getContainerWidth={getContainerWidth}
      />
      {bottomPaginationNode}
      <Backdrop open={loading ?? false} style={{ position: "absolute", opacity: 0.5 }}>
        <CircularProgress />
      </Backdrop>
    </div>,
  )
}

export default React.forwardRef(InternalTable as any) as RefInternalTable
