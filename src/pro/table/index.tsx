import type { IntlShape } from '@caps.dev/react-intl'

import { FieldIndexColumn, FieldStatus } from '@/pro/field'
import {
  ConfigConsumer,
  createIntl,
  enUSIntl,
  zhTWIntl,
} from '@/providers'
import type {
  ProFieldValueType,
} from '../utils'
import type { DragTableProps } from './components/DragSortTable'
import DragSortTable from './components/DragSortTable'
import TableDropdown from './components/Dropdown'
import Search from './components/Form'
import type { ListToolBarProps } from './components/ListToolBar'
import ListToolBar from './components/ListToolBar'
import type { ColumnsState } from './Store/Provide'
import ProTable from './Table'
import type {
  ActionType,
  ProColumns,
  ProColumnType,
  ProTableProps,
  RequestData,
} from './typing'

type ProColumnsValueType = ProFieldValueType

export type {
  ProTableProps,
  IntlShape,
  ActionType,
  ColumnsState,
  ProColumnsValueType,
  ProColumns,
  ProColumnType,
  RequestData,
  ListToolBarProps,
  DragTableProps,
}
export {
  TableDropdown,
  ListToolBar,
  FieldStatus as TableStatus,
  Search,
  DragSortTable,
  ConfigConsumer as IntlConsumer,
  ConfigConsumer,
  FieldIndexColumn as IndexColumn,
  createIntl,
  enUSIntl,
  zhTWIntl,
  ProTable,
}

export default ProTable
