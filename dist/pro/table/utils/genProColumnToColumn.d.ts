import { Table } from '../../../base';
import type { TableColumnType, TableProps } from '../../../base';
import type { ProFieldEmptyText } from '../../../pro/field';
import type { ContainerType } from '../Store/Provide';
import type { ProColumns } from '../typing';
import type { ProSchemaComponentTypes } from '../../utils';
type ColumnToColumnReturnType<T> = (TableColumnType<T> & {
    index?: number;
    isExtraColumns?: boolean;
    extraColumn?: typeof Table.EXPAND_COLUMN;
})[];
type ColumnToColumnParams<T> = {
    columns: ProColumns<T, any>[];
    counter: ReturnType<ContainerType>;
    columnEmptyText: ProFieldEmptyText;
    type: ProSchemaComponentTypes;
} & Pick<TableProps<T>, 'rowKey' | 'childrenColumnName'>;
/**
 * 轉化 columns 到 pro 的格式 主要是 render 方法的自行實現
 *
 * @param columns
 * @param map
 * @param columnEmptyText
 */
export declare function genProColumnToColumn<T>(params: ColumnToColumnParams<T> & {
    marginSM: number;
}, parents?: ProColumns<T, any>): ColumnToColumnReturnType<T>;
export {};
