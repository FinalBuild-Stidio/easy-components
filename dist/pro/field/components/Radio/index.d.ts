import React from 'react';
import type { RadioGroupProps } from '../../../../base';
import type { FieldSelectProps } from '../Select';
export type GroupProps = {
    options?: RadioGroupProps['options'];
    radioType?: RadioGroupProps['optionType'];
} & FieldSelectProps;
declare const _default: React.ForwardRefExoticComponent<import("../../..").BaseProFieldFC & import("../../..").ProRenderFieldPropsType & {
    options?: (string | number | import('../../../../base').CheckboxOptionType)[] | undefined;
    radioType?: import("../../../../base/radio").RadioGroupOptionType | undefined;
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
