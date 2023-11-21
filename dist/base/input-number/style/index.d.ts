import type { SharedInputToken, SharedComponentToken } from '../../input/style';
import type { FullToken } from '../../theme/internal';
export interface ComponentToken extends SharedComponentToken {
    /**
     * @desc 輸入框寬度
     * @descEN Width of input
     */
    controlWidth: number;
    /**
     * @desc 操作按鈕寬度
     * @descEN Width of control button
     */
    handleWidth: number;
    /**
     * @desc 操作按鈕圖示大小
     * @descEN Icon size of control button
     */
    handleFontSize: number;
    /**
     * Default `auto`. Set `true` will always show the handle
     * @desc 操作按鈕可見性
     * @descEN Handle visible
     */
    handleVisible: 'auto' | true;
    /**
     * @desc 操作按鈕背景色
     * @descEN Background color of handle
     */
    handleBg: string;
    /**
     * @desc 操作按鈕啟用背景色
     * @descEN Active background color of handle
     */
    handleActiveBg: string;
    /**
     * @desc 操作按鈕懸浮顏色
     * @descEN Hover color of handle
     */
    handleHoverColor: string;
    /**
     * @desc 操作按鈕邊框顏色
     * @descEN Border color of handle
     */
    handleBorderColor: string;
}
type InputNumberToken = FullToken<'InputNumber'> & SharedInputToken;
export declare const genRadiusStyle: ({ componentCls, borderRadiusSM, borderRadiusLG }: InputNumberToken, size: 'lg' | 'sm') => {
    [x: string]: {
        [x: string]: {
            borderStartEndRadius: number;
            borderEndEndRadius: number;
        } | {
            borderStartEndRadius: number;
            borderEndEndRadius?: undefined;
        } | {
            borderEndEndRadius: number;
            borderStartEndRadius?: undefined;
        };
    };
};
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
