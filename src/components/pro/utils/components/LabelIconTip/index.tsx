import React, { useContext } from 'react'
import classNames from 'classnames'
import InfoIcon from '@mui/icons-material/Info'

import { ConfigProvider, Tooltip } from '@/components/base'
import type {
  LabelTooltipType,
  WrapperTooltipProps,
} from '@/components/base/form/FormItemLabel'
import { useStyle } from './style'

/**
 * 在 form 的 label 後面增加一個 tips 來顯示一些說明文案
 *
 * @param props
 */
export const LabelIconTip: React.FC<{
  label: React.ReactNode
  subTitle?: React.ReactNode
  tooltip?: string | LabelTooltipType
  ellipsis?: boolean | { showTitle?: boolean }
}> = React.memo((props) => {
  const { label, tooltip, ellipsis, subTitle } = props
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const className = getPrefixCls('pro-core-label-tip')

  const { wrapSSR, hashId } = useStyle(className)
  if (!tooltip && !subTitle) {
    return <>{label}</>
  }
  const tooltipProps =
    typeof tooltip === 'string' || React.isValidElement(tooltip)
      ? { title: tooltip }
      : (tooltip as WrapperTooltipProps)

  const icon = tooltipProps?.icon || <InfoIcon />

  return wrapSSR(
    <div
      className={classNames(className, hashId)}
      onMouseDown={(e) => e.stopPropagation()}
      onMouseLeave={(e) => e.stopPropagation()}
      onMouseMove={(e) => e.stopPropagation()}
    >
      <div
        className={classNames(`${className}-title`, hashId, {
          [`${className}-title-ellipsis`]: ellipsis,
        })}
      >
        {label}
      </div>
      {subTitle && (
        <div className={`${className}-subtitle ${hashId}`.trim()}>
          {subTitle}
        </div>
      )}
      {tooltip && (
        <Tooltip {...tooltipProps as any}>
          <span className={`${className}-icon ${hashId}`.trim()}>{icon}</span>
        </Tooltip>
      )}
    </div>,
  )
})
