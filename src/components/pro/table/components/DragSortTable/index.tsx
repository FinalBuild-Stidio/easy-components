import React, { useContext, useMemo } from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'

import type { ParamsType } from '@/providers'
import { ConfigProvider } from '@/components/base'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import ProTable from '../../Table'
import type { ProTableProps } from '../../typing'
import { useDragSort } from '../../utils/useDragSort'
import { useStyle } from './style'

export type DragTableProps<T, U> = {
  /** @name 拖動排序列key值 如配置此參數，則會在該 key 對應的行顯示拖拽排序把手，允許拖拽排序 */
  dragSortKey?: string
  /** @name 渲染自訂拖動排序把手的函數 如配置了 dragSortKey 但未配置此參數，則使用默認把手圖示 */
  dragSortHandlerRender?: (rowData: T, idx: number) => React.ReactNode
  /** @name 拖動排序完成回調 */
  onDragSortEnd?: (newDataSource: T[]) => Promise<void> | void
} & ProTableProps<T, U>

function DragSortTable<
  T extends Record<string, any>,
  U extends ParamsType = ParamsType,
  ValueType = 'text',
>(props: DragTableProps<T, U>) {
  const {
    rowKey,
    dragSortKey,
    dragSortHandlerRender,
    onDragSortEnd,
    onDataSourceChange,
    defaultData,
    dataSource: originDataSource,
    onLoad,
    ...otherProps
  } = props
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const [dataSource, setDataSource] = useMergedState<T[]>(
    () => defaultData || [],
    {
      value: originDataSource as T[],
      onChange: onDataSourceChange,
    },
  )

  const { wrapSSR, hashId } = useStyle(getPrefixCls('pro-table-drag'))

  // 默認拖拽把手
  const DragHandle = useMemo(() => {
    return (dragHandleProps: any) => {
      const { rowData, index, className, ...rest } = dragHandleProps
      const defaultDom = (
        <DragIndicatorIcon
          {...rest}
          className={`${getPrefixCls('pro-table-drag-icon')} ${className || ''
            } ${hashId || ''}`.trim()}
        />
      )

      const handel = dragSortHandlerRender
        ? dragSortHandlerRender(
          dragHandleProps?.rowData,
          dragHandleProps?.index,
        )
        : defaultDom
      return <div {...rest}>{handel}</div>
    }
  }, [getPrefixCls])

  // 使用自訂hooks獲取拖拽相關組件的components集合
  const { components, DndContext } = useDragSort<T>({
    dataSource: dataSource?.slice(),
    dragSortKey,
    onDragSortEnd,
    components: props.components,
    rowKey,
    DragHandle,
  })

  const wrapOnload = async (ds: T[]) => {
    setDataSource(ds)
    return onLoad?.(ds)
  }

  return wrapSSR(
    <ProTable<T, U, ValueType>
      {...(otherProps as ProTableProps<T, U, ValueType>)}
      columns={otherProps.columns?.map((item): any => {
        if (item.dataIndex == dragSortKey || item.key === dragSortKey) {
          if (!item.render) {
            item.render = () => null
          }
        }
        return item
      })}
      onLoad={wrapOnload}
      rowKey={rowKey}
      tableViewRender={(_, defaultDom) => {
        return <DndContext>{defaultDom}</DndContext>
      }}
      dataSource={dataSource}
      components={components}
      onDataSourceChange={onDataSourceChange}
    />,
  )
}

export default DragSortTable
