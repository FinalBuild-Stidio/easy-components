import type React from 'react';
export interface StaticContext {
    statusCode?: number | undefined;
}
export interface match<Params extends {
    [K in keyof Params]?: string;
} = Record<string, any>> {
    params: Params;
    isExact: boolean;
    path: string;
    url: string;
}
export interface IRoute {
    path: string;
    absPath: string;
    file: string;
    id: string;
    parentId?: string;
    [key: string]: any;
}
export type LinkProps = {
    to: string;
    replace?: boolean;
    innerRef?: React.Ref<HTMLAnchorElement>;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type MenuDataItem = {
    /** @name 子選單 */
    children?: MenuDataItem[];
    routes?: undefined;
    /** @name 在選單中隱藏子節點 */
    hideChildrenInMenu?: boolean;
    /** @name 在選單中隱藏自己和子節點 */
    hideInMenu?: boolean;
    /** @name 選單的icon */
    icon?: React.ReactNode;
    /** @name 自訂選單的國際化 key */
    locale?: string | false;
    /** @name 選單的名字 */
    name?: string;
    /** @name 用於標定選中的值，預設是 path */
    key?: string;
    /** @name disable 選單選項 */
    disabled?: boolean;
    /** @name disable menu 的 tooltip 選單選項 */
    disabledTooltip?: boolean;
    /** @name 路徑,可以設定為網頁連結 */
    path?: string;
    /**
     * 當此節點被選中的時候也會選中 parentKeys 的節點
     *
     * @name 自訂父節點
     */
    parentKeys?: string[];
    /** @name 隱藏自己，並且將子節點提升到與自己平級 */
    flatMenu?: boolean;
    /** @name 指定外鏈打開形式，同a標籤 */
    target?: string;
    /**
     * menuItem 的 tooltip 顯示的路徑
     */
    tooltip?: string;
    [key: string]: any;
};
export type Route = Omit<MenuDataItem, 'routes'> & {
    children?: Route[];
};
export type WithFalse<T> = T | false;
export type RouterTypes = {
    computedMatch?: match<any>;
    route?: Route;
    location: {
        pathname?: string;
    };
};
export type MessageDescriptor = {
    id: any;
    description?: string;
    defaultMessage?: string;
};
