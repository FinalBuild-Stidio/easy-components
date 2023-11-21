import type { NamePath } from 'rc-field-form/lib/interface'

import {
  isDropdownValueType,
  ProFieldValueType,
  SearchConvertKeyFn,
  SearchTransformKeyFn,
  useDeepCompareMemo,
  useRefFunction,
} from '../../../utils'
import { omitUndefined } from '@/base/_util/omitUndefined'
import type { FormItemProps } from '@/base'
import { ConfigProvider, Form } from '@/base'
import omit from 'omit.js'
import React, { useContext, useEffect, useMemo } from 'react'
import FieldContext from '../../FieldContext'
import { FormListContext } from '../List'

const FormItemProvide = React.createContext<{
  name?: NamePath
  label?: React.ReactNode
}>({})

/**
 * 把value扔給 fieldProps，方便給自訂用
 *
 * @param param0
 * @returns
 */
const WithValueFomFiledProps: React.FC<
  Record<string, any> & {
    children?: React.ReactNode
  }
> = (formFieldProps) => {
  const {
    children: filedChildren,
    onChange,
    onBlur,
    ignoreFormItem,
    valuePropName = 'value',
    ...restProps
  } = formFieldProps

  const isProFormComponent =
    // @ts-ignore
    filedChildren?.type?.displayName !== 'ProFormComponent'

  const isValidElementForFiledChildren = !React.isValidElement(filedChildren)

  const onChangeMemo = useRefFunction(function (...restParams: any[]): void {
    onChange?.(...restParams)
    if (isProFormComponent) return
    if (isValidElementForFiledChildren) return undefined
    filedChildren?.props?.onChange?.(...restParams);

    (filedChildren?.props as Record<string, any>)?.fieldProps?.onChange?.(
      ...restParams,
    )
  })

  const onBlurMemo = useRefFunction(function (...restParams: any[]): void {
    if (isProFormComponent) return
    if (isValidElementForFiledChildren) return
    onBlur?.(...restParams)
    filedChildren?.props?.onBlur?.(...restParams);
    (filedChildren?.props as Record<string, any>)?.fieldProps?.onBlur?.(
      ...restParams,
    )
  })

  const omitOnBlurAndOnChangeProps = useDeepCompareMemo(
    () =>
      omit(
        // @ts-ignore
        filedChildren?.props?.fieldProps || {},
        ['onBlur', 'onChange'],
      ),
    [
      omit(
        // @ts-ignore
        filedChildren?.props?.fieldProps || {},
        ['onBlur', 'onChange'],
      ),
    ],
  )
  const propsValuePropName = formFieldProps[valuePropName]

  const fieldProps = useMemo(() => {
    if (isProFormComponent) return undefined
    if (isValidElementForFiledChildren) return undefined
    return omitUndefined({
      id: restProps.id,
      // 優先使用 children.props.fieldProps，
      // 比如 LightFilter 中可能需要通過 fieldProps 覆蓋 Form.Item 預設的 onChange
      [valuePropName]: propsValuePropName,
      ...omitOnBlurAndOnChangeProps,
      onBlur: onBlurMemo,
      // 這個 onChange 是 Form.Item 新增上的，
      // 要通過 fieldProps 透傳給 ProField 調用
      onChange: onChangeMemo,
    })
  }, [
    propsValuePropName,
    omitOnBlurAndOnChangeProps,
    onBlurMemo,
    onChangeMemo,
    restProps.id,
    valuePropName,
  ])

  const finalChange = useMemo(() => {
    if (fieldProps) return undefined
    if (!React.isValidElement(filedChildren)) return undefined
    return (...restParams: any[]) => {
      onChange?.(...restParams)
      filedChildren?.props?.onChange?.(...restParams)
    }
  }, [fieldProps, filedChildren, onChange])

  if (!React.isValidElement(filedChildren)) return <>{filedChildren}</>

  return React.cloneElement(
    filedChildren,
    omitUndefined({
      ...restProps,
      [valuePropName]: formFieldProps[valuePropName],
      ...filedChildren.props,
      onChange: finalChange,
      fieldProps,
    }),
  )
}

type WarpFormItemProps = {
  /** @name 前置的dom * */
  addonBefore?: React.ReactNode
  /** @name 後置的dom * */
  addonAfter?: React.ReactNode
  /**
   * @name 取得時轉換值，一般用於將資料格式化為元件接收的格式
   * @param value 欄位的值
   * @param namePath 欄位的name
   * @returns 欄位新的值
   *
   *
   * @example a,b => [a,b]     convertValue: (value,namePath)=> value.split(",")
   * @example string => json   convertValue: (value,namePath)=> JSON.parse(value)
   * @example number => date   convertValue: (value,namePath)=> Dayjs(value)
   * @example YYYY-MM-DD => date   convertValue: (value,namePath)=> Dayjs(value,"YYYY-MM-DD")
   * @example  string => object   convertValue: (value,namePath)=> { return {value,label:value} }
   */
  convertValue?: SearchConvertKeyFn
}

/**
 * 支援了一下前置 dom 和後置的 dom 同時包一個provide
 *
 * @param WarpFormItemProps
 * @returns
 */
const WarpFormItem: React.FC<FormItemProps & WarpFormItemProps> = ({
  children,
  addonAfter,
  addonBefore,
  valuePropName,
  convertValue,
  ...props
}) => {
  const formDom = useMemo(() => {
    let getValuePropsFunc: any = (value: any) => {
      const newValue = convertValue?.(value, props.name!) ?? value
      if (props.getValueProps) return props.getValueProps(newValue)
      return {
        [valuePropName || 'value']: newValue,
      }
    }
    if (!convertValue && !props.getValueProps) {
      getValuePropsFunc = undefined
    }
    if (!addonAfter && !addonBefore) {
      return (
        <Form.Item
          {...props}
          valuePropName={valuePropName}
          getValueProps={getValuePropsFunc}
        >
          {children}
        </Form.Item>
      )
    }
    return (
      <Form.Item
        {...props}
        valuePropName={valuePropName}
        // @ts-ignore
        _internalItemRender={{
          mark: 'pro_table_render',
          render: (
            inputProps: FormItemProps & {
              errors: any[]
            },
            doms: {
              input: JSX.Element
              errorList: JSX.Element
              extra: JSX.Element
            },
          ) => (
            <>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {addonBefore ? (
                  <div style={{ marginInlineEnd: 8 }}>{addonBefore}</div>
                ) : null}
                {doms.input}
                {addonAfter ? (
                  <div style={{ marginInlineStart: 8 }}>{addonAfter}</div>
                ) : null}
              </div>
              {doms.extra}
              {doms.errorList}
            </>
          ),
        }}
        {...props}
        getValueProps={getValuePropsFunc}
      >
        {children}
      </Form.Item>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addonAfter, addonBefore, children, convertValue?.toString(), props])

  return (
    <FormItemProvide.Provider
      value={{
        name: props.name,
        label: props.label,
      }}
    >
      {formDom}
    </FormItemProvide.Provider>
  )
}

export type ProFormItemProps = FormItemProps & {
  ignoreFormItem?: boolean
  valueType?: ProFieldValueType
  /**
   * @name 提交時轉換值，一般用於將值轉換為提交的資料
   * @param value 欄位的值
   * @param namePath 欄位的name
   * @param allValues 所有的欄位
   * @returns 欄位新的值，如果返回對象，會和所有值 merge 一次
   *
   * @example {name:[a,b] => {name:a,b }    transform: (value,namePath,allValues)=> value.join(",")
   * @example {name: string => { newName:string }    transform: (value,namePath,allValues)=> { newName:value }
   * @example {name:dayjs} => {name:string transform: (value,namePath,allValues)=> value.format("YYYY-MM-DD")
   * @example {name:dayjs}=> {name:時間戳} transform: (value,namePath,allValues)=> value.valueOf()
   * @example {name:{value,label}} => { name:string} transform: (value,namePath,allValues)=> value.value
   * @example {name:{value,label}} => { valueName,labelName  } transform: (value,namePath,allValues)=> { valueName:value.value, labelName:value.name }
   */
  transform?: SearchTransformKeyFn
  dataFormat?: string
  proFormFieldKey?: any
} & WarpFormItemProps

const ProFormItem: React.FC<ProFormItemProps> = (props) => {
  /** 從 context 中拿到的值 */
  const { componentSize } = ConfigProvider?.useConfig?.() || {
    componentSize: 'middle',
  }
  const size = componentSize
  const {
    valueType,
    transform,
    dataFormat,
    ignoreFormItem,
    children: unusedChildren,
    ...rest
  } = props
  const formListField = useContext(FormListContext)

  // ProFromList 的 filed，裡面有name和key
  /** 從 context 中拿到的值 */
  const name = useMemo(() => {
    if (props.name === undefined) return props.name
    if (formListField.name !== undefined) {
      return [formListField.name, props.name].flat(1) as string[]
    }
    return props.name as string[]
  }, [formListField.name, props.name])

  /** 從 context 中拿到的值 */
  const { setFieldValueType, formItemProps } = React.useContext(FieldContext)

  useEffect(() => {
    // 如果 setFieldValueType 和 props.name 不存在不存入
    if (!setFieldValueType || !props.name) {
      return
    }
    // Field.type === 'ProField' 時 props 裡面是有 valueType 的，所以要設置一下
    // 寫一個 ts 比較麻煩，用 any 頂一下
    setFieldValueType(
      [formListField.listName, props.name]
        .flat(1)
        .filter((itemName) => itemName !== undefined),
      {
        valueType: valueType || 'text',
        dateFormat: dataFormat,
        transform,
      },
    )
  }, [
    formListField.listName,
    name,
    dataFormat,
    props.name,
    setFieldValueType,
    transform,
    valueType,
  ])

  const isDropdown =
    React.isValidElement(props.children) &&
    isDropdownValueType(valueType || props.children.props.valueType)

  // formItem 支援function，如果是function 我就直接不管了
  if (typeof props.children === 'function') {
    return (
      <WarpFormItem
        {...rest}
        name={name}
        key={rest.proFormFieldKey || rest.name?.toString()}
      >
        {props.children}
      </WarpFormItem>
    )
  }

  const children = (
    <WithValueFomFiledProps
      key={rest.proFormFieldKey || rest.name?.toString()}
      valuePropName={props.valuePropName}
    >
      {props.children}
    </WithValueFomFiledProps>
  )

  return (
    <WarpFormItem
      key={rest.proFormFieldKey || rest.name?.toString()}
      {...formItemProps}
      {...rest}
      name={name}
      isListField={formListField.name !== undefined}
    >
      {children}
    </WarpFormItem>
  )
}

export { FormItemProvide }
export default ProFormItem
