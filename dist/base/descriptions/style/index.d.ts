/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
    /**
     * @desc 標籤背景色
     * @descEN Background color of label
     */
    labelBg: string;
    /**
     * @desc 標題下間距
     * @descEN Bottom margin of title
     */
    titleMarginBottom: number;
    /**
     * @desc 子項下間距
     * @descEN Bottom padding of item
     */
    itemPaddingBottom: number;
    /**
     * @desc 冒號右間距
     * @descEN Right margin of colon
     */
    colonMarginRight: number;
    /**
     * @desc 冒號左間距
     * @descEN Left margin of colon
     */
    colonMarginLeft: number;
    /**
     * @desc 額外區域文字顏色
     * @descEN Text color of extra area
     */
    extraColor: string;
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
