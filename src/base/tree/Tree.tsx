import type { Component } from 'react'
import React from 'react'
import classNames from 'classnames'
import type { CSSMotionProps } from 'rc-motion'
import type { BasicDataNode, TreeProps as RcTreeProps } from 'rc-tree'
import RcTree from 'rc-tree'
import type { DataNode, Key } from 'rc-tree/lib/interface'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'

import initCollapseMotion from '../_util/motion'
import { ConfigContext } from '../Config'
import useStyle from './style'
import dropIndicatorRender from './utils/dropIndicator'
import SwitcherIconCom from './utils/iconUtil'

export type SwitcherIcon = React.ReactNode | ((props: IpassTreeNodeProps) => React.ReactNode)
export type TreeLeafIcon = React.ReactNode | ((props: IpassTreeNodeProps) => React.ReactNode)

export interface IpassTreeNodeAttribute {
  eventKey: string
  prefixCls: string
  className: string
  expanded: boolean
  selected: boolean
  checked: boolean
  halfChecked: boolean
  children: React.ReactNode
  title: React.ReactNode
  pos: string
  dragOver: boolean
  dragOverGapTop: boolean
  dragOverGapBottom: boolean
  isLeaf: boolean
  selectable: boolean
  disabled: boolean
  disableCheckbox: boolean
}

export interface IpassTreeNodeProps {
  className?: string
  checkable?: boolean
  disabled?: boolean
  disableCheckbox?: boolean
  title?: string | React.ReactNode
  key?: Key
  eventKey?: string
  isLeaf?: boolean
  checked?: boolean
  expanded?: boolean
  loading?: boolean
  selected?: boolean
  selectable?: boolean
  icon?: ((treeNode: IpassTreeNodeAttribute) => React.ReactNode) | React.ReactNode
  children?: React.ReactNode
  [customProp: string]: any
}

export interface IpassTreeNode extends Component<IpassTreeNodeProps, {}> { }

export interface IpassTreeNodeBaseEvent {
  node: IpassTreeNode
  nativeEvent: MouseEvent
}

export interface IpassTreeNodeCheckedEvent extends IpassTreeNodeBaseEvent {
  event: 'check'
  checked?: boolean
  checkedNodes?: IpassTreeNode[]
}

export interface IpassTreeNodeSelectedEvent extends IpassTreeNodeBaseEvent {
  event: 'select'
  selected?: boolean
  selectedNodes?: DataNode[]
}

export interface IpassTreeNodeExpandedEvent extends IpassTreeNodeBaseEvent {
  expanded?: boolean
}

export interface IpassTreeNodeMouseEvent {
  node: IpassTreeNode
  event: React.DragEvent<HTMLElement>
}

export interface IpassTreeNodeDragEnterEvent extends IpassTreeNodeMouseEvent {
  expandedKeys: Key[]
}

export interface IpassTreeNodeDropEvent {
  node: IpassTreeNode
  dragNode: IpassTreeNode
  dragNodesKeys: Key[]
  dropPosition: number
  dropToGap?: boolean
  event: React.MouseEvent<HTMLElement>
}

// [Legacy] Compatible for v3
export type TreeNodeNormal = DataNode

type DraggableFn = (node: DataNode) => boolean

interface DraggableConfig {
  icon?: React.ReactNode | false
  nodeDraggable?: DraggableFn
}

export interface TreeProps<T extends BasicDataNode = DataNode>
  extends Omit<
    RcTreeProps<T>,
    'prefixCls' | 'showLine' | 'direction' | 'draggable' | 'icon' | 'switcherIcon'
  > {
  showLine?: boolean | { showLeafIcon: boolean | TreeLeafIcon }
  className?: string
  /** Whether to support multiple selection */
  multiple?: boolean
  /** Whether to automatically expand the parent node */
  autoExpandParent?: boolean
  /** Node selection in Checkable state is fully controlled (the selected state of parent and child nodes is no longer associated) */
  checkStrictly?: boolean
  /** Whether to support selection */
  checkable?: boolean
  /** whether to disable the tree */
  disabled?: boolean
  /** Expand all tree nodes by default */
  defaultExpandAll?: boolean
  /** Expand the corresponding tree node by default */
  defaultExpandParent?: boolean
  /** Expand the specified tree node by default */
  defaultExpandedKeys?: Key[]
  /** (Controlled) Expand the specified tree node */
  expandedKeys?: Key[]
  /** (Controlled) Tree node with checked checkbox */
  checkedKeys?: Key[] | { checked: Key[]; halfChecked: Key[] }
  /** Tree node with checkbox checked by default */
  defaultCheckedKeys?: Key[]
  /** (Controlled) Set the selected tree node */
  selectedKeys?: Key[]
  /** Tree node selected by default */
  defaultSelectedKeys?: Key[]
  selectable?: boolean
  /** Click on the tree node to trigger */
  filterIpassTreeNode?: (node: IpassTreeNode) => boolean
  loadedKeys?: Key[]
  /** Set the node to be draggable (IE>8) */
  draggable?: DraggableFn | boolean | DraggableConfig
  style?: React.CSSProperties
  showIcon?: boolean
  icon?:
  | ((nodeProps: IpassTreeNodeAttribute) => React.ReactNode)
  | React.ReactNode
  | RcTreeProps<T>['icon']
  switcherIcon?: SwitcherIcon | RcTreeProps<T>['switcherIcon']
  prefixCls?: string
  children?: React.ReactNode
  blockNode?: boolean
}

const Tree = React.forwardRef<RcTree, TreeProps>((props, ref) => {
  const { getPrefixCls, virtual, tree } = React.useContext(ConfigContext)
  const {
    prefixCls: customizePrefixCls,
    className,
    showIcon = false,
    showLine,
    switcherIcon,
    blockNode = false,
    children,
    checkable = false,
    selectable = true,
    draggable,
    motion: customMotion,
    style,
  } = props

  const prefixCls = getPrefixCls('tree', customizePrefixCls)
  const rootPrefixCls = getPrefixCls()

  const motion: CSSMotionProps = customMotion ?? {
    ...initCollapseMotion(rootPrefixCls),
    motionAppear: false,
  }

  const newProps = {
    ...props,
    checkable,
    selectable,
    showIcon,
    motion,
    blockNode,
    showLine: Boolean(showLine),
    dropIndicatorRender,
  }

  const [wrapSSR, hashId] = useStyle(prefixCls)

  const draggableConfig = React.useMemo(() => {
    if (!draggable) {
      return false
    }

    let mergedDraggable: DraggableConfig = {}
    switch (typeof draggable) {
      case 'function':
        mergedDraggable.nodeDraggable = draggable
        break
      case 'object':
        mergedDraggable = { ...draggable }
        break
      default:
        break
      // Do nothing
    }

    if (mergedDraggable.icon !== false) {
      mergedDraggable.icon = mergedDraggable.icon || <DragIndicatorIcon />
    }

    return mergedDraggable
  }, [draggable])

  const renderSwitcherIcon = (nodeProps: IpassTreeNodeProps) => (
    <SwitcherIconCom
      prefixCls={prefixCls}
      // @ts-ignore
      switcherIcon={switcherIcon}
      treeNodeProps={nodeProps}
      showLine={showLine}
    />
  )

  return wrapSSR(
    <RcTree
      itemHeight={20}
      ref={ref}
      virtual={virtual}
      {...newProps}
      // newProps may contain style so declare style below it
      style={{ ...tree?.style, ...style }}
      prefixCls={prefixCls}
      className={classNames(
        {
          [`${prefixCls}-icon-hide`]: !showIcon,
          [`${prefixCls}-block-node`]: blockNode,
          [`${prefixCls}-unselectable`]: !selectable,
        },
        tree?.className,
        className,
        hashId,
      )}
      checkable={checkable ? <span className={`${prefixCls}-checkbox-inner`} /> : checkable}
      selectable={selectable}
      // @ts-ignore
      switcherIcon={renderSwitcherIcon}
      draggable={draggableConfig}
    >
      {children}
    </RcTree>,
  )
})

if (process.env.NODE_ENV !== 'production') {
  Tree.displayName = 'Tree'
}

export default Tree
