import React from 'react'

import type { TextAreaProps } from '@/components/base/input'
import type { TextAreaRef } from '@/components/base/input/TextArea'
import type { ProFormFieldItemProps } from '../../typing'
import ProField from '../Field'

/**
 * 文本選擇元件
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
