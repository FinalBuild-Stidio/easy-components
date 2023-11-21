import type { CSSProperties } from 'react';
import type { FullToken } from '../../theme/internal';
export interface ComponentToken {
    /** @deprecated Use headerBg instead */
    colorBgHeader: string;
    /** @deprecated Use bodyBg instead */
    colorBgBody: string;
    /** @deprecated Use triggerBg instead */
    colorBgTrigger: string;
    /**
     * @desc 主體部分背景色
     * @descEN Background Color of body
     */
    bodyBg: string;
    /**
     * @desc 最上面背景色
     * @descEN Background Color of header
     */
    headerBg: string;
    /**
     * @desc 最上面高度
     * @descEN Height of header
     */
    headerHeight: number;
    /**
     * @desc 最上面內邊距
     * @descEN Padding of header
     */
    headerPadding: CSSProperties['padding'];
    /**
     * @desc 最上面文字顏色
     * @descEN Text color of header
     */
    headerColor: string;
    /**
     * @desc 頁尾內邊距
     * @descEN Padding of footer
     */
    footerPadding: CSSProperties['padding'];
    /**
     * @desc 頁尾背景色
     * @descEN Background Color of footer
     */
    footerBg: string;
    /**
     * @desc 側邊欄背景色
     * @descEN Background Color of sider
     */
    siderBg: string;
    /**
     * @desc 側邊欄開關高度
     * @descEN Height of sider trigger
     */
    triggerHeight: number;
    /**
     * @desc 側邊欄開關背景色
     * @descEN Background Color of sider trigger
     */
    triggerBg: string;
    /**
     * @desc 側邊欄開關顏色
     * @descEN Color of sider trigger
     */
    triggerColor: string;
    /**
     * @desc collapse 為 0 時側邊欄開關寬度
     * @descEN Width of sider trigger when collapse is 0
     */
    zeroTriggerWidth: number;
    /**
     * @desc collapse 為 0 時側邊欄開關高度
     * @descEN Height of sider trigger when collapse is 0
     */
    zeroTriggerHeight: number;
    /**
     * @desc 亮色主題側邊欄背景色
     * @descEN Background Color of light theme sider
     */
    lightSiderBg: string;
    /**
     * @desc 亮色主題側邊欄開關背景色
     * @descEN Background Color of light theme sider trigger
     */
    lightTriggerBg: string;
    /**
     * @desc 亮色主題側邊欄開關顏色
     * @descEN Color of light theme sider trigger
     */
    lightTriggerColor: string;
}
export interface LayoutToken extends FullToken<'Layout'> {
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
