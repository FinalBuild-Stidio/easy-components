import React from 'react';
import type { InputNumberProps } from '../../../../base';
import type { ProFormFieldItemProps } from '../../typing';
export type ProFormDigitProps = ProFormFieldItemProps<InputNumberProps<number>> & {
    min?: InputNumberProps['min'];
    max?: InputNumberProps['max'];
};
declare const ForwardRefProFormDigit: React.ForwardRefExoticComponent<{
    fieldProps?: Partial<import("../../typing").FieldProps<any> & InputNumberProps<number>> | undefined;
    placeholder?: string | string[] | undefined;
    secondary?: boolean | undefined;
    cacheForSwr?: boolean | undefined;
    disabled?: boolean | undefined;
    width?: number | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    proFieldProps?: import("../../..").ProFieldProps | undefined;
    footerRender?: import("../../typing").LightFilterFooterRender | undefined;
    children?: React.ReactNode;
} & Omit<import("..").ProFormItemProps, "valueType"> & Pick<import("../../typing").ProFormGridConfig, "colProps"> & import("../../typing").ExtendsProps & {
    min?: InputNumberProps['min'];
    max?: InputNumberProps['max'];
} & React.RefAttributes<any>>;
export default ForwardRefProFormDigit;
