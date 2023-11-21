import * as React from 'react';
import type { MenuProps } from './menu';
export interface OverrideContextProps {
    prefixCls?: string;
    expandIcon?: React.ReactNode;
    mode?: MenuProps['mode'];
    selectable?: boolean;
    validator?: (menuProps: Pick<MenuProps, 'mode'>) => void;
    onClick?: () => void;
}
declare const OverrideContext: React.Context<OverrideContextProps | null>;
/** @internal Only used for Dropdown component. Do not use this in your production. */
export declare const OverrideProvider: React.ForwardRefExoticComponent<OverrideContextProps & {
    children: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;
/** @internal Only used for Dropdown component. Do not use this in your production. */
export default OverrideContext;
