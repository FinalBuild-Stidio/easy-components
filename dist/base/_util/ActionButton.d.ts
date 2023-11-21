import * as React from 'react';
import type { ButtonProps } from '@mui/material/Button';
export interface ActionButtonProps {
    actionFn?: (...args: any[]) => any | PromiseLike<any>;
    close?: Function;
    autoFocus?: boolean;
    buttonProps?: ButtonProps;
    emitEvent?: boolean;
    quitOnNullishReturnValue?: boolean;
    children?: React.ReactNode;
    /**
     * Do not throw if is await mode
     */
    isSilent?: () => boolean;
}
declare const ActionButton: React.FC<ActionButtonProps>;
export default ActionButton;
