import React from 'react'

import type { TextAreaProps } from '@/base/input'
import type { TextAreaRef } from '@/base/input/TextArea'
import type { ProFormFieldItemProps } from '../../typing'
import ProField from '../Field'

/**
 * 文字選擇元件
 *
 * @param
 */
const ProFormTextArea: React.ForwardRefRenderFunction<
  any,
  ProFormFieldItemProps<TextAreaProps, TextAreaRef>
> = ({ fieldProps, proFieldProps, ...rest }, ref) => {
  return (
    <ProField
      ref={ref}
      valueType="textarea"
      fieldProps={fieldProps}
      proFieldProps={proFieldProps}
      {...rest}
    />
  )
}

export default React.forwardRef(ProFormTextArea)
