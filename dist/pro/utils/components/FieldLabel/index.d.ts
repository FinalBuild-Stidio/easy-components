import React from 'react';
import type { SizeType } from '../../../../base/Config/SizeContext';
export type FieldLabelProps = {
    label?: React.ReactNode;
    value?: any;
    disabled?: boolean;
    onClear?: () => void;
    size?: SizeType;
    ellipsis?: boolean;
    placeholder?: React.ReactNode;
    className?: string;
    formatter?: (value: any) => React.ReactNode;
    style?: React.CSSProperties;
    bordered?: boolean;
    allowClear?: boolean;
    downIcon?: React.ReactNode | false;
    onClick?: () => void;
    /**
     * 點擊標籤的事件，用來喚醒 down menu 狀態
     */
    onLabelClick?: () => void;
};
export declare const FieldLabel: React.ForwardRefExoticComponent<FieldLabelProps & React.RefAttributes<any>>;
