import type { CSSProperties } from 'react';
import type { FullToken, GenerateStyle } from '../../theme/internal';
/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
    /**
     * @desc 摺疊面板頭部內邊距
     * @descEN Padding of header
     */
    headerPadding: CSSProperties['padding'];
    /**
     * @desc 摺疊面板頭部背景
     * @descEN Background of header
     */
    headerBg: string;
    /**
     * @desc 摺疊面板內容內部編輯
     * @descEN Padding of content
     */
    contentPadding: CSSProperties['padding'];
    /**
     * @desc 摺疊面板內容背景
     * @descEN Background of content
     */
    contentBg: string;
}
type CollapseToken = FullToken<'Collapse'> & {
    collapseHeaderPaddingSM: string;
    collapseHeaderPaddingLG: string;
    collapsePanelBorderRadius: number;
};
export declare const genBaseStyle: GenerateStyle<CollapseToken>;
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
