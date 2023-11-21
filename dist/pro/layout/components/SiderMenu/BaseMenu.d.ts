import React from 'react';
import type { MenuProps } from '../../../../base';
import type { PureSettings } from '../../../defaultSettings';
import type { MenuDataItem, MessageDescriptor, RouterTypes, WithFalse } from '../../typing';
import type { PrivateSiderMenuProps } from './SiderMenu';
export type MenuMode = 'vertical' | 'vertical-left' | 'vertical-right' | 'horizontal' | 'inline';
export type BaseMenuProps = {
    className?: string;
    /** 預設的是否展開，會受到 breakpoint 的影響 */
    defaultCollapsed?: boolean;
    collapsed?: boolean;
    splitMenus?: boolean;
    isMobile?: boolean;
    menuData?: MenuDataItem[];
    mode?: MenuMode;
    onCollapse?: (collapsed: boolean) => void;
    openKeys?: WithFalse<string[]> | undefined;
    handleOpenChange?: (openKeys: string[]) => void;
    /** 要給菜單的props, 參考 ipass customized lib -menu的屬性 */
    menuProps?: MenuProps;
    style?: React.CSSProperties;
    formatMessage?: (message: MessageDescriptor) => string;
    /**
     * @name 處理父級菜單的 props，可以複寫菜單的點擊功能，一般用於埋點
     * @see 子級的菜單要使用 menuItemRender 來處理
     *
     * @example 使用 a 標籤跳轉到特殊的地址 subMenuItemRender={(item, defaultDom) => { return <a onClick={()=> history.push(item.path) }>{defaultDom}</a> }}
     * @example 增加埋點 subMenuItemRender={(item, defaultDom) => { return <a onClick={()=> log.click(item.name) }>{defaultDom}</a> }}
     */
    subMenuItemRender?: WithFalse<(item: MenuDataItem & {
        isUrl: boolean;
    }, defaultDom: React.ReactNode, menuProps: BaseMenuProps) => React.ReactNode>;
    /**
     * @name 處理菜單的 props，可以複寫菜單的點擊功能，一般結合 Router 框架使用
     * @see 非子級的菜單要使用 subMenuItemRender 來處理
     *
     * @example 使用 a 標籤 menuItemRender={(item, defaultDom) => { return <a onClick={()=> history.push(item.path) }>{defaultDom}</a> }}
     * @example 使用 Link 標籤 menuItemRender={(item, defaultDom) => { return <Link to={item.path}>{defaultDom}</Link> }}
     */
    menuItemRender?: WithFalse<(item: MenuDataItem & {
        isUrl: boolean;
        onClick: () => void;
    }, defaultDom: React.ReactNode, menuProps: BaseMenuProps & Partial<PrivateSiderMenuProps>) => React.ReactNode>;
    /**
     * @name 處理 menuData 的方法，與 menuDataRender 不同，postMenuData處理完成後會直接渲染，不再進行國際化和拼接處理
     *
     * @example 增加菜單圖示 postMenuData={(menuData) => { return menuData.map(item => { return { ...item, icon: <Icon type={item.icon} /> } }) }}
     */
    postMenuData?: (menusData?: MenuDataItem[]) => MenuDataItem[];
} & Partial<RouterTypes> & Omit<MenuProps, 'openKeys' | 'onOpenChange' | 'title'> & Partial<PureSettings>;
declare const BaseMenu: React.FC<BaseMenuProps & PrivateSiderMenuProps>;
export { BaseMenu };
