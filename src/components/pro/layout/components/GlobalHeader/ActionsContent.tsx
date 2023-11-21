import { useDebounceFn } from '../../../utils'
import { ConfigProvider } from '@/components/base'

import classNames from 'classnames'
import ResizeObserver from 'rc-resize-observer'
import React, { useContext, useState } from 'react'
import type { GlobalHeaderProps } from '.'
import { useStyle } from './rightContentStyle'
/**
 * 抽離出來是為了防止 rightSize 經常改變導致選單 render
 *
 * @param param0
 */
export const ActionsContent: React.FC<GlobalHeaderProps> = ({
  actionsRender,
  headerContentRender,
  ...props
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const prefixCls = `${getPrefixCls()}-pro-global-header`
  const { wrapSSR, hashId } = useStyle(prefixCls)

  const [rightSize, setRightSize] = useState<number | string>('auto')

  const rightActionsRender =
    actionsRender
      ? (restParams: any) => {
        let doms = actionsRender && actionsRender?.(restParams)

        if (!doms) return null
        if (!Array.isArray(doms)) doms = [doms]
        return wrapSSR(
          <div className={`${prefixCls}-header-actions ${hashId}`.trim()}>
            {doms.filter(Boolean).map((dom, index) => {
              let hideHover = false
              // 如果配置了 hideHover 就不展示 hover 效果了
              if (React.isValidElement(dom)) {
                hideHover = !!dom?.props?.['aria-hidden']
              }
              return (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className={classNames(
                    `${prefixCls}-header-actions-item ${hashId}`,
                    {
                      [`${prefixCls}-header-actions-hover`]: !hideHover,
                    },
                  )}
                >
                  {dom}
                </div>
              )
            })}
          </div>,
        )
      }
      : undefined
  /** 減少一下渲染的次數 */
  const setRightSizeDebounceFn = useDebounceFn(async (width: number) => {
    setRightSize(width)
  }, 160)

  const contentRender = rightActionsRender
  return (
    <div
      className={`${prefixCls}-right-content ${hashId}`.trim()}
      style={{
        minWidth: rightSize,
        height: '100%',
      }}
    >
      <div
        style={{
          height: '100%',
        }}
      >
        <ResizeObserver
          onResize={({ width }: { width: number }) => {
            setRightSizeDebounceFn.run(width)
          }}
        >
          {contentRender ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                justifyContent: 'flex-end',
              }}
            >
              {contentRender({
                ...props,
                // 測試專用
                //@ts-ignore
                rightContentSize: rightSize,
              })}
            </div>
          ) : null}
        </ResizeObserver>
      </div>
    </div>
  )
}
