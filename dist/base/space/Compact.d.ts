import * as React from 'react';
import type { SizeType } from '../Config/SizeContext';
export interface SpaceCompactItemContextType {
    compactSize?: SizeType;
    isFirstItem?: boolean;
    isLastItem?: boolean;
}
export declare const SpaceCompactItemContext: React.Context<SpaceCompactItemContextType | null>;
export declare const useCompactItemContext: (prefixCls: string) => {
    compactSize: import("../Config/SizeContext").OrginSizeType | undefined;
    compactItemClassnames: string;
};
export declare const NoCompactStyle: React.FC<React.PropsWithChildren<{}>>;
export interface SpaceCompactProps extends React.HTMLAttributes<HTMLDivElement> {
    prefixCls?: string;
    size?: SizeType;
    direction?: 'horizontal' | 'vertical';
    block?: boolean;
    rootClassName?: string;
}
declare const Compact: React.FC<SpaceCompactProps>;
export default Compact;
