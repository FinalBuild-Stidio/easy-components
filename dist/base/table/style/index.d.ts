import type { FullToken } from '../../theme/internal';
export interface ComponentToken {
    /**
     * @desc 表頭背景
     * @descEN Background of table header
     */
    headerBg: string;
    /**
     * @desc 表頭文字顏色
     * @descEN Color of table header text
     */
    headerColor: string;
    /**
     * @desc 表頭排序啟用態背景色
     * @descEN Background color of table header when sorted
     */
    headerSortActiveBg: string;
    /**
     * @desc 表頭排序啟用態懸浮背景色
     * @descEN Background color of table header when sorted and hovered
     */
    headerSortHoverBg: string;
    /**
     * @desc 表格排序列背景色
     * @descEN Background color of table sorted column
     */
    bodySortBg: string;
    /**
     * @desc 表格行懸浮背景色
     * @descEN Background color of table hovered row
     */
    rowHoverBg: string;
    /**
     * @desc 表格行選中背景色
     * @descEN Background color of table selected row
     */
    rowSelectedBg: string;
    /**
     * @desc 表格行選中懸浮背景色
     * @descEN Background color of table selected row when hovered
     */
    rowSelectedHoverBg: string;
    /**
     * @desc 表格行展開背景色
     * @descEN Background color of table expanded row
     */
    rowExpandedBg: string;
    /**
     * @desc 單元格縱向內間距
     * @descEN Vertical padding of table cell
     */
    cellPaddingBlock: number;
    /**
     * @desc 單元格橫向內間距（預設大尺寸）
     * @descEN Horizontal padding of table cell (large size by default)
     */
    cellPaddingInline: number;
    /**
     * @desc 單元格縱向內間距（中等尺寸）
     * @descEN Vertical padding of table cell (middle size)
     */
    cellPaddingBlockMD: number;
    /**
     * @desc 單元格橫向內間距（中等尺寸）
     * @descEN Horizontal padding of table cell (middle size)
     */
    cellPaddingInlineMD: number;
    /**
     * @desc 單元格縱向內間距（小尺寸）
     * @descEN Vertical padding of table cell (small size)
     */
    cellPaddingBlockSM: number;
    /**
     * @desc 單元格橫向內間距（小尺寸）
     * @descEN Horizontal padding of table cell (small size)
     */
    cellPaddingInlineSM: number;
    /**
     * @desc 表格邊框/分割線顏色
     * @descEN Border color of table
     */
    borderColor: string;
    /**
     * @desc 表頭圓角
     * @descEN Border radius of table header
     */
    headerBorderRadius: number;
    /**
     * @desc 表格底部背景色
     * @descEN Background of footer
     */
    footerBg: string;
    /**
     * @desc 表格底部文字顏色
     * @descEN Color of footer text
     */
    footerColor: string;
    /**
     * @desc 單元格文字大小（預設大尺寸）
     * @descEN Font size of table cell (large size by default)
     */
    cellFontSize: number;
    /**
     * @desc 單元格文字大小（中等尺寸）
     * @descEN Font size of table cell (middle size)
     */
    cellFontSizeMD: number;
    /**
     * @desc 單元格文字大小（小尺寸）
     * @descEN Font size of table cell (small size)
     */
    cellFontSizeSM: number;
    /**
     * @desc 表頭分割線顏色
     * @descEN Split border color of table header
     */
    headerSplitColor: string;
    /**
     * @desc 固定表頭排序啟用態背景色
     * @descEN Background color of fixed table header when sorted
     */
    fixedHeaderSortActiveBg: string;
    /**
     * @desc 表頭過濾按鈕懸浮背景色
     * @descEN Background color of table header filter button when hovered
     */
    headerFilterHoverBg: string;
    /**
     * @desc 過濾下拉菜單選項背景
     * @descEN Background of filter dropdown menu item
     */
    filterDropdownMenuBg: string;
    /**
     * @desc 過濾下拉菜單顏色
     * @descEN Color of filter dropdown
     */
    filterDropdownBg: string;
    /**
     * @desc 展開按鈕背景色
     * @descEN Background of expand button
     */
    expandIconBg: string;
    /**
     * @desc 選擇列寬度
     * @descEN Width of selection column
     */
    selectionColumnWidth: number;
    /**
     * @desc Sticky 模式下滾動條背景色
     * @descEN Background of sticky scrollbar
     */
    stickyScrollBarBg: string;
    /**
     * @desc Sticky 模式下滾動條圓角
     * @descEN Border radius of sticky scrollbar
     */
    stickyScrollBarBorderRadius: number;
}
export interface TableToken extends FullToken<'Table'> {
    tableFontSize: number;
    tableBg: string;
    tableRadius: number;
    tablePaddingHorizontal: number;
    tablePaddingVertical: number;
    tablePaddingHorizontalMudium: number;
    tablePaddingVerticalMudium: number;
    tablePaddingHorizontalSmall: number;
    tablePaddingVerticalSmall: number;
    tableBorderColor: string;
    tableHeaderTextColor: string;
    tableHeaderBg: string;
    tableFooterTextColor: string;
    tableFooterBg: string;
    tableHeaderCellSplitColor: string;
    tableHeaderSortBg: string;
    tableHeaderSortHoverBg: string;
    tableHeaderIconColor: string;
    tableHeaderIconColorHover: string;
    tableBodySortBg: string;
    tableFixedHeaderSortActiveBg: string;
    tableHeaderFilterActiveBg: string;
    tableFilterDropdownBg: string;
    tableFilterDropdownHeight: number;
    tableRowHoverBg: string;
    tableSelectedRowBg: string;
    tableSelectedRowHoverBg: string;
    tableFontSizeMudium: number;
    tableFontSizeSmall: number;
    tableSelectionColumnWidth: number;
    tableExpandIconBg: string;
    tableExpandColumnWidth: number;
    tableExpandedRowBg: string;
    tableFilterDropdownWidth: number;
    tableFilterDropdownSearchWidth: number;
    zIndexTableFixed: number;
    zIndexTableSticky: number;
    tableScrollThumbSize: number;
    tableScrollThumbBg: string;
    tableScrollThumbBgHover: string;
    tableScrollBg: string;
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
