import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { CSSProperties } from 'react'
import { useIntl, IntlProvider } from 'react-intl'
import type { IntlConfig } from 'react-intl'
import classNames from 'classnames'
import Omit from 'omit.js'
import useMergedState from 'rc-util/lib/hooks/useMergedState.js'
import warning from 'rc-util/lib/warning.js'
import useSWR, { useSWRConfig } from 'swr'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from '@mui/material/styles'
import type { ThemeProviderProps } from '@mui/material/styles/ThemeProvider'

import type { GenerateStyle, ProTokenType } from '@/providers'
import {
  isNeedOpenHash,
  ProConfigProvider,
  ProProvider,
} from '@/providers'
import {
  coverToNewToken,
  isBrowser,
  useBreakpoint,
  useMountMergeState,
} from '../utils'
import { getMatchMenu } from './utils/getMatchMenu'
import { ConfigProvider, Layout } from '@/base'
import { DefaultFooter as Footer } from './components/Footer'
import type { HeaderViewProps } from './components/Header'
import { DefaultHeader as Header } from './components/Header'
import { PageLoading } from './components/PageLoading'
import { SiderMenu } from './components/SiderMenu'
import type { SiderMenuProps } from './components/SiderMenu/SiderMenu'
import type { SiderMenuToken } from './components/SiderMenu/style'
import { RouteContext } from './context/RouteContext'
import type { ProSettings } from '../defaultSettings'
import { defaultSettings } from '../defaultSettings'
import type { GetPageTitleProps } from './getPageTitle'
import { getPageTitleInfo } from './getPageTitle'
import { useStyle } from './style'
import type {
  MenuDataItem,
  MessageDescriptor,
  RouterTypes,
  WithFalse,
} from './typing'
import { getMenuData } from './utils/getMenuData'
import { useCurrentMenuLayoutProps } from './utils/useCurrentMenuLayoutProps'
import type { BreadcrumbProLayoutProps, BreadcrumbItemType } from './utils/getBreadcrumbProps'
import { getBreadcrumbProps } from './utils/getBreadcrumbProps'
import { clearMenuItem } from './utils/utils'

import { WrapContent } from './WrapContent'

let layoutIndex = 0

export type LayoutBreadcrumbProps = {
  minLength?: number
}

type GlobalTypes = Omit<
  IntlConfig &
  Partial<RouterTypes> &
  SiderMenuProps &
  HeaderViewProps & {
    token?: ProTokenType['layout']
    muiTheme?: ThemeProviderProps['theme']
  },
  'collapsed'
>

export type ProLayoutProps = GlobalTypes & {
  stylish?: {
    header?: GenerateStyle<SiderMenuToken>
    sider?: GenerateStyle<SiderMenuToken>
  }
  /** Layout 的品牌配置，表現為一張背景圖片 */
  bgLayoutImgList?: {
    src?: string
    width?: string
    height?: string
    left?: number
    top?: number
    bottom?: number
    right?: number
  }[]
  /**
   * @name 簡約模式，設置了之後不渲染的任何 layout 的東西，但是會有 context，可以獲取到當前菜單。
   *
   * @example pure={true}
   */
  pure?: boolean
  /**
   * @name logo 的配置，可以配置url，React 組件 和 false
   *
   * @example 設置 logo 為網路地址  logo="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
   * @example 設置 logo 為組件  logo={<img src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"/>}
   * @example 設置 logo 為 false 不顯示 logo  logo={false}
   * @example 設置 logo 為 方法  logo={()=> <img src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"/> }
   * */
  logo?:
  | React.ReactNode
  | JSX.Element
  | WithFalse<() => React.ReactNode | JSX.Element>

  /**
   * @name layout 的 loading 效果，設置完成之後只展示一個 loading
   *
   * @example loading={true}
   */
  loading?: boolean

  /**
   * @name 是否收起 layout 是嚴格受控的，可以 設置為 true，一直收起
   *
   * @example collapsed={true}
   */
  collapsed?: boolean

  /**
   * @name 收起和展開的時候觸發事件
   *
   * @example onCollapse=(collapsed)=>{ setCollapsed(collapsed) };
   */
  onCollapse?: (collapsed: boolean) => void

  /**
   * @name 頁尾的配置
   *
   * @example 不展示dom footerRender={false}
   * @example 使用 layout 的  DefaultFooter   footerRender={() => (<DefaultFooter copyright="這是一條測試文案"/>}
   */
  footerRender?: WithFalse<
    (props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode
  >

  breadcrumbRender?: WithFalse<
    (routers: BreadcrumbItemType[]) => BreadcrumbItemType[]
  >

  /**
   * @name 設置頁面的標題
   * @example 根據頁面的路由設置標題 pageTitleRender={(props) => { return props.location.pathname }}
   * @example 不顯示標題 pageTitleRender={false}
   * @example 根據預設的標題設置 pageTitleRender={(props,defaultPageTitle) => { return defaultPageTitle + '這是一個測試標題' }}
   * @example 根據 info 來自己組合標題 pageTitleRender={(props,defaultPageTitle,info) => { return info.title + "-" + info.pageName }
   */
  pageTitleRender?: WithFalse<
    (
      props: GetPageTitleProps,
      defaultPageTitle?: string,
      info?: {
        // 頁面標題
        title: string
        // locale 的 title
        id: string
        // 頁面標題不帶默認的 title
        pageName: string
      },
    ) => string
  >
  /**
   * @name 處理 menuData 的資料，可以動態的控制資料
   * @see 盡量不要用非同步資料來處理，否則可能造成更新不及時，如果非同步資料推薦使用 menu.request 和 params。
   *
   * @example 刪除一些菜單 menuDataRender=((menuData) => { return menuData.filter(item => item.name !== 'test') })
   * @example 增加一些菜單 menuDataRender={(menuData) => { return menuData.concat({ path: '/test', name: '測試', icon: 'smile' }) }}
   * @example 修改菜單 menuDataRender={(menuData) => { return menuData.map(item => { if (item.name === 'test') { item.name = '測試' } return item }) }}
   * @example 打平資料 menuDataRender={(menuData) => { return menuData.reduce((pre, item) => { return pre.concat(item.children || []) }, []) }}
   */
  menuDataRender?: (menuData: MenuDataItem[]) => MenuDataItem[]

  /**
   * @name 處理每個麵包屑的配置，需要直接返回 dom
   * @description (route: Route, params: any, routes: Array<Route>, paths: Array<string>) => React.ReactNode
   *
   * @example 設置 disabled： itemRender={(route, params, routes, paths) => { return <Button disabled>{route.breadcrumbName}</Button> }}
   * @example 拼接 path： itemRender={(route, params, routes, paths) => { return <a href={paths.join('/')}>{route.breadcrumbName}</a> }}
   */
  itemRender?: BreadcrumbProLayoutProps['itemRender']

  formatMessage?: (message: MessageDescriptor) => string
  /** @name 是否禁用行動端模式
   *
   * @see 有的管理系統不需要行動端模式，此屬性設置為true即可
   * @example disableMobile={true}
   *  */
  disableMobile?: boolean

  /**
   * content 的樣式
   *
   * @example 背景顏色為紅色 contentStyle={{ backgroundColor: 'red '}}
   */
  contentStyle?: CSSProperties

  className?: string

  /**
   * @name 操作菜單重新刷新
   *
   * @example  重新獲取菜單 actionRef.current.reload();
   * */
  actionRef?: React.MutableRefObject<
    | {
      reload: () => void
    }
    | undefined
  >

  /**
   * @name 錯誤處理組件
   *
   * @example ErrorBoundary={MyErrorBoundary}
   */
  ErrorBoundary?: React.ComponentClass<any, any> | boolean

  /**
   * @name  側邊菜單的類型, menu.type 的捷徑
   * @type "sub" | "group"
   * @example group
   */
  siderMenuType?: 'sub' | 'group'

  isChildrenLayout?: boolean
}

const headerRender = (
  props: ProLayoutProps & {
    hasSiderMenu: boolean
  },
  matchMenuKeys: string[],
): React.ReactNode => {
  if (props.headerRender === false || props.pure) {
    return null
  }
  return (
    <Header
      matchMenuKeys={matchMenuKeys}
      {...props as any}
      stylish={props.stylish?.header}
    />
  )
}

const footerRender = (props: ProLayoutProps): React.ReactNode => {
  if (props.footerRender === false || props.pure) {
    return null
  }
  if (props.footerRender) {
    return props.footerRender({ ...props as any }, <Footer />)
  }
  return null
}

const renderSiderMenu = (
  props: ProLayoutProps,
  matchMenuKeys: string[],
): React.ReactNode => {
  const {
    layout,
    isMobile,
    selectedKeys,
    openKeys,
    splitMenus,
    suppressSiderWhenMenuEmpty,
    menuRender,
  } = props
  if (props.menuRender === false || props.pure) {
    return null
  }
  let { menuData } = props

  /** 如果是分割菜單模式，需要專門實現一下 */
  if (splitMenus && (openKeys !== false || layout === 'mix') && !isMobile) {
    const [key] = selectedKeys || matchMenuKeys
    if (key) {
      // @ts-ignore
      menuData = props.menuData?.find((item) => item.key === key)?.children || []
    } else {
      menuData = []
    }
  }

  // 這裡走了可以少一次循環
  const clearMenuData = clearMenuItem(menuData || [])
  if (
    clearMenuData &&
    clearMenuData?.length < 1 &&
    (splitMenus || suppressSiderWhenMenuEmpty)
  ) {
    return null
  }
  if (layout === 'top' && !isMobile) {
    return (
      <SiderMenu
        matchMenuKeys={matchMenuKeys}
        {...props as any}
        hide
        stylish={props.stylish?.sider}
      />
    )
  }

  const defaultDom = (
    <SiderMenu
      matchMenuKeys={matchMenuKeys}
      {...props as any}
      // 這裡走了可以少一次循環
      menuData={clearMenuData}
      stylish={props.stylish?.sider}
    />
  )
  if (menuRender) {
    return menuRender(props, defaultDom)
  }

  return defaultDom
}

const defaultPageTitleRender = (
  pageProps: GetPageTitleProps,
  props: ProLayoutProps,
): {
  title: string
  id: string
  pageName: string
} => {
  const { pageTitleRender } = props
  const pageTitleInfo = getPageTitleInfo(pageProps)
  if (pageTitleRender === false) {
    return {
      title: props.title || '',
      id: '',
      pageName: '',
    }
  }
  if (pageTitleRender) {
    const title = pageTitleRender(
      pageProps,
      pageTitleInfo.title,
      pageTitleInfo,
    )
    if (typeof title === 'string') {
      return getPageTitleInfo({
        ...pageTitleInfo,
        title,
      })
    }
    warning(
      typeof title === 'string',
      'pro-layout: renderPageTitle return value should be a string',
    )
  }
  return pageTitleInfo
}

export type BasicLayoutContext = { [K in 'location']: ProLayoutProps[K] } & {
  breadcrumb: Record<string, MenuDataItem>
}

const getPaddingInlineStart = (
  hasLeftPadding: boolean,
  collapsed: boolean | undefined,
  siderWidth: number,
): number | undefined => {
  if (hasLeftPadding) {
    return collapsed ? 64 : siderWidth
  }
  return 0
}

/**
 * 🌃 Powerful and easy to use beautiful layout 🏄‍ Support multiple topics and layout types
 *
 * @param props
 */
const BaseProLayout: React.FC<ProLayoutProps> = (props) => {

  const {
    children,
    onCollapse: propsOnCollapse,
    contentStyle,
    route,
    defaultCollapsed,
    style,
    siderWidth: propsSiderWidth,
    menu,
    siderMenuType,
    isChildrenLayout: propsIsChildrenLayout,
    menuDataRender,
    actionRef,
    bgLayoutImgList,
    loading,
  } = props || {}

  const siderWidth = useMemo(() => {
    if (propsSiderWidth) return propsSiderWidth
    if (props.layout === 'mix') return 215
    return 256
  }, [props.layout, propsSiderWidth])
  const pathname = usePathname()
  const intl = useIntl()

  const { formatMessage } = intl

  const context = useContext(ConfigProvider.ConfigContext)

  const prefixCls = props.prefixCls ?? context.getPrefixCls('pro')

  const [menuLoading, setMenuLoading] = useMountMergeState(false, {
    value: menu?.loading,
    onChange: menu?.onLoadingChange,
  })

  // give a default key for swr
  const [defaultId] = useState(() => {
    layoutIndex += 1
    return `pro-layout-${layoutIndex}`
  })

  const { data, mutate, isLoading } = useSWR(
    [defaultId, menu?.params],
    async ([, params]) => {
      setMenuLoading(true)
      const menuDataItems = await menu?.request?.(
        params || {},
        route?.children || route?.routes || [],
      )
      setMenuLoading(false)
      return menuDataItems
    },
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      revalidateOnReconnect: false,
    },
  )

  useEffect(() => {
    setMenuLoading(isLoading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  const { cache } = useSWRConfig()
  useEffect(() => {
    return () => {
      if (cache instanceof Map) cache.clear()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const menuInfoData = useMemo<{
    breadcrumb?: Record<string, MenuDataItem>
    breadcrumbMap?: Map<string, MenuDataItem>
    menuData?: MenuDataItem[]
  }>(
    () =>
      getMenuData(
        data || route?.children || route?.routes || [],
        menu,
        formatMessage,
        menuDataRender,
      ),
    [formatMessage, menu, menuDataRender, data, route?.children, route?.routes],
  )

  const { breadcrumb = {}, breadcrumbMap, menuData = [] } = menuInfoData || {}

  if (actionRef && menu?.request) {
    actionRef.current = {
      reload: () => {
        mutate()
      },
    }
  }
  const matchMenus = useMemo(() => {
    return getMatchMenu(pathname || '/', menuData || [], true)
  }, [pathname, menuData])

  const matchMenuKeys = useMemo(
    () =>
      // @ts-ignore
      Array.from(new Set(matchMenus.map((item) => item.key || item.path || ''))),
    [matchMenus],
  )

  // 當前選中的menu，一般不會為空
  const currentMenu = (matchMenus[matchMenus.length - 1] || {}) as ProSettings &
    MenuDataItem

  const currentMenuLayoutProps = useCurrentMenuLayoutProps(currentMenu)

  const {
    // @ts-ignore
    fixSiderbar,
    // @ts-ignore
    navTheme,
    // @ts-ignore
    layout: propsLayout,
    ...rest
  } = {
    ...props,
    ...currentMenuLayoutProps,
  }

  const colSize = useBreakpoint()

  const isMobile = useMemo(() => {
    return (colSize === 'sm' || colSize === 'xs') && !props.disableMobile
  }, [colSize, props.disableMobile])

  // If it is a fix menu, calculate padding
  // don't need padding in phone mode
  /* Checking if the menu is loading and if it is, it will return a skeleton loading screen. */
  const hasLeftPadding = propsLayout !== 'top' && !isMobile

  const [collapsed, onCollapse] = useMergedState<boolean>(
    () => {
      if (defaultCollapsed !== undefined) return defaultCollapsed
      if (process.env.NODE_ENV === 'test') return false
      if (isMobile) return true
      if (colSize === 'md') return true
      return false
    },
    {
      value: props.collapsed,
      onChange: propsOnCollapse,
    },
  )

  // Splicing parameters, adding menuData and formatMessage in props
  const defaultProps = Omit(
    {
      prefixCls,
      ...props,
      siderWidth,
      ...currentMenuLayoutProps,
      formatMessage,
      breadcrumb,
      menu: {
        ...menu,
        type: siderMenuType || menu?.type,
        loading: menuLoading,
      },
      layout: propsLayout as 'side',
    },
    ['className', 'breadcrumbRender'],
  )

  // gen page title
  const pageTitleInfo = defaultPageTitleRender(
    {
      pathname: pathname ?? undefined,
      ...defaultProps,
      breadcrumbMap,
    },
    props,
  )

  // gen breadcrumbProps, parameter for pageHeader
  const breadcrumbProps = getBreadcrumbProps(
    {
      ...(defaultProps as BreadcrumbProLayoutProps),
      breadcrumbRender: props.breadcrumbRender,
      breadcrumbMap,
    },
    props,
  )

  // render sider dom
  const siderMenuDom = renderSiderMenu(
    {
      ...defaultProps,
      menuData,
      onCollapse,
      isMobile,
      collapsed,
    },
    matchMenuKeys,
  )

  // render header dom
  const headerDom = headerRender(
    {
      ...defaultProps,
      children: null,
      hasSiderMenu: !!siderMenuDom,
      menuData,
      isMobile,
      collapsed,
      onCollapse,
    },
    matchMenuKeys,
  )

  // render footer dom
  const footerDom = footerRender({
    isMobile,
    collapsed,
    ...defaultProps,
  })

  const { isChildrenLayout: contextIsChildrenLayout } =
    useContext(RouteContext)

  // 如果 props 中定義，以 props 為準
  const isChildrenLayout =
    propsIsChildrenLayout !== undefined
      ? propsIsChildrenLayout
      : contextIsChildrenLayout

  const proLayoutClassName = `${prefixCls}-layout`
  const { wrapSSR, hashId } = useStyle(proLayoutClassName)

  // gen className
  const className = classNames(
    props.className,
    hashId,
    'ipass-pro-layout',
    proLayoutClassName,
    {
      // FIXME: Nextjs said mismatched className between server and client.
      // [`screen-${colSize}`]: colSize,
      [`${proLayoutClassName}-top-menu`]: propsLayout === 'top',
      [`${proLayoutClassName}-is-children`]: isChildrenLayout,
      [`${proLayoutClassName}-fix-siderbar`]: fixSiderbar,
      [`${proLayoutClassName}-${propsLayout}`]: propsLayout,
    },
  )

  /** 計算 slider 的寬度 */
  const leftSiderWidth = getPaddingInlineStart(
    !!hasLeftPadding,
    collapsed,
    siderWidth,
  )

  // siderMenuDom 為空的時候，不需要 padding
  const genLayoutStyle: CSSProperties = {
    position: 'relative',
  }

  // if is some layout children, don't need min height
  if (isChildrenLayout || (contentStyle && contentStyle.minHeight)) {
    genLayoutStyle.minHeight = 0
  }

  const [hasFooterToolbar, setHasFooterToolbar] = useState(false)
  /**
   * 使用number是因為多標籤頁的時候有多個 PageContainer，只有有任意一個就應該展示這個className
   */
  const [hasPageContainer, setHasPageContainer] = useState(0)
  // props.title
  // pageTitleInfo

  const bgImgStyleList = useMemo(() => {
    if (bgLayoutImgList && bgLayoutImgList.length > 0) {
      return bgLayoutImgList.map((item, index) => {
        return (
          <img
            key={index}
            src={item.src}
            style={{
              position: 'absolute',
              ...item,
            }}
          />
        )
      })
    }
    return null
  }, [bgLayoutImgList])
  const { token } = useContext(ProProvider)
  return wrapSSR(
    <RouteContext.Provider
      value={{
        ...defaultProps,
        breadcrumb: breadcrumbProps,
        menuData,
        isMobile,
        collapsed,
        hasPageContainer,
        setHasPageContainer,
        isChildrenLayout: true,
        title: pageTitleInfo.pageName,
        hasSiderMenu: !!siderMenuDom,
        hasHeader: !!headerDom,
        siderWidth: leftSiderWidth,
        hasFooter: !!footerDom,
        hasFooterToolbar,
        setHasFooterToolbar,
        pageTitleInfo,
        matchMenus,
        matchMenuKeys,
        currentMenu,
      }}
    >
      {props.pure ? (
        <>{children}</>
      ) : (
        <div className={className}>
          <div className={classNames(`${proLayoutClassName}-bg-list`, hashId)}>
            {bgImgStyleList}
          </div>
          <Layout
            style={{
              minHeight: '100%',
              // hack style
              flexDirection: siderMenuDom ? 'row' : undefined,
              ...style,
            }}
          >
            <ConfigProvider
              // @ts-ignore
              theme={{
                hashed: isNeedOpenHash(),
                components: {
                  Menu: coverToNewToken({
                    itemBg:
                      token.layout?.sider?.colorMenuBackground || 'transparent',
                    subMenuItemBg:
                      token.layout?.sider?.colorMenuBackground || 'transparent',
                    itemBorderRadius: 4,
                    controlHeightLG:
                      token.layout?.sider?.menuHeight || token?.controlHeightLG,
                    itemSelectedBg:
                      token.layout?.sider?.colorBgMenuItemSelected ||
                      token?.colorBgTextHover,
                    itemHoverBg:
                      token.layout?.sider?.colorBgMenuItemHover ||
                      token?.colorBgTextHover,
                    itemActiveBg:
                      token.layout?.sider?.colorBgMenuItemActive ||
                      token?.colorBgTextActive,
                    horizontalItemSelectedBg:
                      token.layout?.sider?.colorBgMenuItemSelected ||
                      token?.colorBgTextHover,
                    colorActiveBarWidth: 0,
                    colorActiveBarHeight: 0,
                    colorActiveBarBorderSize: 0,
                    itemColor:
                      token.layout?.sider?.colorTextMenu ||
                      token?.colorTextSecondary,
                    itemHoverColor:
                      token.layout?.sider?.colorTextMenuItemHover ||
                      'rgba(0, 0, 0, 0.85)', // 懸浮態
                    itemSelectedColor:
                      token.layout?.sider?.colorTextMenuSelected ||
                      'rgba(0, 0, 0, 1)',
                    colorBgElevated:
                      token.layout?.sider?.colorBgMenuItemCollapsedElevated ||
                      '#fff',
                  }),
                },
              }}
            >
              {siderMenuDom}
            </ConfigProvider>
            <div
              style={genLayoutStyle}
              className={`${proLayoutClassName}-container ${hashId}`.trim()}
            >
              {headerDom}
              <WrapContent
                hasPageContainer={hasPageContainer}
                isChildrenLayout={isChildrenLayout}
                {...rest}
                hasHeader={!!headerDom}
                prefixCls={proLayoutClassName}
                style={contentStyle}
              >
                {loading ? <PageLoading /> : children}
              </WrapContent>
              {footerDom}
              {hasFooterToolbar && (
                <div
                  className={`${proLayoutClassName}-has-footer`}
                  style={{
                    height: 64,
                    marginBlockStart:
                      token.layout?.pageContainer
                        ?.paddingBlockPageContainerContent,
                  }}
                />
              )}
            </div>
          </Layout>
        </div>
      )}
    </RouteContext.Provider>,
  )
}

const ProLayout: React.FC<ProLayoutProps> = (props) => {
  const { colorPrimary } = props

  const darkProps =
    props.navTheme !== undefined
      ? {
        dark: props.navTheme === 'realDark',
      }
      : {}

  if (props.muiTheme) {
    return (
      <ThemeProvider theme={props.muiTheme}>
        <IntlProvider locale={props.locale} defaultLocale={props.defaultLocale} messages={props.messages}>
          <ConfigProvider
            theme={
              colorPrimary
                ? {
                  token: {
                    colorPrimary: colorPrimary,
                  },
                }
                : undefined
            }
          >
            <ProConfigProvider
              autoClearCache
              {...darkProps}
              token={props.token}
              prefixCls={props.prefixCls}
            >
              <BaseProLayout
                logo="/logo.svg"
                {...defaultSettings}
                location={isBrowser() ? window.location : undefined}
                {...props}
              />
            </ProConfigProvider>
          </ConfigProvider>
        </IntlProvider>
      </ThemeProvider>
    )
  }
  props.defaultCollapsed

  return (
    <IntlProvider locale={props.locale} defaultLocale={props.defaultLocale} messages={props.messages}>
      <ConfigProvider
        theme={
          colorPrimary
            ? {
              token: {
                colorPrimary: colorPrimary,
              },
            }
            : undefined
        }
      >
        <ProConfigProvider
          autoClearCache
          {...darkProps}
          token={props.token}
          prefixCls={props.prefixCls}
        >
          <BaseProLayout
            logo="/logo.svg"
            {...defaultSettings}
            location={isBrowser() ? window.location : undefined}
            {...props}
          />
        </ProConfigProvider>
      </ConfigProvider>
    </IntlProvider>
  )
}

export { ProLayout }
