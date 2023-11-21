export interface ComponentToken {
    /**
     * @desc 頁碼選項背景色
     * @descEN Background color of Pagination item
     */
    itemBg: string;
    /**
     * @desc 頁碼尺寸
     * @descEN Size of Pagination item
     */
    itemSize: number;
    /**
     * @desc 頁碼啟用態背景色
     * @descEN Background color of active Pagination item
     */
    itemActiveBg: string;
    /**
     * @desc 小號頁碼尺寸
     * @descEN Size of small Pagination item
     */
    itemSizeSM: number;
    /**
     * @desc 頁碼連結背景色
     * @descEN Background color of Pagination item link
     */
    itemLinkBg: string;
    /**
     * @desc 頁碼啟用態禁用狀態背景色
     * @descEN Background color of disabled active Pagination item
     */
    itemActiveBgDisabled: string;
    /**
     * @desc 頁碼啟用態禁用狀態文字顏色
     * @descEN Text color of disabled active Pagination item
     */
    itemActiveColorDisabled: string;
    /**
     * @desc 輸入框背景色
     * @descEN Background color of input
     */
    itemInputBg: string;
    /**
     * @desc 每頁顯示數量選擇器 top
     * @descEN Top of Pagination size changer
     */
    miniOptionsSizeChangerTop: number;
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
