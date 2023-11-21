export interface ComponentToken {
    /**
     * @desc 單選框大小
     * @descEN Radio size
     */
    radioSize: number;
    /**
     * @desc 單選框圓點大小
     * @descEN Size of Radio dot
     */
    dotSize: number;
    /**
     * @desc 單選框圓點禁用顏色
     * @descEN Color of disabled Radio dot
     */
    dotColorDisabled: string;
    /**
     * @desc 單選框按鈕背景色
     * @descEN Background color of Radio button
     */
    buttonBg: string;
    /**
     * @desc 單選框按鈕選中背景色
     * @descEN Background color of checked Radio button
     */
    buttonCheckedBg: string;
    /**
     * @desc 單選框按鈕文本顏色
     * @descEN Color of Radio button text
     */
    buttonColor: string;
    /**
     * @desc 單選框按鈕橫向內間距
     * @descEN Horizontal padding of Radio button
     */
    buttonPaddingInline: number;
    /**
     * @desc 單選框按鈕選中並禁用時的背景色
     * @descEN Background color of checked and disabled Radio button
     */
    buttonCheckedBgDisabled: string;
    /**
     * @desc 單選框按鈕選中並禁用時的文本顏色
     * @descEN Color of checked and disabled Radio button text
     */
    buttonCheckedColorDisabled: string;
    /**
     * @desc 單選框實色按鈕選中時的文本顏色
     * @descEN Color of checked solid Radio button text
     */
    buttonSolidCheckedColor: string;
    /**
     * @desc 單選框實色按鈕選中時的背景色
     * @descEN Background color of checked solid Radio button text
     */
    buttonSolidCheckedBg: string;
    /**
     * @desc 單選框實色按鈕選中時的懸浮態背景色
     * @descEN Background color of checked solid Radio button text when hover
     */
    buttonSolidCheckedHoverBg: string;
    /**
     * @desc 單選框實色按鈕選中時的啟用態背景色
     * @descEN Background color of checked solid Radio button text when active
     */
    buttonSolidCheckedActiveBg: string;
    /**
     * @desc 單選框右間距
     * @descEN Margin right of Radio button
     */
    wrapperMarginInlineEnd: number;
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
