import React from 'react'

import { runFunction } from '../../../utils'
import type { CheckboxProps, CheckboxRef } from '@/components/base'
import { Checkbox } from '@/components/base'
import type { CheckboxGroupProps } from '@/components/base/checkbox'
import { createField } from '../../BaseForm/createField'
import type {
  ProFormFieldItemProps,
  ProFormFieldRemoteProps,
} from '../../typing'
import ProFormField from '../Field'

export type ProFormCheckboxGroupProps = ProFormFieldItemProps<
  CheckboxGroupProps,
  HTMLInputElement
> & {
  layout?: 'horizontal' | 'vertical'
  options?: CheckboxGroupProps['options']
} & ProFormFieldRemoteProps

const CheckboxGroup: React.FC<ProFormCheckboxGroupProps> = React.forwardRef(
  ({ options, fieldProps, proFieldProps, valueEnum, ...rest }, ref) => (
    <ProFormField
      ref={ref}
      valueType="checkbox"
      valueEnum={runFunction<[any]>(valueEnum, undefined)}
      fieldProps={{
        options,
        ...fieldProps,
      }}
      proFieldProps={proFieldProps}
      {...rest}
    />
  ),
)

export type ProFormCheckboxProps = ProFormFieldItemProps<CheckboxProps>

/**
 * 多選框的
 *
 * @param
 */
const ProFormCheckboxComponents: React.FC<ProFormCheckboxProps> =
  React.forwardRef<CheckboxRef, ProFormCheckboxProps>(
    ({ fieldProps, children }, ref) => {
      return (
        <Checkbox ref={ref} {...fieldProps}>
          {children}
        </Checkbox>
      )
    },
  )

const ProFormCheckbox = createField<ProFormCheckboxProps>(
  ProFormCheckboxComponents,
  {
    valuePropName: 'checked',
  },
)

const WrappedProFormCheckbox: typeof ProFormCheckboxComponents & {
  Group: typeof CheckboxGroup
} = ProFormCheckbox as any

WrappedProFormCheckbox.Group = CheckboxGroup

export default WrappedProFormCheckbox
