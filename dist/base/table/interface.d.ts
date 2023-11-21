import type * as React from 'react';
import type { ColumnType as RcColumnType } from 'rc-table/lib/interface';
import type { ExpandableConfig, GetRowKey } from 'rc-table/lib/interface';
import type { Breakpoint } from '../_util/responsiveObserver';
import type { AnyObject } from '../_util/type';
import type { PaginationProps } from '../pagination';
import type { TooltipProps } from '../tooltip';
import type { InternalTableProps, TableProps } from './InternalTable';
export type RefTable = <RecordType extends AnyObject = AnyObject>(props: React.PropsWithChildren<TableProps<RecordType>> & {
    ref?: React.Ref<HTMLDivElement>;
}) => React.ReactElement;
export type RefInternalTable = <RecordType extends AnyObject = AnyObject>(props: React.PropsWithChildren<InternalTableProps<RecordType>> & {
    ref?: React.Ref<HTMLDivElement>;
}) => React.ReactElement;
export type { ExpandableConfig, GetRowKey };
export type Key = React.Key;
export type SafeKey = Exclude<Key, bigint>;
export type ExpandType = null | 'row' | 'nest';
export interface TableLocale {
    filterTitle?: string;
    filterConfirm?: React.ReactNode;
    filterReset?: React.ReactNode;
    filterEmptyText?: React.ReactNode;
    filterCheckall?: React.ReactNode;
    filterSearchPlaceholder?: string;
    emptyText?: React.ReactNode | (() => React.ReactNode);
    sortTitle?: string;
    expand?: string;
    collapse?: string;
    triggerDesc?: string;
    triggerAsc?: string;
    cancelSort?: string;
}
export type SortOrder = 'descend' | 'ascend' | null;
declare const TableActions: readonly ["paginate", "sort", "filter"];
export type TableAction = typeof TableActions[number];
export type CompareFn<T> = (a: T, b: T, sortOrder?: SortOrder) => number;
export interface ColumnFilterItem {
    text: React.ReactNode;
    value: React.Key | boolean;
    children?: ColumnFilterItem[];
}
export interface ColumnTitleProps<RecordType> {
    /** @deprecated Please use `sorterColumns` instead. */
    sortOrder?: SortOrder;
    /** @deprecated Please use `sorterColumns` instead. */
    sortColumn?: ColumnType<RecordType>;
    sortColumns?: {
        column: ColumnType<RecordType>;
        order: SortOrder;
    }[];
    filters?: Record<string, FilterValue>;
}
export type ColumnTitle<RecordType> = React.ReactNode | ((props: ColumnTitleProps<RecordType>) => React.ReactNode);
export type FilterValue = (Key | boolean)[];
export type FilterKey = (string | number)[] | null;
export type FilterSearchType<RecordType = AnyObject> = boolean | ((input: string, record: RecordType) => boolean);
export interface FilterConfirmProps {
    closeDropdown: boolean;
}
export interface FilterDropdownProps {
    prefixCls: string;
    /**
     * Confirm filter value, if you want to close dropdown before commit, you can call with
     * {closeDropdown: true}
     */
    confirm: (param?: FilterConfirmProps) => void;
    clearFilters?: () => void;
    filters?: ColumnFilterItem[];
    /** Only close filterDropdown */
    close: () => void;
    visible: boolean;
}
export interface ColumnType<RecordType> extends Omit<RcColumnType<RecordType>, 'title'> {
    title?: ColumnTitle<RecordType>;
    sorter?: boolean | CompareFn<RecordType> | {
        compare?: CompareFn<RecordType>;
        /** Config multiple sorter order priority */
        multiple?: number;
    };
    sortOrder?: SortOrder;
    defaultSortOrder?: SortOrder;
    sortDirections?: SortOrder[];
    sortIcon?: (props: {
        sortOrder: SortOrder;
    }) => React.ReactNode;
    showSorterTooltip?: boolean | TooltipProps;
    filtered?: boolean;
    filters?: ColumnFilterItem[];
    filterDropdown?: React.ReactNode | ((props: FilterDropdownProps) => React.ReactNode);
    filterMultiple?: boolean;
    filteredValue?: FilterValue | null;
    defaultFilteredValue?: FilterValue | null;
    filterIcon?: React.ReactNode | ((filtered: boolean) => React.ReactNode);
    filterMode?: 'menu' | 'tree';
    filterSearch?: FilterSearchType<ColumnFilterItem>;
    onFilter?: (value: React.Key | boolean, record: RecordType) => boolean;
    filterDropdownOpen?: boolean;
    onFilterDropdownOpenChange?: (visible: boolean) => void;
    filterResetToDefaultFilteredValue?: boolean;
    responsive?: Breakpoint[];
    /** @deprecated Please use `filterDropdownOpen` instead */
    filterDropdownVisible?: boolean;
    /** @deprecated Please use `onFilterDropdownOpenChange` instead */
    onFilterDropdownVisibleChange?: (visible: boolean) => void;
}
export interface ColumnGroupType<RecordType> extends Omit<ColumnType<RecordType>, 'dataIndex'> {
    children: ColumnsType<RecordType>;
}
export type ColumnsType<RecordType = unknown> = (ColumnGroupType<RecordType> | ColumnType<RecordType>)[];
export type SelectionSelectFn<T> = (record: T, selected: boolean, selectedRows: T[], nativeEvent: Event) => void;
export type RowSelectMethod = 'all' | 'none' | 'invert' | 'single' | 'multiple';
export type TransformColumns<RecordType> = (columns: ColumnsType<RecordType>) => ColumnsType<RecordType>;
export interface TableCurrentDataSource<RecordType> {
    currentDataSource: RecordType[];
    action: TableAction;
}
export interface SorterResult<RecordType> {
    column?: ColumnType<RecordType>;
    order?: SortOrder;
    field?: Key | readonly Key[];
    columnKey?: Key;
}
export type GetPopupContainer = (triggerNode: HTMLElement) => HTMLElement;
type TablePaginationPosition = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
export interface TablePaginationConfig extends PaginationProps {
    position?: TablePaginationPosition[];
}
