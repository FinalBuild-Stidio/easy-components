import { useIntl } from 'react-intl'
import React, { useContext, useMemo, useState } from 'react'
import classNames from 'classnames'
import ResizeObserver from 'rc-resize-observer'

import { proTheme } from '@/providers'
import {
  ConfigProvider,
  Input,
  TabPaneProps,
  Tabs,
  Tooltip,
} from '@/base'
import type { LabelTooltipType } from '@/base/form/FormItemLabel'
import type { SearchProps } from '@/base/input'
import type { ListToolBarHeaderMenuProps } from './HeaderMenu'
import HeaderMenu from './HeaderMenu'
import { useStyle } from './style'
import { compareVersions, LabelIconTip } from '../../../utils'

export type ListToolBarSetting = {
  icon: React.ReactNode
  tooltip?: LabelTooltipType | string
  key?: string
  onClick?: (key?: string) => void
}

/** 默認直接導出了 rc 組件中的 Tab.Pane 組件。 */
type TabPane = TabPaneProps & {
  key?: string
}

export type ListToolBarTabs = {
  activeKey?: string
  defaultActiveKey?: string
  onChange?: (activeKey: string) => void
  items?: TabPane[]
}

export type ListToolBarMenu = ListToolBarHeaderMenuProps

type SearchPropType =
  | (SearchProps & {
    onSearch: (searchValue: string) => Promise<false | void> | false | void
  })
  | React.ReactNode
  | boolean
type SettingPropType = React.ReactNode | ListToolBarSetting

export type ListToolBarProps = {
  prefixCls?: string
  className?: string
  style?: React.CSSProperties
  /** 標題 */
  title?: React.ReactNode
  /** 副標題 */
  subTitle?: React.ReactNode
  /** 標題提示 */
  tooltip?: string | LabelTooltipType
  /** 搜索輸入欄相關配置 */
  search?: SearchPropType
  /** 搜索回調 */
  onSearch?: (keyWords: string) => void
  /** 工具欄右側操作區 */
  actions?: React.ReactNode[]
  /** 工作欄右側設置區 */
  settings?: SettingPropType[]
  /** 是否多行展示 */
  multipleLine?: boolean
  /** 過濾區，通常配合 LightFilter 使用 */
  filter?: React.ReactNode
  /** 標籤頁配置，僅當 `multipleLine` 為 true 時有效 */
  tabs?: ListToolBarTabs
  /** 菜單配置 */
  menu?: ListToolBarMenu
}

/**
 * 取得配置區域 DOM Item
 *
 * @param setting 配置項
 */
function getSettingItem(setting: SettingPropType) {
  if (React.isValidElement(setting)) {
    return setting
  }
  if (setting) {
    const settingConfig: ListToolBarSetting = setting as ListToolBarSetting
    const { icon, tooltip, onClick, key } = settingConfig
    if (icon && tooltip) {
      return (
        <Tooltip title={tooltip as React.ReactNode}>
          <span
            key={key}
            onClick={() => {
              if (onClick) {
                onClick(key)
              }
            }}
          >
            {icon}
          </span>
        </Tooltip>
      )
    }
    return icon
  }
  return null
}

const ListToolBarTabBar: React.FC<{
  prefixCls: string
  filtersNode: React.ReactNode
  multipleLine: boolean
  tabs: ListToolBarProps['tabs']
}> = ({ prefixCls, tabs = {}, multipleLine, filtersNode }) => {
  if (!multipleLine) return null
  return (
    <div className={`${prefixCls}-extra-line`}>
      {tabs.items && tabs.items.length ? (
        <Tabs
          style={{
            width: '100%',
          }}
          defaultActiveKey={tabs.defaultActiveKey}
          activeKey={tabs.activeKey}
          items={tabs.items.map((item, index) => ({
            label: item.tab,
            ...item,
            key: item.key?.toString() || index?.toString(),
          }))}
          onChange={tabs.onChange}
          tabBarExtraContent={filtersNode}
        >
          {tabs.items?.map((item, index) => <Tabs.TabPane {...item} key={item.key || index} tab={item.tab} />)}
        </Tabs>
      ) : (
        filtersNode
      )}
    </div>
  )
}
const ListToolBar: React.FC<ListToolBarProps> = ({
  prefixCls: customizePrefixCls,
  title,
  subTitle,
  tooltip,
  className,
  style,
  search,
  onSearch,
  multipleLine = false,
  filter,
  actions = [],
  settings = [],
  tabs = {},
  menu,
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const { token } = proTheme.useToken()
  const prefixCls = getPrefixCls('pro-table-list-toolbar', customizePrefixCls)

  const { wrapSSR, hashId } = useStyle(prefixCls)

  const intl = useIntl()

  const [isMobile, setIsMobile] = useState(false)

  const placeholder = intl.formatMessage({
    id: 'tableForm.inputPlaceholder',
    defaultMessage: '請輸入',
  })

  /**
   * 取得搜索欄 DOM
   *
   * @param search 搜索框相關配置
   */
  const searchNode = useMemo(() => {
    if (!search) {
      return null
    }
    if (React.isValidElement(search)) {
      return search
    }
    return (
      <Input.Search
        style={{ width: 200 }}
        placeholder={placeholder}
        {...(search as SearchProps)}
        onSearch={async (...restParams) => {
          const success = await (search as any).onSearch?.(...restParams)
          if (success !== false) {
            onSearch?.(restParams?.[0])
          }
        }}
      />
    )
  }, [placeholder, onSearch, search])

  /** 輕量篩選組件 */
  const filtersNode = useMemo(() => {
    if (filter)
      return (
        <div className={`${prefixCls}-filter ${hashId}`.trim()}>{filter}</div>
      )
    return null
  }, [filter, hashId, prefixCls])

  /** 有沒有 title，需要結合多個場景判斷 */
  const hasTitle = useMemo(
    () => menu || title || subTitle || tooltip,
    [menu, subTitle, title, tooltip],
  )

  /** 沒有 key 的時候幫忙加一下 key 不加的話很煩人 */
  const actionDom = useMemo(() => {
    if (!Array.isArray(actions)) {
      return actions
    }
    if (actions.length < 1) {
      return null
    }
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: token.marginXS,
        }}
      >
        {actions.map((action, index) => {
          if (!React.isValidElement(action)) {
            // eslint-disable-next-line react/no-array-index-key
            return <React.Fragment key={index}>{action}</React.Fragment>
          }
          return React.cloneElement(action, {
            // eslint-disable-next-line react/no-array-index-key
            key: index,
            ...action?.props,
          })
        })}
      </div>
    )
  }, [actions])

  const hasRight = useMemo(() => {
    return (
      (hasTitle && searchNode) ||
      (!multipleLine && filtersNode) ||
      actionDom ||
      settings?.length
    )
  }, [
    actionDom,
    filtersNode,
    hasTitle,
    multipleLine,
    searchNode,
    settings?.length,
  ])

  const hasLeft = useMemo(
    () => tooltip || title || subTitle || menu || (!hasTitle && searchNode),
    [hasTitle, menu, searchNode, subTitle, title, tooltip],
  )

  const leftTitleDom = useMemo(() => {
    // 保留dom是為了占位，不然 right 就變到左邊了
    if (!hasLeft && hasRight) {
      return <div className={`${prefixCls}-left ${hashId}`.trim()} />
    }

    // 減少 space 的dom，渲染的時候能節省點性能
    if (!menu && (hasTitle || !searchNode)) {
      return (
        <div className={`${prefixCls}-left ${hashId}`.trim()}>
          <div className={`${prefixCls}-title ${hashId}`.trim()}>
            <LabelIconTip tooltip={tooltip} label={title} subTitle={subTitle} />
          </div>
        </div>
      )
    }
    return (
      <div
        className={classNames(`${prefixCls}-left`, hashId, {
          [`${prefixCls}-left-has-tabs`]: menu?.type === 'tab',
          [`${prefixCls}-left-has-dropdown`]: menu?.type === 'dropdown',
          [`${prefixCls}-left-has-inline-menu`]: menu?.type === 'inline',
        })}
      >
        {hasTitle && !menu && (
          <div className={`${prefixCls}-title ${hashId}`.trim()}>
            <LabelIconTip tooltip={tooltip} label={title} subTitle={subTitle} />
          </div>
        )}

        {menu && (
          // 這裡面實現了 tabs 的邏輯
          <HeaderMenu {...menu} prefixCls={prefixCls} />
        )}
        {!hasTitle && searchNode ? (
          <div className={`${prefixCls}-search ${hashId}`.trim()}>
            {searchNode}
          </div>
        ) : null}
      </div>
    )
  }, [
    hasLeft,
    hasRight,
    hasTitle,
    hashId,
    menu,
    prefixCls,
    searchNode,
    subTitle,
    title,
    tooltip,
  ])

  const rightTitleDom = useMemo(() => {
    if (!hasRight) return null
    return (
      <div
        className={`${prefixCls}-right ${hashId}`.trim()}
        style={isMobile ? {} : { alignItems: 'center' }}
      >
        {!multipleLine ? filtersNode : null}
        {hasTitle && searchNode ? (
          <div className={`${prefixCls}-search ${hashId}`.trim()}>
            {searchNode}
          </div>
        ) : null}
        {actionDom}
        {settings?.length ? (
          <div className={`${prefixCls}-setting-items ${hashId}`.trim()}>
            {settings.map((setting, index) => {
              const settingItem = getSettingItem(setting)
              return (
                // eslint-disable-next-line react/no-array-index-key
                <div
                  key={index}
                  className={`${prefixCls}-setting-item ${hashId}`.trim()}
                >
                  {settingItem}
                </div>
              )
            })}
          </div>
        ) : null}
      </div>
    )
  }, [
    hasRight,
    prefixCls,
    hashId,
    isMobile,
    hasTitle,
    searchNode,
    multipleLine,
    filtersNode,
    actionDom,
    settings,
  ])

  const titleNode = useMemo(() => {
    if (!hasRight && !hasLeft) return null
    const containerClassName = classNames(`${prefixCls}-container`, hashId, {
      [`${prefixCls}-container-mobile`]: isMobile,
    })
    return (
      <div className={containerClassName}>
        {leftTitleDom}
        {rightTitleDom}
      </div>
    )
  }, [
    hasLeft,
    hasRight,
    hashId,
    isMobile,
    leftTitleDom,
    prefixCls,
    rightTitleDom,
  ])

  return wrapSSR(
    <ResizeObserver
      onResize={(size) => {
        if (size.width < 375 !== isMobile) {
          setIsMobile(size.width < 375)
        }
      }}
    >
      <div style={style} className={classNames(prefixCls, hashId, className)}>
        {titleNode}
        <ListToolBarTabBar
          filtersNode={filtersNode}
          prefixCls={prefixCls}
          tabs={tabs}
          multipleLine={multipleLine}
        />
      </div>
    </ResizeObserver>,
  )
}

export default ListToolBar
