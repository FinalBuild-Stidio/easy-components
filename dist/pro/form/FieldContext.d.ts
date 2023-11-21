import type { NamePath } from 'rc-field-form/lib/interface';
import type { ProFieldProps, ProFieldValueType, SearchTransformKeyFn } from '../utils';
import type { FormItemProps } from '../../base';
import React from 'react';
import type { CommonFormProps } from './BaseForm';
import type { FieldProps, ProFormGroupProps } from './typing';
export type FiledContextProps = {
    fieldProps?: FieldProps<unknown>;
    proFieldProps?: ProFieldProps;
    formItemProps?: FormItemProps;
    groupProps?: ProFormGroupProps;
    setFieldValueType?: (name: NamePath, obj: {
        valueType?: ProFieldValueType;
        dateFormat?: string;
        /** 資料轉換的地方 */
        transform?: SearchTransformKeyFn;
    }) => void;
    /** Form 元件的類型 */
    formComponentType?: string;
    /** 取得表單實例計數器 */
    formKey?: string;
    /** 表單的 getPopupContainer 控制 */
    getPopupContainer?: (e: HTMLElement) => ParentNode;
} & Pick<CommonFormProps, 'formRef' | 'grid'>;
declare const FieldContext: React.Context<FiledContextProps>;
export { FieldContext };
export default FieldContext;
