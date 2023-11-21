import type { TabsProps } from '../../../../base';
import React from 'react';
import type { ProCardTabPaneProps, ProCardTabsProps } from '../../typing';
export declare function useLegacyItems(items?: TabsProps['items'], children?: React.ReactNode, tabs?: ProCardTabsProps): {
    children: React.JSX.Element;
    key: string;
    label: React.ReactNode;
    style?: React.CSSProperties | undefined;
    active?: boolean | undefined;
    disabled?: boolean | undefined;
    prefixCls?: string | undefined;
    className?: string | undefined;
    id?: string | undefined;
    forceRender?: boolean | undefined;
    animated?: boolean | undefined;
    destroyInactiveTabPane?: boolean | undefined;
    closable?: boolean | undefined;
    closeIcon?: React.ReactNode;
    tabKey?: string | undefined;
}[];
/**
 * @deprecated ProComponets 3.0
 */
declare const TabPane: React.FC<ProCardTabPaneProps>;
export default TabPane;
