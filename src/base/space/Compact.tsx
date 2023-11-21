import classNames from 'classnames'
import toArray from 'rc-util/lib/Children/toArray'
import * as React from 'react'

import { ConfigContext } from '../Config/ConfigContext'
import type { SizeType } from '../Config/SizeContext'

import useSize from '../Config/hooks/useSize'
import useStyle from './style'

export interface SpaceCompactItemContextType {
  compactSize?: SizeType
  isFirstItem?: boolean
  isLastItem?: boolean
}

export const SpaceCompactItemContext = React.createContext<SpaceCompactItemContextType | null>(
  null,
)

export const useCompactItemContext = (prefixCls: string) => {
  const compactItemContext = React.useContext(SpaceCompactItemContext)

  const compactItemClassnames = React.useMemo<string>(() => {
    if (!compactItemContext) {
      return ''
    }
    const { isFirstItem, isLastItem } = compactItemContext
    const separator = '-'

    return classNames(`${prefixCls}-compact${separator}item`, {
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem,
    })
  }, [prefixCls, compactItemContext])

  return {
    compactSize: compactItemContext?.compactSize,
    compactItemClassnames,
  }
}

export const NoCompactStyle: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <SpaceCompactItemContext.Provider value={null}>{children}</SpaceCompactItemContext.Provider>
)

export interface SpaceCompactProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string
  size?: SizeType
  direction?: 'horizontal' | 'vertical'
  block?: boolean
  rootClassName?: string
}

const CompactItem: React.FC<React.PropsWithChildren<SpaceCompactItemContextType>> = ({
  children,
  ...otherProps
}) => (
  <SpaceCompactItemContext.Provider value={otherProps}>{children}</SpaceCompactItemContext.Provider>
)

const Compact: React.FC<SpaceCompactProps> = (props) => {
  const { getPrefixCls } = React.useContext(ConfigContext)

  const {
    size,
    direction,
    block,
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    ...restProps
  } = props

  const mergedSize = useSize((ctx) => size ?? ctx)

  const prefixCls = getPrefixCls('space-compact', customizePrefixCls)
  const [wrapSSR, hashId] = useStyle(prefixCls)
  const clx = classNames(
    prefixCls,
    hashId,
    {
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-vertical`]: direction === 'vertical',
    },
    className,
    rootClassName,
  )

  const compactItemContext = React.useContext(SpaceCompactItemContext)

  const childNodes = toArray(children)
  const nodes = React.useMemo(
    () =>
      childNodes.map((child, i) => {
        const key = (child && child.key) || `${prefixCls}-item-${i}`
        return (
          <CompactItem
            key={key}
            compactSize={mergedSize}
            isFirstItem={i === 0 && (!compactItemContext || compactItemContext?.isFirstItem)}
            isLastItem={
              i === childNodes.length - 1 && (!compactItemContext || compactItemContext?.isLastItem)
            }
          >
            {child}
          </CompactItem>
        )
      }),
    [size, childNodes, compactItemContext],
  )

  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null
  }

  return wrapSSR(
    <div className={clx} {...restProps}>
      {nodes}
    </div>,
  )
}

export default Compact
