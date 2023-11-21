import * as React from 'react'
import classNames from 'classnames'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArticleIcon from '@mui/icons-material/Article'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

import CircularProgress from '@mui/material/CircularProgress'

import { cloneElement, isValidElement } from '../../_util/reactNode'
import type { IpassTreeNodeProps, SwitcherIcon, TreeLeafIcon } from '../Tree'

interface SwitcherIconProps {
  prefixCls: string
  treeNodeProps: IpassTreeNodeProps
  switcherIcon?: SwitcherIcon
  showLine?: boolean | { showLeafIcon: boolean | TreeLeafIcon }
}

const SwitcherIconCom: React.FC<SwitcherIconProps> = (props) => {
  const { prefixCls, switcherIcon, treeNodeProps, showLine } = props

  const { isLeaf, expanded, loading } = treeNodeProps

  if (loading) {
    return <CircularProgress className={`${prefixCls}-switcher-loading-icon`} />
  }
  let showLeafIcon: boolean | TreeLeafIcon
  if (showLine && typeof showLine === 'object') {
    showLeafIcon = showLine.showLeafIcon
  }

  if (isLeaf) {
    if (!showLine) {
      return null
    }

    if (typeof showLeafIcon !== 'boolean' && !!showLeafIcon) {
      const leafIcon =
        typeof showLeafIcon === 'function' ? showLeafIcon(treeNodeProps) : showLeafIcon
      const leafCls = `${prefixCls}-switcher-line-custom-icon`

      if (isValidElement(leafIcon)) {
        return cloneElement(leafIcon, {
          className: classNames(leafIcon.props.className || '', leafCls),
        })
      }

      return leafIcon as unknown as React.ReactElement
    }

    return showLeafIcon ? (
      <ArticleIcon className={`${prefixCls}-switcher-line-icon`} />
    ) : (
      <span className={`${prefixCls}-switcher-leaf-line`} />
    )
  }

  const switcherCls = `${prefixCls}-switcher-icon`

  const switcher = typeof switcherIcon === 'function' ? switcherIcon(treeNodeProps) : switcherIcon

  if (isValidElement(switcher)) {
    return cloneElement(switcher, {
      className: classNames(switcher.props.className || '', switcherCls),
    })
  }

  if (switcher !== undefined) {
    return switcher as unknown as React.ReactElement
  }

  if (showLine) {
    return expanded ? (
      <IndeterminateCheckBoxIcon className={`${prefixCls}-switcher-line-icon`} />
    ) : (
      <CheckBoxIcon className={`${prefixCls}-switcher-line-icon`} />
    )
  }
  return <ArrowDropDownIcon className={switcherCls} />
}

export default SwitcherIconCom
