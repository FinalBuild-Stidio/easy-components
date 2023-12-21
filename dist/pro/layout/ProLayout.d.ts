import React from 'react';
import type { CSSProperties } from 'react';
import type { IntlConfig } from '@caps.dev/react-intl';
import type { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import type { GenerateStyle, ProTokenType } from '../../providers';
import type { HeaderViewProps } from './components/Header';
import type { SiderMenuProps } from './components/SiderMenu/SiderMenu';
import type { SiderMenuToken } from './components/SiderMenu/style';
import type { GetPageTitleProps } from './getPageTitle';
import type { MenuDataItem, MessageDescriptor, RouterTypes, WithFalse } from './typing';
import type { BreadcrumbProLayoutProps, BreadcrumbItemType } from './utils/getBreadcrumbProps';
export type LayoutBreadcrumbProps = {
    minLength?: number;
};
type GlobalTypes = Omit<IntlConfig & Partial<RouterTypes> & SiderMenuProps & HeaderViewProps & {
    token?: ProTokenType['layout'];
    muiTheme?: ThemeProviderProps['theme'];
}, 'collapsed'>;
export type ProLayoutProps = GlobalTypes & {
    stylish?: {
        header?: GenerateStyle<SiderMenuToken>;
        sider?: GenerateStyle<SiderMenuToken>;
    };
    /** Layout 的品牌配置，表現為一張背景圖片 */
    bgLayoutImgList?: {
        src?: string;
        width?: string;
        height?: string;
        left?: number;
        top?: number;
        bottom?: number;
        right?: number;
    }[];
    /**
     * @name 簡約模式，設置了之後不渲染的任何 layout 的東西，但是會有 context，可以獲取到當前菜單。
     *
     * @example pure={true}
     */
    pure?: boolean;
    /**
     * @name logo 的配置，可以配置url，React 組件 和 false
     *
     * @example 設置 logo 為網路地址  logo="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
     * @example 設置 logo 為組件  logo={<img src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"/>}
     * @example 設置 logo 為 false 不顯示 logo  logo={false}
     * @example 設置 logo 為 方法  logo={()=> <img src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"/> }
     * */
    logo?: React.ReactNode | JSX.Element | WithFalse<() => React.ReactNode | JSX.Element>;
    /**
     * @name layout 的 loading 效果，設置完成之後只展示一個 loading
     *
     * @example loading={true}
     */
    loading?: boolean;
    /**
     * @name 是否收起 layout 是嚴格受控的，可以 設置為 true，一直收起
     *
     * @example collapsed={true}
     */
    collapsed?: boolean;
    /**
     * @name 收起和展開的時候觸發事件
     *
     * @example onCollapse=(collapsed)=>{ setCollapsed(collapsed) };
     */
    onCollapse?: (collapsed: boolean) => void;
    /**
     * @name 頁尾的配置
     *
     * @example 不展示dom footerRender={false}
     * @example 使用 layout 的  DefaultFooter   footerRender={() => (<DefaultFooter copyright="這是一條測試文案"/>}
     */
    footerRender?: WithFalse<(props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode>;
    breadcrumbRender?: WithFalse<(routers: BreadcrumbItemType[]) => BreadcrumbItemType[]>;
    /**
     * @name 設置頁面的標題
     * @example 根據頁面的路由設置標題 pageTitleRender={(props) => { return props.location.pathname }}
     * @example 不顯示標題 pageTitleRender={false}
     * @example 根據預設的標題設置 pageTitleRender={(props,defaultPageTitle) => { return defaultPageTitle + '這是一個測試標題' }}
     * @example 根據 info 來自己組合標題 pageTitleRender={(props,defaultPageTitle,info) => { return info.title + "-" + info.pageName }
     */
    pageTitleRender?: WithFalse<(props: GetPageTitleProps, defaultPageTitle?: string, info?: {
        title: string;
        id: string;
        pageName: string;
    }) => string>;
    /**
     * @name 處理 menuData 的資料，可以動態的控制資料
     * @see 盡量不要用非同步資料來處理，否則可能造成更新不及時，如果非同步資料推薦使用 menu.request 和 params。
     *
     * @example 刪除一些菜單 menuDataRender=((menuData) => { return menuData.filter(item => item.name !== 'test') })
     * @example 增加一些菜單 menuDataRender={(menuData) => { return menuData.concat({ path: '/test', name: '測試', icon: 'smile' }) }}
     * @example 修改菜單 menuDataRender={(menuData) => { return menuData.map(item => { if (item.name === 'test') { item.name = '測試' } return item }) }}
     * @example 打平資料 menuDataRender={(menuData) => { return menuData.reduce((pre, item) => { return pre.concat(item.children || []) }, []) }}
     */
    menuDataRender?: (menuData: MenuDataItem[]) => MenuDataItem[];
    /**
     * @name 處理每個麵包屑的配置，需要直接返回 dom
     * @description (route: Route, params: any, routes: Array<Route>, paths: Array<string>) => React.ReactNode
     *
     * @example 設置 disabled： itemRender={(route, params, routes, paths) => { return <Button disabled>{route.breadcrumbName}</Button> }}
     * @example 拼接 path： itemRender={(route, params, routes, paths) => { return <a href={paths.join('/')}>{route.breadcrumbName}</a> }}
     */
    itemRender?: BreadcrumbProLayoutProps['itemRender'];
    formatMessage?: (message: MessageDescriptor) => string;
    /** @name 是否禁用行動端模式
     *
     * @see 有的管理系統不需要行動端模式，此屬性設置為true即可
     * @example disableMobile={true}
     *  */
    disableMobile?: boolean;
    /**
     * content 的樣式
     *
     * @example 背景顏色為紅色 contentStyle={{ backgroundColor: 'red '}}
     */
    contentStyle?: CSSProperties;
    className?: string;
    /**
     * @name 操作菜單重新刷新
     *
     * @example  重新獲取菜單 actionRef.current.reload();
     * */
    actionRef?: React.MutableRefObject<{
        reload: () => void;
    } | undefined>;
    /**
     * @name 錯誤處理組件
     *
     * @example ErrorBoundary={MyErrorBoundary}
     */
    ErrorBoundary?: React.ComponentClass<any, any> | boolean;
    /**
     * @name  側邊菜單的類型, menu.type 的捷徑
     * @type "sub" | "group"
     * @example group
     */
    siderMenuType?: 'sub' | 'group';
    isChildrenLayout?: boolean;
};
export type BasicLayoutContext = {
    [K in 'location']: ProLayoutProps[K];
} & {
    breadcrumb: Record<string, MenuDataItem>;
};
declare const ProLayout: React.FC<ProLayoutProps>;
export { ProLayout };
