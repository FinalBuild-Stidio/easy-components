import React, { useContext, useEffect, useMemo } from 'react'
import { useIntl } from '@ipasstw/react-intl'
import type { IntlShape } from '@ipasstw/react-intl'
import RefreshIcon from '@mui/icons-material/Refresh'
import IconButton from '@mui/material/IconButton'

import type { TableColumnType } from '@/base'
import { Tooltip } from '@/base'
import type { LabelTooltipType } from '@/base/form/FormItemLabel'
import { TableContext } from '../../Store/Provide'
import type {
  ActionType,
  OptionSearchProps,
  ProTableProps,
} from '../../typing'
import { isDeepEqualReact, omitUndefined } from '../../../utils'
import ColumnSetting from '../ColumnSetting'
import type { ListToolBarProps } from '../ListToolBar'
import ListToolBar from '../ListToolBar'
import DensityIcon from './DensityIcon'
import FullScreenIcon from './FullscreenIcon'

export type SettingOptionType = {
  draggable?: boolean
  checkable?: boolean
  showListItemOption?: boolean
  checkedReset?: boolean
  listsHeight?: number
  extra?: React.ReactNode
  children?: React.ReactNode
  settingIcon?: React.ReactNode
}
export type OptionConfig = {
  density?: boolean
  fullScreen?: OptionsType
  reload?: OptionsType
  setting?: boolean | SettingOptionType
  search?: (OptionSearchProps & { name?: string }) | boolean
  reloadIcon?: React.ReactNode
  densityIcon?: React.ReactNode
}

export type OptionsFunctionType = (
  e: React.MouseEvent<HTMLSpanElement>,
  action?: ActionType,
) => void

export type OptionsType = OptionsFunctionType | boolean

export type ToolBarProps<T = unknown> = {
  headerTitle?: React.ReactNode
  tooltip?: string | LabelTooltipType
  toolbar?: ListToolBarProps
  toolBarRender?: (
    action: ActionType | undefined,
    rows: {
      selectedRowKeys?: (string | number)[]
      selectedRows?: T[]
    },
  ) => React.ReactNode[]
  action: React.MutableRefObject<ActionType | undefined>
  options?: OptionConfig | false
  optionsRender?: ToolbarRenderProps<T>['optionsRender']
  selectedRowKeys?: (string | number)[]
  selectedRows?: T[]
  className?: string
  onSearch?: (keyWords: string) => void
  columns: TableColumnType<T>[]
}

function getButtonText(
  {
    intl,
  }: OptionConfig & {
    intl: IntlShape
  },
  options: OptionConfig,
) {
  return {
    reload: {
      text: intl.formatMessage({
        id: 'tableToolBar.reload',
        defaultMessage: '更新',
      }),
      icon: options.reloadIcon ?? <RefreshIcon />,
    },
    fullScreen: {
      text: intl.formatMessage({
        id: 'tableToolBar.fullScreen',
        defaultMessage: '全螢幕',
      }),
      icon: <FullScreenIcon />,
    },
  }
}

/**
 * 渲染默認的 工具欄
 *
 * @param options
 * @param className
 */
function renderDefaultOption<T>(
  options: OptionConfig,
  defaultOptions: OptionConfig & {
    intl: IntlShape
  },
  actions: React.MutableRefObject<ActionType | undefined>,
  columns: TableColumnType<T>[],
) {
  return Object.keys(options)
    .filter((item) => item)
    .map((key) => {
      // @ts-ignore
      const value = options[key]
      if (!value) {
        return null
      }

      let onClick: OptionsFunctionType =
        value === true
          // @ts-ignore
          ? defaultOptions[key]
          : (event) => value?.(event, actions.current)

      if (typeof onClick !== 'function') {
        onClick = () => { }
      }

      if (key === 'setting') {
        return (
          <IconButton key={`table-toolbar-iconbutton-${key}`}>
            <ColumnSetting
              {...(options[key] as SettingOptionType)}
              columns={columns}
              key={key}
            />
          </IconButton>
        )
      }
      if (key === 'fullScreen') {
        return (
          <IconButton key={`table-toolbar-iconbutton-${key}`} onClick={onClick}>
            <FullScreenIcon />
          </IconButton>
        )
      }

      if (key === 'density') {
        return <DensityIcon key={`table-toolbar-iconbutton-${key}`} />
      }

      // @ts-ignore
      const optionItem = getButtonText(defaultOptions, options)[key]
      if (optionItem) {
        return (
          <Tooltip key={`table-toolbar-tooltip-${key}`} title={optionItem.text}>
            <IconButton key={`table-toolbar-iconbutton-${key}`} onClick={onClick}>{optionItem.icon}</IconButton>
          </Tooltip>
        )
      }
      return null
    })
    .filter((item) => item)
}

function ToolBar<T>({
  headerTitle,
  tooltip,
  toolBarRender,
  action,
  options: propsOptions,
  selectedRowKeys,
  selectedRows,
  toolbar,
  onSearch,
  columns,
  optionsRender,
  ...rest
}: ToolBarProps<T>) {
  const counter = useContext(TableContext)

  const intl = useIntl()
  const optionDom = useMemo(() => {
    const defaultOptions = {
      reload: () => action?.current?.reload(),
      density: true,
      setting: true,
      search: false,
      fullScreen: () => action?.current?.fullScreen?.(),
    }
    if (propsOptions === false) {
      return []
    }

    const options = {
      ...defaultOptions,
      fullScreen: false,
      ...propsOptions,
    }

    const settings = renderDefaultOption<T>(
      options,
      {
        ...defaultOptions,
        intl,
      },
      action,
      columns,
    )
    if (optionsRender) {
      return optionsRender(
        {
          headerTitle,
          tooltip,
          toolBarRender,
          action,
          options: propsOptions,
          selectedRowKeys,
          selectedRows,
          toolbar,
          onSearch,
          columns,
          optionsRender,
          ...rest,
        },
        settings,
      )
    }
    return settings
  }, [
    action,
    columns,
    headerTitle,
    intl,
    onSearch,
    optionsRender,
    propsOptions,
    rest,
    selectedRowKeys,
    selectedRows,
    toolBarRender,
    toolbar,
    tooltip,
  ])
  // 操作列表
  const actions = toolBarRender
    ? toolBarRender(action?.current, { selectedRowKeys, selectedRows })
    : []

  const searchConfig: any = useMemo(() => {
    if (!propsOptions) {
      return false
    }
    if (!propsOptions.search) return false

    /** 受控的value 和 onChange */
    const defaultSearchConfig = {
      value: counter.keyWords,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        counter.setKeyWords(e.target.value),
    }

    if (propsOptions.search === true) return defaultSearchConfig

    return {
      ...defaultSearchConfig,
      ...propsOptions.search,
    }
  }, [counter, propsOptions])

  useEffect(() => {
    if (counter.keyWords === undefined) {
      onSearch?.('')
    }
  }, [counter.keyWords, onSearch])

  return (
    <ListToolBar
      title={headerTitle}
      tooltip={tooltip}
      search={searchConfig}
      onSearch={onSearch}
      actions={actions}
      settings={optionDom}
      {...toolbar}
    />
  )
}

export type ToolbarRenderProps<T> = {
  hideToolbar: boolean
  onFormSearchSubmit: (params: any) => void
  searchNode: React.ReactNode
  tableColumn: any[]
  tooltip?: string | LabelTooltipType
  selectedRows: T[]
  selectedRowKeys: React.Key[] | (string | number)[]
  headerTitle: React.ReactNode
  toolbar: ProTableProps<T, any, any>['toolbar']
  options: ProTableProps<T, any, any>['options']
  optionsRender?: (
    props: ToolBarProps<T>,
    defaultDom: React.ReactNode[],
  ) => React.ReactNode[]
  toolBarRender?: ToolBarProps<T>['toolBarRender']
  actionRef: React.MutableRefObject<ActionType | undefined>
}

/** 這裡負責與table交互，並且減少 render次數 */
class ToolbarRender<T> extends React.Component<ToolbarRenderProps<T>> {
  onSearch = (keyword: string) => {
    const { options, onFormSearchSubmit, actionRef } = this.props

    if (!options || !options.search) {
      return
    }
    const { name = 'keyword' } = options.search === true ? {} : options.search

    /** 如果傳入的 onSearch 返回值為 false，應該直接攔截請求 */
    const success = (options.search as OptionSearchProps)?.onSearch?.(keyword)

    if (success === false) return

    // 查詢的時候的回到第一頁
    actionRef?.current?.setPageInfo?.({
      current: 1,
    })

    onFormSearchSubmit(
      omitUndefined({
        _timestamp: Date.now(),
        [name]: keyword,
      }),
    )
  };
  isEquals = (next: ToolbarRenderProps<T>) => {
    const {
      hideToolbar,
      tableColumn,
      options,
      tooltip,
      toolbar,
      selectedRows,
      selectedRowKeys,
      headerTitle,
      actionRef,
      toolBarRender,
    } = this.props

    return isDeepEqualReact(
      {
        hideToolbar,
        tableColumn,
        options,
        tooltip,
        toolbar,
        selectedRows,
        selectedRowKeys,
        headerTitle,
        actionRef,
        toolBarRender,
      },
      {
        hideToolbar: next.hideToolbar,
        tableColumn: next.tableColumn,
        options: next.options,
        tooltip: next.tooltip,
        toolbar: next.toolbar,
        selectedRows: next.selectedRows,
        selectedRowKeys: next.selectedRowKeys,
        headerTitle: next.headerTitle,
        actionRef: next.actionRef,
        toolBarRender: next.toolBarRender,
      },
      ['render', 'renderFormItem'],
    )
  };
  shouldComponentUpdate = (next: ToolbarRenderProps<T>) => {
    if (next.searchNode) {
      return true
    }
    return !this.isEquals(next)
  };

  render = () => {
    const {
      hideToolbar,
      tableColumn,
      options,
      searchNode,
      tooltip,
      toolbar,
      selectedRows,
      selectedRowKeys,
      headerTitle,
      actionRef,
      toolBarRender,
      optionsRender,
    } = this.props

    // 不展示 toolbar
    if (hideToolbar) {
      return null
    }
    return (
      <ToolBar<T>
        tooltip={tooltip}
        columns={tableColumn}
        options={options}
        headerTitle={headerTitle}
        action={actionRef}
        onSearch={this.onSearch}
        selectedRows={selectedRows}
        selectedRowKeys={selectedRowKeys as (string | number)[]}
        toolBarRender={toolBarRender}
        toolbar={{
          filter: searchNode,
          ...toolbar,
        }}
        optionsRender={optionsRender}
      />
    )
  };
}

export default ToolbarRender
