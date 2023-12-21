import { useIntl } from '@caps.dev/react-intl'
import SettingsIcon from '@mui/icons-material/Settings'
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom'
import VerticalAlignCenter from '@mui/icons-material/VerticalAlignCenter'
import VerticalAlignTop from '@mui/icons-material/VerticalAlignTop'

import { ProProvider } from '@/providers'
import type { TableColumnType } from '@/base'
import { Checkbox, ConfigProvider, Popover, Space, Tooltip, Tree } from '@/base'
import type { CheckboxChangeEvent } from '@/base/checkbox'
import type { DataNode } from '@/base/tree'
import classNames from 'classnames'
import omit from 'omit.js'
import React, { useContext, useEffect, useMemo, useRef } from 'react'
import type { ColumnsState } from '../../Store/Provide'
import { TableContext } from '../../Store/Provide'
import type { ProColumns } from '../../typing'
import { genColumnKey } from '../../utils/index'
import type { SettingOptionType } from '../ToolBar'
import { runFunction, useRefFunction } from '../../../utils'
import { useStyle } from './style'

type ColumnSettingProps<T = any> = SettingOptionType & {
  columns: TableColumnType<T>[]
}

const ToolTipIcon: React.FC<{
  title: string
  columnKey: string | number
  show: boolean
  fixed: 'left' | 'right' | undefined
  children?: React.ReactNode
}> = ({ title, show, children, columnKey, fixed }) => {
  const { columnsMap, setColumnsMap } = useContext(TableContext)
  if (!show) {
    return null
  }
  return (
    <Tooltip title={title}>
      <span
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
          const config = columnsMap[columnKey] || {}
          const columnKeyMap = {
            ...columnsMap,
            [columnKey]: { ...config, fixed } as ColumnsState,
          }
          setColumnsMap(columnKeyMap)
        }}
      >
        {children}
      </span>
    </Tooltip>
  )
}

const CheckboxListItem: React.FC<{
  columnKey: string | number
  className?: string
  title?: React.ReactNode
  fixed?: boolean | 'left' | 'right'
  showListItemOption?: boolean
  isLeaf?: boolean
}> = ({ columnKey, isLeaf, title, className, fixed, showListItemOption }) => {
  const intl = useIntl()
  const { hashId } = useContext(ProProvider)

  const dom = (
    <span className={`${className}-list-item-option ${hashId}`.trim()}>
      <ToolTipIcon
        columnKey={columnKey}
        fixed="left"
        title={intl.formatMessage({
          id: 'tableToolBar.leftPin',
          defaultMessage: '固定在列首',
        })}
        show={fixed !== 'left'}
      >
        <VerticalAlignTop />
      </ToolTipIcon>
      <ToolTipIcon
        columnKey={columnKey}
        fixed={undefined}
        title={intl.formatMessage({
          id: 'tableToolBar.noFixed',
          defaultMessage: '不固定',
        })}
        show={!!fixed}
      >
        <VerticalAlignCenter />
      </ToolTipIcon>
      <ToolTipIcon
        columnKey={columnKey}
        fixed="right"
        title={intl.formatMessage({
          id: 'tableToolBar.rightPin',
          defaultMessage: '固定在列尾',
        })}
        show={fixed !== 'right'}
      >
        <VerticalAlignBottomIcon />
      </ToolTipIcon>
    </span>
  )
  return (
    <span className={`${className}-list-item ${hashId}`.trim()} key={columnKey}>
      <div className={`${className}-list-item-title ${hashId}`.trim()}>
        {title}
      </div>
      {showListItemOption && !isLeaf ? dom : null}
    </span>
  )
}

const CheckboxList: React.FC<{
  list: (ProColumns<any> & { index?: number })[]
  className?: string
  title: string
  draggable: boolean
  checkable: boolean
  showListItemOption: boolean
  showTitle?: boolean
  listHeight?: number
}> = ({
  list,
  draggable,
  checkable,
  showListItemOption,
  className,
  showTitle = true,
  title: listTitle,
  listHeight = 280,
}) => {
    const { hashId } = useContext(ProProvider)

    const { columnsMap, setColumnsMap, sortKeyColumns, setSortKeyColumns } =
      useContext(TableContext)
    const show = list && list.length > 0
    const treeDataConfig = useMemo(() => {
      if (!show) return {}
      const checkedKeys: string[] = []
      const treeMap = new Map<string | number, DataNode>()

      const loopData = (
        data: any[],
        parentConfig?: ColumnsState & {
          columnKey: string
        },
      ): DataNode[] =>
        data.map(({ key, dataIndex, children, ...rest }) => {
          const columnKey = genColumnKey(
            key,
            [parentConfig?.columnKey, rest.index].filter(Boolean).join('-'),
          )
          const config = columnsMap[columnKey || 'null'] || { show: true }
          if (config.show !== false && !children) {
            checkedKeys.push(columnKey)
          }

          const item: DataNode = {
            key: columnKey,
            ...omit(rest, ['className']),
            selectable: false,
            disabled: config.disable === true,
            disableCheckbox:
              typeof config.disable === 'boolean'
                ? config.disable
                : config.disable?.checkbox,
            isLeaf: parentConfig ? true : undefined,
          }
          if (children) {
            item.children = loopData(children, {
              ...config,
              columnKey,
            })
            // 如果children 已經全部是show了，把自己也設置為show
            if (
              item.children?.every((childrenItem: any) =>
                checkedKeys?.includes(childrenItem.key as string),
              )
            ) {
              checkedKeys.push(columnKey)
            }
          }
          treeMap.set(key, item)
          return item
        })
      return { list: loopData(list), keys: checkedKeys, map: treeMap }
    }, [columnsMap, list, show])

    /** 移動到指定的位置 */
    const move = useRefFunction(
      (id: React.Key, targetId: React.Key, dropPosition: number) => {
        const newMap = { ...columnsMap }
        const newColumns = [...sortKeyColumns]
        const findIndex = newColumns.findIndex((columnKey) => columnKey === id)
        const targetIndex = newColumns.findIndex(
          (columnKey) => columnKey === targetId,
        )
        const isDownWard = dropPosition > findIndex
        if (findIndex < 0) return
        const targetItem = newColumns[findIndex]
        newColumns.splice(findIndex, 1)

        if (dropPosition === 0) {
          newColumns.unshift(targetItem)
        } else {
          newColumns.splice(
            isDownWard ? targetIndex : targetIndex + 1,
            0,
            targetItem,
          )
        }
        // 重新生成排序數組
        newColumns.forEach((key, order) => {
          newMap[key] = { ...(newMap[key] || {}), order }
        })
        // 更新數組
        setColumnsMap(newMap)
        setSortKeyColumns(newColumns)
      },
    )

    /** 選中反選功能 */
    const onCheckTree = useRefFunction((e) => {
      const newColumnMap = { ...columnsMap }

      const loopSetShow = (key: string | number) => {
        const newSetting = { ...newColumnMap[key] }
        newSetting.show = e.checked
        // 如果含有子節點，也要選中
        if (treeDataConfig.map?.get(key)?.children) {
          treeDataConfig.map
            .get(key)
            ?.children?.forEach((item: any) => loopSetShow(item.key as string))
        }
        newColumnMap[key] = newSetting
      }
      loopSetShow(e.node.key)
      setColumnsMap({ ...newColumnMap })
    })

    if (!show) {
      return null
    }

    const listDom = (
      <Tree
        itemHeight={24}
        draggable={
          draggable &&
          !!treeDataConfig.list?.length &&
          treeDataConfig.list?.length > 1
        }
        checkable={checkable}
        onDrop={(info: any) => {
          const dropKey = info.node.key
          const dragKey = info.dragNode.key
          const { dropPosition, dropToGap } = info
          const position =
            dropPosition === -1 || !dropToGap ? dropPosition + 1 : dropPosition
          move(dragKey, dropKey, position)
        }}
        blockNode
        onCheck={(_: any, e: any) => onCheckTree(e)}
        checkedKeys={treeDataConfig.keys}
        showLine={false}
        titleRender={(_node: any) => {
          const node = { ..._node, children: undefined }
          if (!node.title) return null
          return (
            <CheckboxListItem
              className={className}
              {...node}
              showListItemOption={showListItemOption}
              title={runFunction(node.title, node)}
              columnKey={node.key as string}
            />
          )
        }}
        height={listHeight}
        treeData={treeDataConfig.list?.map(
          ({
            disabled /* 不透傳 disabled，使子節點禁用時也可以拖動調整順序 */,
            ...config
          }) => config,
        )}
      />
    )
    return (
      <>
        {showTitle && (
          <span className={`${className}-list-title ${hashId}`.trim()}>
            {listTitle}
          </span>
        )}
        {listDom}
      </>
    )
  }

const GroupCheckboxList: React.FC<{
  localColumns: (ProColumns<any> & { index?: number })[]
  className?: string
  draggable: boolean
  checkable: boolean
  showListItemOption: boolean
  listsHeight?: number
}> = ({
  localColumns,
  className,
  draggable,
  checkable,
  showListItemOption,
  listsHeight,
}) => {
    const { hashId } = useContext(ProProvider)
    const rightList: (ProColumns<any> & { index?: number })[] = []
    const leftList: (ProColumns<any> & { index?: number })[] = []
    const list: (ProColumns<any> & { index?: number })[] = []
    const intl = useIntl()

    localColumns.forEach((item) => {
      /** 不在 setting 中展示的 */
      if (item.hideInSetting) {
        return
      }
      const { fixed } = item
      if (fixed === 'left') {
        leftList.push(item)
        return
      }
      if (fixed === 'right') {
        rightList.push(item)
        return
      }
      list.push(item)
    })

    const showRight = rightList && rightList.length > 0
    const showLeft = leftList && leftList.length > 0
    return (
      <div
        className={classNames(`${className}-list`, hashId, {
          [`${className}-list-group`]: showRight || showLeft,
        })}
      >
        <CheckboxList
          title={intl.formatMessage({
            id: 'tableToolBar.leftFixedTitle',
            defaultMessage: '固定在左側',
          })}
          list={leftList}
          draggable={draggable}
          checkable={checkable}
          showListItemOption={showListItemOption}
          className={className}
          listHeight={listsHeight}
        />
        {/* 如果沒有任何固定，不需要顯示title */}
        <CheckboxList
          list={list}
          draggable={draggable}
          checkable={checkable}
          showListItemOption={showListItemOption}
          title={intl.formatMessage({
            id: 'tableToolBar.noFixedTitle',
            defaultMessage: '不固定',
          })}
          showTitle={showLeft || showRight}
          className={className}
          listHeight={listsHeight}
        />
        <CheckboxList
          title={intl.formatMessage({
            id: 'tableToolBar.rightFixedTitle',
            defaultMessage: '固定在右側',
          })}
          list={rightList}
          draggable={draggable}
          checkable={checkable}
          showListItemOption={showListItemOption}
          className={className}
          listHeight={listsHeight}
        />
      </div>
    )
  }

function ColumnSetting<T>(props: ColumnSettingProps<T>) {
  const columnRef = useRef(null)
  // 獲得當前上下文的 hashID
  const counter = useContext(TableContext)
  const localColumns: TableColumnType<T> &
    {
      index?: number
      fixed?: any
      key?: any
    }[] = props.columns
  const { checkedReset = true } = props
  const { columnsMap, setColumnsMap, clearPersistenceStorage } = counter

  useEffect(() => {
    if (counter.propsRef.current?.columnsState?.value) {
      columnRef.current = JSON.parse(
        JSON.stringify(counter.propsRef.current?.columnsState?.value || {}),
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * 設置全部選中，或全部未選中
   *
   * @param show
   */
  const setAllSelectAction = useRefFunction((show: boolean = true) => {
    const columnKeyMap = {}
    const loopColumns = (columns: any) => {
      columns.forEach(({ key, fixed, index, children, disable }: any) => {
        const columnKey = genColumnKey(key, index)
        if (columnKey) {
          // @ts-ignore
          columnKeyMap[columnKey] = {
            // 子節點 disable 時，不修改節點顯示狀態
            show: disable ? columnsMap[columnKey]?.show : show,
            fixed,
            disable,
            order: columnsMap[columnKey]?.order,
          }
        }
        if (children) {
          loopColumns(children)
        }
      })
    }
    loopColumns(localColumns)
    setColumnsMap(columnKeyMap)
  })

  /** 全選和反選 */
  const checkedAll = useRefFunction((e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      setAllSelectAction()
    } else {
      setAllSelectAction(false)
    }
  })

  /** 重設項目 */
  const clearClick = useRefFunction(() => {
    clearPersistenceStorage?.()
    setColumnsMap(
      counter.propsRef.current?.columnsState?.defaultValue ||
      columnRef.current ||
      counter.defaultColumnKeyMap!,
    )
  })

  // 未選中的 key 列表
  const unCheckedKeys = Object.values(columnsMap).filter(
    (value) => !value || value.show === false,
  )

  // 是否已經選中
  const indeterminate =
    unCheckedKeys.length > 0 && unCheckedKeys.length !== localColumns.length

  const intl = useIntl()
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const className = getPrefixCls('pro-table-column-setting')
  const { wrapSSR, hashId } = useStyle(className)
  return wrapSSR(
    <Popover
      arrow={false}
      title={
        <div className={`${className}-title ${hashId}`.trim()}>
          {props.checkable === false ? (
            <div />
          ) : (
            <Checkbox
              indeterminate={indeterminate}
              checked={
                unCheckedKeys.length === 0 &&
                unCheckedKeys.length !== localColumns.length
              }
              onChange={(e) => {
                checkedAll(e)
              }}
            >
              {intl.formatMessage({
                id: 'tableToolBar.columnDisplay',
                defaultMessage: '顯示列',
              })}
            </Checkbox>
          )}
          {checkedReset ? (
            <a
              onClick={clearClick}
              className={`${className}-action-rest-button ${hashId}`.trim()}
            >
              {intl.formatMessage({
                id: 'tableToolBar.reset',
                defaultMessage: '重設',
              })}
            </a>
          ) : null}
          {props?.extra ? (
            <Space size={12} align="center">
              {props.extra}
            </Space>
          ) : null}
        </div>
      }
      overlayClassName={`${className}-overlay ${hashId}`.trim()}
      trigger="click"
      placement="bottomRight"
      content={
        <GroupCheckboxList
          checkable={props.checkable ?? true}
          draggable={props.draggable ?? true}
          showListItemOption={props.showListItemOption ?? true}
          className={className}
          localColumns={localColumns}
          listsHeight={props.listsHeight}
        />
      }
    >
      {props.children || (
        <Tooltip
          title={intl.formatMessage({
            id: 'tableToolBar.columnSetting',
            defaultMessage: '列設定',
          })}
        >
          {props.settingIcon ?? <SettingsIcon />}
        </Tooltip>
      )}
    </Popover>,
  )
}

export default ColumnSetting
