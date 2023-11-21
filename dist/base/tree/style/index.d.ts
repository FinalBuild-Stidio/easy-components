import type { CSSInterpolation, CSSObject } from '../../../StyleContext';
import type { AliasToken, FullToken } from '../../theme/internal';
export interface TreeSharedToken {
    /**
     * @desc 節點標題高度
     * @descEN Node title height
     */
    titleHeight: number;
    /**
     * @desc 節點懸浮態背景色
     * @descEN Background color of hovered node
     */
    nodeHoverBg: string;
    /**
     * @desc 節點選中態背景色
     * @descEN Background color of selected node
     */
    nodeSelectedBg: string;
}
export interface ComponentToken extends TreeSharedToken {
    /**
     * @desc 目錄樹節點選中文字顏色
     * @descEN Text color of selected directory node
     */
    directoryNodeSelectedColor: string;
    /**
     * @desc 目錄樹節點選中背景色
     * @descEN Background color of selected directory node
     */
    directoryNodeSelectedBg: string;
}
type TreeToken = FullToken<'Tree'> & {
    treeCls: string;
    treeNodeCls: string;
    treeNodePadding: number;
};
export declare const genBaseStyle: (prefixCls: string, token: TreeToken) => CSSObject;
export declare const genDirectoryStyle: (token: TreeToken) => CSSObject;
export declare const genTreeStyle: (prefixCls: string, token: AliasToken & TreeSharedToken) => CSSInterpolation;
export declare const initComponentToken: (token: AliasToken) => TreeSharedToken;
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
