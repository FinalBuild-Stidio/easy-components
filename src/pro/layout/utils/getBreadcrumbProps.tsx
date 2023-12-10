import { pathToRegexp } from 'path-to-regexp'
import type { ProLayoutProps } from '../ProLayout'
import type { MenuDataItem, MessageDescriptor, WithFalse } from '../typing'
import { urlToList } from './pathTools'

export interface BreadcrumbItemType {
  disabled?: boolean
  key?: React.Key
  /**
   * Different with `path`. Directly set the link of this item.
   */
  href?: string
  /**
   * Different with `href`. It will concat all prev `path` to the current one.
   */
  path?: string
  title?: React.ReactNode
  className?: string
}

export type BreadcrumbProLayoutProps = {
  breadcrumbList?: { title: string; href: string }[]
  home?: string
  location?: {
    pathname?: string
  }
  breadcrumbMap?: Map<string, MenuDataItem>
  formatMessage?: (message: MessageDescriptor) => string
  breadcrumbRender?: WithFalse<
    (routers: BreadcrumbItemType[]) => BreadcrumbItemType[]
  >
  itemRender?: (route: BreadcrumbItemType, params: Record<PropertyKey, any>, routes: BreadcrumbItemType[], paths: string[]) => React.ReactNode
}

// 渲染 Breadcrumb 子節點
// Render the Breadcrumb child node
const defaultItemRender: BreadcrumbProLayoutProps['itemRender'] = (route, _, routes) => {
  const { breadcrumbName, title, path } = route as BreadcrumbItemType & {
    breadcrumbName: string
  }

  const last =
    routes.findIndex(
      (i) =>
        // @ts-ignore
        i.linkPath === route.path,
    ) ===
    routes.length - 1

  return last ? (
    <span>{title || breadcrumbName}</span>
  ) : (
    <span onClick={path ? () => (location.href = path) : undefined}>
      {title || breadcrumbName}
    </span>
  )
}

const renderItemLocal = (
  item: MenuDataItem,
  props: BreadcrumbProLayoutProps,
): string => {
  const { formatMessage } = props
  if (item.locale && formatMessage) {
    return formatMessage({ id: item.locale, defaultMessage: item.name })
  }
  return item.name as string
}

export const getBreadcrumb = (
  breadcrumbMap: Map<string, MenuDataItem>,
  url: string,
): MenuDataItem => {
  let breadcrumbItem = breadcrumbMap.get(url)
  if (!breadcrumbItem) {
    // Find the first matching path in the order defined by route config
    // 按照 route config 定義的順序找到第一個匹配的路徑
    const keys: string[] = Array.from(breadcrumbMap.keys()) || []
    const targetPath = keys.find((path) =>
      // remove ? ,不然會重複
      pathToRegexp(path.replace('?', '')).test(url),
    )
    if (targetPath) breadcrumbItem = breadcrumbMap.get(targetPath)
  }
  return breadcrumbItem || { path: '' }
}

export const getBreadcrumbFromProps = (
  props: BreadcrumbProLayoutProps,
): {
  location: BreadcrumbProLayoutProps['location']
  breadcrumbMap: BreadcrumbProLayoutProps['breadcrumbMap']
} => {
  const { location, breadcrumbMap } = props
  return {
    location,
    breadcrumbMap,
  }
}

const conversionFromLocation = (
  routerLocation: BreadcrumbProLayoutProps['location'],
  breadcrumbMap: Map<string, MenuDataItem>,
  props: BreadcrumbProLayoutProps,
): BreadcrumbItemType[] => {
  // Convertor the url to an array
  const pathSnippets = urlToList(routerLocation?.pathname)
  // Loop data mosaic routing
  const extraBreadcrumbItems: BreadcrumbItemType[] = pathSnippets
    .map((url) => {
      const currentBreadcrumb = getBreadcrumb(breadcrumbMap, url)
      const name = renderItemLocal(currentBreadcrumb, props)
      const { hideInBreadcrumb } = currentBreadcrumb
      return name && !hideInBreadcrumb
        ? {
          href: url,
          breadcrumbName: name,
          title: name,
          component: currentBreadcrumb.component,
        }
        : { linkPath: '', breadcrumbName: '', title: '' }
    })
    .filter((item) => item && item.linkPath)

  return extraBreadcrumbItems
}

/** 將參數轉化為麵包屑 Convert parameters into breadcrumbs */
export const genBreadcrumbProps = (
  props: BreadcrumbProLayoutProps,
): BreadcrumbItemType[] => {
  const { location, breadcrumbMap } = getBreadcrumbFromProps(props)

  // 根據 location 生成 麵包屑
  // Generate breadcrumbs based on location
  if (location && location.pathname && breadcrumbMap) {

    // Convertor the url to an array
    const pathSnippets = urlToList(location?.pathname)
    // Loop data mosaic routing
    const extraBreadcrumbItems: BreadcrumbItemType[] = pathSnippets
      .map((url) => {
        const currentBreadcrumb = getBreadcrumb(breadcrumbMap, url)
        const name = renderItemLocal(currentBreadcrumb, props)
        const { hideInBreadcrumb } = currentBreadcrumb
        return name && !hideInBreadcrumb
          ? {
            href: url,
            breadcrumbName: name,
            title: name,
            component: currentBreadcrumb.component,
          }
          : { linkPath: '', breadcrumbName: '', title: '' }
      })
      .filter((item) => item && item.linkPath)

    return extraBreadcrumbItems
  }
  return []
}

export type GetBreadcrumbPropsResult = { items?: BreadcrumbItemType[], itemRender?: BreadcrumbProLayoutProps['itemRender'] }

// 聲明一個導出函數，接收兩個參數：BreadcrumbProps和ProLayoutProps，返回一個BreadcrumbListReturn類型的對象
export const getBreadcrumbProps = (
  props: Omit<BreadcrumbProLayoutProps, 'breadcrumbRender'> & {
    breadcrumbRender?: WithFalse<
      (routers: BreadcrumbItemType[]) => BreadcrumbItemType[]
    >
  }, // BreadcrumbProps類型的props
  layoutPros: ProLayoutProps, // ProLayoutProps類型的layoutPros
): GetBreadcrumbPropsResult => {
  // 解構賦值獲取props中的breadcrumbRender和props中的itemRender，如果props中沒有itemRender則使用預設的defaultItemRender函數
  const { breadcrumbRender, itemRender: propsItemRender } = props
  // 解構賦值獲取layoutPros.breadcrumbProps.minLenght的值，如果沒有設置，則預設為2
  const minLength = 2
  // 生成麵包屑的路由數組，該數組中包含菜單項和麵包屑項
  const routesArray = genBreadcrumbProps(props)
  // 如果props中有itemRender，則使用props中的itemRender，否則使用默認函數defaultItemRender
  const itemRender: BreadcrumbProLayoutProps['itemRender'] = (item, ...rest) => {
    const renderFunction = propsItemRender || defaultItemRender
    return renderFunction?.(
      {
        ...item,
        // 如果item.linkPath存在，則使用item.linkPath，否則使用item.path
        // @ts-ignore
        path: item.linkPath || item.path,
      },
      ...rest,
    )
  }
  let items = routesArray as BreadcrumbItemType[] | undefined
  // 如果麵包屑渲染函數breadcrumbRender存在，則使用其渲染數組items
  if (breadcrumbRender) {
    items = breadcrumbRender(items || []) || undefined
  }
  // 如果items（渲染後的數組）的長度小於minLength或者breadcrumbRender為false，則items為undefined
  if ((items && items.length < minLength) || breadcrumbRender === false) {
    items = undefined
  }
  return {
    items,
    itemRender,
  }
}
