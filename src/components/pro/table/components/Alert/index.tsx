import React, { Key, useContext } from 'react'
import { useIntl } from 'react-intl'
import type { IntlShape } from 'react-intl'
import { ConfigProvider, Space } from '@/components/base'
import { useStyle } from './style'

export type AlertRenderType<T> =
  | ((props: {
    intl: IntlShape
    selectedRowKeys: (number | string | Key)[]
    selectedRows: T[]
    onCleanSelected: () => void
  }) => React.ReactNode)
  | false

export type TableAlertProps<T> = {
  selectedRowKeys: (number | string | Key)[]
  selectedRows: T[]
  alwaysShowAlert?: boolean
  alertInfoRender?: AlertRenderType<T>
  onCleanSelected: () => void
  alertOptionRender?: AlertRenderType<T>
}

const defaultAlertOptionRender = (props: {
  intl: IntlShape
  onCleanSelected: () => void
}) => {
  const { intl, onCleanSelected } = props
  return [
    <a onClick={onCleanSelected} key="0">
      {intl.formatMessage({ id: 'alert.clear', defaultMessage: '清空' })}
    </a>,
  ]
}

function TableAlert<T>({
  selectedRowKeys = [],
  onCleanSelected,
  alwaysShowAlert,
  selectedRows,
  alertInfoRender = ({ intl }) => (
    <Space>
      {intl.formatMessage({ id: 'alert.selected', defaultMessage: '已選擇' })}
      {selectedRowKeys.length}
      {intl.formatMessage({ id: 'alert.item', defaultMessage: '項' })}&nbsp;&nbsp;
    </Space>
  ),
  alertOptionRender = defaultAlertOptionRender,
}: TableAlertProps<T>) {
  const intl = useIntl()

  const option =
    alertOptionRender &&
    alertOptionRender({
      onCleanSelected,
      selectedRowKeys,
      selectedRows,
      intl,
    })

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const className = getPrefixCls('pro-table-alert')
  const { wrapSSR, hashId } = useStyle(className)
  if (alertInfoRender === false) {
    return null
  }
  const dom = alertInfoRender({
    intl,
    selectedRowKeys,
    selectedRows,
    onCleanSelected,
  })

  if (dom === false || (selectedRowKeys.length < 1 && !alwaysShowAlert)) {
    return null
  }
  return wrapSSR(
    <div className={`${className} ${hashId}`.trim()}>
      <div className={`${className}-container ${hashId}`.trim()}>
        <div className={`${className}-info ${hashId}`.trim()}>
          <div className={`${className}-info-content ${hashId}`.trim()}>
            {dom}
          </div>
          {option ? (
            <div className={`${className}-info-option ${hashId}`.trim()}>
              {option}
            </div>
          ) : null}
        </div>
      </div>
    </div>,
  )
}

export default TableAlert
