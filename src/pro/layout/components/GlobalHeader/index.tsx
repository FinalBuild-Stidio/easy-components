import MenuIcon from '@mui/icons-material/Menu'
import classNames from 'classnames'
import type { PureSettings } from '../../../defaultSettings'
import type { MenuDataItem } from '../../typing'
import type { WithFalse } from '../../typing'
import { clearMenuItem } from '../../utils/utils'
import { AppsLogoComponents, defaultRenderLogo } from '../AppsLogoComponents'
import type { AppItemProps, AppListProps } from '../AppsLogoComponents/types'
import type { HeaderViewProps } from '../Header'
import type {
  PrivateSiderMenuProps,
  SiderMenuProps,
} from '../SiderMenu/SiderMenu'
import { renderLogoAndTitle } from '../SiderMenu/SiderMenu'
import { TopNavHeader } from '../TopNavHeader'
import { ActionsContent } from './ActionsContent'
import { useStyle } from './style'

export type GlobalHeaderProps = {
  collapsed?: boolean
  onCollapse?: (collapsed: boolean) => void
  isMobile?: boolean
  logo?: React.ReactNode
  /**
   * @name 雖然叫menuRender，但是其實是整個 SiderMenu 面板的渲染函數
   *
   * @example 收起時完成不展示選單 menuRender={(props,defaultDom)=> props.collapsed ? null : defaultDom}
   * @example 不展示選單 menuRender={false}
   */
  menuRender?: WithFalse<
    (props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode
  >
  className?: string
  prefixCls?: string
  /** 相關品牌的列表 */
  appList?: AppListProps
  /** 相關品牌的列表項 點擊事件，當事件存在時，appList 內配置的 url 不在自動跳轉 */
  itemClick?: (
    item: AppItemProps,
    popoverRef?: React.RefObject<HTMLSpanElement>,
  ) => void
  menuData?: MenuDataItem[]
  onMenuHeaderClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  style?: React.CSSProperties
  menuHeaderRender?: SiderMenuProps['menuHeaderRender']

  /**
   * @name 頂部區域的渲染，包含內部的 menu
   *
   * @example headerContentRender={(props) => <div>管理控制台 </div>}
   */
  headerContentRender?: WithFalse<
    (props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode
  >
  collapsedButtonRender?: SiderMenuProps['collapsedButtonRender']

  splitMenus?: boolean
  /** Layout的操作功能列表，不同的 layout 會放到不同的位置 */
  actionsRender?: WithFalse<(props: HeaderViewProps) => React.ReactNode[]>
  children?: React.ReactNode
} & Partial<PureSettings>

const renderLogo = (
  menuHeaderRender: SiderMenuProps['menuHeaderRender'],
  logoDom: React.ReactNode,
) => {
  if (menuHeaderRender === false) {
    return null
  }
  if (menuHeaderRender) {
    return menuHeaderRender(logoDom, null)
  }
  return logoDom
}

const GlobalHeader: React.FC<GlobalHeaderProps & PrivateSiderMenuProps> = (
  props,
) => {
  const {
    isMobile,
    logo,
    collapsed,
    onCollapse,
    actionsRender,
    menuHeaderRender,
    onMenuHeaderClick,
    className: propClassName,
    style,
    layout,
    children,
    splitMenus,
    menuData,
    prefixCls,
  } = props
  const baseClassName = `${prefixCls}-global-header`

  const { wrapSSR, hashId } = useStyle(baseClassName)

  const className = classNames(propClassName, baseClassName, hashId)

  if (layout === 'mix' && !isMobile && splitMenus) {
    const noChildrenMenuData = (menuData || []).map((item) => ({
      ...item,
      children: undefined,
      routes: undefined,
    }))
    const clearMenuData = clearMenuItem(noChildrenMenuData)
    return (
      <TopNavHeader
        mode="horizontal"
        {...props}
        splitMenus={false}
        menuData={clearMenuData}
      />
    )
  }

  const logoClassNames = classNames(`${baseClassName}-logo`, hashId, {
    [`${baseClassName}-logo-mix`]: layout === 'mix',
    [`${baseClassName}-logo-mobile`]: isMobile,
  })

  const logoDom = (
    <span className={logoClassNames} key="logo">
      <a>{defaultRenderLogo(logo)}</a>
    </span>
  )
  return wrapSSR(
    <div className={className} style={{ ...style }}>
      {isMobile && (
        <span
          className={`${baseClassName}-collapsed-button ${hashId}`.trim()}
          onClick={() => {
            onCollapse?.(!collapsed)
          }}
        >
          <MenuIcon />
        </span>
      )}
      {isMobile && renderLogo(menuHeaderRender, logoDom)}
      {layout === 'mix' && !isMobile && (
        <>
          <AppsLogoComponents {...props} />
          <div className={logoClassNames} onClick={onMenuHeaderClick}>
            {renderLogoAndTitle(
              { ...props, collapsed: false },
              'headerTitleRender',
            )}
          </div>
        </>
      )}
      <div style={{ flex: 1 }}>{children}</div>
      {(props.actionsRender) && (
        <ActionsContent actionsRender={actionsRender} {...props} />
      )}
    </div>,
  )
}

export { GlobalHeader }
