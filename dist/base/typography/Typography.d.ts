import * as React from 'react';
export interface TypographyProps<C extends keyof JSX.IntrinsicElements> extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    prefixCls?: string;
    className?: string;
    rootClassName?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    /** @internal */
    component?: C;
    ['aria-label']?: string;
}
interface InternalTypographyProps<C extends keyof JSX.IntrinsicElements> extends TypographyProps<C> {
    /** @deprecated Use `ref` directly if using React 16 */
    setContentRef?: (node: HTMLElement) => void;
}
declare const Typography: React.ForwardRefExoticComponent<InternalTypographyProps<keyof JSX.IntrinsicElements> & React.RefAttributes<HTMLElement>>;
export default Typography;
