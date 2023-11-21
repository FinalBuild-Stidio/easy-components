import React from 'react';
import type { CSSInterpolation, HashPriority, Transformer } from '../StyleContext';
import type { Linter } from './cssinjs/linters/interface';
export type TokenType = object;
export type DerivativeFunc<DesignToken extends TokenType, DerivativeToken extends TokenType> = (designToken: DesignToken, derivativeToken?: DerivativeToken) => DerivativeToken;
/**
 * Theme with algorithms to derive tokens from design tokens.
 * Use `createTheme` first which will help to manage the theme instance cache.
 */
export declare class Theme<DesignToken extends TokenType, DerivativeToken extends TokenType> {
    private derivatives;
    readonly id: number;
    constructor(derivatives: DerivativeFunc<DesignToken, DerivativeToken> | DerivativeFunc<DesignToken, DerivativeToken>[]);
    getDerivativeToken(token: DesignToken): DerivativeToken;
}
export declare function normalizeStyle(styleStr: string): string;
export interface ParseConfig {
    hashId?: string;
    hashPriority?: HashPriority;
    layer?: string;
    path?: string;
    transformers?: Transformer[];
    linters?: Linter[];
}
export interface ParseInfo {
    root?: boolean;
    injectHash?: boolean;
    parentSelectors: string[];
}
export declare const parseStyle: (interpolation: CSSInterpolation, config?: ParseConfig, { root, injectHash, parentSelectors }?: ParseInfo) => [parsedStr: string, effectStyle: Record<string, string>];
/**
 * Register a style to the global style sheet.
 */
export declare function useStyleRegister(info: {
    theme: Theme<any, any>;
    token: any;
    path: string[];
    hashId?: string;
    layer?: string;
    nonce?: string | (() => string);
    clientOnly?: boolean;
    /**
     * Tell cssinjs the insert order of style.
     * It's useful when you need to insert style
     * before other style to overwrite for the same selector priority.
     */
    order?: number;
}, styleFn: () => CSSInterpolation): (node: React.ReactElement) => React.JSX.Element;
export default useStyleRegister;
