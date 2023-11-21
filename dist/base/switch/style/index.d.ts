export interface ComponentToken {
    /**
     *  @desc 開關高度
     *  @descEN Height of Switch
     */
    trackHeight: number;
    /**
     * @desc 小號開關高度
     * @descEN Height of small Switch
     */
    trackHeightSM: number;
    /**
     * @desc 開關最小寬度
     * @descEN Minimum width of Switch
     */
    trackMinWidth: number;
    /**
     * @desc 小號開關最小寬度
     * @descEN Minimum width of small Switch
     */
    trackMinWidthSM: number;
    /**
     * @desc 開關內邊距
     * @descEN Padding of Switch
     */
    trackPadding: number;
    /**
     * @desc 開關把手背景色
     * @descEN Background color of Switch handle
     */
    handleBg: string;
    /**
     * @desc 開關把手陰影
     * @descEN Shadow of Switch handle
     */
    handleShadow: string;
    /**
     * @desc 開關把手大小
     * @descEN Size of Switch handle
     */
    handleSize: number;
    /**
     * @desc 小號開關把手大小
     * @descEN Size of small Switch handle
     */
    handleSizeSM: number;
    /**
     * @desc 內容區域最小邊距
     * @descEN Minimum margin of content area
     */
    innerMinMargin: number;
    /**
     * @desc 內容區域最大邊距
     * @descEN Maximum margin of content area
     */
    innerMaxMargin: number;
    /**
     * @desc 小號開關內容區域最小邊距
     * @descEN Minimum margin of content area of small Switch
     */
    innerMinMarginSM: number;
    /**
     * @desc 小號開關內容區域最大邊距
     * @descEN Maximum margin of content area of small Switch
     */
    innerMaxMarginSM: number;
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
