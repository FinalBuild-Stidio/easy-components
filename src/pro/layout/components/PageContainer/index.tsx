import React, { useContext, useEffect, useMemo } from 'react'
import type { ReactNode } from 'react'
import classNames from 'classnames'
import type { BreadcrumbsProps } from '@mui/material/Breadcrumbs'

import type { GenerateStyle } from '@/providers'
import { ProConfigProvider, ProProvider } from '@/providers'
import {
  Affix,
  AffixProps,
  ConfigProvider,
  TabPaneProps,
  Tabs,
  TabsProps,
} from '@/base'
import { RouteContext } from '../../context/RouteContext'
import type { WithFalse } from '../../typing'
import type { FooterToolbarProps } from '../FooterToolbar'
import { FooterToolbar } from '../FooterToolbar'
import { GridContent } from '../GridContent'
import type { PageHeaderProps } from '../PageHeader'
import { PageHeader } from '../PageHeader'
import { PageLoading } from '../PageLoading'
import type { PageContainerToken, pageContainerToken } from './style'
import { useStyle } from './style'
import { useStylish } from './style/stylish'

import { compareVersions } from '../../../utils'

const version = '5.1.7'

export type PageHeaderTabConfig = {
  /** @name tabs 的列表 */
  tabList?: (TabPaneProps & { key?: React.Key })[]

  /** @name tabActiveKey 當前選中 tab 的 key */
  tabActiveKey?: TabsProps['activeKey']

  /** @name tab 修改時觸發 */
  onTabChange?: TabsProps['onChange']

  /** @name tab 上額外的區域 */
  tabBarExtraContent?: TabsProps['tabBarExtraContent']

  /** @name tabs 的其他配置 */
  tabProps?: TabsProps

  /**
   * @deprecated 請使用 fixedHeader
   * @name fixHeader 固定 PageHeader 到頁面頂部
   */
  fixHeader?: boolean

  /** @name fixedHeader 固定 PageHeader 到頁面頂部 */
  fixedHeader?: boolean
}

export type PageContainerProps = {
  title?: React.ReactNode | false
  content?: React.ReactNode
  extraContent?: React.ReactNode
  prefixCls?: string
  footer?: ReactNode[]

  /**
   * @name token 自訂的 token
   */
  token?: pageContainerToken

  /**
   * 與 ipass customized lib 完全相同
   *
   * @name PageHeader 的配置
   */
  header?: Partial<PageHeaderProps> & {
    children?: React.ReactNode
  }

  /** @name pageHeaderRender 自訂 pageHeader */
  pageHeaderRender?: WithFalse<(props: PageContainerProps) => React.ReactNode>

  /**
   * 與 ipass customized lib 完全相同
   *
   * @name affixProps 固釘的配置
   */
  affixProps?: Omit<AffixProps, 'children'>

  /**
   * 只載入內容區域
   *
   * @name loading 是否載入
   */
  loading?: boolean

  /**
   * 自訂 breadcrumb,
   * @name breadcrumbRender 返回false不展示
   */
  breadcrumbRender?: PageHeaderProps['breadcrumbRender'] | false

  /** @name BreadcrumbsProps 配置麵包屑 */
  breadcrumb?: BreadcrumbsProps

  children?: React.ReactNode

  stylish?: GenerateStyle<PageContainerToken>
  footerStylish?: GenerateStyle<PageContainerToken>
  footerToolBarProps?: FooterToolbarProps
} & PageHeaderTabConfig &
  Omit<PageHeaderProps, 'title' | 'footer' | 'breadcrumbRender' | 'breadcrumb'>

/**
 * Render Footer tabList In order to be compatible with the old version of the PageHeader basically
 * all the functions are implemented.
 */
const renderFooter: React.FC<
  Omit<
    PageContainerProps & {
      prefixedClassName: string
      hashId: string
    },
    'title'
  >
> = ({
  tabList,
  tabActiveKey,
  onTabChange,
  hashId,
  tabBarExtraContent,
  tabProps,
  prefixedClassName,
}) => {
    if (Array.isArray(tabList) || tabBarExtraContent) {
      return (
        <Tabs
          className={`${prefixedClassName}-tabs ${hashId}`.trim()}
          activeKey={tabActiveKey}
          onChange={(key) => {
            if (onTabChange) {
              onTabChange(key)
            }
          }}
          tabBarExtraContent={tabBarExtraContent}
          items={tabList?.map((item, index) => ({
            label: item.tab,
            ...item,
            key: item.key?.toString() || index?.toString(),
          }))}
          {...tabProps}
        >
          {/* 如果版本低於 4.23.0，不支持 items */}
          {compareVersions(version, '4.23.0') < 0
            ? tabList?.map((item, index) => {
              return (
                <Tabs.TabPane
                  key={item.key || index}
                  tab={item.tab}
                  {...item}
                />
              )
            })
            : null}
        </Tabs>
      )
    }
    return null
  }

const renderPageHeader = (
  content: React.ReactNode,
  extraContent: React.ReactNode,
  prefixedClassName: string,
  hashId: string,
): React.ReactNode => {
  if (!content && !extraContent) {
    return null
  }
  return (
    <div className={`${prefixedClassName}-detail ${hashId}`.trim()}>
      <div className={`${prefixedClassName}-main ${hashId}`.trim()}>
        <div className={`${prefixedClassName}-row ${hashId}`.trim()}>
          {content && (
            <div className={`${prefixedClassName}-content ${hashId}`.trim()}>
              {content}
            </div>
          )}
          {extraContent && (
            <div
              className={`${prefixedClassName}-extraContent ${hashId}`.trim()}
            >
              {extraContent}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const memoRenderPageHeader = (
  props: PageContainerProps & {
    prefixedClassName: string
    value: any
    hashId: string
  },
) => {
  const {
    title,
    content,
    pageHeaderRender,
    header,
    prefixedClassName,
    extraContent,
    childrenContentStyle,
    style,
    prefixCls,
    hashId,
    value,
    breadcrumbRender,
    ...restProps
  } = props

  const getBreadcrumbRender = () => {
    if (breadcrumbRender === false) {
      return false
    }
    if (!breadcrumbRender) {
      return undefined
    }
    return breadcrumbRender
  }

  if (pageHeaderRender === false) {
    return null
  }
  if (pageHeaderRender) {
    return <> {pageHeaderRender({ ...props, ...value })}</>
  }
  let pageHeaderTitle = title
  if (!title && title !== false) {
    pageHeaderTitle = value.title
  }
  const pageHeaderProps: PageHeaderProps = {
    ...value,
    title: pageHeaderTitle,
    ...restProps,
    footer: renderFooter({
      ...restProps,
      hashId,
      breadcrumbRender,
      prefixedClassName,
    }),
    ...header,
  }

  const { breadcrumb } = pageHeaderProps as {
    breadcrumb: BreadcrumbsProps
  }

  const noHasBreadCrumb =
    (!breadcrumb) &&
    !breadcrumbRender

  if (
    [
      'title',
      'subTitle',
      'extra',
      'tags',
      'footer',
      'avatar',
      'backIcon',
      // @ts-ignore
    ].every((item) => !pageHeaderProps[item]) &&
    noHasBreadCrumb &&
    !content &&
    !extraContent
  ) {
    return null
  }

  return (
    <PageHeader
      {...pageHeaderProps}
      className={`${prefixedClassName}-warp-page-header ${hashId}`.trim()}
      breadcrumb={
        breadcrumbRender === false
          ? undefined
          : { ...pageHeaderProps.breadcrumb, ...value.breadcrumbProps }
      }
      // breadcrumbItems={pageHeaderProps.breadcrumb}
      breadcrumbRender={getBreadcrumbRender()}
      prefixCls={prefixCls}
    >
      {header?.children ||
        renderPageHeader(content, extraContent, prefixedClassName, hashId)}
    </PageHeader>
  )
}

const PageContainerBase: React.FC<PageContainerProps> = (props) => {
  const {
    children,
    loading = false,
    className,
    style,
    footer,
    affixProps,
    token: propsToken,
    fixedHeader,
    breadcrumbRender,
    footerToolBarProps,
    childrenContentStyle,
    ...restProps
  } = props
  const value = useContext(RouteContext)
  /** 告訴 props 是否存在 footerBar */
  useEffect(() => {
    if (!value || !value?.setHasPageContainer) {
      return () => { }
    }
    value?.setHasPageContainer?.((num) => num + 1)
    return () => {
      value?.setHasPageContainer?.((num) => num - 1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { token } = useContext(ProProvider)
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const prefixCls = props.prefixCls || getPrefixCls('pro')

  const basePageContainer = `${prefixCls}-page-container`

  const { wrapSSR, hashId } = useStyle(basePageContainer, propsToken)

  const stylish = useStylish(
    `${basePageContainer}.${basePageContainer}-stylish`,
    {
      stylish: props.stylish,
    },
  )

  const memoBreadcrumbRender = useMemo(() => {
    if (breadcrumbRender == false) return false
    return breadcrumbRender || restProps?.header?.breadcrumbRender
  }, [breadcrumbRender, restProps?.header?.breadcrumbRender])

  const pageHeaderDom = memoRenderPageHeader({
    ...restProps,
    breadcrumbRender: memoBreadcrumbRender,
    ghost: true,
    hashId,
    prefixCls: undefined,
    prefixedClassName: basePageContainer,
    value,
  })

  const loadingDom = useMemo(() => {
    if (!loading) {
      return null
    }
    return <PageLoading />
  }, [loading])

  const content = useMemo(() => {
    return children ? (
      <>
        <div
          className={classNames(
            hashId,
            `${basePageContainer}-children-container`,
            {
              [`${basePageContainer}-children-container-no-header`]:
                !pageHeaderDom,
            },
          )}
          style={childrenContentStyle}
        >
          {children}
        </div>
      </>
    ) : null
  }, [children, basePageContainer, childrenContentStyle, hashId])

  const renderContentDom = useMemo(() => {
    // 只要loadingDom非空我們就渲染loadingDom,否則渲染內容
    const dom = loadingDom || content
    return dom
  }, [loadingDom, content])

  const containerClassName = classNames(basePageContainer, hashId, className, {
    [`${basePageContainer}-with-footer`]: footer,
    [`${basePageContainer}-with-affix`]: fixedHeader && pageHeaderDom,
    [`${basePageContainer}-stylish`]: !!restProps.stylish,
  })

  return wrapSSR(
    stylish.wrapSSR(
      <>
        <div style={style} className={containerClassName}>
          {fixedHeader && pageHeaderDom ? (
            // 在 hasHeader 且 fixedHeader 的情況下，才需要設置高度
            <Affix
              offsetTop={
                value.hasHeader && value.fixedHeader
                  ? token.layout?.header?.heightLayoutHeader
                  : 1
              }
              {...affixProps}
              className={`${basePageContainer}-affix ${hashId}`.trim()}
            >
              <div className={`${basePageContainer}-warp ${hashId}`.trim()}>
                {pageHeaderDom}
              </div>
            </Affix>
          ) : (
            pageHeaderDom
          )}
          {renderContentDom && <GridContent>{renderContentDom}</GridContent>}
        </div>
        {footer && (
          <FooterToolbar
            stylish={restProps.footerStylish}
            prefixCls={prefixCls}
            {...footerToolBarProps}
          >
            {footer}
          </FooterToolbar>
        )}
      </>,
    ),
  )
}

const PageContainer: React.FC<PageContainerProps> = (props) => {
  return (
    <ProConfigProvider needDeps>
      <PageContainerBase {...props} />
    </ProConfigProvider>
  )
}

export { PageContainer }
