import React from 'react';
import type { TextAreaProps } from '../../../../base/input';
import type { TextAreaRef } from '../../../../base/input/TextArea';
declare const _default: React.ForwardRefExoticComponent<{
    fieldProps?: Partial<import("../../typing").FieldProps<TextAreaRef> & TextAreaProps> | undefined;
    placeholder?: string | string[] | undefined;
    secondary?: boolean | undefined;
    cacheForSwr?: boolean | undefined;
    disabled?: boolean | undefined;
    width?: number | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    proFieldProps?: import("../../..").ProFieldProps | undefined;
    footerRender?: import("../../typing").LightFilterFooterRender | undefined;
    children?: React.ReactNode;
} & Omit<import("..").ProFormItemProps, "valueType"> & Pick<import("../../typing").ProFormGridConfig, "colProps"> & import("../../typing").ExtendsProps & React.RefAttributes<any>>;
export default _default;
