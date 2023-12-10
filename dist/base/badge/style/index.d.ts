import type { GlobalToken } from '../../theme';
import type { FullToken } from '../../theme/internal';
import type { GenStyleFn } from '../../theme/util/genComponentStyleHook';
/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
    /**
     * @desc Badge z-index
     * @descEN z-index of badge
     */
    indicatorZIndex: number | string;
    /**
     * @desc Badge高度
     * @descEN Height of badge
     */
    indicatorHeight: number;
    /**
     * @desc 小號Badge高度
     * @descEN Height of small badge
     */
    indicatorHeightSM: number;
    /**
     * @desc 點狀Badge尺寸
     * @descEN Size of dot badge
     */
    dotSize: number;
    /**
     * @desc Badge文字尺寸
     * @descEN Font size of badge text
     */
    textFontSize: number;
    /**
     * @desc 小號Badge文字尺寸
     * @descEN Font size of small badge text
     */
    textFontSizeSM: number;
    /**
     * @desc Badge文字粗細
     * @descEN Font weight of badge text
     */
    textFontWeight: number | string;
    /**
     * @desc 狀態Badge尺寸
     * @descEN Size of status badge
     */
    statusSize: number;
}
export interface BadgeToken extends FullToken<'Badge'> {
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
export declare const prepareToken: (token: Parameters<GenStyleFn<'Badge'>>[0]) => BadgeToken;
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
