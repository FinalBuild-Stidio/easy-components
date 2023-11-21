import { useIntl } from 'react-intl'
import React, { useContext } from 'react'

import HeightIcon from '@mui/icons-material/Height'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'

import { Tooltip } from '@/components/base'
import { TableContext } from '../../Store/Provide'

import type { SizeType } from '@/components/base/Config/SizeContext'

const DensityIcon = () => {
  const counter = useContext(TableContext)
  const intl = useIntl()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const items = [
    {
      key: 'large',
      label: intl.formatMessage({ id: 'tableToolBar.densityLarger', defaultMessage: '預設' }),
    },
    {
      key: 'medium',
      label: intl.formatMessage({ id: 'tableToolBar.densityMiddle', defaultMessage: '中等' }),
    },
    {
      key: 'small',
      label: intl.formatMessage({ id: 'tableToolBar.densitySmall', defaultMessage: '緊湊' }),
    },
  ]

  return (
    <>
      <Tooltip title={intl.formatMessage({ id: 'tableToolBar.density', defaultMessage: '表格密度' })}>
        <IconButton onClick={handleClick}>
          <HeightIcon />
        </IconButton>
      </Tooltip>
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
            selected={counter.tableSize === item.key}
            onClick={() => {
              counter.setTableSize?.(item.key as SizeType)
              handleClose()
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default React.memo(DensityIcon)
