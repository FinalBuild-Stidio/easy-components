import React, { useMemo } from 'react'
import { useIntl } from '@ipasstw/react-intl'
import type { SwitchProps } from '@/base'
import { Switch } from '@/base'
import Omit from 'omit.js'
import type { ProFieldFC } from '../../index'

import { FieldLabel } from '../../../utils'

/**
 * 評分元件
 *
 * @param
 */
const FieldSwitch: ProFieldFC<{ text: boolean; fieldProps?: SwitchProps }> = (
  { text, mode, render, light, label, renderFormItem, fieldProps },
  ref,
) => {
  const intl = useIntl()
  const dom = useMemo(() => {
    if (text === undefined || text === null || `${text}`.length < 1) return '-'
    return text
      ? fieldProps?.checkedChildren ?? intl.formatMessage({ id: 'switch.open', defaultMessage: '打開' })
      : fieldProps?.unCheckedChildren ??
      intl.formatMessage({ id: 'switch.close', defaultMessage: '關閉' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldProps?.checkedChildren, fieldProps?.unCheckedChildren, text])

  if (mode === 'read') {
    if (render) {
      return render(text, { mode, ...fieldProps }, <>{dom}</>)
    }
    return dom ?? '-'
  }
  if (mode === 'edit' || mode === 'update') {
    const editDom = (
      <Switch
        ref={ref}
        size={light ? 'small' : undefined}
        {...Omit(fieldProps, ['value'])}
        checked={fieldProps?.checked ?? fieldProps?.value}
      />
    )
    if (light) {
      const { disabled, bordered } = fieldProps
      return (
        <FieldLabel
          label={label}
          disabled={disabled}
          bordered={bordered}
          downIcon={false}
          value={
            <div
              style={{
                paddingLeft: 8,
              }}
            >
              {editDom}
            </div>
          }
          allowClear={false}
        />
      )
    }

    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, editDom)
    }
    return editDom
  }
  return null
}

export default React.forwardRef(FieldSwitch)
