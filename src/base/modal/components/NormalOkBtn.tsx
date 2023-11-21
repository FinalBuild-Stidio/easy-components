import type { FC } from 'react'
import React, { useContext } from 'react'

import { LoadingButton } from '@mui/lab'

import { ModalContext } from '../context'
import type { ModalProps } from '../interface'

export interface NormalOkBtnProps
  extends Pick<ModalProps, 'confirmLoading' | 'okButtonProps' | 'onOk'> {
  okTextLocale?:
  | string
  | number
  | true
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | Iterable<React.ReactNode>
}

const NormalOkBtn: FC = () => {
  const { confirmLoading, okButtonProps, okTextLocale, onOk } = useContext(ModalContext)
  return (
    <LoadingButton
      loading={confirmLoading}
      onClick={onOk}
      {...okButtonProps}
    >
      {okTextLocale}
    </LoadingButton>
  )
}

export default NormalOkBtn
