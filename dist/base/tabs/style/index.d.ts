import type { FullToken } from '../../theme/internal';
export interface ComponentToken {
    /**
     * @desc 下拉菜單 z-index
     * @descEN z-index of dropdown menu
     */
    zIndexPopup: number;
    /**
     * @desc 卡片標籤頁背景色
     * @descEN Background color of card tab
     */
    cardBg: string;
    /**
     * @desc 卡片標籤頁高度
     * @descEN Height of card tab
     */
    cardHeight: number;
    /**
     * @desc 卡片標籤頁內間距
     * @descEN Padding of card tab
     */
    cardPadding: string;
    /**
     * @desc 小號卡片標籤頁內間距
     * @descEN Padding of small card tab
     */
    cardPaddingSM: string;
    /**
     * @desc 大號卡片標籤頁內間距
     * @descEN Padding of large card tab
     */
    cardPaddingLG: string;
    /**
     * @desc 標齊頁標題文本大小
     * @descEN Font size of title
     */
    titleFontSize: number;
    /**
     * @desc 大號標籤頁標題文本大小
     * @descEN Font size of large title
     */
    titleFontSizeLG: number;
    /**
     * @desc 小號標籤頁標題文本大小
     * @descEN Font size of small title
     */
    titleFontSizeSM: number;
    /**
     * @desc 指示條顏色
     * @descEN Color of indicator
     */
    inkBarColor: string;
    /**
     * @desc 橫向標籤頁外間距
     * @descEN Horizontal margin of horizontal tab
     */
    horizontalMargin: string;
    /**
     * @desc 橫向標籤頁標籤間距
     * @descEN Horizontal gutter of horizontal tab
     */
    horizontalItemGutter: number;
    /**
     * @desc 橫向標籤頁標籤外間距
     * @descEN Horizontal margin of horizontal tab item
     */
    horizontalItemMargin: string;
    /**
     * @desc 橫向標籤頁標籤外間距（RTL）
     * @descEN Horizontal margin of horizontal tab item (RTL)
     */
    horizontalItemMarginRTL: string;
    /**
     * @desc 橫向標籤頁標籤內間距
     * @descEN Horizontal padding of horizontal tab item
     */
    horizontalItemPadding: string;
    /**
     * @desc 大號橫向標籤頁標籤內間距
     * @descEN Horizontal padding of large horizontal tab item
     */
    horizontalItemPaddingLG: string;
    /**
     * @desc 小號橫向標籤頁標籤內間距
     * @descEN Horizontal padding of small horizontal tab item
     */
    horizontalItemPaddingSM: string;
    /**
     * @desc 縱向標籤頁標籤內間距
     * @descEN Vertical padding of vertical tab item
     */
    verticalItemPadding: string;
    /**
     * @desc 縱向標籤頁標籤外間距
     * @descEN Vertical margin of vertical tab item
     */
    verticalItemMargin: string;
    /**
     * @desc 標籤文本顏色
     * @descEN Text color of tab
     */
    itemColor: string;
    /**
     * @desc 標籤激活態文本顏色
     * @descEN Text color of active tab
     */
    itemActiveColor: string;
    /**
     * @desc 標籤懸浮態文本顏色
     * @descEN Text color of hover tab
     */
    itemHoverColor: string;
    /**
     * @desc 標籤選中態文本顏色
     * @descEN Text color of selected tab
     */
    itemSelectedColor: string;
    /**
     * @desc 卡片標籤間距
     * @descEN Gutter of card tab
     */
    cardGutter: number;
}
export interface TabsToken extends FullToken<'Tabs'> {
    tabsCardPadding: string;
    dropdownEdgeChildVerticalPadding: number;
    tabsNavWrapPseudoWidth: number;
    tabsActiveTextShadow: string;
    tabsDropdownHeight: number;
    tabsDropdownWidth: number;
    tabsHorizontalItemMargin: string;
    tabsHorizontalItemMarginRTL: string;
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
