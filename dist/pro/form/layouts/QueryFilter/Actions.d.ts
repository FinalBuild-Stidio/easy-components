import type { IntlShape } from '@caps.dev/react-intl';
import React from 'react';
export type ActionsProps = {
    submitter: React.ReactNode;
    /** 是否收起 */
    collapsed?: boolean;
    /** 收起按鈕的事件 */
    onCollapse?: (collapsed: boolean) => void;
    setCollapsed: (collapse: boolean) => void;
    isForm?: boolean;
    style?: React.CSSProperties;
    /** 收起按鈕的 render */
    collapseRender?: ((collapsed: boolean, 
    /** 是否應該展示，有兩種情況 列只有三列，不需要收起 form 模式 不需要收起 */
    props: ActionsProps, intl: IntlShape, hiddenNum?: false | number) => React.ReactNode) | false;
    /** 隱藏個數 */
    hiddenNum?: false | number;
};
/**
 * FormFooter 的組件，可以自動進行一些配置
 *
 * @param props
 */
declare const Actions: React.FC<ActionsProps>;
export default Actions;
