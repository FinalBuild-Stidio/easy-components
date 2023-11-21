import type {
  AppItemProps,
  AppListProps,
} from './components/AppsLogoComponents/types'
import { FooterToolbar } from './components/FooterToolbar'
import { GridContent } from './components/GridContent'
import type { PageContainerProps } from './components/PageContainer'
import {
  PageContainer,
} from './components/PageContainer'
import type { PageHeaderProps } from './components/PageHeader'
import { PageHeader } from './components/PageHeader'

import type { FooterProps } from './components/Footer'
import { DefaultFooter } from './components/Footer'
import type { HeaderViewProps as HeaderProps } from './components/Header'
import { DefaultHeader } from './components/Header'
import { PageLoading } from './components/PageLoading'
import type { TopNavHeaderProps } from './components/TopNavHeader'
import { TopNavHeader } from './components/TopNavHeader'
import type { RouteContextType } from './context/RouteContext'
import { RouteContext } from './context/RouteContext'
import { getPageTitle } from './getPageTitle'
import type { ProLayoutProps } from './ProLayout'
import { ProLayout, IntlProvider } from './ProLayout'
import { getMenuData } from './utils/getMenuData'

export type { MenuDataItem } from './typing'
export {
  PageHeader,
  ProLayout,
  RouteContext,
  PageLoading,
  GridContent,
  DefaultHeader,
  TopNavHeader,
  DefaultFooter,
  getPageTitle,
  getMenuData,
  PageContainer,
  FooterToolbar,
  IntlProvider,
}
export type {
  FooterProps,
  PageHeaderProps,
  PageContainerProps,
  TopNavHeaderProps,
  ProLayoutProps,
  RouteContextType,
  HeaderProps,
  AppItemProps,
  AppListProps,
}

export default ProLayout
