import React from 'react';
import type { TableComponents } from 'rc-table/lib/interface';
export interface UseDragSortOptions<T> {
    dataSource?: T[];
    onDragSortEnd?: (newDataSource: T[]) => Promise<void> | void;
    dragSortKey?: string;
    components?: TableComponents<T>;
    rowKey: any;
    DragHandle: React.FC<any>;
}
export declare function useDragSort<T>(props: UseDragSortOptions<T>): {
    DndContext: (contextProps: any) => React.JSX.Element;
    components: TableComponents<T>;
};
