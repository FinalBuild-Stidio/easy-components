import { pathToRegexp } from 'path-to-regexp'
import type { ProSettings } from '../defaultSettings'
import type { MenuDataItem } from './typing'

type BreadcrumbItem = Omit<MenuDataItem, 'children' | 'routes'> & {
  routes?: BreadcrumbItem
}
export const matchParamsPath = (
  pathname: string,
  breadcrumb?: Record<string, BreadcrumbItem>,
  breadcrumbMap?: Map<string, BreadcrumbItem>,
): BreadcrumbItem => {
  // Internal logic use breadcrumbMap to ensure the order
  // 內部邏輯使用 breadcrumbMap 來確保查詢順序
  if (breadcrumbMap) {
    // @ts-ignore
    const pathKey = [...breadcrumbMap.keys()].find((key) =>
      pathToRegexp(key).test(pathname),
    )
    if (pathKey) {
      return breadcrumbMap.get(pathKey) as BreadcrumbItem
    }
  }

  // External uses use breadcrumb
  // 外部用戶使用 breadcrumb 參數
  if (breadcrumb) {
    const pathKey = Object.keys(breadcrumb).find((key) =>
      pathToRegexp(key).test(pathname),
    )

    if (pathKey) {
      return breadcrumb[pathKey]
    }
  }

  return {
    path: '',
  }
}

export type GetPageTitleProps = {
  pathname?: string
  breadcrumb?: Record<string, BreadcrumbItem>
  breadcrumbMap?: Map<string, BreadcrumbItem>
  menu?: ProSettings['menu']
  title?: ProSettings['title']
  pageName?: string
  formatMessage?: (data: { id: any; defaultMessage?: string }) => string
}

/**
 * 獲取關於 pageTitle 的所有資訊方便包裝
 *
 * @param props
 * @param ignoreTitle
 */
export const getPageTitleInfo = (
  props: GetPageTitleProps,
  ignoreTitle?: boolean,
): {
  // 頁面標題
  title: string
  // locale 的 title
  id: string
  // 頁面標題不帶默認的 title
  pageName: string
} => {
  const {
    pathname = '/',
    breadcrumb,
    breadcrumbMap,
    formatMessage,
    title,
    menu = {
      locale: false,
    },
  } = props
  const pageTitle = ignoreTitle ? '' : title || ''
  const currRouterData = matchParamsPath(pathname, breadcrumb, breadcrumbMap)
  if (!currRouterData) {
    return {
      title: pageTitle,
      id: '',
      pageName: pageTitle,
    }
  }
  let pageName = currRouterData.name

  if (menu.locale !== false && currRouterData.locale && formatMessage) {
    pageName = formatMessage({
      id: currRouterData.locale || '',
      defaultMessage: currRouterData.name,
    })
  }

  if (!pageName) {
    return {
      title: pageTitle,
      id: currRouterData.locale || '',
      pageName: pageTitle,
    }
  }
  if (ignoreTitle || !title) {
    return {
      title: pageName,
      id: currRouterData.locale || '',
      pageName,
    }
  }
  return {
    title: `${pageName} - ${title}`,
    id: currRouterData.locale || '',
    pageName,
  }
}

export const getPageTitle = (
  props: GetPageTitleProps,
  ignoreTitle?: boolean,
) => {
  return getPageTitleInfo(props, ignoreTitle).title
}
