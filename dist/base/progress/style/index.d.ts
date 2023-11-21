export interface ComponentToken {
    /**
     * @desc 進度條預設顏色
     * @descEN Default color of progress bar
     */
    defaultColor: string;
    /**
     * @desc 進度條剩餘部分顏色
     * @descEN Color of remaining part of progress bar
     */
    remainingColor: string;
    /**
     * @desc 圓形進度條文字顏色
     * @descEN Text color of circular progress bar
     */
    circleTextColor: string;
    /**
     * @desc 條狀進度條圓角
     * @descEN Border radius of line progress bar
     */
    lineBorderRadius: number;
    /**
     * @desc 圓形進度條文本大小
     * @descEN Text size of circular progress bar
     */
    circleTextFontSize: string;
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
