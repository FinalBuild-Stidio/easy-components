import * as React from 'react'
import classNames from 'classnames'
import { composeRef } from 'rc-util/lib/ref'

import { devUseWarning } from '../_util/warning'
import type { ConfigConsumerProps } from '../Config/ConfigContext'
import { ConfigContext } from '../Config/ConfigContext'
import useStyle from './style'

export interface TypographyProps<C extends keyof JSX.IntrinsicElements>
  extends React.HTMLAttributes<HTMLElement> {
  id?: string
  prefixCls?: string
  className?: string
  rootClassName?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  /** @internal */
  component?: C
  ['aria-label']?: string
}

interface InternalTypographyProps<C extends keyof JSX.IntrinsicElements>
  extends TypographyProps<C> {
  /** @deprecated Use `ref` directly if using React 16 */
  setContentRef?: (node: HTMLElement) => void
}

const Typography = React.forwardRef<
  HTMLElement,
  InternalTypographyProps<keyof JSX.IntrinsicElements>
>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    component: Component = 'article',
    className,
    rootClassName,
    setContentRef,
    children,
    style,
    ...restProps
  } = props
  const {
    getPrefixCls,
    typography,
  } = React.useContext<ConfigConsumerProps>(ConfigContext)

  let mergedRef = ref
  if (setContentRef) {
    mergedRef = composeRef(ref, setContentRef)
  }

  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Typography')

    warning.deprecated(!setContentRef, 'setContentRef', 'ref')
  }

  const prefixCls = getPrefixCls('typography', customizePrefixCls)

  // Style
  const [wrapSSR, hashId] = useStyle(prefixCls)

  const componentClassName = classNames(
    prefixCls,
    typography?.className,
    className,
    rootClassName,
    hashId,
  )

  const mergedStyle: React.CSSProperties = { ...typography?.style, ...style }

  return wrapSSR(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    <Component className={componentClassName} style={mergedStyle} ref={mergedRef} {...restProps}>
      {children}
    </Component>,
  )
})

if (process.env.NODE_ENV !== 'production') {
  Typography.displayName = 'Typography'
}

// es default export should use const instead of let
export default Typography
