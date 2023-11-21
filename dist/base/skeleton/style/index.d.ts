export type ComponentToken = {
    /** @deprecated use gradientFromColor instead. */
    color: string;
    /** @deprecated use gradientToColor instead. */
    colorGradientEnd: string;
    /**
     * @desc 漸變色起點顏色
     * @descEN Start color of gradient
     */
    gradientFromColor: string;
    /**
     * @desc 漸變色終點顏色
     * @descEN End color of gradient
     */
    gradientToColor: string;
    /**
     * @desc 標題骨架屏高度
     * @descEN Height of title skeleton
     */
    titleHeight: number;
    /**
     * @desc 骨架屏圓角
     * @descEN Border radius of skeleton
     */
    blockRadius: number;
    /**
     * @desc 段落骨架屏上間距
     * @descEN Margin top of paragraph skeleton
     */
    paragraphMarginTop: number;
    /**
     * @desc 段落骨架屏單行高度
     * @descEN Line height of paragraph skeleton
     */
    paragraphLiHeight: number;
};
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
