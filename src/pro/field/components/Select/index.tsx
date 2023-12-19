import type { ReactNode } from 'react'
import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useIntl } from '@ipasstw/react-intl'
import useSWR from 'swr'
import CircularProgress from '@mui/material/CircularProgress'
import type { BadgeProps } from '@mui/material/Badge'

import type { SelectProps } from '@/base'
import { ConfigProvider, Space } from '@/base'
import {
  nanoid,
  ProFieldRequestData,
  ProFieldValueEnumType,
  ProSchemaValueEnumMap,
  ProSchemaValueEnumObj,
  RequestOptionsType,
  useDebounceValue,
  useDeepCompareEffect,
  useDeepCompareMemo,
  useMountMergeState,
  useRefFunction,
  useStyle,
} from '../../../utils'
import type { ProFieldFC, ProFieldLightProps } from '../../index'
import type { ProFieldStatusType } from '../Status'
import TableStatus, { ProFieldBadgeColor } from '../Status'
import LightSelect from './LightSelect'
import SearchSelect from './SearchSelect'

type SelectOptionType = Partial<RequestOptionsType>[]

export type FieldSelectProps<FieldProps = any> = {
  text: string
  /** 值的枚舉，如果存在枚舉，Search 中會生成 select */
  valueEnum?: ProFieldValueEnumType
  /** 防抖動時間 預設10 單位ms */
  debounceTime?: number
  /** 從伺服器讀取選項 */
  request?: ProFieldRequestData
  /** 重新觸發的時機 */
  params?: any

  /** 元件的全局設置 */
  fieldProps?: FieldProps

  bordered?: boolean
  id?: string

  children?: ReactNode
  /** 預設搜素條件 */
  defaultKeyWords?: string
} & ProFieldLightProps

export const ObjToMap = (
  value: ProFieldValueEnumType | undefined,
): ProSchemaValueEnumMap => {
  if (getType(value) === 'map') {
    return value as ProSchemaValueEnumMap
  }
  return new Map(Object.entries(value || {}))
}

/**
 * 轉化 text 和 valueEnum 通過 type 來添加 Status
 *
 * @param text
 * @param valueEnum
 * @param pure 純淨模式，不增加 status
 */
export const proFieldParsingText = (
  text: string | number | (string | number)[],
  valueEnumParams: ProFieldValueEnumType,
  key?: number | string,
): React.ReactNode => {
  if (Array.isArray(text)) {
    return (
      <Space key={key} split="," size={2} wrap>
        {text.map((value, index) =>
          // @ts-ignore
          proFieldParsingText(value, valueEnumParams, index),
        )}
      </Space>
    )
  }

  const valueEnum = ObjToMap(valueEnumParams)

  if (!valueEnum.has(text) && !valueEnum.has(`${text}`)) {
    // @ts-ignore
    return text?.label || text
  }

  const domText = (valueEnum.get(text) || valueEnum.get(`${text}`)) as {
    text: ReactNode
    status: ProFieldStatusType
    color?: BadgeProps['color']
  }

  if (!domText) {
    // @ts-ignore
    return <React.Fragment key={key}>{text?.label || text}</React.Fragment>
  }

  const { status, color } = domText

  const Status = TableStatus[status || 'Init']
  // 如果類型存在優先使用類型
  if (Status) {
    return <Status key={key}>{domText.text}</Status>
  }

  // 如果不存在使用顏色
  if (color) {
    return (
      <ProFieldBadgeColor key={key} color={color}>
        {domText.text}
      </ProFieldBadgeColor>
    )
  }
  // 什麼都沒有使用 text
  return (
    <React.Fragment key={key}>
      {domText.text || (domText as any as React.ReactNode)}
    </React.Fragment>
  )
}

const Highlight: React.FC<{
  label: string
  words: string[]
}> = ({ label, words }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const lightCls = getPrefixCls('pro-select-item-option-content-light')
  const optionCls = getPrefixCls('pro-select-item-option-content')

  // css
  const { wrapSSR } = useStyle('Highlight', (token) => {
    return {
      [`.${lightCls}`]: {
        color: token.colorPrimary,
      },
      [`.${optionCls}`]: {
        flex: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },
    }
  })

  const matchKeywordsRE = new RegExp(
    words
      .map((word) => word.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&'))
      .join('|'),
    'gi',
  )

  let matchText = label

  const elements: React.ReactNode[] = []

  while (matchText.length) {
    const match = matchKeywordsRE.exec(matchText)
    if (!match) {
      elements.push(matchText)
      break
    }

    const start = match.index
    const matchLength = match[0].length + start

    elements.push(
      matchText.slice(0, start),
      React.createElement(
        'span',
        {
          className: lightCls,
        },
        matchText.slice(start, matchLength),
      ),
    )
    matchText = matchText.slice(matchLength)
  }

  return wrapSSR(
    React.createElement(
      'div',
      {
        title: label,
        className: optionCls,
      },
      ...elements,
    ),
  )
}

/**
 * 取得類型的 type
 *
 * @param obj
 */
function getType(obj: any) {
  // @ts-ignore
  const type = Object.prototype.toString
    .call(obj)
    .match(/^\[object (.*)\]$/)[1]
    .toLowerCase()
  if (type === 'string' && typeof obj === 'object') return 'object' // Let "new String('')" return 'object'
  if (obj === null) return 'null' // PhantomJS has type "DOMWindow" for null
  if (obj === undefined) return 'undefined' // PhantomJS has type "DOMWindow" for undefined
  return type
}

/**
 * 遞迴篩選 item
 *
 * @param item
 * @param keyWords
 * @returns
 */
function filerByItem(
  item: {
    label: string
    value: string
    optionType: string
    children: any[]
    options: any[]
  },
  keyWords?: string,
) {
  if (!keyWords) return true
  if (
    item?.label?.toString().toLowerCase().includes(keyWords.toLowerCase()) ||
    item?.value?.toString().toLowerCase().includes(keyWords.toLowerCase())
  ) {
    return true
  }
  if (item.children || item.options) {
    const findItem = [...(item.children || []), item.options || []].find(
      (mapItem) => {
        return filerByItem(mapItem, keyWords)
      },
    )
    if (findItem) return true
  }
  return false
}

/**
 * 把 value 的枚舉轉化為數組
 *
 * @param valueEnum
 */
export const proFieldParsingValueEnumToArray = (
  valueEnumParams: ProFieldValueEnumType,
): SelectOptionType => {
  const enumArray: Partial<
    RequestOptionsType & {
      text: string
      /** 是否禁用 */
      disabled?: boolean
    }
  >[] = []
  const valueEnum = ObjToMap(valueEnumParams)

  valueEnum.forEach((_, key) => {
    const value = (valueEnum.get(key) || valueEnum.get(`${key}`)) as {
      text: string
      disabled?: boolean
    }

    if (!value) {
      return
    }

    if (typeof value === 'object' && value?.text) {
      enumArray.push({
        text: value?.text as unknown as string,
        value: key,
        label: value?.text as unknown as string,
        disabled: value.disabled,
      })
      return
    }
    enumArray.push({
      text: value as unknown as string,
      value: key,
    })
  })
  return enumArray
}

export const useFieldFetchData = (
  props: FieldSelectProps & {
    proFieldKey?: React.Key
    defaultKeyWords?: string
    cacheForSwr?: boolean
  },
): [boolean, SelectOptionType, (keyWord?: string) => void, () => void] => {
  const { cacheForSwr, fieldProps } = props

  const [keyWords, setKeyWords] = useState<string | undefined>(
    props.defaultKeyWords,
  )
  /** Key 是用來快取請求的，如果不在是有問題 */
  const [cacheKey] = useState(() => {
    if (props.proFieldKey) {
      return props.proFieldKey.toString()
    }
    if (props.request) {
      return nanoid()
    }
    return 'no-fetch'
  })

  const proFieldKeyRef = useRef(cacheKey)

  const getOptionsFormValueEnum = useRefFunction(
    (coverValueEnum: ProFieldValueEnumType) => {
      return proFieldParsingValueEnumToArray(ObjToMap(coverValueEnum)).map(
        ({ value, text, ...rest }) => ({
          label: text,
          value,
          key: value,
          ...rest,
        }),
      )
    },
  )

  const defaultOptions = useDeepCompareMemo(() => {
    if (!fieldProps) return undefined
    const data = fieldProps?.options || fieldProps?.treeData
    if (!data) return undefined
    const { children, label, value } = fieldProps.fieldNames || {}
    const traverseFieldKey = (
      _options: typeof options,
      type: 'children' | 'label' | 'value',
    ) => {
      if (!_options?.length) return
      const length = _options.length
      let i = 0
      while (i < length) {
        const cur = _options[i++]
        if (cur[children] || cur[label] || cur[value]) {
          cur[type] =
            cur[
            type === 'children' ? children : type === 'label' ? label : value
            ]
          traverseFieldKey(cur[children], type)
        }
      }
    }

    if (children) traverseFieldKey(data, 'children')
    if (label) traverseFieldKey(data, 'label')
    if (value) traverseFieldKey(data, 'value')
    return data
  }, [fieldProps])

  const [options, setOptions] = useMountMergeState<SelectOptionType>(
    () => {
      if (props.valueEnum) {
        return getOptionsFormValueEnum(props.valueEnum)
      }
      return []
    },
    {
      value: defaultOptions,
    },
  )

  useDeepCompareEffect(() => {
    // 優先使用 fieldProps?.options
    if (
      !props.valueEnum ||
      props.fieldProps?.options ||
      props.fieldProps?.treeData
    )
      return
    setOptions(getOptionsFormValueEnum(props.valueEnum))
  }, [props.valueEnum])

  const swrKey = useDebounceValue(
    [proFieldKeyRef.current, props.params, keyWords] as const,
    props.debounceTime ?? props?.fieldProps?.debounceTime ?? 0,
    [props.params, keyWords],
  )

  const {
    data,
    mutate: setLocaleData,
    isValidating,
  } = useSWR(
    () => {
      if (!props.request) {
        return null
      }

      return swrKey
    },
    ([, params, kw]) =>
      props.request!(
        {
          ...params,
          keyWords: kw,
        },
        props,
      ),
    {
      revalidateIfStale: !cacheForSwr,
      // 打開 cacheForSwr 的時候才應該支持兩個功能
      revalidateOnReconnect: cacheForSwr,
      shouldRetryOnError: false,
      // @todo 這個功能感覺應該搞個API出來
      revalidateOnFocus: false,
    },
  )

  const resOptions = useMemo(() => {
    const opt = options?.map((item) => {
      if (typeof item === 'string') {
        return {
          label: item,
          value: item,
        }
      }
      if (item.children || item.options) {
        const childrenOptions = [
          ...(item.children || []),
          ...(item.options || []),
        ].filter((mapItem) => {
          return filerByItem(mapItem, keyWords)
        })
        return {
          ...item,
          children: childrenOptions,
          options: childrenOptions,
        }
      }
      return item
    })

    // filterOption 為 true 時 filter資料, filterOption 預設為true
    if (
      props.fieldProps?.filterOption === true ||
      props.fieldProps?.filterOption === undefined
    ) {
      return opt?.filter((item) => {
        if (!item) return false
        if (!keyWords) return true
        return filerByItem(item as any, keyWords)
      })
    }

    return opt
  }, [options, keyWords, props.fieldProps?.filterOption])

  return [
    isValidating,
    props.request ? (data as SelectOptionType) : resOptions,
    (fetchKeyWords?: string) => {
      setKeyWords(fetchKeyWords)
    },
    () => {
      setKeyWords(undefined)
      setLocaleData([], false)
    },
  ]
}

/**
 * 可以根據 valueEnum 來進行類型的設置
 *
 * @param
 */
const FieldSelect: ProFieldFC<
  FieldSelectProps & Pick<SelectProps, 'fieldNames' | 'style' | 'className'>
> = (props, ref) => {
  const {
    mode,
    valueEnum,
    render,
    renderFormItem,
    request,
    fieldProps,
    plain,
    children,
    light,
    proFieldKey,
    params,
    label,
    bordered,
    id,
    lightLabel,
    labelTrigger,
    ...rest
  } = props

  const inputRef = useRef()
  const intl = useIntl()
  const keyWordsRef = useRef<string>('')
  const { fieldNames } = fieldProps

  useEffect(() => {
    keyWordsRef.current = fieldProps?.searchValue
  }, [fieldProps?.searchValue])

  const [loading, options, fetchData, resetData] = useFieldFetchData(props)
  const { componentSize } = ConfigProvider?.useConfig?.() || {
    componentSize: 'middle',
  }
  useImperativeHandle(
    ref,
    () => ({
      ...(inputRef.current || {}),
      fetchData: (keyWord: string) => fetchData(keyWord),
    }),
    [fetchData],
  )

  const optionsValueEnum = useMemo(() => {
    if (mode !== 'read') return

    const {
      label: labelPropsName = 'label',
      value: valuePropsName = 'value',
      options: optionsPropsName = 'options',
    } = fieldNames || {}

    const valuesMap = new Map()

    const traverseOptions = (_options: typeof options) => {
      if (!_options?.length) {
        return valuesMap
      }
      const length = _options.length
      let i = 0
      while (i < length) {
        const cur = _options[i++]
        valuesMap.set(cur[valuePropsName], cur[labelPropsName])
        traverseOptions(cur[optionsPropsName])
      }
      return valuesMap
    }

    return traverseOptions(options)
  }, [fieldNames, mode, options])

  if (mode === 'read') {
    const dom = (
      <>
        {proFieldParsingText(
          rest.text,
          ObjToMap(
            valueEnum || optionsValueEnum,
          ) as unknown as ProSchemaValueEnumObj,
        )}
      </>
    )

    if (render) {
      return render(rest.text, { mode, ...fieldProps }, dom) ?? null
    }
    return dom
  }

  if (mode === 'edit' || mode === 'update') {
    const renderDom = () => {
      if (light) {
        return (
          <LightSelect
            bordered={bordered}
            id={id}
            loading={loading}
            ref={inputRef}
            allowClear
            size={componentSize}
            options={options}
            label={label}
            placeholder={intl.formatMessage({
              id: 'tableForm.selectPlaceholder',
              defaultMessage: '請選擇',
            })}
            lightLabel={lightLabel}
            labelTrigger={labelTrigger}
            {...fieldProps}
          />
        )
      }
      return (
        <SearchSelect
          key="SearchSelect"
          className={rest.className}
          style={{
            minWidth: 100,
            ...rest.style,
          }}
          bordered={bordered}
          id={id}
          loading={loading}
          ref={inputRef}
          allowClear
          defaultSearchValue={props.defaultKeyWords}
          notFoundContent={
            loading ? <CircularProgress size={20} /> : fieldProps?.notFoundContent
          }
          fetchData={(keyWord: string) => {
            keyWordsRef.current = keyWord ?? ''
            fetchData(keyWord)
          }}
          resetData={resetData}
          optionItemRender={(item: any) => {
            if (typeof item.label === 'string' && keyWordsRef.current) {
              return (
                <Highlight label={item.label} words={[keyWordsRef.current]} />
              )
            }
            return item.label
          }}
          placeholder={intl.formatMessage({ id: 'tableForm.selectPlaceholder', defaultMessage: '請選擇' })}
          label={label}
          {...fieldProps}
          options={options}
        />
      )
    }
    const dom = renderDom()
    if (renderFormItem) {
      return (
        renderFormItem(
          rest.text,
          { mode, ...fieldProps, options, loading },
          dom,
        ) ?? null
      )
    }
    return dom
  }
  return null
}

export default React.forwardRef(FieldSelect)
