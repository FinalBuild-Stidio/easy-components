import * as React from 'react';
export interface TransferLocale {
    description: string;
}
export interface EmptyProps {
    prefixCls?: string;
    className?: string;
    rootClassName?: string;
    style?: React.CSSProperties;
    /** @since 3.16.0 */
    imageStyle?: React.CSSProperties;
    image?: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;
}
declare const Empty: React.FC<EmptyProps>;
export default Empty;
