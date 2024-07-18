import React, { useContext } from 'react'

import type { SelectProps } from '@/base'
import type { RefSelectProps } from '@/base/select'
import { runFunction } from '../../../utils'
import FieldContext from '../../FieldContext'
import type {
  ProFormFieldItemProps,
  ProFormFieldRemoteProps,
} from '../../typing'
import ProFormField from '../Field'

export type ProFormSelectProps<
  ValueType = any,
  OptionType = any,
> = ProFormFieldItemProps<
  SelectProps<ValueType> & {
    /**
     * 是否在輸入框聚焦時觸發搜索
     *
     * @default false
     */
    searchOnFocus?: boolean
    /**
     * 選擇完一個之後是否清空搜索項重新搜索
     *
     * @default false
     */
    resetAfterSelect?: boolean
    /**
     * 當搜索關鍵字發生變化時是否請求 API 資料
     *
     * @default true
     */
    fetchDataOnSearch?: boolean
    /** 自訂選項渲染 */
    optionItemRender?: (item: ValueType) => React.ReactNode
  },
  RefSelectProps
> & {
  options?: SelectProps<ValueType, any>['options'] | string[]
  mode?: SelectProps<ValueType, any>['mode'] | 'single'
  showSearch?: SelectProps<ValueType, any>['showSearch']
  readonly?: boolean
  onChange?: SelectProps<ValueType, any>['onChange']
} & ProFormFieldRemoteProps

/**
 * 選擇框
 *
 * @param
 */
const ProFormSelectComponents = <T, OptionType = any>(
  {
    fieldProps,
    children,
    params,
    proFieldProps,
    mode,
    valueEnum,
    request,
    showSearch,
    options,
    ...rest
  }: ProFormSelectProps<T, any>,
  ref: any,
) => {
  const context = useContext(FieldContext)

  return (
    <ProFormField<any>
      valueEnum={runFunction(valueEnum)}
      request={request}
      params={params}
      valueType="select"
      filedConfig={{ customLightMode: true }}
      fieldProps={
        {
          options,
          mode,
          showSearch,
          getPopupContainer: context.getPopupContainer,
          ...fieldProps,
        } as SelectProps<any>
      }
      ref={ref}
      proFieldProps={proFieldProps}
      {...rest}
    >
      {children}
    </ProFormField>
  )
}

const SearchSelect = React.forwardRef<any, ProFormSelectProps<any>>(
  (
    {
      fieldProps,
      children,
      params,
      proFieldProps,
      mode,
      valueEnum,
      request,
      options,
      ...rest
    },
    ref,
  ) => {
    const props: Omit<SelectProps<any>, 'options'> & {
      options?: ProFormSelectProps['options']
    } = {
      options,
      mode: (mode as 'multiple') || 'multiple',
      labelInValue: true,
      showSearch: true,
      showArrow: false,
      autoClearSearchValue: true,
      optionLabelProp: 'label',
      ...fieldProps,
    }
    const context = useContext(FieldContext)
    return (
      <ProFormField<any>
        valueEnum={runFunction(valueEnum)}
        request={request}
        params={params}
        valueType="select"
        filedConfig={{ customLightMode: true }}
        fieldProps={{ getPopupContainer: context.getPopupContainer, ...props }}
        ref={ref}
        proFieldProps={proFieldProps}
        {...rest}
      >
        {children}
      </ProFormField>
    )
  },
)

const ProFormSelect = React.forwardRef(ProFormSelectComponents) as <
  T,
  OptionType = any,
>(
  props: ProFormSelectProps<T, OptionType>,
) => React.ReactElement

const ProFormSearchSelect = SearchSelect as <
  T,
  OptionType = any,
>(
  props: ProFormSelectProps<T, OptionType>,
) => React.ReactElement

const WrappedProFormSelect = ProFormSelect as (<
  T,
  OptionType = any,
>(
  props: ProFormSelectProps<T, OptionType>,
) => React.ReactElement) & {
  SearchSelect: typeof ProFormSearchSelect
}

WrappedProFormSelect.SearchSelect = ProFormSearchSelect

// @ts-ignore
// eslint-disable-next-line no-param-reassign
WrappedProFormSelect.displayName = 'ProFormComponent'

export default WrappedProFormSelect
