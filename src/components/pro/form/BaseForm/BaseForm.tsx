/* eslint-disable react-hooks/exhaustive-deps */
import CircularProgress from '@mui/material/CircularProgress'
import type { NamePath } from 'rc-field-form/lib/interface'

import { ProConfigProvider } from '@/providers'
import {
  conversionMomentValue,
  isDeepEqualReact,
  nanoid,
  ProFormContext,
} from '../../utils'
import type {
  FieldProps,
} from '../typing'
import type {
  ProFieldProps,
  ProFieldValueType,
  SearchTransformKeyFn,
} from '../../utils/typing'
import {
  ProFormInstanceType,
} from '../../utils/components/ProFormContext'
import type { ProRequestData } from '../../utils/hooks/useFetchData'
import {
  runFunction,
  transformKeySubmitValue,
  useFetchData,
  useMountMergeState,
  usePrevious,
  useRefFunction,
  useStyle,
} from '../../utils'
import { useUrlSearchParams } from '@umijs/use-params'
import type { FormInstance, FormItemProps, FormProps } from '@/components/base/form'
import Form from '@/components/base/form'
import ConfigProvider from '@/components/base/Config'

import classNames from 'classnames'
import type dayjs from 'dayjs'
import omit from 'omit.js'
import get from 'rc-util/lib/utils/get'
import { default as namePathSet, default as set } from 'rc-util/lib/utils/set'
import { noteOnce } from 'rc-util/lib/warning'
import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { SubmitterProps } from '../components'
import { Submitter } from '../components'
import { FormListContext } from '../components/List'
import FieldContext from '../FieldContext'
import { GridContext, useGridHelpers } from '../helpers'
import type {
  ProFormGridConfig,
  ProFormGroupProps,
} from '../typing'
import { EditOrReadOnlyContext } from './EditOrReadOnlyContext'

export type CommonFormProps<
  T = Record<string, any>,
  U = Record<string, any>,
> = {
  /**
   * @name 自訂提交的設定
   *
   * @example 不顯示提交按鈕和重設按鈕
   * submitter={false}
   * @example 修改重設按鈕的 style ，並且隱藏提交按鈕
   * submitter={{resetButtonProps: { type: 'dashed'},submitButtonProps: { style: { display: 'none', }}}}
   *
   * @example 修改提交按鈕和重設按鈕的順序
   * submitter={{ render:(props,dom)=> [...dom.reverse()]}}
   *
   * @example 修改提交和重設按鈕文字
   * submitter={{ searchConfig: { submitText: '提交2',restText: '重設2'}}}
   */
  submitter?:
  | SubmitterProps<{
    form?: FormInstance<any>
  }>
  | false

  /**
   * @name 表單結束後調用
   * @description 支援非同步操作，更加方便
   *
   * @example onFinish={async (values) => { await save(values); return true }}
   */
  onFinish?: (formData: T) => Promise<boolean | void>
  /**
   * @name 表單按鈕的 loading 狀態
   */
  loading?: boolean
  /**
   * @name 這是一個可選的屬性(onLoadingChange)，它接受一個名為loading的參數，類型為boolean，表示載入狀態是否改變。
   * 當loading狀態發生變化時，將會調用一個函數，這個函數接受這個loading狀態作為參數，並且沒有返回值(void)。
   */
  onLoadingChange?: (loading: boolean) => void

  /**
   * @name 取得 ProFormInstance
   *
   * ProFormInstance 可以用來取得當前表單的一些資訊
   *
   * @example 取得 name 的值 formRef.current.getFieldValue("name");
   * @example 取得所有的表單值 formRef.current.getFieldsValue(true);
   */
  formRef?:
  | React.MutableRefObject<ProFormInstance<T> | undefined>
  | React.RefObject<ProFormInstance<T> | undefined>

  /**
   * @name 同步結果到 url 中
   * */
  syncToUrl?: boolean | ((values: T, type: 'get' | 'set') => T)

  /**
   * @name 當 syncToUrl 為 true，在頁面回顯示時，以url上的參數為主，預設為false
   */
  syncToUrlAsImportant?: boolean

  /**
   * @name 額外的 url 參數 中
   * */
  extraUrlParams?: Record<string, any>

  /**
   * 同步結果到 initialValues,預設為true如果為false，reset的時將會忽略從url上取得的資料
   *
   * @name 是否將 url 參數寫入 initialValues
   */
  syncToInitialValues?: boolean

  /**
   * 如果為 false,會原樣保存。
   *
   * @default true
   * @param 要不要值中的 Null 和 undefined
   */
  omitNil?: boolean
  /**
   * 格式化 Date 的方式，預設轉換為 string
   *
   * @example  dateFormatter="string" : Moment -> YYYY-MM-DD
   * @example  dateFormatter="YYYY-MM-DD  HH:mm:SS" Moment -> YYYY-MM-DD  HH:mm:SS
   * @example  dateFormatter="HH:mm:SS" Moment -> HH:mm:SS
   * @example  dateFormatter="number" Moment -> timestamp
   * @example  dateFormatter=false Moment -> Moment
   * @example  dateFormatter={(value)=>value.format("YYYY-MM-DD")}
   */
  dateFormatter?:
  | 'string'
  | 'number'
  | ((value: dayjs.Dayjs, valueType: string) => string | number)
  | false

  /**
   * @name 表單初始化成功，比如布局，label等計算完成
   * @example  (values)=>{ console.log(values) }
   */
  onInit?: (values: T, form: ProFormInstance<any>) => void

  /**
   * @name 發起網路請求的參數
   *
   * @example  params={{productId: 1}}
   * */
  params?: U
  /**
   * @name 發起網路請求的參數,返回值會覆蓋給 initialValues
   *
   * @example async (params)=>{ return initialValues }
   */
  request?: ProRequestData<T, U>

  /** 是否回車提交 */
  isKeyPressSubmit?: boolean

  /** 用於控制form 是否相同的key，高階用法 */
  formKey?: string

  /**
   * @name自動選中第一項
   * @description 只對有input的類型有效
   */
  autoFocusFirstInput?: boolean

  /**
   *  @name 是否唯獨模式，對所有表單項生效
   *  @description 優先低於表單項的 readonly
   */
  readonly?: boolean
} & ProFormGridConfig

export type BaseFormProps<T = Record<string, any>, U = Record<string, any>> = {
  contentRender?: (
    items: React.ReactNode[],
    submitter: React.ReactElement<SubmitterProps> | undefined,
    form: FormInstance<any>,
  ) => React.ReactNode
  fieldProps?: FieldProps<unknown>
  proFieldProps?: ProFieldProps
  /** 表單初始化完成，form已經存在，可以進行賦值的操作了 */
  onInit?: (values: T, form: ProFormInstance<any>) => void
  formItemProps?: FormItemProps
  groupProps?: ProFormGroupProps
  /** 是否回車提交 */
  isKeyPressSubmit?: boolean
  /** Form 元件的類型，內部使用 */
  formComponentType?: 'DrawerForm' | 'ModalForm' | 'QueryFilter'
} & Omit<FormProps, 'onFinish'> &
  CommonFormProps<T, U>

const genParams = (
  syncUrl: BaseFormProps<any>['syncToUrl'],
  params: Record<string, any>,
  type: 'get' | 'set',
) => {
  if (syncUrl === true) {
    return params
  }
  return runFunction(syncUrl, params, type)
}

type ProFormInstance<T = any> = FormInstance<T> & ProFormInstanceType<T>

/**
 * It takes a name path and converts it to an array.
 * @param {NamePath} name - The name of the form.
 * @returns string[]
 *
 * a-> [a]
 * [a] -> [a]
 */
const covertFormName = (name?: NamePath) => {
  if (!name) return name
  if (Array.isArray(name)) return name
  return [name]
}

function BaseFormComponents<T = Record<string, any>, U = Record<string, any>>(
  props: BaseFormProps<T, U> & {
    loading: boolean
    onUrlSearchChange: (value: Record<string, string | number>) => void
    transformKey: (values: any, omit: boolean, parentKey?: NamePath) => any
  },
) {
  const {
    children,
    contentRender,
    submitter,
    fieldProps,
    formItemProps,
    groupProps,
    transformKey,
    formRef: propsFormRef,
    onInit,
    form,
    loading,
    formComponentType,
    extraUrlParams = {},
    syncToUrl,
    onUrlSearchChange,
    onReset,
    omitNil = true,
    isKeyPressSubmit,
    autoFocusFirstInput = true,
    grid,
    rowProps,
    colProps,
    ...rest
  } = props

  /**
   * 取得 form 實例
   */
  const formInstance = Form.useFormInstance()

  const { componentSize } = ConfigProvider?.useConfig?.() || {
    componentSize: 'middle',
  }

  /** 同步 url 上的參數 */
  const formRef = useRef<ProFormInstance<any>>((form || formInstance) as any)

  /**
   * 取得布局
   */
  const { RowWrapper } = useGridHelpers({ grid, rowProps })

  const getFormInstance = useRefFunction(() => formInstance)

  const formatValues = useMemo(
    () => ({
      /**
       * 取得被 ProForm 格式化後的所有資料
       * @param allData boolean
       * @returns T
       *
       * @example  getFieldsFormatValue(true) ->返回所有資料，即使沒有被 form 託管的
       */
      getFieldsFormatValue: (allData?: true) => {
        return transformKey(
          getFormInstance()?.getFieldsValue(allData!),
          omitNil,
        )
      },
      /**
       * 取得被 ProForm 格式化後的單個資料
       * @param nameList (string|number)[]
       * @returns T
       *
       * @example {a:{b:value}} -> getFieldFormatValue(['a', 'b']) -> value
       */
      /** 取得格式化之後的單個資料 */
      getFieldFormatValue: (paramsNameList: NamePath = []) => {
        const nameList = covertFormName(paramsNameList)
        if (!nameList) throw new Error('nameList is require')
        const value = getFormInstance()?.getFieldValue(nameList!)
        const obj = nameList ? set({}, nameList as string[], value) : value
        return get(transformKey(obj, omitNil, nameList), nameList as string[])
      },
      /**
       * 取得被 ProForm 格式化後的單個資料, 包含他的 name
       * @param nameList (string|number)[]
       * @returns T
       *
       * @example  {a:{b:value}} -> getFieldFormatValueObject(['a', 'b']) -> {a:{b:value}}
       */
      /** 取得格式化之後的單個資料 */
      getFieldFormatValueObject: (paramsNameList?: NamePath) => {
        const nameList = covertFormName(paramsNameList)
        const value = getFormInstance()?.getFieldValue(nameList!)
        const obj = nameList ? set({}, nameList as string[], value) : value
        return transformKey(obj, omitNil, nameList)
      },
      /** 
      /**
       *驗欄位後返回格式化之後的所有資料
       * @param nameList (string|number)[]
       * @returns T
       * 
       * @example validateFieldsReturnFormatValue -> {a:{b:value}}
       */
      validateFieldsReturnFormatValue: async (nameList?: NamePath[]) => {
        if (!Array.isArray(nameList) && nameList)
          throw new Error('nameList must be array')

        const values = await getFormInstance()?.validateFields(nameList)
        const transformedKey = transformKey(values, omitNil)
        return transformedKey ? transformedKey : {}
      },
    }),
    [omitNil, transformKey],
  )

  const items = useMemo(() => {
    return React.Children.toArray(children as any).map((item, index) => {
      if (index === 0 && React.isValidElement(item) && autoFocusFirstInput) {
        return React.cloneElement(item, {
          ...item.props,
          autoFocus: autoFocusFirstInput,
        })
      }
      return item
    })
  }, [autoFocusFirstInput, children])

  /** 計算 props 的對象 */
  const submitterProps: SubmitterProps = useMemo(
    () => (typeof submitter === 'boolean' || !submitter ? {} : submitter),
    [submitter],
  )

  /** 渲染提交按鈕與重設按鈕 */
  const submitterNode = useMemo(() => {
    if (submitter === false) return undefined
    return (
      <Submitter
        key="submitter"
        {...submitterProps}
        onReset={() => {
          const finalValues = transformKey(
            formRef.current?.getFieldsValue(),
            omitNil,
          )
          submitterProps?.onReset?.(finalValues)
          onReset?.(finalValues)
          // 如果 syncToUrl，清空一下資料
          if (syncToUrl) {
            // 把沒有的值設置為未定義可以刪掉 url 的參數
            const params = Object.keys(
              transformKey(formRef.current?.getFieldsValue(), false),
            ).reduce((pre, next) => {
              return {
                ...pre,
                [next]: finalValues[next] || undefined,
              }
            }, extraUrlParams)

            /** 在同步到 url 上時對參數進行轉換 */
            onUrlSearchChange(genParams(syncToUrl, params, 'set'))
          }
        }}
        submitButtonProps={{
          loading,
          ...submitterProps.submitButtonProps,
        }}
      />
    )
  }, [
    submitter,
    submitterProps,
    loading,
    transformKey,
    omitNil,
    onReset,
    syncToUrl,
    extraUrlParams,
    onUrlSearchChange,
  ])

  const content = useMemo(() => {
    const wrapItems = grid ? <RowWrapper>{items}</RowWrapper> : items
    if (contentRender) {
      return contentRender(wrapItems as any, submitterNode, formRef.current)
    }
    return wrapItems
  }, [grid, RowWrapper, items, contentRender, submitterNode])

  const preInitialValues = usePrevious(props.initialValues)

  // 提示一個 initialValues ，問的人實在是太多了
  useEffect(() => {
    if (syncToUrl || !props.initialValues || !preInitialValues || rest.request)
      return
    const isEqual = isDeepEqualReact(props.initialValues, preInitialValues)
    noteOnce(
      isEqual,
      `initialValues 只在 form 初始化時生效，如果你需要非同步載入推薦使用 request，或者 initialValues ? <Form/> : null `,
    )
    noteOnce(
      isEqual,
      `The initialValues only take effect when the form is initialized, if you need to load asynchronously recommended request, or the initialValues ? <Form/> : null `,
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.initialValues])

  // 初始化給一個預設的 form
  useImperativeHandle(
    propsFormRef,
    () => {
      return {
        ...formRef.current,
        ...formatValues,
      }
    },
    [formatValues, formRef.current],
  )
  useEffect(() => {
    const finalValues = transformKey(
      formRef.current?.getFieldsValue?.(true),
      omitNil,
    )
    onInit?.(finalValues, {
      ...formRef.current,
      ...formatValues,
    })
  }, [])

  return (
    <ProFormContext.Provider
      value={{
        ...formatValues,
        formRef,
      }}
    >
      <ConfigProvider componentSize={rest.size || componentSize}>
        <GridContext.Provider value={{ grid, colProps }}>
          {rest.component !== false && (
            <input
              type="text"
              style={{
                display: 'none',
              }}
            />
          )}
          {content}
        </GridContext.Provider>
      </ConfigProvider>
    </ProFormContext.Provider>
  )
}

/** 自動的formKey 防止重複 */
let requestFormCacheId = 0

function BaseForm<T = Record<string, any>, U = Record<string, any>>(
  props: BaseFormProps<T, U>,
) {
  const {
    extraUrlParams = {},
    syncToUrl,
    isKeyPressSubmit,
    syncToUrlAsImportant = false,
    syncToInitialValues = true,
    children,
    contentRender,
    submitter,
    fieldProps,
    proFieldProps,
    formItemProps,
    groupProps,
    dateFormatter = 'string',
    formRef: propsFormRef,
    onInit,
    form,
    formComponentType,
    onReset,
    grid,
    rowProps,
    colProps,
    omitNil = true,
    request,
    params,
    initialValues,
    formKey = requestFormCacheId,
    readonly,
    onLoadingChange,
    loading: propsLoading,
    ...propRest
  } = props
  const formRef = useRef<ProFormInstance<any>>({} as any)
  const [loading, setLoading] = useMountMergeState<boolean>(false, {
    onChange: onLoadingChange,
    value: propsLoading,
  })

  const [urlSearch, setUrlSearch] = useUrlSearchParams(
    {},
    { disabled: !syncToUrl },
  )
  const curFormKey = useRef<string>(nanoid())

  useEffect(() => {
    requestFormCacheId += 0
  }, [])
  const [initialData] = useFetchData<T, U>({
    request,
    params,
    proFieldKey: formKey,
  })

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const prefixCls = getPrefixCls('pro-form')
  // css
  const { wrapSSR, hashId } = useStyle('ProForm', (token) => {
    return {
      [`.${prefixCls}`]: {
        [`> div:not(${token.proComponentsCls}-form-light-filter)`]: {
          '.pro-field': {
            maxWidth: '100%',
            '@media screen and (max-width: 575px)': {
              // 減少了 form 的 padding
              maxWidth: 'calc(93vw - 48px)',
            },
            // 適用於短數字，短文本或者選項
            '&-xs': {
              width: 104,
            },
            '&-s': {
              width: 216,
            },
            // 適用於較短欄位輸入、如姓名、電話、ID 等。
            '&-sm': {
              width: 216,
            },
            '&-m': {
              width: 328,
            },
            // 標準寬度，適用於大部分欄位長度
            '&-md': {
              width: 328,
            },
            '&-l': {
              width: 440,
            },
            // 適用於較長欄位輸入，如長網址、標籤組、文件路徑等。
            '&-lg': {
              width: 440,
            },
            // 適用於長文本輸入，如長連結、描述、備註等，通常搭配自適應多行輸入框或定高文本域使用。
            '&-xl': {
              width: 552,
            },
          },
        },
      },
    }
  })

  // 如果為 false，不需要觸發設置進去
  const [urlParamsMergeInitialValues, setUrlParamsMergeInitialValues] =
    useState(() => {
      if (!syncToUrl) {
        return {}
      }
      return genParams(syncToUrl, urlSearch, 'get')
    })

  /** 保存 transformKeyRef，用於對表單key transform */
  const transformKeyRef = useRef<
    Record<string, SearchTransformKeyFn | undefined>
  >({})

  const fieldsValueType = useRef<
    Record<
      string,
      {
        valueType: ProFieldValueType
        dateFormat: string
      }
    >
  >({})

  /** 使用 callback 的類型 */
  const transformKey = useRefFunction(
    (values: any, paramsOmitNil: boolean, parentKey?: NamePath) => {
      return transformKeySubmitValue(
        conversionMomentValue(
          values,
          dateFormatter,
          fieldsValueType.current,
          paramsOmitNil,
          parentKey,
        ),
        transformKeyRef.current,
        paramsOmitNil,
      )
    },
  )

  useEffect(() => {
    if (syncToInitialValues) return
    setUrlParamsMergeInitialValues({})
  }, [syncToInitialValues])

  useEffect(() => {
    if (!syncToUrl) return
    setUrlSearch({
      ...urlSearch,
      ...extraUrlParams,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extraUrlParams, syncToUrl])

  const getPopupContainer = useMemo(() => {
    if (typeof window === 'undefined') return undefined
    // 如果在 drawerForm 和  modalForm 裡就渲染dom到父節點裡
    // modalForm 可能高度太小不適合
    if (formComponentType && ['DrawerForm'].includes(formComponentType)) {
      return (e: HTMLElement) => e.parentNode || document.body
    }
    return undefined
  }, [formComponentType])

  const onFinish = useRefFunction(async () => {
    // 沒設置 onFinish 就不執行
    if (!propRest.onFinish) return
    // 防止重複提交
    if (loading) return
    setLoading(true)
    try {
      const finalValues = formRef?.current?.getFieldsFormatValue?.()
      await propRest.onFinish(finalValues)
      if (syncToUrl) {
        // 把沒有的值設置為未定義可以刪掉 url 的參數
        const syncToUrlParams = Object.keys(
          formRef?.current?.getFieldsFormatValue?.(undefined, false),
        ).reduce((pre, next) => {
          return {
            ...pre,
            [next]: finalValues[next] ?? undefined,
          }
        }, extraUrlParams)
        // fix #3547: 當原先在url中存在的欄位被刪除時，應該將 params 中的該欄位設置為 undefined,以便觸發url同步刪除
        Object.keys(urlSearch).forEach((key) => {
          if (
            syncToUrlParams[key] !== false &&
            syncToUrlParams[key] !== 0 &&
            !syncToUrlParams[key]
          ) {
            syncToUrlParams[key] = undefined
          }
        })
        /** 在同步到 url 上時對參數進行轉換 */
        setUrlSearch(genParams(syncToUrl, syncToUrlParams, 'set'))
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  })

  // 初始化給一個預設的 form
  useImperativeHandle(
    propsFormRef,
    () => {
      return formRef.current
    },
    [!initialData],
  )

  if (!initialData && props.request) {
    return (
      <div style={{ paddingTop: 50, paddingBottom: 50, textAlign: 'center' }}>
        <CircularProgress />
      </div>
    )
  }

  return wrapSSR(
    <EditOrReadOnlyContext.Provider
      value={{
        mode: props.readonly ? 'read' : 'edit',
      }}
    >
      <ProConfigProvider needDeps>
        {/* // 增加國際化的能力，與 table 元件可以統一 */}
        <FieldContext.Provider
          value={{
            formRef,
            fieldProps,
            proFieldProps,
            formItemProps,
            groupProps,
            formComponentType,
            getPopupContainer,
            formKey: curFormKey.current,
            setFieldValueType: (
              name,
              { valueType = 'text', dateFormat, transform },
            ) => {
              if (!Array.isArray(name)) return

              transformKeyRef.current = namePathSet(
                transformKeyRef.current,
                name,
                transform,
              )

              fieldsValueType.current = namePathSet(
                fieldsValueType.current,
                name,
                {
                  valueType,
                  dateFormat,
                },
              )
            },
          }}
        >
          <FormListContext.Provider value={{}}>
            <Form
              onKeyPress={(event) => {
                if (!isKeyPressSubmit) return
                if (event.key === 'Enter') {
                  formRef.current?.submit()
                }
              }}
              autoComplete="off"
              form={form}
              {...omit(propRest, [
                'labelWidth',
                'autoFocusFirstInput',
              ] as any[])}
              // 組合 urlSearch 和 initialValues
              initialValues={
                syncToUrlAsImportant
                  ? {
                    ...initialValues,
                    ...initialData,
                    ...urlParamsMergeInitialValues,
                  }
                  : {
                    ...urlParamsMergeInitialValues,
                    ...initialValues,
                    ...initialData,
                  }
              }
              onValuesChange={(changedValues, values) => {
                propRest?.onValuesChange?.(
                  transformKey(changedValues, !!omitNil),
                  transformKey(values, !!omitNil),
                )
              }}
              className={classNames(props.className, prefixCls, hashId)}
              onFinish={onFinish}
            >
              <BaseFormComponents<T, U>
                transformKey={transformKey}
                autoComplete="off"
                loading={loading}
                onUrlSearchChange={setUrlSearch}
                {...props}
                formRef={formRef}
                initialValues={{
                  ...initialValues,
                  ...initialData,
                }}
              />
            </Form>
          </FormListContext.Provider>
        </FieldContext.Provider>
      </ProConfigProvider>
    </EditOrReadOnlyContext.Provider>,
  )
}

export type { FormProps, ProFormInstance, FormItemProps, FormInstance }
export { BaseForm }
