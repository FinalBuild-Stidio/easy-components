import type { GlobalToken } from '../../theme';
import type { FullToken } from '../../theme/internal';
import type { GenStyleFn } from '../../theme/util/genComponentStyleHook';
/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
    /**
     * @desc 點狀Badge尺寸
     * @descEN Size of dot badge
     */
    dotSize: number;
    statusSize: number;
}
export interface StatusToken extends FullToken<'Status'> {
    badgeFontHeight: number;
    badgeTextColor: string;
    badgeColor: string;
    badgeColorHover: string;
    badgeShadowSize: number;
    badgeShadowColor: string;
    badgeProcessingDuration: string;
    badgeRibbonOffset: number;
    badgeRibbonCornerTransform: string;
    badgeRibbonCornerFilter: string;
}
export declare const prepareToken: (token: Parameters<GenStyleFn<'Status'>>[0]) => StatusToken;
export declare const prepareComponentToken: (token: GlobalToken) => {
    indicatorZIndex: string;
    indicatorHeight: number;
    indicatorHeightSM: number;
    dotSize: number;
    textFontSize: number;
    textFontSizeSM: number;
    textFontWeight: string;
    statusSize: number;
};
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
