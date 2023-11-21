import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import classNames from 'classnames'
import * as React from 'react'
import { ConfigContext } from '../Config/ConfigContext'
import type { SkeletonElementProps } from './Element'
import useStyle from './style'

export interface SkeletonNodeProps extends Omit<SkeletonElementProps, 'size' | 'shape'> {
  fullSize?: boolean
  children?: React.ReactNode
}

const SkeletonNode: React.FC<SkeletonNodeProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    active,
    children,
  } = props
  const { getPrefixCls } = React.useContext(ConfigContext)
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls)
  const [wrapSSR, hashId] = useStyle(prefixCls)

  const cls = classNames(
    prefixCls,
    `${prefixCls}-element`,
    {
      [`${prefixCls}-active`]: active,
    },
    hashId,
    className,
    rootClassName,
  )

  const content = children ?? <AutoGraphIcon />

  return wrapSSR(
    <div className={cls}>
      <div className={classNames(`${prefixCls}-image`, className)} style={style}>
        {content}
      </div>
    </div>,
  )
}

export default SkeletonNode
