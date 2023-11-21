import type { MenuDataItem, Route, MessageDescriptor } from '../typing';
export declare const childrenPropsName = "routes";
export declare function stripQueryStringAndHashFromPath(url: string): string;
export declare const isUrl: (path: string) => boolean;
export declare const getKeyByPath: (item: MenuDataItem) => string | undefined;
/**
 * @param routeList 路由配置
 * @param locale 是否使用國際化
 * @param formatMessage 國際化的程序
 * @param ignoreFilter 是否篩選掉不展示的 menuItem 項，plugin-layout需要所有項目來計算布局樣式
 * @returns { breadcrumb, menuData}
 */
export declare const transformRoute: (routeList: Route[], locale?: boolean, formatMessage?: ((message: MessageDescriptor) => string) | undefined, ignoreFilter?: boolean) => {
    breadcrumb: Map<string, MenuDataItem>;
    menuData: MenuDataItem[];
};
export default transformRoute;
