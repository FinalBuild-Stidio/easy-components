import type { GlobalToken } from '../../theme';
import type { AliasToken, FullToken, GenerateStyle } from '../../theme/internal';
import type { GenStyleFn, TokenWithCommonCls } from '../../theme/util/genComponentStyleHook';
/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
    /**
     * @desc 最上面背景色
     * @descEN Background color of header
     */
    headerBg: string;
    /**
     * @desc 標題行高
     * @descEN Line height of title
     */
    titleLineHeight: number;
    /**
     * @desc 標題字體大小
     * @descEN Font size of title
     */
    titleFontSize: number;
    /**
     * @desc 標題字體顏色
     * @descEN Font color of title
     */
    titleColor: string;
    /**
     * @desc 內容區域背景色
     * @descEN Background color of content
     */
    contentBg: string;
    /**
     * @desc 底部區域背景色
     * @descEN Background color of footer
     */
    footerBg: string;
}
export interface ModalToken extends FullToken<'Modal'> {
    modalHeaderHeight: number;
    modalBodyPadding: number;
    modalHeaderPadding: string;
    modalHeaderBorderWidth: number;
    modalHeaderBorderStyle: string;
    modalHeaderBorderColorSplit: string;
    modalFooterBorderColorSplit: string;
    modalFooterBorderStyle: string;
    modalFooterPaddingVertical: number;
    modalFooterPaddingHorizontal: number;
    modalFooterBorderWidth: number;
    modalIconHoverColor: string;
    modalCloseIconColor: string;
    modalCloseBtnSize: number;
    modalConfirmIconSize: number;
}
export declare const genModalMaskStyle: GenerateStyle<TokenWithCommonCls<AliasToken>>;
export declare const prepareToken: (token: Parameters<GenStyleFn<'Modal'>>[0]) => ModalToken;
export declare const prepareComponentToken: (token: GlobalToken) => {
    footerBg: string;
    headerBg: string;
    titleLineHeight: number;
    titleFontSize: number;
    contentBg: string;
    titleColor: string;
};
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
