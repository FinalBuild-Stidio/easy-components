import type { CSSProperties } from 'react';
export interface ComponentToken {
    /**
     * @desc 標題字體大小
     * @descEN Title font size
     */
    titleFontSize: number;
    /**
     * @desc 副標題字體大小
     * @descEN Subtitle font size
     */
    subtitleFontSize: number;
    /**
     * @desc 圖示大小
     * @descEN Icon size
     */
    iconFontSize: number;
    /**
     * @desc 額外區域外間距
     * @descEN Margin of extra area
     */
    extraMargin: CSSProperties['margin'];
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
