import type { DrawerProps as RCDrawerProps } from './Drawer';
import * as React from 'react';
export interface DrawerPanelRef {
    focus: VoidFunction;
}
export interface DrawerPanelEvents {
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
}
export interface DrawerPanelProps extends DrawerPanelEvents {
    prefixCls: string;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    containerRef?: React.Ref<HTMLDivElement>;
}
export interface DrawerPanelProps {
    prefixCls: string;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    extra?: React.ReactNode;
    /**
     * Recommend to use closeIcon instead
     *
     * e.g.
     *
     * `<Drawer closeIcon={false} />`
     */
    closable?: boolean;
    closeIcon?: boolean | React.ReactNode;
    onClose?: RCDrawerProps['onClose'];
    /** Wrapper dom node style of header and body */
    drawerStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    bodyStyle?: React.CSSProperties;
    footerStyle?: React.CSSProperties;
    children?: React.ReactNode;
}
declare const DrawerPanel: React.FC<DrawerPanelProps>;
export default DrawerPanel;
