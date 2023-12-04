import type { ReactNode } from 'react'
import * as React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CircularProgress from '@mui/material/CircularProgress'
import SearchIcon from '@mui/icons-material/Search'

import { devUseWarning } from '../_util/warning'

type RenderNode = React.ReactNode | ((props: any) => React.ReactNode)

export default function useIcons({
  suffixIcon,
  clearIcon,
  menuItemSelectedIcon,
  removeIcon,
  loading,
  multiple,
  hasFeedback,
  prefixCls,
  showSuffixIcon,
  feedbackIcon,
  showArrow,
  componentName,
}: {
  suffixIcon?: React.ReactNode
  clearIcon?: RenderNode
  menuItemSelectedIcon?: RenderNode
  removeIcon?: RenderNode
  loading?: boolean
  multiple?: boolean
  hasFeedback?: boolean
  feedbackIcon?: ReactNode
  prefixCls: string
  showSuffixIcon?: boolean
  showArrow?: boolean
  componentName: string
}) {
  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning(componentName)

    warning.deprecated(!clearIcon, 'clearIcon', 'allowClear={{ clearIcon: React.ReactNode }}')
  }

  // Clear Icon
  const mergedClearIcon = clearIcon ?? <CloseIcon />

  // Validation Feedback Icon
  const getSuffixIconNode = (arrowIcon?: ReactNode) => {
    if (suffixIcon === null && !hasFeedback && !showArrow) {
      return null
    }
    return (
      <>
        {showSuffixIcon !== false && arrowIcon}
        {hasFeedback && feedbackIcon}
      </>
    )
  }

  // Arrow item icon
  let mergedSuffixIcon = null
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon)
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode(<CircularProgress />)
  } else {
    const iconCls = `${prefixCls}-suffix`
    mergedSuffixIcon = ({ open, showSearch }: { open: boolean; showSearch: boolean }) => {
      if (open && showSearch) {
        return getSuffixIconNode(<SearchIcon className={iconCls} />)
      }
      return getSuffixIconNode(<ExpandMoreIcon className={iconCls} />)
    }
  }

  // Checked item icon
  let mergedItemIcon = null
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon
  } else if (multiple) {
    mergedItemIcon = <CheckIcon />
  } else {
    mergedItemIcon = null
  }

  let mergedRemoveIcon = null
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon
  } else {
    mergedRemoveIcon = <CloseIcon />
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon,
  }
}
