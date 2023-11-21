import React, { useContext } from 'react'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import classNames from 'classnames'
import omit from 'omit.js'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { ConfigProvider, Grid, Tabs } from '@/base'

import type { Breakpoint, CardProps, Gutter } from '../../typing'
import Actions from '../Actions'
import Loading from '../Loading'
import { useLegacyItems } from '../TabPane'
import useStyle from './style'
import { LabelIconTip } from '../../../utils'

type ProCardChildType = React.ReactElement<CardProps, any>

const Card = React.forwardRef((props: CardProps, ref: any) => {
  const {
    className,
    style,
    bodyStyle = {},
    headStyle = {},
    title,
    subTitle,
    extra,
    tip,
    wrap = false,
    layout,
    loading,
    gutter = 0,
    tooltip,
    split,
    headerBordered = false,
    bordered = false,
    boxShadow = false,
    children,
    size,
    actions,
    ghost = false,
    hoverable = false,
    direction,
    collapsed: controlCollapsed,
    collapsible = false,
    collapsibleIconRender,
    defaultCollapsed = false,
    onCollapse,
    checked,
    onChecked,
    tabs,
    type,
    ...rest
  } = props
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)

  const screens = Grid.useBreakpoint() || {
    lg: true,
    md: true,
    sm: true,
    xl: false,
    xs: false,
    xxl: false,
  }

  const [collapsed, setCollapsed] = useMergedState<boolean>(defaultCollapsed, {
    value: controlCollapsed,
    onChange: onCollapse,
  })

  // 順序決定如何進行響應式取值，按最大響應值依次取值，請勿修改。
  const responsiveArray: Breakpoint[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']
  // 修改組合傳給 ipass customized lib tabs的參數
  // @ts-ignore
  const ModifyTabItemsContent = useLegacyItems(tabs?.items, children, tabs)

  /**
   * 根據響應式獲取 gutter, 參考 ipass customized lib 實現
   *
   * @param gutter Gutter
   */
  const getNormalizedGutter = (gut: Gutter | Gutter[]) => {
    const results: [number, number] = [0, 0]
    const normalizedGutter = Array.isArray(gut) ? gut : [gut, 0]
    normalizedGutter.forEach((g, index) => {
      if (typeof g === 'object') {
        for (let i = 0; i < responsiveArray.length; i += 1) {
          const breakpoint: Breakpoint = responsiveArray[i]
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint] as number
            break
          }
        }
      } else {
        results[index] = g || 0
      }
    })
    return results
  }

  /**
   * 根據條件返回 style，負責返回空對象
   *
   * @param withStyle 是否符合條件
   * @param appendStyle 如果符合條件要返回的 style 屬性
   */
  const getStyle = (withStyle: boolean, appendStyle: React.CSSProperties) => {
    return withStyle ? appendStyle : {}
  }

  const getColSpanStyle = (colSpan: CardProps['colSpan']) => {
    let span = colSpan

    // colSpan 響應式
    if (typeof colSpan === 'object') {
      for (let i = 0; i < responsiveArray.length; i += 1) {
        const breakpoint: Breakpoint = responsiveArray[i]
        if (screens?.[breakpoint] && colSpan?.[breakpoint] !== undefined) {
          span = colSpan[breakpoint]
          break
        }
      }
    }

    // 當 colSpan 為 30% 或 300px 時
    const colSpanStyle = getStyle(
      typeof span === 'string' && /\d%|\dpx/i.test(span),
      {
        width: span as string,
        flexShrink: 0,
      },
    )

    return { span, colSpanStyle }
  }

  const prefixCls = getPrefixCls('pro-card')
  const { wrapSSR, hashId } = useStyle(prefixCls)

  const [horizontalGutter, verticalGutter] = getNormalizedGutter(gutter)

  // 判斷是否套了卡片，如果套了的話將自身卡片內部內容的 padding 設置為0
  let containProCard = false
  const childrenArray = React.Children.toArray(children) as ProCardChildType[]

  const childrenModified = childrenArray.map((element, index) => {
    if (element?.type?.isProCard) {
      containProCard = true

      // 寬度
      const { colSpan } = element.props
      const { span, colSpanStyle } = getColSpanStyle(colSpan)

      const columnClassName = classNames([`${prefixCls}-col`], hashId, {
        [`${prefixCls}-split-vertical`]:
          split === 'vertical' && index !== childrenArray.length - 1,
        [`${prefixCls}-split-horizontal`]:
          split === 'horizontal' && index !== childrenArray.length - 1,
        [`${prefixCls}-col-${span}`]:
          typeof span === 'number' && span >= 0 && span <= 24,
      })

      const wrappedElement = wrapSSR(
        <div
          style={{
            ...colSpanStyle,
            ...getStyle(horizontalGutter! > 0, {
              paddingInlineEnd: horizontalGutter / 2,
              paddingInlineStart: horizontalGutter / 2,
            }),
            ...getStyle(verticalGutter! > 0, {
              paddingBlockStart: verticalGutter / 2,
              paddingBlockEnd: verticalGutter / 2,
            }),
          }}
          className={columnClassName}
        >
          {React.cloneElement(element)}
        </div>,
      )
      return React.cloneElement(wrappedElement, {
        key: `pro-card-col-${element?.key || index}`,
      })
    }
    return element
  })

  const cardCls = classNames(`${prefixCls}`, className, hashId, {
    [`${prefixCls}-border`]: bordered,
    [`${prefixCls}-box-shadow`]: boxShadow,
    [`${prefixCls}-contain-card`]: containProCard,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-split`]: split === 'vertical' || split === 'horizontal',
    [`${prefixCls}-ghost`]: ghost,
    [`${prefixCls}-hoverable`]: hoverable,
    [`${prefixCls}-size-${size}`]: size,
    [`${prefixCls}-type-${type}`]: type,
    [`${prefixCls}-collapse`]: collapsed,
    [`${prefixCls}-checked`]: checked,
  })

  const bodyCls = classNames(`${prefixCls}-body`, hashId, {
    [`${prefixCls}-body-center`]: layout === 'center',
    [`${prefixCls}-body-direction-column`]:
      split === 'horizontal' || direction === 'column',
    [`${prefixCls}-body-wrap`]: wrap && containProCard,
  })

  const cardBodyStyle = bodyStyle

  const loadingDOM = React.isValidElement(loading) ? (
    loading
  ) : (
    <Loading
      prefix={prefixCls}
      style={
        bodyStyle.padding === 0 || bodyStyle.padding === '0px'
          ? { padding: 24 }
          : undefined
      }
    />
  )
  // 非受控情況下展示
  const collapsibleButton =
    collapsible &&
    controlCollapsed === undefined &&
    (collapsibleIconRender ? (
      collapsibleIconRender({ collapsed })
    ) : (
      <ArrowForwardIosIcon
        rotate={!collapsed ? 90 : undefined}
        className={`${prefixCls}-collapsible-icon ${hashId}`.trim()}
      />
    ))

  return wrapSSR(
    <div
      className={cardCls}
      style={style}
      ref={ref}
      onClick={(e) => {
        onChecked?.(e)
        rest?.onClick?.(e)
        e.stopPropagation()
      }}
      {...omit(rest, ['prefixCls', 'colSpan'])}
    >
      {(title || extra || collapsibleButton) && (
        <div
          className={classNames(`${prefixCls}-header`, hashId, {
            [`${prefixCls}-header-border`]: headerBordered || type === 'inner',
            [`${prefixCls}-header-collapsible`]: collapsibleButton,
          })}
          style={headStyle}
          onClick={() => {
            if (collapsibleButton) setCollapsed(!collapsed)
          }}
        >
          <div className={`${prefixCls}-title ${hashId}`.trim()}>
            {collapsibleButton}
            <LabelIconTip
              label={title}
              tooltip={tooltip || tip}
              subTitle={subTitle}
            />
          </div>
          {extra && (
            <div
              className={`${prefixCls}-extra ${hashId}`.trim()}
              onClick={(e) => e.stopPropagation()}
            >
              {extra}
            </div>
          )}
        </div>
      )}
      {tabs ? (
        <div className={`${prefixCls}-tabs ${hashId}`.trim()}>
          <Tabs
            onChange={tabs.onChange}
            {...tabs}
            // @ts-ignore
            items={ModifyTabItemsContent}
          >
            {loading ? loadingDOM : children}
          </Tabs>
        </div>
      ) : (
        <div className={bodyCls} style={cardBodyStyle}>
          {loading ? loadingDOM : childrenModified}
        </div>
      )}
      {actions ? <Actions actions={actions} prefixCls={prefixCls} /> : null}
    </div>,
  )
})

export default Card
