import type { CSSProperties } from 'react';
export interface ComponentToken {
    /**
     * @desc 內容寬度
     * @descEN Width of content
     */
    contentWidth: number;
    /**
     * @desc 大號列表項內間距
     * @descEN Padding of large item
     */
    itemPaddingLG: string;
    /**
     * @desc 小號列表項內間距
     * @descEN Padding of small item
     */
    itemPaddingSM: string;
    /**
     * @desc 列表項內間距
     * @descEN Padding of item
     */
    itemPadding: string;
    /**
     * @desc 頭部區域背景色
     * @descEN Background color of header
     */
    headerBg: string;
    /**
     * @desc 底部區域背景色
     * @descEN Background color of footer
     */
    footerBg: string;
    /**
     * @desc 空文字內邊距
     * @descEN Padding of empty text
     */
    emptyTextPadding: CSSProperties['padding'];
    /**
     * @desc Meta 下間距
     * @descEN Margin bottom of meta
     */
    metaMarginBottom: CSSProperties['marginBottom'];
    /**
     * @desc 頭像右間距
     * @descEN Right margin of avatar
     */
    avatarMarginRight: CSSProperties['marginRight'];
    /**
     * @desc 標題下間距
     * @descEN Margin bottom of title
     */
    titleMarginBottom: CSSProperties['marginBottom'];
    /**
     * @desc 描述文字大小
     * @descEN Font size of description
     */
    descriptionFontSize: number;
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
