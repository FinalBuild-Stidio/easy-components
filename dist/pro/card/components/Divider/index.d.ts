import React from 'react';
export type ProCardDividerProps = {
    /**
     * 樣式
     *
     * @ignore
     */
    style?: React.CSSProperties;
    /**
     * ClassName
     *
     * @ignore
     */
    className?: string;
    /**
     * 布局類型
     *
     * @default vertical
     */
    type?: 'horizontal' | 'vertical';
};
declare const ProCardDivider: React.FC<ProCardDividerProps>;
export default ProCardDivider;
