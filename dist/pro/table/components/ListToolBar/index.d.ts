import React from 'react';
import { TabPaneProps } from '../../../../base';
import type { LabelTooltipType } from '../../../../base/form/FormItemLabel';
import type { SearchProps } from '../../../../base/input';
import type { ListToolBarHeaderMenuProps } from './HeaderMenu';
export type ListToolBarSetting = {
    icon: React.ReactNode;
    tooltip?: LabelTooltipType | string;
    key?: string;
    onClick?: (key?: string) => void;
};
/** 默認直接導出了 rc 組件中的 Tab.Pane 組件。 */
type TabPane = TabPaneProps & {
    key?: string;
};
export type ListToolBarTabs = {
    activeKey?: string;
    defaultActiveKey?: string;
    onChange?: (activeKey: string) => void;
    items?: TabPane[];
};
export type ListToolBarMenu = ListToolBarHeaderMenuProps;
type SearchPropType = (SearchProps & {
    onSearch: (searchValue: string) => Promise<false | void> | false | void;
}) | React.ReactNode | boolean;
type SettingPropType = React.ReactNode | ListToolBarSetting;
export type ListToolBarProps = {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    /** 標題 */
    title?: React.ReactNode;
    /** 副標題 */
    subTitle?: React.ReactNode;
    /** 標題提示 */
    tooltip?: string | LabelTooltipType;
    /** 搜索輸入欄相關配置 */
    search?: SearchPropType;
    /** 搜索回調 */
    onSearch?: (keyWords: string) => void;
    /** 工具欄右側操作區 */
    actions?: React.ReactNode[];
    /** 工作欄右側設置區 */
    settings?: SettingPropType[];
    /** 是否多行展示 */
    multipleLine?: boolean;
    /** 過濾區，通常配合 LightFilter 使用 */
    filter?: React.ReactNode;
    /** 標籤頁配置，僅當 `multipleLine` 為 true 時有效 */
    tabs?: ListToolBarTabs;
    /** 菜單配置 */
    menu?: ListToolBarMenu;
};
declare const ListToolBar: React.FC<ListToolBarProps>;
export default ListToolBar;
