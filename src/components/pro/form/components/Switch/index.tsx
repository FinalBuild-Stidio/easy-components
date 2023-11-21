import React from 'react'
import type { SwitchProps } from '@/components/base'
import type { ProFormFieldItemProps } from '../../typing'
import ProField from '../Field'

export type ProFormSwitchProps = ProFormFieldItemProps<
  SwitchProps,
  HTMLElement
> & {
  checkedChildren?: SwitchProps['checkedChildren']
  unCheckedChildren?: SwitchProps['unCheckedChildren']
}

/**
 * @en-us Single Choice Switch
 */
const ProFormSwitch: React.FC<ProFormSwitchProps> = React.forwardRef(
  (
    { fieldProps, unCheckedChildren, checkedChildren, proFieldProps, ...rest },
    ref: any,
  ) => {
    return (
      <ProField
        valueType="switch"
        fieldProps={{
          unCheckedChildren,
          checkedChildren,
          ...fieldProps,
        }}
        ref={ref}
        valuePropName="checked"
        proFieldProps={proFieldProps}
        filedConfig={{
          valuePropName: 'checked',
          ignoreWidth: true,
          customLightMode: true,
        }}
        {...rest}
      />
    )
  },
)

export default ProFormSwitch
