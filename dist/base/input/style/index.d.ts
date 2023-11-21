import type { CSSObject } from '../../../StyleContext';
import type { GlobalToken } from '../../theme/interface';
import type { FullToken } from '../../theme/internal';
export interface SharedComponentToken {
    /**
     * @desc 輸入框橫向內邊距
     * @descEN Horizontal padding of input
     */
    paddingInline: number;
    /**
     * @desc 小號輸入框橫向內邊距
     * @descEN Horizontal padding of small input
     */
    paddingInlineSM: number;
    /**
     * @desc 大號輸入框橫向內邊距
     * @descEN Horizontal padding of large input
     */
    paddingInlineLG: number;
    /**
     * @desc 輸入框縱向內邊距
     * @descEN Vertical padding of input
     */
    paddingBlock: number;
    /**
     * @desc 小號輸入框縱向內邊距
     * @descEN Vertical padding of small input
     */
    paddingBlockSM: number;
    /**
     * @desc 大號輸入框縱向內邊距
     * @descEN Vertical padding of large input
     */
    paddingBlockLG: number;
    /**
     * @desc 前/後置標籤背景色
     * @descEN Background color of addon
     */
    addonBg: string;
    /**
     * @desc 懸浮態邊框色
     * @descEN Hover border color
     */
    hoverBorderColor: string;
    /**
     * @desc 激活態邊框色
     * @descEN Active border color
     */
    activeBorderColor: string;
    /**
     * @desc 激活態陰影
     * @descEN Box-shadow when active
     */
    activeShadow: string;
    /**
     * @desc 錯誤狀態時激活態陰影
     * @descEN Box-shadow when active in error status
     */
    errorActiveShadow: string;
    /**
     * @desc 警告狀態時激活態陰影
     * @descEN Box-shadow when active in warning status
     */
    warningActiveShadow: string;
}
export interface ComponentToken extends SharedComponentToken {
}
export interface SharedInputToken {
    inputAffixPadding: number;
}
interface InputToken extends FullToken<'Input'>, SharedInputToken {
}
export declare const genPlaceholderStyle: (color: string) => CSSObject;
export declare const genHoverStyle: (token: InputToken) => CSSObject;
export declare const genActiveStyle: (token: InputToken) => {
    borderColor: string;
    boxShadow: string;
    outline: number;
};
export declare const genDisabledStyle: (token: InputToken) => CSSObject;
export declare const genInputSmallStyle: (token: InputToken) => CSSObject;
export declare const genStatusStyle: (token: InputToken, parentCls: string) => CSSObject;
export declare const genBasicInputStyle: (token: InputToken) => CSSObject;
export declare const genInputGroupStyle: (token: InputToken) => CSSObject;
export declare function initInputToken(token: GlobalToken): SharedInputToken;
export declare const initComponentToken: (token: GlobalToken) => SharedComponentToken;
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
