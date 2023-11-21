import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import type { MenuItemProps } from '@/base'
import { ConfigProvider } from '@/base'
import classnames from 'classnames'
import React, { useContext } from 'react'

interface MenuItems extends MenuItemProps {
  name: React.ReactNode
  key: string
  title?: string
}

export type DropdownProps = {
  className?: string
  style?: React.CSSProperties
  menus?: MenuItems[]
  onSelect?: (key: string) => void
  children?: React.ReactNode
}

/**
 * 一個簡單的下拉菜單
 *
 * @param param0
 */
const DropdownButton: React.FC<DropdownProps> = ({
  children,
  menus,
  onSelect,
  className,
  style,
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)

  const tempClassName = getPrefixCls('pro-table-dropdown')

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        className={classnames(tempClassName, className)}
        style={style}
        endIcon={<ExpandMoreIcon />}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {children}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}

        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menus?.map((item) => (
          <MenuItem
            key={item.key}
            onClick={() => {
              onSelect && onSelect(item.key)
              handleClose()
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

const TableDropdown: React.FC<DropdownProps> & {
  Button: typeof DropdownButton
} = ({ className: propsClassName, style, onSelect, menus = [], children }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const className = getPrefixCls('pro-table-dropdown')

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <a
        className={classnames(className, propsClassName)}
        style={style}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {children || <MoreHorizIcon />}
      </a>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}

        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menus.map(({ key, name, ...rest }) => (
          <MenuItem
            key={key}
            onClick={() => {
              onSelect && onSelect(key)
              handleClose()
            }}
            // FIXME: Not sure why this is needed, and what it title in original Dropdown
            title={rest.title as string}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

TableDropdown.Button = DropdownButton

export default TableDropdown
