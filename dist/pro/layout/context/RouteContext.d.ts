/// <reference types="react" />
import type { BreadcrumbsProps } from '@mui/material/Breadcrumbs';
import type { PureSettings } from '../../defaultSettings';
import type { MenuDataItem } from '../typing';
import type { GetBreadcrumbPropsResult } from '../utils/getBreadcrumbProps';
export type RouteContextType = {
    breadcrumb?: GetBreadcrumbPropsResult;
    menuData?: MenuDataItem[];
    isMobile?: boolean;
    prefixCls?: string;
    collapsed?: boolean;
    hasSiderMenu?: boolean;
    hasHeader?: boolean;
    siderWidth?: number;
    isChildrenLayout?: boolean;
    hasFooterToolbar?: boolean;
    hasFooter?: boolean;
    hasPageContainer?: number;
    setHasFooterToolbar?: React.Dispatch<React.SetStateAction<boolean>>;
    setHasPageContainer?: React.Dispatch<React.SetStateAction<number>>;
    pageTitleInfo?: {
        title: string;
        id: string;
        pageName: string;
    };
    matchMenus?: MenuDataItem[];
    matchMenuKeys?: string[];
    currentMenu?: PureSettings & MenuDataItem;
    /** PageHeader 的 BreadcrumbProps 配置，會透傳下去 */
    breadcrumbProps?: BreadcrumbsProps;
} & Partial<PureSettings>;
export declare const RouteContext: React.Context<RouteContextType>;
