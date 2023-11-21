import useState from 'rc-util/lib/hooks/useState'
import * as React from 'react'

import type { ButtonProps } from '@mui/material/Button'
import { LoadingButton } from '@mui/lab'

export interface ActionButtonProps {
  actionFn?: (...args: any[]) => any | PromiseLike<any>
  close?: Function
  autoFocus?: boolean
  buttonProps?: ButtonProps
  emitEvent?: boolean
  quitOnNullishReturnValue?: boolean
  children?: React.ReactNode

  /**
   * Do not throw if is await mode
   */
  isSilent?: () => boolean
}

function isThenable<T extends any>(thing?: PromiseLike<T>): boolean {
  return !!(thing && thing.then)
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {
  const {
    children,
    buttonProps,
    close,
    autoFocus,
    emitEvent,
    isSilent,
    quitOnNullishReturnValue,
    actionFn,
  } = props

  const clickedRef = React.useRef<boolean>(false)
  const buttonRef = React.useRef(null)
  const [loading, setLoading] = useState<boolean>(false)

  const onInternalClose = (...args: any[]) => {
    close?.(...args)
  }

  React.useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    if (autoFocus) {
      timeoutId = setTimeout(() => {
        // @ts-ignore
        buttonRef.current?.focus()
      })
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  const handlePromiseOnOk = (returnValueOfOnOk?: PromiseLike<any>) => {
    if (!isThenable(returnValueOfOnOk)) {
      return
    }
    setLoading(true)
    returnValueOfOnOk!.then(
      (...args: any[]) => {
        setLoading(false, true)
        onInternalClose(...args)
        clickedRef.current = false
      },
      (e: Error) => {
        setLoading(false, true)
        clickedRef.current = false

        // Do not throw if is `await` mode
        if (isSilent?.()) {
          return
        }

        return Promise.reject(e)
      },
    )
  }

  const onClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (clickedRef.current) {
      return
    }
    clickedRef.current = true
    if (!actionFn) {
      onInternalClose()
      return
    }
    let returnValueOfOnOk: PromiseLike<any>
    if (emitEvent) {
      returnValueOfOnOk = actionFn(e)
      if (quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = false
        onInternalClose(e)
        return
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close)
      clickedRef.current = false
    } else {
      returnValueOfOnOk = actionFn()
      if (!returnValueOfOnOk) {
        onInternalClose()
        return
      }
    }
    handlePromiseOnOk(returnValueOfOnOk)
  }

  return (
    <LoadingButton
      onClick={onClick}
      loading={loading}
      {...buttonProps}
      ref={buttonRef}
    >
      {children}
    </LoadingButton>
  )
}

export default ActionButton
