import React from 'react';
import type { ParamsType } from '../../../../providers';
import type { ProTableProps } from '../../typing';
export type DragTableProps<T, U> = {
    /** @name 拖動排序列key值 如配置此參數，則會在該 key 對應的行顯示拖拽排序把手，允許拖拽排序 */
    dragSortKey?: string;
    /** @name 渲染自訂拖動排序把手的函數 如配置了 dragSortKey 但未配置此參數，則使用默認把手圖示 */
    dragSortHandlerRender?: (rowData: T, idx: number) => React.ReactNode;
    /** @name 拖動排序完成回調 */
    onDragSortEnd?: (newDataSource: T[]) => Promise<void> | void;
} & ProTableProps<T, U>;
declare function DragSortTable<T extends Record<string, any>, U extends ParamsType = ParamsType, ValueType = 'text'>(props: DragTableProps<T, U>): React.JSX.Element;
export default DragSortTable;
