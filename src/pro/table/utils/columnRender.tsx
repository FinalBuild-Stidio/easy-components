import React from 'react'
import get from 'rc-util/lib/utils/get'
import type { ProFieldEmptyText } from '@/pro/field'
import { isMergeCell } from '.'
import type { ContainerType } from '../Store/Provide'
import type { ActionType, ProColumns } from '../typing'
import cellRenderToFromItem from './cellRenderToFromItem'
import type {
  ProFieldValueType,
  ProSchemaComponentTypes,
  ProTableEditableFnType,
} from '../../utils'
import {
  LabelIconTip,
  isNil,
  genCopyable,
} from '../../utils'
import type {
  CellRenderFromItemProps,
} from './cellRenderToFromItem'

/** 轉化列的定義 */
type ColumnRenderInterface<T> = {
  columnProps: ProColumns<T>
  text: any
  rowData: T
  index: number
  columnEmptyText?: ProFieldEmptyText
  type: ProSchemaComponentTypes
  counter: ReturnType<ContainerType>
  subName: string[]
  marginSM?: number
}

/**
 * 增加了 icon 的功能 render title
 *
 * @param item
 */
export const renderColumnsTitle = (item: ProColumns<any>) => {
  const { title } = item
  const ellipsis =
    typeof item?.ellipsis === 'boolean'
      ? item?.ellipsis
      : item?.ellipsis?.showTitle
  if (title && typeof title === 'function') {
    return title(
      item,
      'table',
      <LabelIconTip label={null} tooltip={item.tooltip || item.tip} />,
    )
  }
  return (
    <LabelIconTip
      label={title}
      tooltip={item.tooltip || item.tip}
      ellipsis={ellipsis}
    />
  )
}

/** 判斷是否為不可編輯的單元格 */
function isNotEditableCell<T>(
  text: any,
  rowData: T,
  index: number,
  editable?: ProTableEditableFnType<T> | boolean,
) {
  if (typeof editable === 'boolean') {
    return editable === false
  }
  return editable?.(text, rowData, index) === false
}

/**
 * 預設的 filter 方法
 *
 * @param value
 * @param record
 * @param dataIndex
 * @returns
 */
export const defaultOnFilter = (
  value: string,
  record: any,
  dataIndex: string | string[],
) => {
  const recordElement = Array.isArray(dataIndex)
    ? get(record, dataIndex as string[])
    : record[dataIndex]
  const itemValue = String(recordElement) as string

  return String(itemValue) === String(value)
}

/**
 * 這個組件負責單元格的具體渲染
 *
 * @param param0
 */
export function columnRender<T>({
  columnProps,
  text,
  rowData,
  index,
  columnEmptyText,
  counter,
  type,
  subName,
  marginSM,
}: ColumnRenderInterface<T>): any {
  const { action, prefixName } = counter
  const { renderText = (val: any) => val } = columnProps

  const renderTextStr = renderText(text, rowData, index, action as ActionType)
  // Support read mode only for now
  const mode = 'read'

  const itemProps: CellRenderFromItemProps<T> = {
    text: renderTextStr,
    valueType: (columnProps.valueType as ProFieldValueType) || 'text',
    index,
    rowData,
    subName,
    columnProps: {
      ...columnProps,
      entity: rowData,
    },
    counter,
    columnEmptyText,
    type,
    mode,
    prefixName,
  }

  const textDom = cellRenderToFromItem<T>(itemProps)

  const dom: React.ReactNode = genCopyable(textDom, columnProps, renderTextStr)

  if (!columnProps.render) {
    const isReactRenderNode =
      React.isValidElement(dom) || ['string', 'number'].includes(typeof dom)
    return !isNil(dom) && isReactRenderNode ? dom : null
  }

  const renderDom = columnProps.render(
    dom,
    rowData,
    index,
    action,
    {
      ...columnProps,
      type: 'table',
    },
  )

  // 如果是合併單元格的，直接 return renderDom
  if (isMergeCell(renderDom)) {
    return renderDom
  }

  if (
    renderDom &&
    columnProps.valueType === 'option' &&
    Array.isArray(renderDom)
  ) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 8,
        }}
      >
        {renderDom}
      </div>
    )
  }
  return renderDom as React.ReactNode
}
