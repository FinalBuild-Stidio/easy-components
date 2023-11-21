import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import classNames from 'classnames'
import RcSwitch from 'rc-switch'

import { devUseWarning } from '../_util/warning'
import Wave from '../_util/wave'
import { ConfigContext } from '../Config/ConfigContext'
import DisabledContext from '../Config/DisabledContext'
import useSize from '../Config/hooks/useSize'
import useStyle from './style'

export type SwitchSize = 'small' | 'default'
export type SwitchChangeEventHandler = (
  checked: boolean,
  event: React.MouseEvent<HTMLButtonElement>,
) => void
export type SwitchClickEventHandler = SwitchChangeEventHandler

export interface SwitchProps {
  prefixCls?: string
  size?: SwitchSize
  className?: string
  rootClassName?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: SwitchChangeEventHandler
  onClick?: SwitchClickEventHandler
  checkedChildren?: React.ReactNode
  unCheckedChildren?: React.ReactNode
  disabled?: boolean
  loading?: boolean
  autoFocus?: boolean
  style?: React.CSSProperties
  title?: string
  tabIndex?: number
  id?: string
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  SwitchProps & React.RefAttributes<HTMLElement>
> & {
  /** @internal */
  __IPASS_SWITCH: boolean
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    size: customizeSize,
    disabled: customDisabled,
    loading,
    className,
    rootClassName,
    style,
    ...restProps
  } = props

  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Switch')

    warning(
      'checked' in props || !('value' in props),
      'usage',
      '`value` is not a valid prop, do you mean `checked`?',
    )
  }

  const { getPrefixCls, switch: SWITCH } = React.useContext(ConfigContext)

  // ===================== Disabled =====================
  const disabled = React.useContext(DisabledContext)
  const mergedDisabled = (customDisabled ?? disabled) || loading

  const prefixCls = getPrefixCls('switch', customizePrefixCls)

  const loadingIcon = (
    <div className={`${prefixCls}-handle`}>
      {loading && <CircularProgress className={`${prefixCls}-loading-icon`} />}
    </div>
  )

  // Style
  const [wrapSSR, hashId] = useStyle(prefixCls)

  const mergedSize = useSize(customizeSize)

  const classes = classNames(
    SWITCH?.className,
    {
      [`${prefixCls}-small`]: mergedSize === 'small',
      [`${prefixCls}-loading`]: loading,
    },
    className,
    rootClassName,
    hashId,
  )

  const mergedStyle: React.CSSProperties = { ...SWITCH?.style, ...style }

  return wrapSSR(
    <Wave component="Switch">
      <RcSwitch
        {...restProps as any}
        prefixCls={prefixCls}
        className={classes}
        style={mergedStyle}
        disabled={mergedDisabled}
        ref={ref}
        loadingIcon={loadingIcon}
      />
    </Wave>,
  )
}) as CompoundedComponent

Switch.__IPASS_SWITCH = true

if (process.env.NODE_ENV !== 'production') {
  Switch.displayName = 'Switch'
}

export default Switch
