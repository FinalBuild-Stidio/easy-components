import type { PortalProps } from '@rc-component/portal';
import * as React from 'react';
import type { DrawerPopupProps, PanelEvents } from './DrawerPopup';
import type { DrawerClassNames, DrawerStyles } from './types';
export type Placement = 'left' | 'top' | 'right' | 'bottom';
export interface DrawerProps extends Omit<DrawerPopupProps, 'prefixCls' | 'inline' | 'scrollLocker'>, PanelEvents {
    prefixCls?: string;
    open?: boolean;
    onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
    destroyOnClose?: boolean;
    getContainer?: PortalProps['getContainer'];
    panelRef?: React.Ref<HTMLDivElement>;
    classNames?: DrawerClassNames;
    styles?: DrawerStyles;
}
declare const Drawer: React.FC<DrawerProps>;
export default Drawer;
