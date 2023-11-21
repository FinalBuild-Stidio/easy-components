import type { GenerateStyle } from '@/providers'
import { ProProvider } from '@/providers'
// import type { AvatarProps, SiderProps } from '@/components/base'
import type { SiderProps } from '@/components/base'
// import { Avatar, Layout, Menu, Space } from '@/components/base'
import { Layout, Menu, Space } from '@/components/base'
import { SiderContext } from '@/components/base/layout/Sider'
import type { ItemType } from '@/components/base/menu/hooks/useItems'
import classNames from 'classnames'
import type { CSSProperties } from 'react'
import React, { useContext, useMemo } from 'react'
import type { WithFalse } from '../../typing'
import { AppsLogoComponents, defaultRenderLogo } from '../AppsLogoComponents'
import type { AppItemProps, AppListProps } from '../AppsLogoComponents/types'
import { CollapsedIcon } from '../CollapsedIcon'
import type { HeaderViewProps } from '../Header'
import type { BaseMenuProps } from './BaseMenu'
import { BaseMenu } from './BaseMenu'
import type { SiderMenuToken } from './style/stylish'
import { useStylish } from './style/stylish'

const { Sider } = Layout

export type HeaderRenderKey = 'menuHeaderRender' | 'headerTitleRender'

/**
 * 渲染 title 和 logo
 *
 * @param props
 * @param renderKey
 * @returns
 */
export const renderLogoAndTitle = (
  props: SiderMenuProps,
  renderKey: HeaderRenderKey = 'menuHeaderRender',
): React.ReactNode => {
  const { logo, title, layout } = props
  const renderFunction = props[renderKey as keyof SiderMenuProps]
  if (renderFunction === false) {
    return null
  }
  const logoDom = defaultRenderLogo(logo)
  const titleDom = <h1>{title ?? 'iPASS Customized UI framework'}</h1>

  if (renderFunction) {
    // when collapsed, no render title
    return renderFunction(logoDom, props.collapsed ? null : titleDom, props)
  }

  /**
   * 收起來時候直接不顯示
   */
  if (props.isMobile) {
    return null
  }
  if (layout === 'mix' && renderKey === 'menuHeaderRender') return false
  if (props.collapsed) {
    return <a key="title">{logoDom}</a>
  }
  return (
    <a key="title">
      {logoDom}
      {titleDom}
    </a>
  )
}

export type SiderMenuProps = {
  /** 品牌logo的標識 */
  logo?: React.ReactNode
  /** 相關品牌的列表 */
  appList?: AppListProps
  appListRender?: (
    props: AppListProps,
    defaultDom: React.ReactNode,
  ) => React.ReactNode
  /** 相關品牌的列表項 點擊事件，當事件存在時，appList 內配置的 url 不在自動跳轉 */
  itemClick?: (
    item: AppItemProps,
    popoverRef?: React.RefObject<HTMLSpanElement>,
  ) => void
  /** 菜單的寬度 */
  siderWidth?: number
  /** 頭像的設置 */
  // avatarProps?: WithFalse<
  //   AvatarProps & {
  //     title?: React.ReactNode
  //     render?: (
  //       props: AvatarProps,
  //       defaultDom: React.ReactNode,
  //     ) => React.ReactNode
  //   }
  // >

  /** Layout的操作功能列表，不同的 layout 會放到不同的位置 */
  actionsRender?: WithFalse<(props: HeaderViewProps) => React.ReactNode[]>
  /**
   * @name  菜單 logo 和 title 區域的渲染
   *
   * @example 不要logo : menuHeaderRender={(logo,title)=> title}
   * @example 不要title : menuHeaderRender={(logo,title)=> logo}
   * @example 展開的時候顯示title,收起顯示 logo： menuHeaderRender={(logo,title,props)=> props.collapsed ? logo : title}
   * @example 不要這個區域了 : menuHeaderRender={false}
   */
  menuHeaderRender?: WithFalse<
    (
      logo: React.ReactNode,
      title: React.ReactNode,
      props?: SiderMenuProps,
    ) => React.ReactNode
  >
  /**
   * @name 側邊菜單底部的配置，可以增加一些底部操作
   *
   * @example 底部增加超連結 menuFooterRender={()=><a href="https://mui.com/material-ui">mui.com/material-ui</a>}
   * @example 根據收起展開配置不同的 dom  menuFooterRender={()=>collapsed? null :<a href="https://mui.com/material-ui">mui.com/material-ui</a>}
   */
  menuFooterRender?: WithFalse<(props?: SiderMenuProps) => React.ReactNode>

  /**
   * @name  側邊菜單，菜單區域的處理,可以單獨處理菜單的dom
   *
   * @example 增加菜單區域的背景顏色 menuContentRender={(props,defaultDom)=><div style={{backgroundColor:"red"}}>{defaultDom}</div>}
   * @example 某些情況下不顯示菜單 menuContentRender={(props)=> return <div>不顯示菜單</div>}
   */
  menuContentRender?: WithFalse<
    (props: SiderMenuProps, defaultDom: React.ReactNode) => React.ReactNode
  >
  /**
   * @name 側邊菜單 title 和 logo 下面區域的渲染，一般會增加個搜索框
   *
   * @example  增加一個搜索框 menuExtraRender={()=>(<Search placeholder="請輸入" />)}
   * @example  根據收起展開配置不同的 dom： menuExtraRender={()=>collapsed? null : <Search placeholder="請輸入" />}
   */
  menuExtraRender?: WithFalse<(props: SiderMenuProps) => React.ReactNode>
  /**
   * @name 自訂展開收起按鈕的渲染
   *
   * @example 使用文字渲染 collapsedButtonRender={(collapsed)=>collapsed?"展開":"收起"})}
   * @example 使用icon渲染 collapsedButtonRender={(collapsed)=>collapsed?<MenuUnfoldOutlined />:<MenuFoldOutlined />}
   * @example 不渲染按鈕 collapsedButtonRender={false}
   */
  collapsedButtonRender?: WithFalse<
    (collapsed?: boolean, defaultDom?: React.ReactNode) => React.ReactNode
  >
  /**
   * @name 菜單是否收起的斷點，設置成false 可以禁用
   *
   * @example 禁用斷點  breakpoint={false}
   * @example 最小的螢幕再收起 breakpoint={"xs"}
   */
  breakpoint?: SiderProps['breakpoint'] | false

  /**
   * @name 菜單頂部logo 和 title 區域的點擊事件
   *
   * @example 點擊跳轉到首頁 onMenuHeaderClick={()=>{ history.push('/') }}
   */
  onMenuHeaderClick?: (e: React.MouseEvent<HTMLDivElement>) => void

  /**
   * @name 側邊菜單底部的一些快捷連結
   *
   * @example links={[<a href="https://mui.com/material-ui/"> 訪問官網 </a>,<a href="https://mui.com/material-ui/"> 幫助 </a>]}
   */
  links?: React.ReactNode[]
  onOpenChange?: (openKeys: WithFalse<string[]>) => void
  getContainer?: false

  /**
   * @name 側邊菜單的logo的樣式，可以調整一下大小
   *
   * @example 設置logo的大小為 42px logoStyle={{width: '42px', height: '42px'}}
   */
  logoStyle?: CSSProperties
  hide?: boolean
  className?: string
  style?: CSSProperties
} & Pick<BaseMenuProps, Exclude<keyof BaseMenuProps, ['onCollapse']>>

export type PrivateSiderMenuProps = {
  matchMenuKeys: string[]
  originCollapsed?: boolean
  menuRenderType?: 'header' | 'sider'
  stylish?: GenerateStyle<SiderMenuToken>
}

const SiderMenu: React.FC<SiderMenuProps & PrivateSiderMenuProps> = (props) => {
  const {
    collapsed,
    originCollapsed,
    fixSiderbar,
    menuFooterRender,
    onCollapse,
    theme,
    siderWidth,
    isMobile,
    onMenuHeaderClick,
    breakpoint = 'lg',
    style,
    layout,
    menuExtraRender = false,
    links,
    menuContentRender,
    collapsedButtonRender,
    prefixCls,
    // avatarProps,

    //@ts-ignore
    rightContentRender,
    actionsRender,
    onOpenChange,
    stylish,
    logoStyle,
  } = props
  const { hashId } = useContext(ProProvider)
  const showSiderExtraDom = useMemo(() => {
    if (isMobile) return false
    if (layout === 'mix') return false
    return true
  }, [isMobile, layout])

  const baseClassName = `${prefixCls}-sider`

  // 收起的寬度
  const collapsedWidth = 64

  // 之所以這樣寫是為了提升樣式優先度，不然會被sider 自帶的覆蓋掉
  const stylishClassName = useStylish(
    `${baseClassName}.${baseClassName}-stylish`,
    {
      stylish,
      proLayoutCollapsedWidth: collapsedWidth,
    },
  )

  const siderClassName = classNames(`${baseClassName}`, hashId, {
    [`${baseClassName}-fixed`]: fixSiderbar,
    [`${baseClassName}-collapsed`]: props.collapsed,
    [`${baseClassName}-layout-${layout}`]: layout && !isMobile,
    [`${baseClassName}-light`]: theme !== 'dark',
    [`${baseClassName}-mix`]: layout === 'mix' && !isMobile,
    [`${baseClassName}-stylish`]: !!stylish,
  })

  const headerDom = renderLogoAndTitle(props)

  const extraDom = menuExtraRender && menuExtraRender(props)

  const menuDom = useMemo(
    () =>
      menuContentRender !== false && (
        <BaseMenu
          {...props}
          key="base-menu"
          mode={collapsed && !isMobile ? 'vertical' : 'inline'}
          handleOpenChange={onOpenChange}
          style={{
            width: '100%',
          }}
          className={`${baseClassName}-menu ${hashId}`.trim()}
        />
      ),
    [baseClassName, hashId, menuContentRender, onOpenChange, props],
  )

  const linksMenuItems: ItemType[] = (links || []).map((node, index) => ({
    className: `${baseClassName}-link`,
    label: node,
    key: index,
  }))

  const menuRenderDom = useMemo(() => {
    return menuContentRender ? menuContentRender(props, menuDom) : menuDom
  }, [menuContentRender, menuDom, props])

  // const avatarDom = useMemo(() => {
  //   if (!avatarProps) return null
  //   const { title, render, ...rest } = avatarProps
  //   const dom = (
  //     <div className={`${baseClassName}-actions-avatar`}>
  //       {rest?.src || rest?.srcSet || rest.icon || rest.children ? (
  //         <Avatar size={28} {...rest} />
  //       ) : null}
  //       {avatarProps.title && !collapsed && <span>{title}</span>}
  //     </div>
  //   )
  //   if (render) {
  //     return render(avatarProps, dom)
  //   }
  //   return dom
  // }, [avatarProps, baseClassName, collapsed])

  const actionsDom = useMemo(
    () => {
      if (!actionsRender) return null
      return (
        <Space
          align="center"
          size={4}
          direction={collapsed ? 'vertical' : 'horizontal'}
          className={classNames([
            `${baseClassName}-actions-list`,
            collapsed && `${baseClassName}-actions-list-collapsed`,
            hashId,
          ])}
        >
          {actionsRender?.(props).map((item, index) => {
            return (
              <div
                key={index}
                className={`${baseClassName}-actions-list-item ${hashId}`.trim()}
              >
                {item}
              </div>
            )
          })}
        </Space>
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [actionsRender, baseClassName, collapsed],
  )

  const appsDom = useMemo(() => {
    return (
      <AppsLogoComponents
        onItemClick={props.itemClick}
        appList={props.appList}
        prefixCls={props.prefixCls}
      />
    )
  }, [props.appList, props.prefixCls])

  const collapsedDom = useMemo(() => {
    if (collapsedButtonRender === false) return null
    const dom = (
      <CollapsedIcon
        isMobile={isMobile}
        collapsed={originCollapsed}
        className={`${baseClassName}-collapsed-button`}
        onClick={() => {
          onCollapse?.(!originCollapsed)
        }}
      />
    )
    if (collapsedButtonRender) return collapsedButtonRender(collapsed, dom)
    return dom
  }, [
    collapsedButtonRender,
    isMobile,
    originCollapsed,
    baseClassName,
    collapsed,
    onCollapse,
  ])

  /** 操作區域的dom */
  const actionAreaDom = useMemo(() => {
    return (
      <div
        className={classNames(
          `${baseClassName}-actions`,
          hashId,
          collapsed && `${baseClassName}-actions-collapsed`,
        )}
      >
        {actionsDom}
      </div>
    )
  }, [actionsDom, baseClassName, collapsed, hashId])

  /* Using the useMemo hook to create a CSS class that will hide the menu when the menu is collapsed. */
  const hideMenuWhenCollapsedClassName = useMemo(() => {
    // 收起時完全隱藏菜單
    if (props?.menu?.hideMenuWhenCollapsed && collapsed) {
      return `${baseClassName}-hide-menu-collapsed`
    }
    return null
  }, [baseClassName, collapsed, props?.menu?.hideMenuWhenCollapsed])

  const menuFooterDom = menuFooterRender && menuFooterRender?.(props)

  const menuDomItems = (
    <>
      {headerDom && (
        <div
          className={classNames([
            classNames(`${baseClassName}-logo`, hashId, {
              [`${baseClassName}-logo-collapsed`]: collapsed,
            }),
          ])}
          onClick={showSiderExtraDom ? onMenuHeaderClick : undefined}
          id="logo"
          style={logoStyle}
        >
          {headerDom}
          {appsDom}
        </div>
      )}
      {extraDom && (
        <div
          className={classNames([
            `${baseClassName}-extra`,
            !headerDom && `${baseClassName}-extra-no-logo`,
            hashId,
          ])}
        >
          {extraDom}
        </div>
      )}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {menuRenderDom}
      </div>
      <SiderContext.Provider value={{}}>
        {links ? (
          <div className={`${baseClassName}-links ${hashId}`.trim()}>
            <Menu
              inlineIndent={16}
              className={`${baseClassName}-link-menu ${hashId}`.trim()}
              selectedKeys={[]}
              openKeys={[]}
              theme={theme}
              mode="inline"
              items={linksMenuItems}
            />
          </div>
        ) : null}
        {showSiderExtraDom && (
          <>
            {actionAreaDom}
            {!actionsDom && rightContentRender ? (
              <div
                className={classNames(`${baseClassName}-actions`, hashId, {
                  [`${baseClassName}-actions-collapsed`]: collapsed,
                })}
              >
                {rightContentRender?.(props)}
              </div>
            ) : null}
          </>
        )}
        {menuFooterDom && (
          <div
            className={classNames([
              `${baseClassName}-footer`,
              hashId,
              { [`${baseClassName}-footer-collapsed`]: collapsed },
            ])}
          >
            {menuFooterDom}
          </div>
        )}
      </SiderContext.Provider>
    </>
  )

  return stylishClassName.wrapSSR(
    <>
      {fixSiderbar && !isMobile && !hideMenuWhenCollapsedClassName && (
        <div
          style={{
            width: collapsed ? collapsedWidth : siderWidth,
            overflow: 'hidden',
            flex: `0 0 ${collapsed ? collapsedWidth : siderWidth}px`,
            maxWidth: collapsed ? collapsedWidth : siderWidth,
            minWidth: collapsed ? collapsedWidth : siderWidth,
            transition: 'all 0.2s ease 0s',
            ...style,
          }}
        />
      )}

      <Sider
        collapsible
        trigger={null}
        collapsed={collapsed}
        breakpoint={breakpoint === false ? undefined : breakpoint}
        onCollapse={(collapse) => {
          if (isMobile) return
          onCollapse?.(collapse)
        }}
        collapsedWidth={collapsedWidth}
        style={style}
        theme={theme}
        width={siderWidth}
        className={classNames(
          siderClassName,
          hashId,
          hideMenuWhenCollapsedClassName,
        )}
      >
        {hideMenuWhenCollapsedClassName ? (
          <div
            className={`${baseClassName}-hide-when-collapsed ${hashId}`.trim()}
            style={{
              height: '100%',
              width: '100%',
              opacity: hideMenuWhenCollapsedClassName ? 0 : 1,
            }}
          >
            {menuDomItems}
          </div>
        ) : (
          menuDomItems
        )}
        {collapsedDom}
      </Sider>
    </>,
  )
}

export { SiderMenu }
