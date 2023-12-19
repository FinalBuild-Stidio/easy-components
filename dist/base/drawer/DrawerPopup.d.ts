import type { CSSMotionProps } from 'rc-motion';
import * as React from 'react';
import type { DrawerClassNames, DrawerStyles } from './types';
export interface PanelEvents {
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
}
export interface DrawerPopupProps extends PanelEvents {
    prefixCls: string;
    open?: boolean;
    inline?: boolean;
    push?: boolean | PushConfig;
    forceRender?: boolean;
    autoFocus?: boolean;
    keyboard?: boolean;
    rootClassName?: string;
    rootStyle?: React.CSSProperties;
    zIndex?: number;
    placement?: Placement;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    contentWrapperStyle?: React.CSSProperties;
    mask?: boolean;
    maskClosable?: boolean;
    maskClassName?: string;
    maskStyle?: React.CSSProperties;
    motion?: CSSMotionProps | ((placement: Placement) => CSSMotionProps);
    maskMotion?: CSSMotionProps;
    afterOpenChange?: (open: boolean) => void;
    onClose?: (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    classNames?: DrawerClassNames;
    styles?: DrawerStyles;
}
export type Placement = 'left' | 'right' | 'top' | 'bottom';
export interface PushConfig {
    distance?: number | string;
}
export interface PanelProps extends PanelEvents {
    prefixCls: string;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    containerRef?: React.Ref<HTMLDivElement>;
}
export interface DrawerPopupProps extends PanelEvents {
    prefixCls: string;
    open?: boolean;
    inline?: boolean;
    push?: boolean | PushConfig;
    forceRender?: boolean;
    autoFocus?: boolean;
    keyboard?: boolean;
    rootClassName?: string;
    rootStyle?: React.CSSProperties;
    zIndex?: number;
    placement?: Placement;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    contentWrapperStyle?: React.CSSProperties;
    mask?: boolean;
    maskClosable?: boolean;
    maskClassName?: string;
    maskStyle?: React.CSSProperties;
    motion?: CSSMotionProps | ((placement: Placement) => CSSMotionProps);
    maskMotion?: CSSMotionProps;
    afterOpenChange?: (open: boolean) => void;
    onClose?: (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    classNames?: DrawerClassNames;
    styles?: DrawerStyles;
}
declare const RefDrawerPopup: React.ForwardRefExoticComponent<DrawerPopupProps & React.RefAttributes<HTMLDivElement>>;
export default RefDrawerPopup;
