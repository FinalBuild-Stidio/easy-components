import React, { useContext, useMemo } from 'react'
import type { ReactElement } from 'react'
import { useIntl } from '@ipasstw/react-intl'
import classNames from 'classnames'
import RcResizeObserver from 'rc-resize-observer'
import useMergedState from 'rc-util/lib/hooks/useMergedState'

import { ProProvider } from '@/providers'
import { Col, ConfigProvider, Form, Row } from '@/base'
import type { ColProps, FormItemProps, RowProps, FormInstance, FormProps } from '@/base'
import type { CommonFormProps } from '../../BaseForm'
import { BaseForm } from '../../BaseForm'
import type { ActionsProps } from './Actions'
import Actions from './Actions'
import { useStyle } from './style'
import { isBrowser, useMountMergeState } from '../../../utils'

const CONFIG_SPAN_BREAKPOINTS = {
  xs: 513,
  sm: 513,
  md: 785,
  lg: 992,
  xl: 1057,
  xxl: Infinity,
}
/** 配置表單列變化的容器寬度斷點 */
const BREAKPOINTS = {
  vertical: [
    // [breakpoint, cols, layout]
    [513, 1, 'vertical'],
    [785, 2, 'vertical'],
    [1057, 3, 'vertical'],
    [Infinity, 4, 'vertical'],
  ],
  default: [
    [513, 1, 'vertical'],
    [701, 2, 'vertical'],
    [1062, 3, 'horizontal'],
    [1352, 3, 'horizontal'],
    [Infinity, 4, 'horizontal'],
  ],
}

/**
 * 合併用戶和預設的配置
 *
 * @param layout
 * @param width
 */
const getSpanConfig = (
  layout: FormProps['layout'],
  width: number,
  span?: SpanConfig,
): { span: number; layout: FormProps['layout'] } => {
  if (span && typeof span === 'number') {
    return {
      span,
      layout,
    }
  }

  const spanConfig = span
    ? ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map((key) => [
      // @ts-ignore
      CONFIG_SPAN_BREAKPOINTS[key],
      // @ts-ignore
      24 / span[key],
      'horizontal',
    ])
    // @ts-ignore
    : BREAKPOINTS[layout || 'default']

  const breakPoint = (spanConfig || BREAKPOINTS.default).find(
    (item: [number, number, FormProps['layout']]) => width < item[0] + 16, // 16 = 2 * (row -8px margin)
  )
  return {
    span: 24 / breakPoint[1],
    layout: breakPoint[2],
  }
}

export type SpanConfig =
  | number
  | {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    xxl: number
  }

export type BaseQueryFilterProps = Omit<
  ActionsProps,
  'submitter' | 'setCollapsed' | 'isForm'
> & {
  className?: string
  defaultCollapsed?: boolean
  /**
   * @name layout 的布局設置
   * @type 'horizontal' | 'inline' | 'vertical';
   */
  layout?: FormProps['layout']
  /**
   * @name 默認一行顯示幾個表單項
   */
  defaultColsNumber?: number
  /**
   * @name 文字標籤的寬度
   *
   * @example 文字標籤寬 80 ，一般用於只有兩個字
   * labelWidth={80}
   * @example 文字標籤寬 140 ，一般用於有四個字
   * labelWidth={140}
   * @example 自動計算，會導致不整齊
   * labelWidth="auto"
   */
  labelWidth?: number | 'auto'
  /**
   * @name 每一行之前要不要有分割線
   * @description 只有在 `layout` 為 `vertical` 時生效
   */
  split?: boolean
  /**
   * @name 配置列數，一般而言是 8 的倍數
   *
   * @example 配置一行4個
   * span={6}
   *
   * @example 配置一行3個
   * span={6}
   *
   * @example 根據螢幕寬度配置
   * span={xs: 24, sm: 12, md: 8, lg: 6, xl: 6, xxl: 6}
   * */
  span?: SpanConfig

  /**
   * @name 查詢按鈕的文字
   *  */
  searchText?: string
  /**
   * @name 重設按鈕的文字
   */
  resetText?: string
  /**
   * @name 查詢表單柵格間隔
   *
   * @example searchGutter={24}
   * */
  searchGutter?: RowProps['gutter']
  form?: FormProps['form']
  /**
   * @param searchConfig 基礎的配置
   * @param props 更加詳細的配置 {
   *     type?: 'form' | 'list' | 'table' | 'cardList' | undefined;
   *     form: FormInstance;
   *     submit: () => void;
   *     collapse: boolean;
   *     setCollapse: (collapse: boolean) => void;
   *     showCollapseButton: boolean; }
   * @name 底部操作欄的 render
   *
   *
   * @example 增加一個清空按鈕
   * optionRender={(searchConfig, props, dom) =>[ <a key="clear">清空</a>,...dom]}
   *
   * @example 增自訂提交
   *
   * optionRender={(searchConfig) => [<a key="submit" onClick={()=> searchConfig?.form?.submit()}>提交</a>]}
   */
  optionRender?:
  | ((
    searchConfig: Omit<BaseQueryFilterProps, 'submitter' | 'isForm'>,
    props: Omit<BaseQueryFilterProps, 'searchConfig'>,
    dom: React.ReactNode[],
  ) => React.ReactNode[])
  | false
  /**
   * @name 忽略 Form.Item rule規則配置
   */
  ignoreRules?: boolean
  /**
   * @name 是否顯示 collapse 隱藏個數
   */
  showHiddenNum?: boolean

  // submitterColSpanProps 是一個可選屬性，類型為一個對象。
  // 該對象使用 Omit 泛型去除了 ColProps 中的 'span' 屬性，並新增了一個 'span' 屬性，類型為 number 類型。
  // 也就是說，submitterColSpanProps 對象除了 'span' 屬性外，還可以包含 ColProps 中的其他所有屬性。
  submitterColSpanProps?: Omit<ColProps, 'span'> & {
    span: number
  }
}

const flatMapItems = (
  items: React.ReactNode[],
  ignoreRules?: boolean,
  form?: FormInstance,
): React.ReactNode[] => {
  return items?.flatMap((item: any) => {
    if (item?.type.displayName === 'ProForm-Group' && !item.props?.title) {
      return item.props.children
    }
    if (item?.type.displayName === 'ProFormDependency' && !item.props?.title) {
      const values = item.props.name.reduce((current: any, next: any) => {
        return {
          ...current,
          [next]: form?.getFieldValue(next),
        }
      }, {})
      return item.props.children(values)
    }
    if (ignoreRules && React.isValidElement(item)) {
      return React.cloneElement(item, {
        ...(item.props as any),
        formItemProps: {
          ...(item.props as any)?.formItemProps,
          rules: [],
        },
      })
    }
    return item
  })
}

export type QueryFilterProps<
  T = Record<string, any>,
  U = Record<string, any>,
> = Omit<FormProps<T>, 'onFinish'> &
  CommonFormProps<T, U> &
  BaseQueryFilterProps & {
    onReset?: (values: T) => void
  }

const QueryFilterContent: React.FC<{
  defaultCollapsed: boolean
  onCollapse?: (collapsed: boolean) => void
  collapsed?: boolean
  resetText?: string
  searchText?: string
  searchGutter?: RowProps['gutter']
  split?: boolean
  form: FormInstance<any>
  items: React.ReactNode[]
  submitter?: JSX.Element | false
  showLength: number
  collapseRender: QueryFilterProps<any>['collapseRender']
  spanSize: {
    span: number
    layout: FormProps['layout']
  }
  // submitterColSpanProps 是一個可選屬性，類型為一個對象。
  // 該對象使用 Omit 泛型去除了 ColProps 中的 'span' 屬性，並新增了一個 'span' 屬性，類型為 number 類型。
  // 也就是說，submitterColSpanProps 對象除了 'span' 屬性外，還可以包含 ColProps 中的其他所有屬性。
  submitterColSpanProps?: Omit<ColProps, 'span'> & {
    span: number
  }
  baseClassName: string
  optionRender: BaseQueryFilterProps['optionRender']
  ignoreRules?: boolean
  preserve?: boolean
  showHiddenNum?: boolean
}> = (props) => {
  const intl = useIntl()
  const { hashId } = useContext(ProProvider)
  const resetText =
    props.resetText || intl.formatMessage({ id: 'tableForm.reset', defaultMessage: '重置' })
  const searchText =
    props.searchText || intl.formatMessage({ id: 'tableForm.search', defaultMessage: '查詢' })

  const [collapsed, setCollapsed] = useMergedState<boolean>(
    () => props.defaultCollapsed && !!props.submitter,
    {
      value: props.collapsed,
      onChange: props.onCollapse,
    },
  )

  const {
    optionRender,
    collapseRender,
    split,
    items,
    spanSize,
    showLength,
    searchGutter,
    showHiddenNum,
    form,
  } = props

  const submitter = useMemo(() => {
    if (!props.submitter || optionRender === false) {
      return null
    }
    return React.cloneElement(props.submitter, {
      searchConfig: {
        resetText,
        submitText: searchText,
      },
      render: optionRender
        ? (_: any, dom: React.ReactNode[]) =>
          optionRender(
            {
              ...props,
              resetText,
              searchText,
            },
            props,
            dom,
          )
        : optionRender,
      ...props.submitter.props,
    })
  }, [props, resetText, searchText, optionRender])

  // totalSpan 統計控制項占的位置，計算 offset 保證查詢按鈕在最後一列
  let totalSpan = 0
  let itemLength = 0
  //首個表單項是否占滿第一行
  let firstRowFull = false
  // totalSize 統計控制項占的份數
  let totalSize = 0

  // for split compute
  let currentSpan = 0

  // 處理過，包含是否需要隱藏的 數組
  const processedList = flatMapItems(items, props.ignoreRules, form).map(
    (
      item,
      index,
    ): { itemDom: React.ReactNode; hidden: boolean; colSpan: number } => {
      // 如果 formItem 自己配置了 hidden，預設使用它自己的
      const colSize = React.isValidElement<any>(item)
        ? item?.props?.colSize ?? 1
        : 1
      const colSpan = Math.min(spanSize.span * (colSize || 1), 24)
      // 計算總的 totalSpan 長度
      totalSpan += colSpan
      // 計算總的 colSize 長度
      totalSize += colSize

      if (index === 0) {
        firstRowFull =
          colSpan === 24 &&
          !(item as ReactElement<{ hidden: boolean }>)?.props?.hidden
      }

      const hidden: boolean =
        (item as ReactElement<{ hidden: boolean }>)?.props?.hidden ||
        // 如果收起了
        (collapsed &&
          (firstRowFull ||
            // 如果 超過顯示長度 且 總長度超過了 24
            totalSize > showLength - 1) &&
          !!index &&
          totalSpan >= 24)

      itemLength += 1

      const itemKey =
        (React.isValidElement(item) &&
          (item.key || `${(item.props as Record<string, any>)?.name}`)) ||
        index

      if (React.isValidElement(item) && hidden) {
        if (!props.preserve) {
          return {
            itemDom: null,
            colSpan: 0,
            hidden: true,
          }
        }
        return {
          itemDom: React.cloneElement(item, {
            hidden: true,
            key: itemKey || index,
          } as Record<string, any>),
          hidden: true,
          colSpan,
        }
      }

      return {
        itemDom: item,
        colSpan,
        hidden: false,
      }
    },
  )

  const doms = processedList.map((itemProps, index: number) => {
    const { itemDom, colSpan } = itemProps
    const hidden: boolean = (itemDom as ReactElement<{ hidden: boolean }>)
      ?.props?.hidden

    if (hidden) return itemDom

    // 每一列的key, 一般是存在的
    const itemKey =
      (React.isValidElement(itemDom) &&
        (itemDom.key || `${itemDom.props?.name}`)) ||
      index

    if (24 - (currentSpan % 24) < colSpan) {
      // 如果當前行空餘位置放不下，那麼折行
      totalSpan += 24 - (currentSpan % 24)
      currentSpan += 24 - (currentSpan % 24)
    }

    currentSpan += colSpan

    if (split && currentSpan % 24 === 0 && index < itemLength - 1) {
      return (
        <Col
          key={itemKey}
          span={colSpan}
          className={`${props.baseClassName}-row-split-line ${props.baseClassName}-row-split ${hashId}`.trim()}
        >
          {itemDom}
        </Col>
      )
    }

    return (
      <Col
        key={itemKey}
        className={`${props.baseClassName}-row-split ${hashId}`.trim()}
        span={colSpan}
      >
        {itemDom}
      </Col>
    )
  })

  const hiddenNum =
    showHiddenNum && processedList.filter((item) => item.hidden).length

  /** 是否需要展示 collapseRender */
  const needCollapseRender = useMemo(() => {
    if (totalSpan < 24 || totalSize <= showLength) {
      return false
    }
    return true
  }, [totalSize, showLength, totalSpan])

  const offset = useMemo(() => {
    const offsetSpan =
      (currentSpan % 24) + (props.submitterColSpanProps?.span ?? spanSize.span)
    if (offsetSpan > 24) {
      return 24 - (props.submitterColSpanProps?.span ?? spanSize.span)
    }
    return 24 - offsetSpan
  }, [
    currentSpan,
    (currentSpan % 24) + (props.submitterColSpanProps?.span ?? spanSize.span),
    props.submitterColSpanProps?.span,
  ])

  const context = useContext(ConfigProvider.ConfigContext)
  const baseClassName = context.getPrefixCls('pro-query-filter')
  return (
    <Row
      gutter={searchGutter}
      justify="start"
      className={classNames(`${baseClassName}-row`, hashId)}
      key="resize-observer-row"
    >
      {doms}
      {submitter && (
        <Col
          key="submitter"
          span={spanSize.span}
          offset={offset}
          className={classNames(props.submitterColSpanProps?.className)}
          {...props.submitterColSpanProps}
          style={{
            textAlign: 'end',
          }}
        >
          <Form.Item
            label=" "
            colon={false}
            shouldUpdate={false}
            className={`${baseClassName}-actions ${hashId}`.trim()}
          >
            <Actions
              hiddenNum={hiddenNum}
              key="pro-form-query-filter-actions"
              collapsed={collapsed}
              collapseRender={needCollapseRender ? collapseRender : false}
              submitter={submitter}
              setCollapsed={setCollapsed}
            />
          </Form.Item>
        </Col>
      )}
    </Row>
  )
}

const defaultWidth = isBrowser() ? document?.body?.clientWidth : 1024

function QueryFilter<T = Record<string, any>>(props: QueryFilterProps<T>) {
  const {
    collapsed: controlCollapsed,
    layout,
    defaultCollapsed = true,
    defaultColsNumber,
    span,
    searchGutter = 24,
    searchText,
    resetText,
    optionRender,
    collapseRender,
    onReset,
    onCollapse,
    labelWidth = '80',
    style,
    split,
    preserve = true,
    ignoreRules,
    showHiddenNum = false,
    submitterColSpanProps,
    ...rest
  } = props

  const context = useContext(ConfigProvider.ConfigContext)
  const baseClassName = context.getPrefixCls('pro-query-filter')
  const { wrapSSR, hashId } = useStyle(baseClassName)

  const [width, setWidth] = useMountMergeState(
    () =>
      (typeof style?.width === 'number'
        ? style?.width
        : defaultWidth) as number,
  )

  const spanSize = useMemo(
    () => getSpanConfig(layout, width + 16, span),
    [layout, width, span],
  )

  const showLength = useMemo(() => {
    // 查詢重設按鈕也會占一個spanSize格子，需要減掉計算
    if (defaultColsNumber !== undefined) {
      return defaultColsNumber - 1
    }
    return Math.max(1, 24 / spanSize.span - 1)
  }, [defaultColsNumber, spanSize.span])

  /** 計算最大寬度防止溢出換行 */
  const formItemFixStyle: FormItemProps<any> | undefined = useMemo(() => {
    if (labelWidth && spanSize.layout !== 'vertical' && labelWidth !== 'auto') {
      return {
        labelCol: {
          flex: `0 0 ${labelWidth}px`,
        },
        wrapperCol: {
          style: {
            maxWidth: `calc(100% - ${labelWidth}px)`,
          },
        },
        style: {
          flexWrap: 'nowrap',
        },
      }
    }
    return undefined
  }, [spanSize.layout, labelWidth])

  return wrapSSR(
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        if (width !== offset.width && offset.width > 17) {
          setWidth(offset.width)
        }
      }}
    >
      <BaseForm
        isKeyPressSubmit
        preserve={preserve}
        {...rest}
        className={classNames(baseClassName, hashId, rest.className)}
        onReset={onReset}
        style={style}
        layout={spanSize.layout}
        fieldProps={{
          style: {
            width: '100%',
          },
        }}
        formItemProps={formItemFixStyle}
        groupProps={{
          titleStyle: {
            display: 'inline-block',
            marginInlineEnd: 16,
          },
        }}
        contentRender={(items, renderSubmitter, form) => (
          <QueryFilterContent
            spanSize={spanSize}
            collapsed={controlCollapsed}
            form={form}
            submitterColSpanProps={submitterColSpanProps}
            collapseRender={collapseRender}
            defaultCollapsed={defaultCollapsed}
            onCollapse={onCollapse}
            optionRender={optionRender}
            submitter={renderSubmitter}
            items={items}
            split={split}
            baseClassName={baseClassName}
            resetText={props.resetText}
            searchText={props.searchText}
            searchGutter={searchGutter}
            preserve={preserve}
            ignoreRules={ignoreRules}
            showLength={showLength}
            showHiddenNum={showHiddenNum}
          />
        )}
      />
    </RcResizeObserver>,
  )
}

export { QueryFilter }
