import React from 'react';
import type { CheckboxGroupProps } from '../../../../base/checkbox';
import type { FieldSelectProps } from '../Select';
export type GroupProps = {
    layout?: 'horizontal' | 'vertical';
    options?: CheckboxGroupProps['options'];
} & FieldSelectProps;
declare const _default: React.ForwardRefExoticComponent<import('../../../../providers').BaseProFieldFC & import('../../../../providers').ProRenderFieldPropsType & {
    layout?: "horizontal" | "vertical" | undefined;
    options?: (string | number | import('../../../../base').CheckboxOptionType)[] | undefined;
} & {
    text: string;
    valueEnum?: import("../../../utils").ProFieldValueEnumType | undefined;
    debounceTime?: number | undefined;
    request?: import("../../../utils").ProFieldRequestData | undefined;
    params?: any;
    fieldProps?: any;
    bordered?: boolean | undefined;
    id?: string | undefined;
    children?: React.ReactNode;
    defaultKeyWords?: string | undefined;
} & import("../../index").ProFieldLightProps & React.RefAttributes<any>>;
export default _default;
