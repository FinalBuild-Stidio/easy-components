import React from 'react';
import type { ReactNode } from 'react';
import type { BreadcrumbsProps } from '@mui/material/Breadcrumbs';
import type { GenerateStyle } from '../../../../providers';
import { AffixProps, TabPaneProps, TabsProps } from '../../../../base';
import type { WithFalse } from '../../typing';
import type { FooterToolbarProps } from '../FooterToolbar';
import type { PageHeaderProps } from '../PageHeader';
import type { PageContainerToken, pageContainerToken } from './style';
export type PageHeaderTabConfig = {
    /** @name tabs 的列表 */
    tabList?: (TabPaneProps & {
        key?: React.Key;
    })[];
    /** @name tabActiveKey 當前選中 tab 的 key */
    tabActiveKey?: TabsProps['activeKey'];
    /** @name tab 修改時觸發 */
    onTabChange?: TabsProps['onChange'];
    /** @name tab 上額外的區域 */
    tabBarExtraContent?: TabsProps['tabBarExtraContent'];
    /** @name tabs 的其他配置 */
    tabProps?: TabsProps;
    /**
     * @deprecated 請使用 fixedHeader
     * @name fixHeader 固定 PageHeader 到頁面頂部
     */
    fixHeader?: boolean;
    /** @name fixedHeader 固定 PageHeader 到頁面頂部 */
    fixedHeader?: boolean;
};
export type PageContainerProps = {
    title?: React.ReactNode | false;
    content?: React.ReactNode;
    extraContent?: React.ReactNode;
    prefixCls?: string;
    footer?: ReactNode[];
    /**
     * @name token 自訂的 token
     */
    token?: pageContainerToken;
    /**
     * 與 ipass customized lib 完全相同
     *
     * @name PageHeader 的配置
     */
    header?: Partial<PageHeaderProps> & {
        children?: React.ReactNode;
    };
    /** @name pageHeaderRender 自訂 pageHeader */
    pageHeaderRender?: WithFalse<(props: PageContainerProps) => React.ReactNode>;
    /**
     * 與 ipass customized lib 完全相同
     *
     * @name affixProps 固釘的配置
     */
    affixProps?: Omit<AffixProps, 'children'>;
    /**
     * 只載入內容區域
     *
     * @name loading 是否載入
     */
    loading?: boolean;
    /**
     * 自訂 breadcrumb,
     * @name breadcrumbRender 返回false不展示
     */
    breadcrumbRender?: PageHeaderProps['breadcrumbRender'] | false;
    /** @name BreadcrumbsProps 配置麵包屑 */
    breadcrumb?: BreadcrumbsProps;
    children?: React.ReactNode;
    stylish?: GenerateStyle<PageContainerToken>;
    footerStylish?: GenerateStyle<PageContainerToken>;
    footerToolBarProps?: FooterToolbarProps;
} & PageHeaderTabConfig & Omit<PageHeaderProps, 'title' | 'footer' | 'breadcrumbRender' | 'breadcrumb'>;
declare const PageContainer: React.FC<PageContainerProps>;
export { PageContainer };
