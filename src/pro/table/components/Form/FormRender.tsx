import React, { useContext, useMemo } from 'react'
import classNames from 'classnames'
import omit from 'omit.js'

import { ProProvider } from '@/providers'
import { ConfigProvider, Table } from '@/base'
import type { FormItemProps } from '@/base'
import type {
  BaseQueryFilterProps,
  ProFormInstance,
  ProFormProps,
} from '../../../form'
import { BetaSchemaForm } from '../../../form'
import type { ActionType, ProColumns, ProTableProps } from '../../typing'
import type { ProSchemaComponentTypes } from '../../../utils'

function toLowerLine(str: string) {
  let temp = str.replace(/[A-Z]/g, (match) => {
    return `-${match.toLowerCase()}`
  })

  if (temp.startsWith('-')) {
    // 如果首字母是大寫，執行replace時會多一個_，這裡需要去掉
    temp = temp.slice(1)
  }
  return temp
}

export type SearchConfig = BaseQueryFilterProps & {
  filterType?: 'query' | 'light'
}

/**
 * 獲取當前選擇的 Form Layout 配置
 *
 * @param isForm
 * @param searchConfig
 * @returns LightFilter | QueryFilter | ProForm
 */
const getFormCompetent = (
  isForm: boolean,
  searchConfig?: SearchConfig | false,
): 'Form' | 'LightFilter' | 'QueryFilter' => {
  if (!isForm && searchConfig !== false) {
    if (searchConfig?.filterType === 'light') {
      return 'LightFilter'
    }
    return 'QueryFilter'
  }
  return 'Form'
}

/**
 * 獲取需要傳給相應表單的props
 *
 * @param searchConfig
 * @param name
 */
const getFromProps = (isForm: boolean, searchConfig: any, name: string) => {
  if (!isForm && name === 'LightFilter') {
    // 傳給 lightFilter 的問題
    return omit(
      {
        ...searchConfig,
      },
      ['labelWidth', 'defaultCollapsed', 'filterType'],
    )
  }

  if (!isForm) {
    // 傳給 QueryFilter 的配置
    return omit(
      {
        labelWidth: searchConfig ? searchConfig?.labelWidth : undefined,
        defaultCollapsed: true,
        ...searchConfig,
      },
      ['filterType'],
    )
  }
  return {}
}

/**
 * 從formConfig中獲取傳給相應表單的配置
 *
 * @param isForm
 * @param formConfig
 */
const getFormConfigs = (isForm: boolean, formConfig: any) => {
  if (isForm) {
    // 傳給Form的配置
    return omit(formConfig, ['ignoreRules'])
  }
  // 傳給Filter的配置
  return { ignoreRules: true, ...formConfig }
}

export type TableFormItem<T, U = any> = {
  onSubmit?: (value: T, firstLoad: boolean) => void
  onReset?: (value: T) => void
  form?: Omit<ProFormProps, 'form'>
  type?: ProSchemaComponentTypes
  dateFormatter?: ProTableProps<T, U, any>['dateFormatter']
  search?: false | SearchConfig
  columns: ProColumns<U, any>[]
  formRef: React.MutableRefObject<ProFormInstance | undefined>
  submitButtonLoading?: boolean
  manualRequest?: boolean
  bordered?: boolean
  action: React.MutableRefObject<ActionType | undefined>
  ghost?: boolean
} & Omit<FormItemProps, 'children' | 'onReset'>

/**
 * 這裡會把 列配置轉化為 form 表單
 *
 * @param param0
 * @returns
 */
const FormRender = <T, U = any>({
  onSubmit,
  formRef,
  dateFormatter = 'string',
  type,
  columns,
  action,
  ghost,
  manualRequest,
  onReset,
  submitButtonLoading,
  search: searchConfig,
  form: formConfig,
  bordered,
}: TableFormItem<T, U>) => {
  const { hashId } = useContext(ProProvider)
  const isForm = type === 'form'
  /** 提交表單，根據兩種模式不同，方法不相同 */
  const submit = async (values: T, firstLoad: boolean) => {
    if (onSubmit) {
      onSubmit(values, firstLoad)
    }
  }

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)

  const columnsList = useMemo(() => {
    return columns
      .filter((item) => {
        if (item === Table.EXPAND_COLUMN) {
          return false
        }
        if ((item.hideInSearch || item.search === false) && type !== 'form') {
          return false
        }
        if (type === 'form' && item.hideInForm) {
          return false
        }
        return true
      })
      .map((item) => {
        const finalValueType =
          !item.valueType ||
            (['textarea', 'jsonCode', 'code'].includes(item?.valueType) &&
              type === 'table')
            ? 'text'
            : (item?.valueType as 'text')
        const columnKey = item?.key || item?.dataIndex?.toString()

        return {
          ...item,
          width: undefined,
          ...(item.search ? item.search : {}),
          valueType: finalValueType,
          proFieldProps: {
            ...item.proFieldProps,
            proFieldKey: columnKey ? `table-field-${columnKey}` : undefined,
          },
        }
      })
  }, [columns, type])

  const className = getPrefixCls('pro-table-search')
  const formClassName = getPrefixCls('pro-table-form')

  const competentName = useMemo(
    () => getFormCompetent(isForm, searchConfig),
    [searchConfig, isForm],
  )

  // 傳給每個表單的配置，理論上大家都需要
  const loadingProps: any = useMemo(
    () => ({
      submitter: {
        submitButtonProps: {
          loading: submitButtonLoading,
        },
      },
    }),
    [submitButtonLoading],
  )

  return (
    <div
      className={classNames(hashId, {
        [getPrefixCls('pro-card')]: true,
        [`${getPrefixCls('pro-card')}-border`]: !!bordered,
        [`${getPrefixCls('pro-card')}-bordered`]: !!bordered,
        [`${getPrefixCls('pro-card')}-ghost`]: !!ghost,
        [className]: true,
        [formClassName]: isForm,
        [getPrefixCls(`pro-table-search-${toLowerLine(competentName)}`)]: true,
        [`${className}-ghost`]: ghost,
        [(searchConfig as { className: string })?.className]:
          searchConfig !== false && searchConfig?.className,
      })}
    >
      <BetaSchemaForm<U>
        layoutType={competentName}
        columns={columnsList}
        type={type}
        {...loadingProps}
        {...getFromProps(isForm, searchConfig, competentName)}
        {...getFormConfigs(isForm, formConfig || {})}
        formRef={formRef}
        action={action}
        dateFormatter={dateFormatter}
        onInit={(values: T, form) => {
          formRef.current = form
          // 觸發一個 submit，之所以這裡觸發是為了保證 value 都被 format了
          if (type !== 'form') {
            // 修改 pageSize，變成從 url 中獲取的
            const pageInfo = action.current?.pageInfo
            // 從 values 裡獲取是因為有時候要從 url中獲取的 pageSize。
            const {
              current = pageInfo?.current,
              pageSize = pageInfo?.pageSize,
            } = values as any
            action.current?.setPageInfo?.({
              ...pageInfo,
              current: parseInt(current, 10),
              pageSize: parseInt(pageSize, 10),
            })
            /** 如果是手動模式不需要提交 */
            if (manualRequest) return
            submit(values, true)
          }
        }}
        onReset={(values: T) => {
          onReset?.(values)
        }}
        onFinish={(values: T) => {
          submit(values, false)
        }}
        initialValues={formConfig?.initialValues}
      />
    </div>
  )
}

export default FormRender
