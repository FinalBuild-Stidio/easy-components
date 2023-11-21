import React from 'react';
export type Value = string | number | undefined | null;
export type ValuePair = Value[];
export type FieldDigitRangeProps = {
    text: ValuePair;
    placeholder?: string | string[];
    separator?: string;
    separatorWidth?: number;
};
declare const _default: React.ForwardRefExoticComponent<import('../../../../providers').BaseProFieldFC & import('../../../../providers').ProRenderFieldPropsType & FieldDigitRangeProps & React.RefAttributes<any>>;
export default _default;
