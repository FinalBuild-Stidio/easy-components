import classnames from 'classnames'
import { FieldContext as RcFieldContext } from 'rc-field-form'
import { noteOnce } from 'rc-util/lib/warning'
import React, { useContext, useMemo, useState } from 'react'

import {
  pickProFormItemProps,
  stringify,
  useDeepCompareMemo,
  useRefFunction,
} from '../../utils'
import { omitUndefined } from '@/base/_util/omitUndefined'
import type { FormItemProps } from '@/base'
import { ProFormDependency, ProFormItem } from '../components'
import FieldContext from '../FieldContext'
import { useGridHelpers } from '../helpers'
import type {
  ExtendsProps,
  ProFormFieldItemProps,
  ProFormItemCreateConfig,
} from '../typing'

export const TYPE = Symbol('ProFormComponent')

const WIDTH_SIZE_ENUM = {
  // 適用於短數字，短文本或者選項
  xs: 104,
  s: 216,
  // 適用於較短欄位輸入、如姓名、電話、ID 等。
  sm: 216,
  m: 328,
  // 標準寬度，適用於大部分欄位長度。
  md: 328,
  l: 440,
  // 適用於較長欄位輸入，如長網址、標籤組、文件路徑等。
  lg: 440,
  // 適用於長文本輸入，如長連結、描述、備註等，通常搭配自適應多行輸入框或定高文本域使用。
  xl: 552,
}

const ignoreWidthValueType = ['switch', 'radioButton', 'radio', 'rate']

type ProFormComponent<P, Extends> = React.ComponentType<P & Extends>

/**
 * 處理fieldProps和formItemProps為function時傳進來的方法
 * 目前只在SchemaForm時可能會有
 */
type FunctionFieldProps = {
  getFormItemProps?: () => Record<string, any>
  getFieldProps?: () => Record<string, any>
}

/**
 * 這個方法的主要作用的幫助 Field 增加 FormItem 同時也會處理 lightFilter
 *
 * @param Field
 * @param config
 */
function createField<P extends ProFormFieldItemProps = any>(
  Field: React.ComponentType<P> | React.ForwardRefExoticComponent<P>,
  config?: ProFormItemCreateConfig,
): ProFormComponent<P, ExtendsProps & FunctionFieldProps> {
  // 標記是否是 ProForm 的元件
  // @ts-ignore
  // eslint-disable-next-line no-param-reassign
  Field.displayName = 'ProFormComponent'

  const FieldWithContext: React.FC<P & ExtendsProps & FunctionFieldProps> = (
    props,
  ) => {
    const {
      valueType: tmpValueType,
      customLightMode,
      lightFilterLabelFormatter,
      valuePropName = 'value',
      ignoreWidth,
      defaultProps,
      ...defaultFormItemProps
    } = { ...props?.filedConfig, ...config } || {}
    const {
      label,
      tooltip,
      placeholder,
      width,
      bordered,
      messageVariables,
      ignoreFormItem,
      transform,
      convertValue,
      readonly,
      allowClear,
      colSize,
      getFormItemProps,
      getFieldProps,
      filedConfig,
      cacheForSwr,
      proFieldProps,
      ...rest
    } = { ...defaultProps, ...props }
    const valueType = tmpValueType || rest.valueType

    // 有些 valueType 不需要寬度
    const isIgnoreWidth = useMemo(
      () => ignoreWidth || ignoreWidthValueType.includes(valueType),
      [ignoreWidth, valueType],
    )

    const [, forceUpdate] = useState<[]>()

    // onChange觸發fieldProps,formItemProps重新執行
    const [onlyChange, forceUpdateByOnChange] = useState<[]>()

    /**
     * 從 context 中拿到的值
     */
    const contextValue = React.useContext(FieldContext)

    /**
     * dependenciesValues change to trigger re-execute of getFieldProps and getFormItemProps
     */
    const changedProps = useDeepCompareMemo(
      () => {
        return {
          formItemProps: getFormItemProps?.(),
          fieldProps: getFieldProps?.(),
        }
      },

      // eslint-disable-next-line react-hooks/exhaustive-deps
      [getFieldProps, getFormItemProps, rest.dependenciesValues, onlyChange],
    )

    const fieldProps: Record<string, any> = useDeepCompareMemo(() => {
      const newFieldProps: any = {
        ...(ignoreFormItem ? omitUndefined({ value: rest.value }) : {}),
        placeholder,
        disabled: props.disabled,
        ...contextValue.fieldProps,
        ...changedProps.fieldProps,
        // 支援未傳遞getFieldProps的情況
        // 某些特殊hack情況下覆蓋原來設置的fieldProps參數
        ...rest.fieldProps,
      }

      newFieldProps.style = omitUndefined(newFieldProps?.style)
      return newFieldProps
    }, [
      ignoreFormItem,
      rest.value,
      rest.fieldProps,
      placeholder,
      props.disabled,
      contextValue.fieldProps,
      changedProps.fieldProps,
    ])

    // restFormItemProps is user props pass to Form.Item
    const restFormItemProps = pickProFormItemProps(rest)

    const formItemProps: FormItemProps = useDeepCompareMemo(
      () => ({
        ...contextValue.formItemProps,
        ...restFormItemProps,
        ...changedProps.formItemProps,
        // 支援未傳遞getFormItemProps的情況
        // 某些特殊hack情況下覆蓋原來設置的formItemProps參數
        ...rest.formItemProps,
      }),
      [
        changedProps.formItemProps,
        contextValue.formItemProps,
        rest.formItemProps,
        restFormItemProps,
      ],
    )

    const otherProps = useDeepCompareMemo(
      () => ({
        messageVariables,
        ...defaultFormItemProps,
        ...formItemProps,
      }),
      [defaultFormItemProps, formItemProps, messageVariables],
    )

    noteOnce(
      // eslint-disable-next-line @typescript-eslint/dot-notation
      !rest['defaultValue'],
      '請不要在 Form 中使用 defaultXXX。如果需要預設值請使用 initialValues 和 initialValue。',
    )

    const { prefixName } = useContext(RcFieldContext)

    const proFieldKey = useDeepCompareMemo(() => {
      let name = otherProps?.name
      if (Array.isArray(name)) name = name.join('_')
      if (Array.isArray(prefixName) && name)
        name = `${prefixName.join('.')}.${name}`
      const key = name && `form-${contextValue.formKey ?? ''}-field-${name}`
      return key

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stringify(otherProps?.name), prefixName, contextValue.formKey])

    const onChange = useRefFunction((...restParams: any[]) => {
      if (getFormItemProps || getFieldProps) {
        forceUpdateByOnChange([])
      } else if (rest.renderFormItem) {
        forceUpdate([])
      }
      fieldProps?.onChange?.(...restParams)
    })

    const style = useDeepCompareMemo(() => {
      const newStyle = {
        width:
          // @ts-ignore
          width && !WIDTH_SIZE_ENUM[width]
            ? width
            : contextValue.grid
              ? '100%'
              : undefined,
        ...fieldProps?.style,
      }

      if (isIgnoreWidth) Reflect.deleteProperty(newStyle, 'width')

      return omitUndefined(newStyle)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stringify(fieldProps?.style), contextValue.grid, isIgnoreWidth, width])

    const className = useDeepCompareMemo(() => {
      // @ts-ignore
      const isSizeEnum = width && WIDTH_SIZE_ENUM[width]
      return (
        classnames(fieldProps?.className, {
          'pro-field': isSizeEnum,
          [`pro-field-${width}`]: isSizeEnum && !isIgnoreWidth,
        }) || undefined
      )
    }, [width, fieldProps?.className, isIgnoreWidth])

    const fieldProFieldProps = useDeepCompareMemo(() => {
      return omitUndefined({
        ...contextValue.proFieldProps,
        mode: rest?.mode,
        readonly,
        params: rest.params,
        proFieldKey: proFieldKey,
        cacheForSwr,
        ...proFieldProps,
      })
    }, [
      contextValue.proFieldProps,
      rest?.mode,
      rest.params,
      readonly,
      proFieldKey,
      cacheForSwr,
      proFieldProps,
    ])

    const fieldFieldProps = useDeepCompareMemo(() => {
      return {
        onChange,
        allowClear,
        ...fieldProps,
        style,
        className,
      }
    }, [allowClear, className, onChange, fieldProps, style])

    const field = useDeepCompareMemo(() => {
      return (
        <Field
          // @ts-ignore
          key={props.proFormFieldKey || props.name}
          // ProXxx 上面的 props 透傳給 FieldProps，可能包含 Field 自訂的 props，
          // 比如 ProFormSelect 的 request
          {...(rest as P)}
          fieldProps={fieldFieldProps}
          proFieldProps={fieldProFieldProps}
          // @ts-ignore
          ref={props?.fieldRef}
        />
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fieldProFieldProps, fieldFieldProps, rest])

    // 使用useMemo包裹避免不必要的re-render
    const formItem = useDeepCompareMemo(() => {
      return (
        <ProFormItem
          // 全局的提供一個 tip 功能，可以減少程式碼量
          // 輕量模式下不通過 FormItem 顯示 label
          label={label && proFieldProps?.light !== true ? label : undefined}
          tooltip={proFieldProps?.light !== true && tooltip}
          valuePropName={valuePropName}
          // @ts-ignore
          key={props.proFormFieldKey || otherProps.name?.toString()}
          // @ts-ignore
          {...otherProps}
          ignoreFormItem={ignoreFormItem}
          transform={transform}
          dataFormat={fieldProps?.format}
          valueType={valueType}
          messageVariables={{
            label: (label as string) || '',
            ...otherProps?.messageVariables,
          }}
          convertValue={convertValue}
        >
          {field}
        </ProFormItem>
      )
    }, [
      label,
      proFieldProps?.light,
      tooltip,
      valuePropName,
      props.proFormFieldKey,
      otherProps,
      ignoreFormItem,
      transform,
      fieldProps,
      valueType,
      convertValue,
      bordered,
      field,
      allowClear,
      customLightMode,
      lightFilterLabelFormatter,
    ])

    const { ColWrapper } = useGridHelpers(rest)

    return <ColWrapper>{formItem}</ColWrapper>
  }

  const DependencyWrapper: React.FC<
    P &
    ExtendsProps &
    FunctionFieldProps & {
      originDependencies?: string[]
    }
  > = (props) => {
    const { dependencies } = props
    return dependencies ? (
      <ProFormDependency
        name={dependencies}
        originDependencies={props?.originDependencies}
      >
        {(values) => {
          return (
            <FieldWithContext
              dependenciesValues={values}
              dependencies={dependencies}
              {...props}
            />
          )
        }}
      </ProFormDependency>
    ) : (
      <FieldWithContext dependencies={dependencies} {...props} />
    )
  }

  return DependencyWrapper
}

export { createField }
