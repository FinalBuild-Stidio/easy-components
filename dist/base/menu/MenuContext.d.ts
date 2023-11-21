/// <reference types="react" />
export type MenuTheme = 'light' | 'dark';
export interface MenuContextProps {
    prefixCls: string;
    inlineCollapsed: boolean;
    theme?: MenuTheme;
    firstLevel: boolean;
    /** @internal Safe to remove */
    disableMenuItemTitleTooltip?: boolean;
}
declare const MenuContext: import("react").Context<MenuContextProps>;
export default MenuContext;
