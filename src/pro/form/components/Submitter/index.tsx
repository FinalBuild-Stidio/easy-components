import React from 'react'
import { useIntl } from 'react-intl'
import omit from 'omit.js'
import LoadingButton from '@mui/lab/LoadingButton'
import { LoadingButtonProps } from '@mui/lab/LoadingButton'

import { proTheme } from '@/providers'
import { Form } from '@/base'

/** @name 用於設定操作欄 */
export type SearchConfig = {
  /** @name 重設按鈕的文字 */
  resetText?: React.ReactNode
  /** @name 提交按鈕的文字 */
  submitText?: React.ReactNode
}

export type SubmitterProps<T = Record<string, any>> = {
  /** @name 提交方法 */
  onSubmit?: (value?: T) => void
  /** @name 重設方法 */
  onReset?: (value?: T) => void
  /** @name 搜索的設定，一般用來設定文字 */
  searchConfig?: SearchConfig
  /** @name 提交按鈕的 props */
  submitButtonProps?: false | (LoadingButtonProps & { preventDefault?: boolean } & { text?: string })
  /** @name 重設按鈕的 props */
  resetButtonProps?: false | (LoadingButtonProps & { preventDefault?: boolean } & { text?: string })
  /** @name 自訂操作的渲染 */
  render?:
  | ((
    props: SubmitterProps &
      T & {
        submit: () => void
        reset: () => void
      },
    dom: JSX.Element[],
  ) => React.ReactNode[] | React.ReactNode | false)
  | false
}

/**
 * FormFooter 的元件，可以自動進行一些設定
 *
 * @param props
 */

const Submitter: React.FC<SubmitterProps> = (props) => {
  const intl = useIntl()
  const form = Form.useFormInstance()
  if (props.render === false) {
    return null
  }

  const {
    onSubmit,
    render,
    onReset,
    searchConfig = {},
    submitButtonProps,
    resetButtonProps = {},
  } = props

  const { token } = proTheme.useToken()

  const submit = () => {
    form.submit()
    onSubmit?.()
  }

  const reset = () => {
    form.resetFields()
    onReset?.()
  }

  const {
    submitText = intl.formatMessage({ id: 'tableForm.submit', defaultMessage: '提交' }),
    resetText = intl.formatMessage({ id: 'tableForm.reset', defaultMessage: '重設' }),
  } = searchConfig
  /** 預設的操作的邏輯 */
  const dom = []

  if (resetButtonProps !== false) {
    dom.push(
      <LoadingButton
        {...omit(resetButtonProps, ['preventDefault'])}
        key="rest"
        onClick={(e) => {
          if (!resetButtonProps?.preventDefault) reset()
          resetButtonProps?.onClick?.(
            e as React.MouseEvent<HTMLButtonElement, MouseEvent>,
          )
        }}
      >
        {resetButtonProps?.text ? resetButtonProps.text : resetText}
      </LoadingButton>,
    )
  }
  if (submitButtonProps !== false) {
    dom.push(
      <LoadingButton
        variant="contained"
        {...omit(submitButtonProps || {}, ['preventDefault'])}
        key="submit"
        onClick={(e) => {
          if (!submitButtonProps?.preventDefault) submit()
          submitButtonProps?.onClick?.(
            e as React.MouseEvent<HTMLButtonElement, MouseEvent>,
          )
        }}
      >
        {submitButtonProps?.text ? submitButtonProps.text : submitText}
      </LoadingButton>,
    )
  }

  const renderDom = render
    ? render({ ...props, form, submit, reset }, dom)
    : dom
  if (!renderDom) {
    return null
  }
  if (Array.isArray(renderDom)) {
    if (renderDom?.length < 1) {
      return null
    }
    if (renderDom?.length === 1) {
      return renderDom[0] as JSX.Element
    }
    return (
      <div
        style={{
          display: 'flex',
          gap: token.marginXS,
          alignItems: 'center',
        }}
      >
        {renderDom}
      </div>
    )
  }
  return renderDom as JSX.Element
}

export default Submitter
