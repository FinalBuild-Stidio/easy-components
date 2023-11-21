import * as React from 'react'
import { useIntl } from 'react-intl'
import classNames from 'classnames'
import ResizeObserver from 'rc-resize-observer'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import type { ChipProps } from '@mui/material/Chip'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import type { BreadcrumbsProps } from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import MUILink from '@mui/material/Link'
import Link from 'next/link'
import { useAppData } from '@/hooks/useAppContext'

import { ConfigProvider, Space } from '@/base'

import type { ContentWidth } from '../../../defaultSettings'
import useStyle from './style/index'
import type { BreadcrumbItemType } from '../../utils/getBreadcrumbProps'
import { usePathname } from 'next/navigation'

export interface PageHeaderProps {
  backIcon?: React.ReactNode
  prefixCls?: string
  title?: React.ReactNode
  subTitle?: React.ReactNode
  style?: React.CSSProperties
  childrenContentStyle?: React.CSSProperties
  breadcrumb?: BreadcrumbsProps
  breadcrumbItems?: BreadcrumbItemType[]
  breadcrumbRender?: ((props: PageHeaderProps, defaultDom: React.ReactNode) => React.ReactNode) | false
  tags?: React.ReactElement<ChipProps> | React.ReactElement<ChipProps>[]
  footer?: React.ReactNode
  extra?: React.ReactNode
  onBack?: (e?: React.MouseEvent<HTMLElement>) => void
  className?: string
  contentWidth?: ContentWidth
  layout?: string
  ghost?: boolean
  children?: React.ReactNode
}

const renderBack = (
  prefixCls: string,
  hashId: string,
  backIcon?: React.ReactNode,
  onBack?: (e?: React.MouseEvent<HTMLElement>) => void,
) => {
  if (!backIcon || !onBack) {
    return null
  }
  return (
    <div className={`${prefixCls}-back ${hashId}`.trim()}>
      <div
        role="button"
        onClick={(e) => {
          onBack?.(e)
        }}
        className={`${prefixCls}-back-button ${hashId}`.trim()}
        aria-label="back"
      >
        {backIcon}
      </div>
    </div>
  )
}

const renderBreadcrumb = (breadcrumb: BreadcrumbsProps, items: BreadcrumbItemType[], prefixCls: string) => {
  const linkItems = items.slice(0, -1)
  const currentItem = items.at(-1)

  return (
    <Breadcrumbs
      className={classNames(`${prefixCls}-breadcrumb`, breadcrumb.className)}
      aria-label="breadcrumb"
    >
      {linkItems.map((item, index) =>
        item.disabled
          ? <Typography
            key={`breadcrumb-${item.title}-${index}`}
            sx={{ fontSize: '0.85rem' }}
            color="inherit"
          >
            {item?.title}
          </Typography>
          : (
            <MUILink
              key={`breadcrumb-${item.title}-${index}`}
              component={Link}
              underline="hover"
              color="inherit"
              sx={{ fontSize: '0.85rem' }}
              href={item.href ?? '#'}
            >
              {item.title}
            </MUILink>
          ))}
      <Typography key={`breadcrumb-${currentItem?.title}-9999`} sx={{ fontSize: '0.85rem' }} color="inherit">{currentItem?.title}</Typography>
    </Breadcrumbs>
  )
}

const getBackIcon = (
  props: PageHeaderProps,
) => {
  if (props.backIcon !== undefined) {
    return props.backIcon
  }
  return <ArrowBackIosIcon />
}

const renderTitle = (
  prefixCls: string,
  props: PageHeaderProps,
  hashId: string,
) => {
  const { title, subTitle, tags, extra, onBack } = props
  const headingPrefixCls = `${prefixCls}-heading`
  const hasHeading = title || subTitle || tags || extra
  // If there is nothing, return a null
  if (!hasHeading) {
    return null
  }
  const backIcon = getBackIcon(props)
  const backIconDom = renderBack(prefixCls, hashId, backIcon, onBack)
  const hasTitle = backIconDom || hasHeading
  return (
    <div className={headingPrefixCls + ' ' + hashId}>
      {hasTitle && (
        <div className={`${headingPrefixCls}-left ${hashId}`.trim()}>
          {backIconDom}
          {title && (
            <span
              className={`${headingPrefixCls}-title ${hashId}`.trim()}
              title={typeof title === 'string' ? title : undefined}
            >
              {title}
            </span>
          )}
          {subTitle && (
            <span
              className={`${headingPrefixCls}-sub-title ${hashId}`.trim()}
              title={typeof subTitle === 'string' ? subTitle : undefined}
            >
              {subTitle}
            </span>
          )}
          {tags && (
            <span className={`${headingPrefixCls}-tags ${hashId}`.trim()}>
              {tags}
            </span>
          )}
        </div>
      )}
      {extra && (
        <span className={`${headingPrefixCls}-extra ${hashId}`.trim()}>
          <Space>{extra}</Space>
        </span>
      )}
    </div>
  )
}

const renderFooter = (
  prefixCls: string,
  footer: React.ReactNode,
  hashId: string,
) => {
  if (footer) {
    return (
      <div className={`${prefixCls}-footer ${hashId}`.trim()}>{footer}</div>
    )
  }
  return null
}

const renderChildren = (
  prefixCls: string,
  children: React.ReactNode,
  hashId: string,
) => <div className={`${prefixCls}-content ${hashId}`.trim()}>{children}</div>

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const [compact, updateCompact] = React.useState<boolean>(false)
  const pathname = usePathname()
  const intl = useIntl()

  const getBreadcrumbItems = (routes: ReturnType<typeof useAppData>['clientRoutes'], prefix: string = ''): BreadcrumbItemType[] => {
    for (const route of routes) {
      if (route.path === pathname) {
        return [
          {
            disabled: route.breadcrumbDisabled,
            title: intl.formatMessage({ id: `menu${prefix}.${route.name}`, defaultMessage: route.name }),
            href: route.path,
          }
        ]
      }

      if ((route.routes?.length ?? 0) > 0) {
        const childRoute = getBreadcrumbItems(route.routes!, `${prefix}.${route.name}`)
        if (childRoute.length) {
          return [
            {
              disabled: route.breadcrumbDisabled,
              title: intl.formatMessage({ id: `menu${prefix}.${route.name}`, defaultMessage: route.name }),
              href: route.path,
            },
            ...childRoute
          ]
        }
      }
    }

    return []
  }

  const onResize = ({ width }: { width: number }) => updateCompact(width < 768)

  const { getPrefixCls } = React.useContext(
    ConfigProvider.ConfigContext,
  )

  const {
    prefixCls: customizePrefixCls,
    style,
    footer,
    children,
    breadcrumb = {},
    breadcrumbItems: rawBreadcrumbItems,
    breadcrumbRender,
    className: customizeClassName,
    contentWidth,
    layout,
  } = props

  const breadcrumbItems = breadcrumbRender === false ? [] : getBreadcrumbItems(useAppData().clientRoutes)

  const prefixCls = getPrefixCls('page-header', customizePrefixCls)
  const { wrapSSR, hashId } = useStyle(prefixCls)

  const getDefaultBreadcrumbDom = () => {
    if (breadcrumbItems) {
      return renderBreadcrumb(breadcrumb, breadcrumbItems, prefixCls)
    }
    return null
  }

  const defaultBreadcrumbDom = getDefaultBreadcrumbDom()

  // support breadcrumbRender function
  const breadcrumbRenderDomFromProps =
    (breadcrumbRender === false)
      ? <></>
      : breadcrumbRender?.({ ...props, prefixCls }, defaultBreadcrumbDom) ?? defaultBreadcrumbDom

  const breadcrumbDom = breadcrumbRenderDomFromProps

  const className = classNames(prefixCls, hashId, customizeClassName, {
    [`${prefixCls}-has-breadcrumb`]: !!breadcrumbDom,
    [`${prefixCls}-has-footer`]: !!footer,
    [`${prefixCls}-compact`]: compact,
    [`${prefixCls}-wide`]: contentWidth === 'Fixed' && layout == 'top',
    [`${prefixCls}-ghost`]: true,
  })
  const title = renderTitle(prefixCls, props, hashId)
  const childDom = children && renderChildren(prefixCls, children, hashId)
  const footerDom = renderFooter(prefixCls, footer, hashId)

  if (!breadcrumbDom && !title && !footerDom && !childDom) {
    return null
  }

  return wrapSSR(
    <ResizeObserver onResize={onResize}>
      <div className={className} style={style}>
        {breadcrumbDom}
        {title}
        {childDom}
        {footerDom}
      </div>
    </ResizeObserver>,
  )
}

export { PageHeader }
