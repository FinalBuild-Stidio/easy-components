import * as React from 'react';
import type { PresetStatusColorType } from '../_util/colors';
import type { LiteralUnion } from '../_util/type';
import type { PresetColorKey } from '../theme/internal';
export interface StatusProps {
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    rootClassName?: string;
    status?: PresetStatusColorType;
    color?: LiteralUnion<PresetColorKey>;
    text?: React.ReactNode;
    classNames?: {
        root?: string;
        indicator?: string;
    };
    styles?: {
        root?: React.CSSProperties;
        indicator?: React.CSSProperties;
    };
}
declare const Status: React.ForwardRefExoticComponent<StatusProps & React.RefAttributes<HTMLSpanElement>>;
export default Status;
