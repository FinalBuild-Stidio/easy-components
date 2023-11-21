import { EXPAND_COLUMN, Summary } from 'rc-table';
import Column from './Column';
import ColumnGroup from './ColumnGroup';
import type { RefTable } from './interface';
declare const ForwardTable: RefTable & {
    displayName?: string | undefined;
    EXPAND_COLUMN: typeof EXPAND_COLUMN;
    Column: typeof Column;
    ColumnGroup: typeof ColumnGroup;
    Summary: typeof Summary;
};
export default ForwardTable;
