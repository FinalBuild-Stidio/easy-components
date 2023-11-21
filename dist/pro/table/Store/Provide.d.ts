/// <reference types="react" />
import type { TableColumnType } from '../../../base';
import type { SizeType } from '../../../base/Config/SizeContext';
import type { ProTableProps } from '../index';
import type { ActionType, ProColumns } from '../typing';
export type ColumnsState = {
    show?: boolean;
    fixed?: 'right' | 'left' | undefined;
    order?: number;
    disable?: boolean | {
        checkbox: boolean;
    };
};
export type ProTableColumn<T> = ColumnsState & TableColumnType<T>;
export type UseContainerProps<T = any> = {
    columnsStateMap?: Record<string, ColumnsState>;
    onColumnsStateChange?: (map: Record<string, ColumnsState>) => void;
    size?: SizeType;
    defaultSize?: SizeType;
    onSizeChange?: (size: SizeType) => void;
    columns?: ProTableColumn<T>[] | ProColumns<T, T>[];
    columnsState?: ProTableProps<any, any, any>['columnsState'];
};
declare function useContainer(props?: UseContainerProps): {
    action: ActionType | undefined;
    setAction: (newAction?: ActionType) => void;
    sortKeyColumns: string[];
    setSortKeyColumns: (keys: string[]) => void;
    propsRef: import("react").MutableRefObject<ProTableProps<any, any, any> | undefined>;
    columnsMap: Record<string, ColumnsState>;
    keyWords: string | undefined;
    setKeyWords: (k: string | undefined) => void;
    setTableSize: (updater: import('../../../base/Config/SizeContext').OrginSizeType | ((origin: import('../../../base/Config/SizeContext').OrginSizeType) => import('../../../base/Config/SizeContext').OrginSizeType), ignoreDestroy?: boolean | undefined) => void;
    tableSize: import('../../../base/Config/SizeContext').OrginSizeType;
    prefixName: any;
    setPrefixName: (name: any) => void;
    setColumnsMap: (updater: Record<string, ColumnsState> | ((origin: Record<string, ColumnsState>) => Record<string, ColumnsState>), ignoreDestroy?: boolean | undefined) => void;
    columns: ProTableColumn<any>[] | ProColumns<any, any>[] | undefined;
    rootDomRef: import("react").RefObject<HTMLDivElement>;
    clearPersistenceStorage: () => void;
    defaultColumnKeyMap: {};
};
declare const TableContext: import("react").Context<{
    action: ActionType | undefined;
    setAction: (newAction?: ActionType) => void;
    sortKeyColumns: string[];
    setSortKeyColumns: (keys: string[]) => void;
    propsRef: import("react").MutableRefObject<ProTableProps<any, any, any> | undefined>;
    columnsMap: Record<string, ColumnsState>;
    keyWords: string | undefined;
    setKeyWords: (k: string | undefined) => void;
    setTableSize: (updater: import('../../../base/Config/SizeContext').OrginSizeType | ((origin: import('../../../base/Config/SizeContext').OrginSizeType) => import('../../../base/Config/SizeContext').OrginSizeType), ignoreDestroy?: boolean | undefined) => void;
    tableSize: import('../../../base/Config/SizeContext').OrginSizeType;
    prefixName: any;
    setPrefixName: (name: any) => void;
    setColumnsMap: (updater: Record<string, ColumnsState> | ((origin: Record<string, ColumnsState>) => Record<string, ColumnsState>), ignoreDestroy?: boolean | undefined) => void;
    columns: ProTableColumn<any>[] | ProColumns<any, any>[] | undefined;
    rootDomRef: import("react").RefObject<HTMLDivElement>;
    clearPersistenceStorage: () => void;
    defaultColumnKeyMap: {};
}>;
export type ContainerType = typeof useContainer;
declare const Container: React.FC<{
    initValue: UseContainerProps<any>;
    children: React.ReactNode;
}>;
export { TableContext, Container };
