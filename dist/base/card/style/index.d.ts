export interface ComponentToken {
    /**
     * @desc 卡片頭部背景色
     * @descEN Background color of card header
     */
    headerBg: string;
    /**
     * @desc 卡片頭部文字大小
     * @descEN Font size of card header
     */
    headerFontSize: number;
    /**
     * @desc 小號卡片頭部文字大小
     * @descEN Font size of small card header
     */
    headerFontSizeSM: number;
    /**
     * @desc 卡片頭部高度
     * @descEN Height of card header
     */
    headerHeight: number;
    /**
     * @desc 小號卡片頭部高度
     * @descEN Height of small card header
     */
    headerHeightSM: number;
    /**
     * @desc 操作區背景色
     * @descEN Background color of card actions
     */
    actionsBg: string;
    /**
     * @desc 操作區每一項的外間距
     * @descEN Margin of each item in card actions
     */
    actionsLiMargin: string;
    /**
     * @desc 內建標籤頁元件下間距
     * @descEN Margin bottom of tabs component
     */
    tabsMarginBottom: number;
    /**
     * @desc 額外區文字顏色
     * @descEN Text color of extra area
     */
    extraColor: string;
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
