/// <reference types="react" />
import type { ProLayoutProps } from '../ProLayout';
import type { MenuDataItem, MessageDescriptor, WithFalse } from '../typing';
export interface BreadcrumbItemType {
    disabled?: boolean;
    key?: React.Key;
    /**
     * Different with `path`. Directly set the link of this item.
     */
    href?: string;
    /**
     * Different with `href`. It will concat all prev `path` to the current one.
     */
    path?: string;
    title?: React.ReactNode;
    className?: string;
}
export type BreadcrumbProLayoutProps = {
    breadcrumbList?: {
        title: string;
        href: string;
    }[];
    home?: string;
    location?: {
        pathname?: string;
    };
    breadcrumbMap?: Map<string, MenuDataItem>;
    formatMessage?: (message: MessageDescriptor) => string;
    breadcrumbRender?: WithFalse<(routers: BreadcrumbItemType[]) => BreadcrumbItemType[]>;
    itemRender?: (route: BreadcrumbItemType, params: Record<PropertyKey, any>, routes: BreadcrumbItemType[], paths: string[]) => React.ReactNode;
};
export declare const getBreadcrumb: (breadcrumbMap: Map<string, MenuDataItem>, url: string) => MenuDataItem;
export declare const getBreadcrumbFromProps: (props: BreadcrumbProLayoutProps) => {
    location: BreadcrumbProLayoutProps['location'];
    breadcrumbMap: BreadcrumbProLayoutProps['breadcrumbMap'];
};
/** 將參數轉化為麵包屑 Convert parameters into breadcrumbs */
export declare const genBreadcrumbProps: (props: BreadcrumbProLayoutProps) => BreadcrumbItemType[];
export type GetBreadcrumbPropsResult = {
    items?: BreadcrumbItemType[];
    itemRender?: BreadcrumbProLayoutProps['itemRender'];
};
export declare const getBreadcrumbProps: (props: Omit<BreadcrumbProLayoutProps, "breadcrumbRender"> & {
    breadcrumbRender?: WithFalse<(routers: BreadcrumbItemType[]) => BreadcrumbItemType[]> | undefined;
}, layoutPros: ProLayoutProps) => GetBreadcrumbPropsResult;
