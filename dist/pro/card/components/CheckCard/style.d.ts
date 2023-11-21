/// <reference types="react" />
import type { ProAliasToken } from '../../../../providers';
import { Keyframes } from '../../../../StyleContext';
export interface ProListToken extends ProAliasToken {
    componentCls: string;
}
export declare const cardLoading: Keyframes;
export declare function useStyle(prefixCls: string): {
    wrapSSR: (node: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) => import("react").JSX.Element;
    hashId: string;
};
