import classnames from 'classnames'
import * as React from 'react'
import type { PresetStatusColorType } from '../_util/colors'
import { isPresetColor } from '../_util/colors'
import type { LiteralUnion } from '../_util/type'
import { ConfigContext } from '../Config'
import type { PresetColorKey } from '../theme/internal'
import useStyle from './style'

export interface StatusProps {
  style?: React.CSSProperties
  prefixCls?: string
  className?: string
  rootClassName?: string
  status?: PresetStatusColorType
  color?: LiteralUnion<PresetColorKey>
  text?: React.ReactNode
  classNames?: {
    root?: string
    indicator?: string
  }
  styles?: {
    root?: React.CSSProperties
    indicator?: React.CSSProperties
  }
}

const InternalStatus: React.ForwardRefRenderFunction<HTMLSpanElement, StatusProps> = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    status,
    text,
    color,
    style,
    className,
    rootClassName,
    classNames,
    styles,
    ...restProps
  } = props
  const { getPrefixCls, badge } = React.useContext(ConfigContext)
  const prefixCls = getPrefixCls('status', customizePrefixCls)

  // Style
  const [wrapSSR, hashId] = useStyle(prefixCls)

  // InternalColor
  const isInternalColor = isPresetColor(color, false)

  // Shared styles
  const statusCls = classnames(classNames?.indicator, badge?.classNames?.indicator, {
    [`${prefixCls}-status-dot`]: true,
    [`${prefixCls}-status-${status}`]: !!status,
    [`${prefixCls}-color-${color}`]: isInternalColor,
  })

  const statusStyle: React.CSSProperties = {}
  if (color && !isInternalColor) {
    statusStyle.color = color
    statusStyle.background = color
  }

  const badgeClassName = classnames(
    prefixCls,
    `${prefixCls}-status`,
    `${prefixCls}-not-a-wrapper`,
    className,
    rootClassName,
    badge?.className,
    badge?.classNames?.root,
    classNames?.root,
    hashId,
  )

  const mergedStyle = { ...badge?.style, ...style }

  const statusTextColor = mergedStyle.color
  return wrapSSR(
    <span
      {...restProps}
      className={badgeClassName}
      style={{ ...styles?.root, ...badge?.styles?.root, ...mergedStyle }}
    >
      <span
        className={statusCls}
        style={{ ...styles?.indicator, ...badge?.styles?.indicator, ...statusStyle }}
      />
      {text && (
        <span style={{ color: statusTextColor }} className={`${prefixCls}-status-text`}>
          {text}
        </span>
      )}
    </span>,
  )
}

const Status = React.forwardRef<HTMLSpanElement, StatusProps>(InternalStatus)

if (process.env.NODE_ENV !== 'production') {
  Status.displayName = 'Status'
}

export default Status
