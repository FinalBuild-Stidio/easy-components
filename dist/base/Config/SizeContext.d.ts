import * as React from 'react';
import type { OverridableStringUnion } from '@mui/types';
export type OrginSizeType = OverridableStringUnion<'small' | 'medium' | 'large'>;
export type SizeType = OrginSizeType;
declare const SizeContext: React.Context<OrginSizeType>;
export interface SizeContextProps {
    size?: SizeType;
    children?: React.ReactNode;
}
export declare const SizeContextProvider: React.FC<SizeContextProps>;
export default SizeContext;
