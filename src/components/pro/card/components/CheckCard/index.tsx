import React, { useContext, useEffect, useMemo } from 'react'
import type { MouseEventHandler } from 'react'
import classNames from 'classnames'

import { ConfigProvider } from '@/components/base'

import ProCardActions from '../Actions'
import type { CheckCardGroupProps } from './Group'
import CheckCardGroup, { CardLoading, CheckCardGroupConnext } from './Group'
import { useStyle } from './style'
import { useMountMergeState } from '../../../utils'
interface CheckCardProps {
  /**
   * 自訂前綴
   *
   * @ignore
   */
  prefixCls?: string
  /** Change 回調 */
  onChange?: (checked: boolean) => void
  /** Click 回調 */
  onClick?: (event: MouseEventHandler<HTMLDivElement> | undefined) => void
  /** 滑鼠進入時的回調 */
  onMouseEnter?: MouseEventHandler<HTMLDivElement>
  /** 滑鼠出來時的回調 */
  onMouseLeave?: (event: MouseEventHandler<HTMLDivElement> | undefined) => void
  /**
   * 預設是否勾選
   *
   * @default false
   * @title 默認勾選
   */
  defaultChecked?: boolean
  /**
   * 強制勾選
   *
   * @default false
   * @title 強制勾選
   */
  checked?: boolean
  /**
   * 不可用
   *
   * @default false
   * @title 禁用
   */
  disabled?: boolean
  /**
   * 選項卡樣式
   *
   * @ignore
   */
  style?: React.CSSProperties
  /**
   * 選項卡 className
   *
   * @ignore
   */
  className?: string
  /**
   * 左側頭像展示，可以是一個連結也可以是是一個 ReactNode
   *
   * @title 頭像
   */
  avatar?: React.ReactNode
  /**
   * 標題展示
   *
   * @title 標題
   */
  title?: React.ReactNode
  /**
   * 二級標題展示
   *
   * @title 二級標題
   */
  subTitle?: React.ReactNode
  /**
   * 描述展示
   *
   * @title 描述
   */
  description?: React.ReactNode
  /**
   * 選項值
   *
   * @title 值
   */
  value?: any
  /**
   * 內容是否在載入中
   *
   * @default false
   * @title 載入中
   */
  loading?: boolean
  /**
   * 圖片封面默認，該模式下其他展示值被忽略
   *
   * @title 卡片背景圖片
   */
  cover?: React.ReactNode
  /**
   * 組件尺寸，支持大，中，小三種默認尺寸，用戶可以自訂寬高
   *
   * @default default
   * @title 選擇框大小
   */
  size?: 'large' | 'default' | 'small'
  /**
   * 是否顯示邊框
   *
   * @default true
   * @title 顯示邊框
   */
  bordered?: boolean
  /**
   * 卡片右上角的操作區域
   *
   * @title 操作欄
   */
  extra?: React.ReactNode

  children?: React.ReactNode
  /**
   * 內容區域的樣式設計
   */
  bodyStyle?: React.CSSProperties
  /**
   * 右下角的操作區
   */
  actions?: React.ReactNode[]

  ghost?: boolean
}

export interface CheckCardState {
  checked: boolean
}

const CheckCard: React.FC<CheckCardProps> & {
  Group: typeof CheckCardGroup
} = (props) => {
  const [stateChecked, setStateChecked] = useMountMergeState<boolean>(
    props.defaultChecked || false,
    {
      value: props.checked,
      onChange: props.onChange,
    },
  )
  const checkCardGroup = useContext(CheckCardGroupConnext)
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)

  const handleClick = (e: any) => {
    props?.onClick?.(e)
    const newChecked = !stateChecked
    checkCardGroup?.toggleOption?.({ value: props.value })
    setStateChecked?.(newChecked, e)
  }

  // small => sm large => lg
  const getSizeCls = (size?: string) => {
    if (size === 'large') return 'lg'
    if (size === 'small') return 'sm'
    return ''
  }

  useEffect(() => {
    checkCardGroup?.registerValue?.(props.value)
    return () => checkCardGroup?.cancelValue?.(props.value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value])

  /**
   * 頭像自訂
   *
   * @param prefixCls
   * @param cover
   * @returns
   */
  const renderCover = (prefixCls: string, cover: string | React.ReactNode) => {
    return (
      <div className={`${prefixCls}-cover`}>
        {typeof cover === 'string' ? (
          <img src={cover} alt="checkcard" />
        ) : (
          cover
        )}
      </div>
    )
  }

  const {
    prefixCls: customizePrefixCls,
    className,
    avatar,
    title,
    description,
    cover,
    extra,
    style = {},
    ...others
  } = props

  const checkCardProps: CheckCardProps = { ...others }
  const prefixCls = getPrefixCls('pro-checkcard', customizePrefixCls)

  const { wrapSSR, hashId } = useStyle(prefixCls)

  checkCardProps.checked = stateChecked

  let multiple = false

  if (checkCardGroup) {
    // 受組控制模式
    checkCardProps.disabled = props.disabled || checkCardGroup.disabled
    checkCardProps.loading = props.loading || checkCardGroup.loading
    checkCardProps.bordered = props.bordered || checkCardGroup.bordered

    multiple = checkCardGroup.multiple

    const isChecked = checkCardGroup.multiple
      ? checkCardGroup.value?.includes(props.value)
      : checkCardGroup.value === props.value

    // loading時check為false
    checkCardProps.checked = checkCardProps.loading ? false : isChecked
    checkCardProps.size = props.size || checkCardGroup.size
  }

  const {
    disabled = false,
    size,
    loading: cardLoading,
    bordered = true,
    checked,
  } = checkCardProps
  const sizeCls = getSizeCls(size)

  const classString = classNames(prefixCls, className, hashId, {
    [`${prefixCls}-loading`]: cardLoading,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-multiple`]: multiple,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-bordered`]: bordered,
    [`${prefixCls}-ghost`]: props.ghost,
  })

  const metaDom = useMemo(() => {
    if (cardLoading) {
      return <CardLoading prefixCls={prefixCls || ''} />
    }

    if (cover) {
      return renderCover(prefixCls || '', cover)
    }

    const headerDom = (title ?? extra) != null && (
      <div className={`${prefixCls}-header ${hashId}`.trim()}>
        <div className={`${prefixCls}-header-left ${hashId}`.trim()}>
          <div className={`${prefixCls}-title ${hashId}`.trim()}>{title}</div>
          {props.subTitle ? (
            <div className={`${prefixCls}-subTitle ${hashId}`.trim()}>
              {props.subTitle}
            </div>
          ) : null}
        </div>
        {extra && (
          <div className={`${prefixCls}-extra ${hashId}`.trim()}>{extra}</div>
        )}
      </div>
    )

    const descriptionDom = description ? (
      <div className={`${prefixCls}-description ${hashId}`.trim()}>
        {description}
      </div>
    ) : null

    const metaClass = classNames(`${prefixCls}-content`, hashId, {
      [`${prefixCls}-avatar-header`]: headerDom && !descriptionDom,
    })

    return (
      <div className={metaClass}>
        {headerDom || descriptionDom ? (
          <div className={`${prefixCls}-detail ${hashId}`.trim()}>
            {headerDom}
            {descriptionDom}
          </div>
        ) : null}
      </div>
    )
  }, [
    avatar,
    cardLoading,
    cover,
    description,
    extra,
    hashId,
    prefixCls,
    props.subTitle,
    title,
  ])

  return wrapSSR(
    <div
      className={classString}
      style={style}
      onClick={(e) => {
        if (!cardLoading && !disabled) {
          handleClick(e)
        }
      }}
      onMouseEnter={props.onMouseEnter}
    >
      {metaDom}
      {props.children ? (
        <div
          className={classNames(`${prefixCls}-body`)}
          style={props.bodyStyle}
        >
          {props.children}
        </div>
      ) : null}
      {props.actions ? (
        <ProCardActions actions={props.actions} prefixCls={prefixCls} />
      ) : null}
    </div>,
  )
}

CheckCard.Group = CheckCardGroup

export type { CheckCardGroupProps, CheckCardProps }

export default CheckCard
