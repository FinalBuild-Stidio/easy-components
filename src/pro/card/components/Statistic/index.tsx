import React, { useContext } from 'react'
import classNames from 'classnames'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

import type { BadgeProps, StatisticProps as IpassStatisticProps } from '@/base'
import {
  Badge,
  ConfigProvider,
  Statistic as IpassStatistic,
  Tooltip,
} from '@/base'
import { useStyle } from './style'

export interface StatisticProps extends IpassStatisticProps {
  /**
   * 樣式
   *
   * @ignore
   */
  style?: React.CSSProperties
  /**
   * ClassName
   *
   * @ignore
   */
  className?: string
  /** 描述性標籤 */
  description?: React.ReactNode
  /** 標題提示 */
  tip?: React.ReactNode
  /** 當前項顯示的狀態 */
  status?: BadgeProps['status']
  /** Icon 圖示 */
  icon?: React.ReactNode
  /** Layout 布局 */
  layout?: 'horizontal' | 'vertical' | 'inline'
  /** 趨勢 */
  trend?: 'up' | 'down'

  children?: any
}

const Statistic: React.FC<StatisticProps> = (props) => {
  const {
    className,
    layout = 'inline',
    style = {},
    description,
    children,
    title,
    tip,
    status,
    trend,
    prefix,
    icon,
    ...others
  } = props

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const prefixCls = getPrefixCls('pro-card-statistic')
  const { wrapSSR, hashId } = useStyle(prefixCls)
  const classString = classNames(prefixCls, className, hashId)
  const statusClass = classNames(`${prefixCls}-status`, hashId)
  const iconClass = classNames(`${prefixCls}-icon`, hashId)
  const wrapperClass = classNames(`${prefixCls}-wrapper`, hashId)
  const contentClass = classNames(`${prefixCls}-content`, hashId)

  const statisticClassName = classNames(hashId, {
    [`${prefixCls}-layout-${layout}`]: layout,
    [`${prefixCls}-trend-${trend}`]: trend,
  })

  const tipDom = tip && (
    <Tooltip title={tip}>
      <HelpOutlineIcon className={`${prefixCls}-tip ${hashId}`.trim()} />
    </Tooltip>
  )

  const trendIconClassName = classNames(`${prefixCls}-trend-icon`, hashId, {
    [`${prefixCls}-trend-icon-${trend}`]: trend,
  })

  const trendDom = trend && <div className={trendIconClassName} />

  const statusDom = status && (
    <div className={statusClass}>
      <Badge status={status} text={null} />
    </div>
  )

  const iconDom = icon && <div className={iconClass}>{icon}</div>

  return wrapSSR(
    <div className={classString} style={style}>
      {iconDom}
      <div className={wrapperClass}>
        {statusDom}
        <div className={contentClass}>
          <IpassStatistic
            title={
              (title || tipDom) && (
                <>
                  {title}
                  {tipDom}
                </>
              )
            }
            prefix={
              (trendDom || prefix) && (
                <>
                  {trendDom}
                  {prefix}
                </>
              )
            }
            className={statisticClassName}
            {...others}
          />
          {description && (
            <div className={`${prefixCls}-description ${hashId}`.trim()}>
              {description as React.ReactNode}
            </div>
          )}
        </div>
      </div>
    </div>,
  )
}

export default Statistic
