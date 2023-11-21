import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import classNames from 'classnames'
import Icon from "@mui/material/Icon"

import type { ProTokenType } from '@/providers'
import { ProProvider } from '@/providers'
import type { MenuProps } from '@/base'
import { Menu, Skeleton, Tooltip } from '@/base'
import type { ItemType } from '@/base/menu/hooks/useItems'
import { isImg, isUrl, useMountMergeState } from '../../../utils'
import type { PureSettings } from '../../../defaultSettings'
import type {
  MenuDataItem,
  MessageDescriptor,
  RouterTypes,
  WithFalse,
} from '../../typing'
import { getOpenKeysFromMenuData } from '../../utils/utils'
import type { PrivateSiderMenuProps } from './SiderMenu'
import { useStyle } from './style/menu'

// todo
export type MenuMode =
  | 'vertical'
  | 'vertical-left'
  | 'vertical-right'
  | 'horizontal'
  | 'inline'

const MenuItemTooltip = (props: {
  collapsed?: boolean
  children: React.ReactNode
  title?: React.ReactNode
  disable?: boolean
}) => {
  const [collapsed, setCollapsed] = useState(props.collapsed)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setOpen(false)
    setTimeout(() => {
      setCollapsed(props.collapsed)
    }, 400)
  }, [props.collapsed])

  if (props.disable) {
    return props.children as JSX.Element
  }

  return (
    <Tooltip
      title={props.title}
      open={collapsed && props.collapsed ? open : false}
      placement="right"
      onOpenChange={setOpen}
    >
      {props.children}
    </Tooltip>
  )
}

export type BaseMenuProps = {
  className?: string
  /** 預設的是否展開，會受到 breakpoint 的影響 */
  defaultCollapsed?: boolean
  collapsed?: boolean
  splitMenus?: boolean
  isMobile?: boolean
  menuData?: MenuDataItem[]
  mode?: MenuMode
  onCollapse?: (collapsed: boolean) => void
  openKeys?: WithFalse<string[]> | undefined
  handleOpenChange?: (openKeys: string[]) => void
  /** 要給菜單的props, 參考 ipass customized lib -menu的屬性 */
  menuProps?: MenuProps
  style?: React.CSSProperties
  formatMessage?: (message: MessageDescriptor) => string

  /**
   * @name 處理父級菜單的 props，可以複寫菜單的點擊功能，一般用於埋點
   * @see 子級的菜單要使用 menuItemRender 來處理
   *
   * @example 使用 a 標籤跳轉到特殊的地址 subMenuItemRender={(item, defaultDom) => { return <a onClick={()=> history.push(item.path) }>{defaultDom}</a> }}
   * @example 增加埋點 subMenuItemRender={(item, defaultDom) => { return <a onClick={()=> log.click(item.name) }>{defaultDom}</a> }}
   */
  subMenuItemRender?: WithFalse<
    (
      item: MenuDataItem & {
        isUrl: boolean
      },
      defaultDom: React.ReactNode,
      menuProps: BaseMenuProps,
    ) => React.ReactNode
  >

  /**
   * @name 處理菜單的 props，可以複寫菜單的點擊功能，一般結合 Router 框架使用
   * @see 非子級的菜單要使用 subMenuItemRender 來處理
   *
   * @example 使用 a 標籤 menuItemRender={(item, defaultDom) => { return <a onClick={()=> history.push(item.path) }>{defaultDom}</a> }}
   * @example 使用 Link 標籤 menuItemRender={(item, defaultDom) => { return <Link to={item.path}>{defaultDom}</Link> }}
   */
  menuItemRender?: WithFalse<
    (
      item: MenuDataItem & {
        isUrl: boolean
        onClick: () => void
      },
      defaultDom: React.ReactNode,
      menuProps: BaseMenuProps & Partial<PrivateSiderMenuProps>,
    ) => React.ReactNode
  >

  /**
   * @name 處理 menuData 的方法，與 menuDataRender 不同，postMenuData處理完成後會直接渲染，不再進行國際化和拼接處理
   *
   * @example 增加菜單圖示 postMenuData={(menuData) => { return menuData.map(item => { return { ...item, icon: <Icon type={item.icon} /> } }) }}
   */
  postMenuData?: (menusData?: MenuDataItem[]) => MenuDataItem[]
} & Partial<RouterTypes> &
  Omit<MenuProps, 'openKeys' | 'onOpenChange' | 'title'> &
  Partial<PureSettings>

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'icon-geren' #For Iconfont ,
//   icon: 'http://demo.com/icon.png',
//   icon: '/favicon.png',
//   icon: <Icon type="setting" />,
const getIcon = (
  icon: string | React.ReactNode,
  className: string,
): React.ReactNode => {
  if (typeof icon === 'string' && icon !== '') {
    if (isUrl(icon) || isImg(icon)) {
      return (
        <Icon
          className={className}

        >
          {icon}
        </Icon>
      )
    }
  }
  return icon
}

const getMenuTitleSymbol = (title: React.ReactNode) => {
  if (title && typeof title === 'string') {
    const symbol = title.substring(0, 1).toUpperCase()
    return symbol
  }
  return null
}

class MenuUtil {
  constructor(
    props: BaseMenuProps & {
      token?: ProTokenType
      menuRenderType?: 'header' | 'sider'
      baseClassName: string
      hashId: string
    },
  ) {
    this.props = props
  }

  props: BaseMenuProps & {
    token?: ProTokenType
    menuRenderType?: 'header' | 'sider'
    baseClassName: string
    hashId: string
  }

  getNavMenuItems = (
    menusData: MenuDataItem[] = [],
    level: number,
  ): ItemType[] =>
    menusData
      .map((item) => this.getSubMenuOrItem(item, level))
      .filter((item) => item)
      .flat(1);

  /** Get SubMenu or Item */
  getSubMenuOrItem = (
    item: MenuDataItem,
    level: number,
  ): ItemType | ItemType[] => {
    const {
      subMenuItemRender,
      baseClassName,
      prefixCls,
      collapsed,
      menu,
      layout,
    } = this.props
    const isGroup = menu?.type === 'group' && layout !== 'top'
    const designToken = this.props.token

    const name = this.getIntlName(item)
    const children = item?.children || item?.routes

    const menuType = isGroup && level === 0 ? ('group' as const) : undefined

    if (Array.isArray(children) && children.length > 0) {
      /** Menu 第一級可以有icon，或者 isGroup 時第二級別也要有 */
      const shouldHasIcon = level === 0 || (isGroup && level === 1)

      //  get defaultTitle by menuItemRender
      const iconDom = getIcon(
        item.icon,
        `${baseClassName}-icon ${this.props?.hashId}`,
      )
      /**
       * 如果沒有icon在收起的時候用首字母代替
       */
      const defaultIcon =
        collapsed && shouldHasIcon ? getMenuTitleSymbol(name) : null

      const defaultTitle = (
        <div
          className={classNames(
            `${baseClassName}-item-title`,
            this.props?.hashId,
            {
              [`${baseClassName}-item-title-collapsed`]: collapsed,
              [`${baseClassName}-item-title-collapsed-level-${level}`]:
                collapsed,
              [`${baseClassName}-group-item-title`]: menuType === 'group',
              [`${baseClassName}-item-collapsed-show-title`]:
                menu?.collapsedShowTitle && collapsed,
            },
          )}
        >
          {/* 收起的時候group模式就不要展示icon了，放不下 */}
          {menuType === 'group' && collapsed ? null : shouldHasIcon &&
            iconDom ? (
            <span
              className={`${baseClassName}-item-icon ${this.props?.hashId}`.trim()}
            >
              {iconDom}
            </span>
          ) : (
            defaultIcon
          )}
          <span
            className={classNames(
              `${baseClassName}-item-text`,
              this.props?.hashId,
              {
                [`${baseClassName}-item-text-has-icon`]:
                  menuType !== 'group' &&
                  shouldHasIcon &&
                  (iconDom || defaultIcon),
              },
            )}
          >
            {name}
          </span>
        </div>
      )

      // subMenu only title render
      const title = subMenuItemRender
        ? subMenuItemRender({ ...item, isUrl: false }, defaultTitle, this.props)
        : defaultTitle

      const childrenList = this.getNavMenuItems(children, level + 1)

      // 如果收起來，沒有子菜單了，就不需要展示 group，所以 level 不增加
      if (
        isGroup &&
        level === 0 &&
        this.props.collapsed &&
        !menu.collapsedShowGroupTitle
      ) {
        return this.getNavMenuItems(children, level)
      }

      return [
        {
          type: menuType,
          key: item.key! || item.path!,
          label: title,
          onClick: isGroup ? undefined : item.onTitleClick,
          children: childrenList,
          className: classNames({
            [`${baseClassName}-group`]: menuType === 'group',
            [`${baseClassName}-submenu`]: menuType !== 'group',
            [`${baseClassName}-submenu-has-icon`]:
              menuType !== 'group' && shouldHasIcon && iconDom,
          }),
        } as ItemType,
        isGroup && level === 0
          ? ({
            type: 'divider',
            prefixCls,
            className: `${baseClassName}-divider`,
            key: (item.key! || item.path!) + '-group-divider',
            style: {
              padding: 0,
              borderBlockEnd: 0,
              margin: this.props.collapsed ? '4px' : '6px 16px',
              marginBlockStart: this.props.collapsed ? 4 : 8,
              borderColor: designToken?.layout?.sider?.colorMenuItemDivider,
            },
          } as ItemType)
          : undefined,
      ].filter(Boolean) as ItemType[]
    }

    return {
      className: `${baseClassName}-menu-item`,
      disabled: item.disabled,
      key: item.key! || item.path!,
      onClick: item.onTitleClick,
      label: this.getMenuItemPath(item, level),
    }
  };

  getIntlName = (item: MenuDataItem) => {
    const { name, locale } = item
    const { menu, formatMessage } = this.props
    if (locale && menu?.locale !== false) {
      return formatMessage?.({
        id: locale,
        defaultMessage: name,
      })
    }
    return name
  };

  /**
   * 判斷是否是http連結.返回 Link 或 a Judge whether it is http link.return a or Link
   *
   * @memberof SiderMenu
   */
  getMenuItemPath = (item: MenuDataItem, level: number) => {
    const itemPath = this.conversionPath(item.path || '/')
    const {
      location = { pathname: '/' },
      isMobile,
      onCollapse,
      menuItemRender,
    } = this.props

    // if local is true formatMessage all name。
    const menuItemTitle = this.getIntlName(item)
    const { baseClassName, menu, collapsed } = this.props
    const isGroup = menu?.type === 'group'
    /** Menu 第一級可以有icon，或者 isGroup 時第二級別也要有 */
    const hasIcon = level === 0 || (isGroup && level === 1)
    const icon = !hasIcon
      ? null
      : getIcon(
        item.icon,
        `${baseClassName}-icon ${this.props?.hashId}`,
      )

    // 如果沒有 icon 在收起的時候用首字母代替
    const defaultIcon =
      collapsed && hasIcon ? getMenuTitleSymbol(menuItemTitle) : null

    let defaultItem = (
      <div
        key={itemPath}
        className={classNames(
          `${baseClassName}-item-title`,
          this.props?.hashId,
          {
            [`${baseClassName}-item-title-collapsed`]: collapsed,
            [`${baseClassName}-item-title-collapsed-level-${level}`]: collapsed,
            [`${baseClassName}-item-collapsed-show-title`]:
              menu?.collapsedShowTitle && collapsed,
          },
        )}
      >
        <span
          className={`${baseClassName}-item-icon ${this.props?.hashId}`.trim()}
          style={{
            display: defaultIcon === null && !icon ? 'none' : '',
          }}
        >
          {icon || <span className="muiicon">{defaultIcon}</span>}
        </span>
        <span
          className={classNames(
            `${baseClassName}-item-text`,
            this.props?.hashId,
            {
              [`${baseClassName}-item-text-has-icon`]:
                hasIcon && (icon || defaultIcon),
            },
          )}
        >
          {menuItemTitle}
        </span>
      </div>
    )
    const isHttpUrl = isUrl(itemPath)

    // Is it a http link
    if (isHttpUrl) {
      defaultItem = (
        <span
          key={itemPath}
          onClick={() => {
            window?.open?.(itemPath, '_blank')
          }}
          className={classNames(
            `${baseClassName}-item-title`,
            this.props?.hashId,
            {
              [`${baseClassName}-item-title-collapsed`]: collapsed,
              [`${baseClassName}-item-title-collapsed-level-${level}`]:
                collapsed,
              [`${baseClassName}-item-link`]: true,
              [`${baseClassName}-item-collapsed-show-title`]:
                menu?.collapsedShowTitle && collapsed,
            },
          )}
        >
          <span
            className={`${baseClassName}-item-icon ${this.props?.hashId}`.trim()}
            style={{
              display: defaultIcon === null && !icon ? 'none' : '',
            }}
          >
            {icon || <span className="muiicon">{defaultIcon}</span>}
          </span>
          <span
            className={classNames(
              `${baseClassName}-item-text`,
              this.props?.hashId,
              {
                [`${baseClassName}-item-text-has-icon`]:
                  hasIcon && (icon || defaultIcon),
              },
            )}
          >
            {menuItemTitle}
          </span>
        </span>
      )
    }
    if (menuItemRender) {
      const renderItemProps = {
        ...item,
        isUrl: isHttpUrl,
        itemPath,
        isMobile,
        replace: itemPath === location.pathname,
        onClick: () => onCollapse && onCollapse(true),
        children: undefined,
      }
      return level === 0 ? (
        <MenuItemTooltip
          collapsed={collapsed}
          title={menuItemTitle}
          disable={item.disabledTooltip}
        >
          {menuItemRender(renderItemProps, defaultItem, this.props)}
        </MenuItemTooltip>
      ) : (
        menuItemRender(renderItemProps, defaultItem, this.props)
      )
    }
    return level === 0 ? (
      <MenuItemTooltip
        collapsed={collapsed}
        title={menuItemTitle}
        disable={item.disabledTooltip}
      >
        {defaultItem}
      </MenuItemTooltip>
    ) : (
      defaultItem
    )
  };

  conversionPath = (path: string) => {
    if (path && path.indexOf('http') === 0) {
      return path
    }
    return `/${path || ''}`.replace(/\/+/g, '/')
  };
}

/**
 * 生成openKeys 的對象，因為設置了openKeys 就會變成受控，所以需要一個空對象
 *
 * @param BaseMenuProps
 */
const getOpenKeysProps = (
  openKeys: (string | number)[] | false,
  { layout, collapsed }: BaseMenuProps,
): {
  openKeys?: undefined | string[]
} => {
  let openKeysProps = {}

  if (openKeys && !collapsed && ['side', 'mix'].includes(layout || 'mix')) {
    openKeysProps = {
      openKeys,
    }
  }
  return openKeysProps
}

const BaseMenu: React.FC<BaseMenuProps & PrivateSiderMenuProps> = (props) => {
  const {
    mode,
    className,
    handleOpenChange,
    style,
    menuData,
    prefixCls,
    menu,
    matchMenuKeys,
    selectedKeys: propsSelectedKeys,
    onSelect,
    menuRenderType,
    openKeys: propsOpenKeys,
  } = props

  const { dark, token: designToken } = useContext(ProProvider)

  const baseClassName = `${prefixCls}-base-menu-${mode}`
  // 用於減少 defaultOpenKeys 計算的組件
  const defaultOpenKeysRef = useRef<string[]>([])

  const [defaultOpenAll, setDefaultOpenAll] = useMountMergeState(
    menu?.defaultOpenAll,
  )

  const [openKeys, setOpenKeys] = useMountMergeState<
    (string | number)[] | false
  >(
    () => {
      if (menu?.defaultOpenAll) {
        return getOpenKeysFromMenuData(menuData) || []
      }
      if (propsOpenKeys === false) {
        return false
      }
      return []
    },
    {
      value: propsOpenKeys === false ? undefined : propsOpenKeys,
      onChange: handleOpenChange as any,
    },
  )

  const [selectedKeys, setSelectedKeys] = useMountMergeState<
    string[] | undefined
  >([], {
    value: propsSelectedKeys,
    onChange: onSelect
      ? (keys) => {
        if (onSelect && keys) {
          onSelect(keys as any)
        }
      }
      : undefined,
  })
  useEffect(() => {
    if (menu?.defaultOpenAll || propsOpenKeys === false) {
      return
    }
    if (matchMenuKeys) {
      setOpenKeys(matchMenuKeys)
      setSelectedKeys(matchMenuKeys)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchMenuKeys.join('-')])

  useEffect(
    () => {
      // if pathname can't match, use the nearest parent's key
      if (matchMenuKeys.join('-') !== (selectedKeys || []).join('-')) {
        setSelectedKeys(matchMenuKeys)
      }
      if (
        !defaultOpenAll &&
        propsOpenKeys !== false &&
        matchMenuKeys.join('-') !== (openKeys || []).join('-')
      ) {
        let newKeys: (string | number)[] | false = matchMenuKeys
        // 如果不自動關閉，我需要把 openKeys 放進去
        if (menu?.autoClose === false) {
          newKeys = Array.from(
            new Set([...matchMenuKeys, ...(openKeys || [])]),
          )
        }
        setOpenKeys(newKeys)
      } else if (menu?.ignoreFlatMenu && defaultOpenAll) {
        // 忽略用戶手動摺疊過的菜單狀態，摺疊按鈕切換之後也可實現默認展開所有菜單
        setOpenKeys(getOpenKeysFromMenuData(menuData))
      } else {
        setDefaultOpenAll(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [matchMenuKeys.join('-')],
  )

  const openKeysProps = useMemo(
    () => getOpenKeysProps(openKeys, props),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [openKeys && openKeys.join(','), props.layout, props.collapsed],
  )
  const { wrapSSR, hashId } = useStyle(baseClassName, mode)

  const menuUtils = useMemo(() => {
    return new MenuUtil({
      ...props,
      token: designToken,
      menuRenderType,
      baseClassName,
      hashId,
    })
  }, [props, designToken, menuRenderType, baseClassName, hashId])

  if (menu?.loading) {
    return (
      <div
        style={
          mode?.includes('inline')
            ? { padding: 24 }
            : {
              marginBlockStart: 16,
            }
        }
      >
        <Skeleton
          active
          title={false}
          paragraph={{
            rows: mode?.includes('inline') ? 6 : 1,
          }}
        />
      </div>
    )
  }

  // 這次 openKeys === false 的時候的情況，這種情況下幫用戶選中一次
  // 第二此不會使用，所以用了 defaultOpenKeys
  // 這裡返回 null，是為了讓 defaultOpenKeys 生效
  if (props.openKeys === false && !props.handleOpenChange) {
    defaultOpenKeysRef.current = matchMenuKeys
  }

  const finallyData = props.postMenuData
    ? props.postMenuData(menuData)
    : menuData

  if (finallyData && finallyData?.length < 1) {
    return null
  }
  return wrapSSR(
    <Menu
      {...openKeysProps}
      _internalDisableMenuItemTitleTooltip
      key="Menu"
      mode={mode}
      inlineIndent={16}
      defaultOpenKeys={defaultOpenKeysRef.current}
      theme={dark ? 'dark' : 'light'}
      selectedKeys={selectedKeys}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        ...style,
      }}
      className={classNames(className, hashId, baseClassName, {
        [`${baseClassName}-horizontal`]: mode === 'horizontal',
        [`${baseClassName}-collapsed`]: props.collapsed,
      })}
      items={menuUtils.getNavMenuItems(finallyData, 0)}
      onOpenChange={(_openKeys) => {
        if (!props.collapsed) {
          setOpenKeys(_openKeys)
        }
      }}
      {...props.menuProps}
    />,
  )
}

export { BaseMenu }
