import React from 'react';
import type { CheckboxProps } from '../../../../base';
import type { CheckboxGroupProps } from '../../../../base/checkbox';
import type { ProFormFieldItemProps, ProFormFieldRemoteProps } from '../../typing';
export type ProFormCheckboxGroupProps = ProFormFieldItemProps<CheckboxGroupProps, HTMLInputElement> & {
    layout?: 'horizontal' | 'vertical';
    options?: CheckboxGroupProps['options'];
} & ProFormFieldRemoteProps;
declare const CheckboxGroup: React.FC<ProFormCheckboxGroupProps>;
export type ProFormCheckboxProps = ProFormFieldItemProps<CheckboxProps>;
/**
 * 多選框的
 *
 * @param
 */
declare const ProFormCheckboxComponents: React.FC<ProFormCheckboxProps>;
declare const WrappedProFormCheckbox: typeof ProFormCheckboxComponents & {
    Group: typeof CheckboxGroup;
};
export default WrappedProFormCheckbox;
