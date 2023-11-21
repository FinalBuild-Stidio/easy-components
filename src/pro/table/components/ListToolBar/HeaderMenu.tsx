import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { ProProvider } from '@/providers'
import { Space, Tabs } from '@/base'
import classNames from 'classnames'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, { useContext } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

export type ListToolBarMenuItem = {
  key: React.Key
  label: React.ReactNode
  disabled?: boolean
}

export type ListToolBarHeaderMenuProps = {
  type?: 'inline' | 'dropdown' | 'tab'
  activeKey?: React.Key
  defaultActiveKey?: React.Key
  items?: ListToolBarMenuItem[]
  onChange?: (activeKey?: React.Key) => void
  prefixCls?: string
}

const HeaderMenu: React.FC<ListToolBarHeaderMenuProps> = (props) => {
  const { hashId } = useContext(ProProvider)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const {
    items = [],
    type = 'inline',
    prefixCls,
    activeKey: propActiveKey,
    defaultActiveKey,
  } = props

  const [activeKey, setActiveKey] = useMergedState<React.Key>(
    propActiveKey || (defaultActiveKey as React.Key),
    {
      value: propActiveKey,
      onChange: props.onChange,
    },
  )

  if (items.length < 1) {
    return null
  }

  const activeItem =
    items.find((item) => {
      return item.key === activeKey
    }) || items[0]

  if (type === 'inline') {
    return (
      <div
        className={classNames(
          `${prefixCls}-menu`,
          `${prefixCls}-inline-menu`,
          hashId,
        )}
      >
        {items.map((item, index) => (
          <div
            key={item.key || index}
            onClick={() => {
              setActiveKey(item.key)
            }}
            className={classNames(
              `${prefixCls}-inline-menu-item`,
              activeItem.key === item.key
                ? `${prefixCls}-inline-menu-item-active`
                : undefined,
              hashId,
            )}
          >
            {item.label}
          </div>
        ))}
      </div>
    )
  }

  if (type === 'tab') {
    return (
      <Tabs
        items={items.map((item) => ({
          ...item,
          key: item.key?.toString(),
        }))}
        activeKey={activeItem.key as string}
        onTabClick={(key) => setActiveKey(key)}
      >
        {items?.map((item, index) => {
          /* 如果版本低于 4.23.0，不支持 items */
          return (
            <Tabs.TabPane
              {...item}
              key={item.key || index}
              tab={item.label}
            />
          )
        })}
      </Tabs>
    )
  }

  return (
    <div
      className={classNames(`${prefixCls}-menu`, `${prefixCls}-dropdownmenu`)}
    >
      <Space className={`${prefixCls}-dropdownmenu-label`} onClick={handleClick}>
        {activeItem.label}
        <ExpandMoreIcon />
      </Space>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}

        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items.map((item, index) => (
          <MenuItem
            key={item.key}
            disabled={item.disabled}
            selected={activeItem.key === item.key}
            onClick={() => {
              setActiveKey(item.key)
              handleClose()
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default HeaderMenu
