import classNames from 'classnames'
import * as React from 'react'
import { ConfigContext } from '../Config/ConfigContext'
import { useLocale } from '../locale'

import useStyle from './style'

export interface TransferLocale {
  description: string
}

export interface EmptyProps {
  prefixCls?: string
  className?: string
  rootClassName?: string
  style?: React.CSSProperties
  /** @since 3.16.0 */
  imageStyle?: React.CSSProperties
  image?: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
}

const Empty: React.FC<EmptyProps> = ({
  className,
  rootClassName,
  prefixCls: customizePrefixCls,
  description,
  children,
  imageStyle,
  style,
  ...restProps
}) => {
  const { getPrefixCls, empty } = React.useContext(ConfigContext)

  const prefixCls = getPrefixCls('empty', customizePrefixCls)
  const [wrapSSR, hashId] = useStyle(prefixCls)

  const [locale] = useLocale('Empty')

  const des = typeof description !== 'undefined' ? description : locale?.description

  return wrapSSR(
    <div
      className={classNames(
        hashId,
        prefixCls,
        empty?.className,
        className,
        rootClassName,
      )}
      style={{ ...empty?.style, ...style }}
      {...restProps}
    >
      {des && <div className={`${prefixCls}-description`}>{des}</div>}
      {children && <div className={`${prefixCls}-footer`}>{children}</div>}
    </div>,
  )
}

if (process.env.NODE_ENV !== 'production') {
  Empty.displayName = 'Empty'
}

export default Empty
