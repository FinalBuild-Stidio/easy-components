import type { GenerateStyle } from '../../../../providers';
import type { SiderProps } from '../../../../base';
import type { CSSProperties } from 'react';
import React from 'react';
import type { WithFalse } from '../../typing';
import type { AppItemProps, AppListProps } from '../AppsLogoComponents/types';
import type { HeaderViewProps } from '../Header';
import type { BaseMenuProps } from './BaseMenu';
import type { SiderMenuToken } from './style/stylish';
export type HeaderRenderKey = 'menuHeaderRender' | 'headerTitleRender';
/**
 * 渲染 title 和 logo
 *
 * @param props
 * @param renderKey
 * @returns
 */
export declare const renderLogoAndTitle: (props: SiderMenuProps, renderKey?: HeaderRenderKey) => React.ReactNode;
export type SiderMenuProps = {
    /** 品牌logo的標識 */
    logo?: React.ReactNode;
    /** 相關品牌的列表 */
    appList?: AppListProps;
    appListRender?: (props: AppListProps, defaultDom: React.ReactNode) => React.ReactNode;
    /** 相關品牌的列表項 點擊事件，當事件存在時，appList 內配置的 url 不在自動跳轉 */
    itemClick?: (item: AppItemProps, popoverRef?: React.RefObject<HTMLSpanElement>) => void;
    /** 菜單的寬度 */
    siderWidth?: number;
    /** 頭像的設置 */
    /** Layout的操作功能列表，不同的 layout 會放到不同的位置 */
    actionsRender?: WithFalse<(props: HeaderViewProps) => React.ReactNode[]>;
    /**
     * @name  菜單 logo 和 title 區域的渲染
     *
     * @example 不要logo : menuHeaderRender={(logo,title)=> title}
     * @example 不要title : menuHeaderRender={(logo,title)=> logo}
     * @example 展開的時候顯示title,收起顯示 logo： menuHeaderRender={(logo,title,props)=> props.collapsed ? logo : title}
     * @example 不要這個區域了 : menuHeaderRender={false}
     */
    menuHeaderRender?: WithFalse<(logo: React.ReactNode, title: React.ReactNode, props?: SiderMenuProps) => React.ReactNode>;
    /**
     * @name 側邊菜單底部的配置，可以增加一些底部操作
     *
     * @example 底部增加超連結 menuFooterRender={()=><a href="https://mui.com/material-ui">mui.com/material-ui</a>}
     * @example 根據收起展開配置不同的 dom  menuFooterRender={()=>collapsed? null :<a href="https://mui.com/material-ui">mui.com/material-ui</a>}
     */
    menuFooterRender?: WithFalse<(props?: SiderMenuProps) => React.ReactNode>;
    /**
     * @name  側邊菜單，菜單區域的處理,可以單獨處理菜單的dom
     *
     * @example 增加菜單區域的背景顏色 menuContentRender={(props,defaultDom)=><div style={{backgroundColor:"red"}}>{defaultDom}</div>}
     * @example 某些情況下不顯示菜單 menuContentRender={(props)=> return <div>不顯示菜單</div>}
     */
    menuContentRender?: WithFalse<(props: SiderMenuProps, defaultDom: React.ReactNode) => React.ReactNode>;
    /**
     * @name 側邊菜單 title 和 logo 下面區域的渲染，一般會增加個搜索框
     *
     * @example  增加一個搜索框 menuExtraRender={()=>(<Search placeholder="請輸入" />)}
     * @example  根據收起展開配置不同的 dom： menuExtraRender={()=>collapsed? null : <Search placeholder="請輸入" />}
     */
    menuExtraRender?: WithFalse<(props: SiderMenuProps) => React.ReactNode>;
    /**
     * @name 自訂展開收起按鈕的渲染
     *
     * @example 使用文字渲染 collapsedButtonRender={(collapsed)=>collapsed?"展開":"收起"})}
     * @example 使用icon渲染 collapsedButtonRender={(collapsed)=>collapsed?<MenuUnfoldOutlined />:<MenuFoldOutlined />}
     * @example 不渲染按鈕 collapsedButtonRender={false}
     */
    collapsedButtonRender?: WithFalse<(collapsed?: boolean, defaultDom?: React.ReactNode) => React.ReactNode>;
    /**
     * @name 菜單是否收起的斷點，設置成false 可以禁用
     *
     * @example 禁用斷點  breakpoint={false}
     * @example 最小的螢幕再收起 breakpoint={"xs"}
     */
    breakpoint?: SiderProps['breakpoint'] | false;
    /**
     * @name 菜單頂部logo 和 title 區域的點擊事件
     *
     * @example 點擊跳轉到首頁 onMenuHeaderClick={()=>{ history.push('/') }}
     */
    onMenuHeaderClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * @name 側邊菜單底部的一些快捷連結
     *
     * @example links={[<a href="https://mui.com/material-ui/"> 訪問官網 </a>,<a href="https://mui.com/material-ui/"> 幫助 </a>]}
     */
    links?: React.ReactNode[];
    onOpenChange?: (openKeys: WithFalse<string[]>) => void;
    getContainer?: false;
    /**
     * @name 側邊菜單的logo的樣式，可以調整一下大小
     *
     * @example 設置logo的大小為 42px logoStyle={{width: '42px', height: '42px'}}
     */
    logoStyle?: CSSProperties;
    hide?: boolean;
    className?: string;
    style?: CSSProperties;
} & Pick<BaseMenuProps, Exclude<keyof BaseMenuProps, ['onCollapse']>>;
export type PrivateSiderMenuProps = {
    matchMenuKeys: string[];
    originCollapsed?: boolean;
    menuRenderType?: 'header' | 'sider';
    stylish?: GenerateStyle<SiderMenuToken>;
};
declare const SiderMenu: React.FC<SiderMenuProps & PrivateSiderMenuProps>;
export { SiderMenu };
