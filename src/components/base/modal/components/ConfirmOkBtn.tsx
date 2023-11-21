import type { FC } from 'react'
import React, { useContext } from 'react'

import ActionButton from '../../_util/ActionButton'
import type { ConfirmDialogProps } from '../ConfirmDialog'
import { ModalContext } from '../context'

export interface ConfirmOkBtnProps
  extends Pick<
    ConfirmDialogProps,
    'close' | 'isSilent' | 'okButtonProps' | 'rootPrefixCls' | 'onConfirm' | 'onOk'
  > {
  autoFocusButton?: false | 'ok' | 'cancel' | null
  okTextLocale?:
  | string
  | number
  | true
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | Iterable<React.ReactNode>
}

const ConfirmOkBtn: FC = () => {
  const {
    autoFocusButton,
    close,
    isSilent,
    okButtonProps,
    okTextLocale,
    onConfirm,
    onOk,
  } = useContext(ModalContext)
  return (
    <ActionButton
      isSilent={isSilent}
      actionFn={onOk}
      close={(...args: any[]) => {
        close?.(...args)
        onConfirm?.(true)
      }}
      autoFocus={autoFocusButton === 'ok'}
      buttonProps={okButtonProps}
    >
      {okTextLocale}
    </ActionButton>
  )
}

export default ConfirmOkBtn
