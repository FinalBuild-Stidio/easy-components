import React, { useContext, useEffect } from 'react'
import toArray from 'rc-util/lib/Children/toArray'
import get from 'rc-util/lib/utils/get'

import {
  ProSkeleton,
  ProForm,
  ProFormField,
} from '@/pro'
import type { DescriptionsProps, FormInstance, FormProps } from '@/base'
import { ConfigProvider, Descriptions, Space } from '@/base'
import type { LabelTooltipType } from '@/base/form/FormItemLabel'
import type { RequestData } from './useFetchData'
import useFetchData from './useFetchData'
import type {
  ProCoreActionType,
  ProFieldValueType,
  ProSchema,
  ProSchemaComponentTypes,
} from '../utils'
import {
  ErrorBoundary,
  genCopyable,
  LabelIconTip,
  stringify,
  getFieldPropsOrFormItemProps,
  InlineErrorFormItem,
} from '../utils'

import { proTheme } from '@/providers'
import type { ProFieldFCMode } from '@/providers'

// todo remove it
export interface DescriptionsItemProps {
  prefixCls?: string
  className?: string
  style?: React.CSSProperties
  label?: React.ReactNode
  labelStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
  children: React.ReactNode
  span?: number
}

/**
 * 定義列表屬性的類型定義，用於定義列表的一列
 * @typedef {Object} ProDescriptionsItemProps
 * @property {ProSchema} schema - 用於生成表格項的 schema 配置對象
 * @property {boolean} [hide] - 是否隱藏該列，可用於權限控制
 * @property {boolean} [plain] - 是否只展示文本，不展示標籤
 * @property {boolean} [copyable] - 是否可以拷貝該列的內容
 * @property {boolean | { showTitle?: boolean }} [ellipsis] - 是否展示省略號，如果是一個對象，可以設置滑鼠懸浮時是否展示完整的內容
 * @property {ProFieldFCMode} [mode] - ProField 組件的模式
 * @property {React.ReactNode} [children] - 表格項的子組件
 * @property {number} [order] - 表格項的排序
 * @property {number} [index] - 表格項的索引
 * @template T - 表格資料的類型
 * @template ValueType - 表格項的值類型
 */
export type ProDescriptionsItemProps<
  T = Record<string, any>,
  ValueType = 'text',
> = ProSchema<
  T,
  Omit<DescriptionsItemProps, 'children'> & {
    // 隱藏這個欄位，是個語法糖，方便一下權限的控制
    hide?: boolean
    plain?: boolean
    copyable?: boolean
    ellipsis?: boolean | { showTitle?: boolean }
    mode?: ProFieldFCMode
    children?: React.ReactNode
    /**
     * 子項的排序
     */
    order?: number
    /**
     * 子項的索引
     */
    index?: number
  },
  ProSchemaComponentTypes,
  ValueType
>

export type ProDescriptionsActionType = ProCoreActionType
export type ProDescriptionsProps<
  RecordType = Record<string, any>,
  ValueType = 'text',
> = DescriptionsProps & {
  /** Params 參數 params 改變的時候會觸發 reload */
  params?: Record<string, any>
  /** 網路請求報錯 */
  onRequestError?: (e: Error) => void
  /** 獲取資料的方法 */
  request?: (params: Record<string, any>) => Promise<RequestData>

  columns?: ProDescriptionsItemProps<RecordType, ValueType>[]

  /** 一些簡單的操作 */
  actionRef?: React.MutableRefObject<ProCoreActionType<any> | undefined>

  loading?: boolean

  onLoadingChange?: (loading?: boolean) => void

  tooltip?: LabelTooltipType | string
  /** @deprecated 你可以使用 tooltip，這個更改是為了與 ipass customized lib 統一 */
  tip?: string
  /** Form props 的相關配置 */
  formProps?: FormProps
  /** 預設的資料來源 */
  dataSource?: RecordType
  /** 受控資料來源改變 */
  onDataSourceChange?: (value: RecordType) => void
}

/**
 * 根據 dataIndex 獲取值，支持 dataIndex 為數組
 *
 * @param item
 * @param entity
 */
const getDataFromConfig = (item: ProDescriptionsItemProps, entity: any) => {
  const { dataIndex } = item
  if (dataIndex) {
    const data = Array.isArray(dataIndex)
      ? get(entity, dataIndex as string[])
      : entity[dataIndex as string]

    if (data !== undefined || data !== null) {
      return data
    }
  }
  return item.children as string
}

export const FieldRender: React.FC<
  ProDescriptionsItemProps<any> & {
    text: any
    valueType: ProFieldValueType
    entity: any
    action: ProCoreActionType<any>
    index: number
    emptyText?: React.ReactNode
  }
> = (props) => {
  const {
    valueEnum,
    action,
    index,
    text,
    entity,
    render,
    valueType,
    plain,
    dataIndex,
    request,
    renderFormItem,
    params,
  } = props
  const form = ProForm.useFormInstance()

  const { token } = proTheme.useToken?.()

  const fieldConfig = {
    mode: 'read' as 'read',
    text,
    valueEnum,
    proFieldProps: {
      emptyText: props.emptyText,
      render: render
        ? () =>
          render?.(text, entity, index, action, {
            ...props,
            type: 'descriptions',
          })
        : undefined,
    },
    ignoreFormItem: true,
    valueType,
    request,
    params,
    plain,
  }

  if (valueType === 'option') {
    const fieldProps = getFieldPropsOrFormItemProps(
      props.fieldProps,
      undefined,
      {
        ...props,
        rowKey: dataIndex,
        isEditable: false,
      },
    )
    return (
      <ProFormField name={dataIndex} {...fieldConfig} fieldProps={fieldProps} />
    )
  }

  const renderDom = () => {
    const formItemProps = getFieldPropsOrFormItemProps(
      props.formItemProps,
      form as FormInstance<any>,
      {
        ...props,
        rowKey: dataIndex,
        isEditable: true,
      },
    )
    const fieldProps = getFieldPropsOrFormItemProps(
      props.fieldProps,
      form as FormInstance<any>,
      {
        ...props,
        rowKey: dataIndex,
        isEditable: true,
      },
    )
    const dom = renderFormItem
      ? renderFormItem?.(
        {
          ...props,
          type: 'descriptions',
        },
        {
          isEditable: true,
          recordKey: dataIndex,
          record: form.getFieldValue(
            [dataIndex].flat(1) as (string | number)[],
          ),
          defaultRender: () => (
            <ProFormField {...fieldConfig} fieldProps={fieldProps} />
          ),
          type: 'descriptions',
        },
        form as FormInstance<any>,
      )
      : undefined
    return (
      <div
        style={{ display: 'flex', gap: token.marginXS, alignItems: 'center' }}
      >
        <InlineErrorFormItem
          name={dataIndex}
          {...formItemProps}
          style={{
            margin: 0,
            ...(formItemProps?.style || {}),
          }}
          initialValue={text || formItemProps?.initialValue}
        >
          {dom || (
            <ProFormField
              {...fieldConfig}
              // @ts-ignore
              proFieldProps={{ ...fieldConfig.proFieldProps }}
              fieldProps={fieldProps}
            />
          )}
        </InlineErrorFormItem>
      </div>
    ) as React.ReactNode
  }

  return (
    <div
      style={{
        marginTop: -5,
        marginBottom: -5,
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      {renderDom()}
    </div>
  )
}

const schemaToDescriptionsItem = (
  items: ProDescriptionsItemProps<any, any>[],
  entity: any,
  action: ProCoreActionType<any>,
) => {
  const options: JSX.Element[] = []
  // 因為 Descriptions 只是個語法糖，children 是不會執行的，所以需要這裡處理一下
  const children = items
    ?.map?.((item, index) => {
      if (React.isValidElement(item)) {
        return {
          children: item,
        }
      }
      const {
        valueEnum,
        render,
        renderText,
        plain,
        dataIndex,
        request,
        params,
        editable,
        ...restItem
      } = item as ProDescriptionsItemProps

      const defaultData = getDataFromConfig(item, entity) ?? restItem.children
      const text = renderText
        ? renderText(defaultData, entity, index, action)
        : defaultData

      const title =
        typeof restItem.title === 'function'
          ? restItem.title(item, 'descriptions', null)
          : restItem.title

      //  dataIndex 無所謂是否存在
      // 有些時候不需要 dataIndex 可以直接 render
      const valueType =
        typeof restItem.valueType === 'function'
          ? (restItem.valueType(
            entity || {},
            'descriptions',
          ) as ProFieldValueType)
          : (restItem.valueType as ProFieldValueType)

      const Component = React.Fragment

      const contentDom: React.ReactNode = genCopyable(text, item, text)

      const field = (
        <Descriptions.Item
          {...restItem}
          key={restItem.key || restItem.label?.toString() || index}
          label={
            (title ||
              restItem.label ||
              restItem.tooltip ||
              restItem.tip) && (
              <LabelIconTip
                label={title || restItem.label}
                tooltip={restItem.tooltip || restItem.tip}
                ellipsis={item.ellipsis}
              />
            )
          }
        >
          <Component>
            <FieldRender
              {...item}
              dataIndex={item.dataIndex || index}
              text={contentDom}
              valueType={valueType}
              entity={entity}
              index={index}
              action={action}
            />
          </Component>
        </Descriptions.Item>
      )
      // 如果類型是 option 自動放到右上角
      if (valueType === 'option') {
        options.push(field as JSX.Element)
        return null
      }
      return field
    })
    .filter((item) => item)
  return {
    // 空數組傳遞還是會被判定為有值
    options: options?.length ? options : null,
    children,
  }
}

const ProDescriptionsItem: React.FC<ProDescriptionsItemProps> = (props) => {
  return <Descriptions.Item {...props}>{props.children}</Descriptions.Item>
}

ProDescriptionsItem.displayName = 'ProDescriptionsItem'

const DefaultProDescriptionsDom = (dom: { children: any }) => dom.children

const ProDescriptions = <
  RecordType extends Record<string, any>,
  ValueType = 'text',
>(
  props: ProDescriptionsProps<RecordType, ValueType>,
) => {
  const {
    request,
    columns,
    params = {},
    dataSource,
    onDataSourceChange,
    formProps,
    loading,
    onLoadingChange,
    actionRef,
    onRequestError,
    ...rest
  } = props

  const context = useContext(ConfigProvider.ConfigContext)

  const action = useFetchData<RequestData>(
    async () => {
      const data = request ? await request(params) : { data: {} }
      return data
    },
    {
      onRequestError,
      effects: [stringify(params)],
      manual: !request,
      dataSource,
      loading,
      onLoadingChange,
      onDataSourceChange,
    },
  )

  /** 支持 reload 的功能 */
  useEffect(() => {
    if (actionRef) {
      actionRef.current = {
        reload: action.reload,
      }
    }
  }, [action, actionRef])

  // loading 時展示
  // loading =  undefined 但是 request 存在時也應該展示
  if (action.loading || (action.loading === undefined && request)) {
    return <ProSkeleton type="descriptions" list={false} pageHeader={false} />
  }

  const getColumns = (): ProDescriptionsItemProps<RecordType, ValueType>[] => {
    // 因為 Descriptions 只是個語法糖，children 是不會執行的，所以需要這裡處理一下
    const childrenColumns = toArray(props.children)
      .filter(Boolean)
      .map((item) => {
        if (!React.isValidElement(item)) {
          return item
        }
        const {
          valueEnum,
          valueType,
          dataIndex,
          ellipsis,
          copyable,
          request: itemRequest,
        } = item?.props as ProDescriptionsItemProps

        if (
          !valueType &&
          !valueEnum &&
          !dataIndex &&
          !itemRequest &&
          !ellipsis &&
          !copyable &&
          // @ts-ignore
          item.type.displayName !== 'ProDescriptionsItem'
        ) {
          return item
        }

        return {
          ...(item?.props as ProDescriptionsItemProps),
          entity: dataSource,
        }
      }) as ProDescriptionsItemProps<RecordType, ValueType>[]
    return [...(columns || []), ...childrenColumns]
      .filter((item) => {
        if (!item) return false
        if (
          item?.valueType &&
          ['index', 'indexBorder'].includes(item?.valueType as string)
        ) {
          return false
        }
        return !item?.hideInDescriptions
      })
      .sort((a, b) => {
        if (b.order || a.order) {
          return (b.order || 0) - (a.order || 0)
        }
        return (b.index || 0) - (a.index || 0)
      })
  }

  const { options, children } = schemaToDescriptionsItem(
    getColumns(),
    action.dataSource || {},
    actionRef?.current || action,
  )

  /** 如果不是可編輯模式，沒必要注入 ProForm */
  const FormComponent = DefaultProDescriptionsDom

  /** 即使組件返回null了, 在傳遞的過程中還是會被Description檢測到為有值 */
  let title = null
  if (rest.title || rest.tooltip || rest.tip) {
    title = (
      <LabelIconTip label={rest.title} tooltip={rest.tooltip || rest.tip} />
    )
  }

  const className = context.getPrefixCls('pro-descriptions')
  return (
    <ErrorBoundary>
      <FormComponent
        key="form"
        component={false}
        submitter={false}
        {...formProps}
        // @ts-ignore
        onFinish={undefined}
      >
        <Descriptions
          className={className}
          {...rest}
          contentStyle={{
            minWidth: 0,
          }}
          extra={
            rest.extra ? (
              <Space>
                {options}
                {rest.extra}
              </Space>
            ) : (
              options
            )
          }
          title={title}
        >
          {(children as JSX.Element[])}
        </Descriptions>
      </FormComponent>
    </ErrorBoundary>
  )
}

ProDescriptions.Item = ProDescriptionsItem

export { ProDescriptions }

export default ProDescriptions
