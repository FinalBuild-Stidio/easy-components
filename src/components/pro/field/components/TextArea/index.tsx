import React from 'react'
import { useIntl } from 'react-intl'

import { Input } from '@/components/base'
import type { ProFieldFC } from '../../index'
import FieldTextAreaReadonly from './readonly'

/**
 * 最基本的元件，就是個普通的 Input.TextArea
 *
 * @param
 */
const FieldTextArea: ProFieldFC<{
  text: string
}> = (props, ref) => {
  const { text, mode, render, renderFormItem, fieldProps } = props
  const intl = useIntl()

  if (mode === 'read') {
    const dom = <FieldTextAreaReadonly {...props} ref={ref} />
    if (render) {
      return render(text, { mode, ...fieldProps }, dom)
    }
    return dom
  }
  if (mode === 'edit' || mode === 'update') {
    const dom = (
      <Input.TextArea
        ref={ref}
        rows={3}
        onKeyPress={(e) => {
          if (e.key === 'Enter') e.stopPropagation()
        }}
        placeholder={intl.formatMessage({ id: 'tableForm.inputPlaceholder', defaultMessage: '請輸入' })}
        {...fieldProps}
      />
    )
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom)
    }
    return dom
  }
  return null
}

export default React.forwardRef(FieldTextArea)
