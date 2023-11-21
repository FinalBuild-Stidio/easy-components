import { EXPAND_COLUMN, Summary } from 'rc-table'
import * as React from 'react'
import type { AnyObject } from '../_util/type'
import Column from './Column'
import ColumnGroup from './ColumnGroup'
import type { TableProps } from './InternalTable'
import InternalTable from './InternalTable'
import type { RefTable } from './interface'

const Table = <RecordType extends AnyObject = AnyObject>(
  props: TableProps<RecordType>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const renderTimesRef = React.useRef<number>(0)
  renderTimesRef.current += 1
  return <InternalTable<RecordType> {...props} ref={ref} _renderTimes={renderTimesRef.current} />
}

const ForwardTable = React.forwardRef(Table) as unknown as RefTable & {
  displayName?: string
  EXPAND_COLUMN: typeof EXPAND_COLUMN
  Column: typeof Column
  ColumnGroup: typeof ColumnGroup
  Summary: typeof Summary
}

ForwardTable.EXPAND_COLUMN = EXPAND_COLUMN
ForwardTable.Column = Column
ForwardTable.ColumnGroup = ColumnGroup
ForwardTable.Summary = Summary

if (process.env.NODE_ENV !== 'production') {
  ForwardTable.displayName = 'Table'
}

export default ForwardTable
