import { useIntl } from 'react-intl'
import type { IntlShape } from 'react-intl'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { ProProvider } from '@/providers'
import { ConfigProvider, Space } from '@/base'
import { omitBoolean } from '../../../utils'

import React, { useContext } from 'react'

export type ActionsProps = {
  submitter: React.ReactNode
  /** 是否收起 */
  collapsed?: boolean
  /** 收起按鈕的事件 */
  onCollapse?: (collapsed: boolean) => void

  setCollapsed: (collapse: boolean) => void
  isForm?: boolean
  style?: React.CSSProperties
  /** 收起按鈕的 render */
  collapseRender?:
  | ((
    collapsed: boolean,
    /** 是否應該展示，有兩種情況 列只有三列，不需要收起 form 模式 不需要收起 */
    props: ActionsProps,
    intl: IntlShape,
    hiddenNum?: false | number,
  ) => React.ReactNode)
  | false
  /** 隱藏個數 */
  hiddenNum?: false | number
}

const defaultCollapseRender: ActionsProps['collapseRender'] = (
  collapsed,
  _,
  intl,
  hiddenNum,
) => {
  if (collapsed) {
    return (
      <>
        {intl.formatMessage({
          id: 'tableForm.expand',
          defaultMessage: '展開',
        })}
        {hiddenNum && `(${hiddenNum})`}
        <ExpandMoreIcon
          style={{
            marginInlineStart: '0.5em',
            transition: '0.3s all',
            transform: `rotate(${collapsed ? 0 : 0.5}turn)`,
          }}
        />
      </>
    )
  }
  return (
    <>
      {intl.formatMessage({
        id: 'tableForm.collapsed',
        defaultMessage: '收起',
      })}
      <ExpandMoreIcon
        style={{
          marginInlineStart: '0.5em',
          transition: '0.3s all',
          transform: `rotate(${collapsed ? 0 : 0.5}turn)`,
        }}
      />
    </>
  )
}

/**
 * FormFooter 的組件，可以自動進行一些配置
 *
 * @param props
 */
const Actions: React.FC<ActionsProps> = (props) => {
  const {
    setCollapsed,
    collapsed = false,
    submitter,
    style,
    hiddenNum,
  } = props
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const intl = useIntl()
  const { hashId } = useContext(ProProvider)
  const collapseRender =
    omitBoolean(props.collapseRender) || defaultCollapseRender

  return (
    <Space style={style} size={16}>
      {submitter}
      {props.collapseRender !== false && (
        <a
          className={`${getPrefixCls(
            'pro-query-filter-collapse-button',
          )} ${hashId}`.trim()}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapseRender?.(collapsed, props, intl, hiddenNum)}
        </a>
      )}
    </Space>
  )
}

export default Actions
