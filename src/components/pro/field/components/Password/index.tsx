import React from 'react'
import { useIntl } from 'react-intl'
import useMergedState from 'rc-util/lib/hooks/useMergedState'

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { Input, Space } from '@/components/base'
import type { ProFieldFC } from '../../index'

/**
 * 最基本的元件，就是個普通的 Input.Password
 *
 * @param
 */
const FieldPassword: ProFieldFC<{
  text: string
  visible?: boolean
  onVisible?: (visible: boolean) => void
  open?: boolean
  onOpenChange?: (visible: boolean) => void
}> = (
  { text, mode, render, renderFormItem, fieldProps, proFieldKey, ...rest },
  ref,
) => {
    const intl = useIntl()

    const [open, setOpen] = useMergedState<boolean>(
      () => rest.open || rest.visible || false,
      {
        value: rest.open || rest.visible,
        onChange: rest.onOpenChange || rest.onVisible,
      },
    )

    if (mode === 'read') {
      let dom = <>-</>
      if (text) {
        dom = (
          <Space>
            <span ref={ref}>{open ? text : '************************'}</span>
            <a onClick={() => setOpen(!open)}>
              {open ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </a>
          </Space>
        )
      }
      if (render) {
        return render(text, { mode, ...fieldProps }, dom)
      }
      return dom
    }
    if (mode === 'edit' || mode === 'update') {
      const dom = (
        <Input.Password
          placeholder={intl.formatMessage({ id: 'tableForm.inputPlaceholder', defaultMessage: '請輸入' })}
          ref={ref}
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

export default React.forwardRef(FieldPassword)
