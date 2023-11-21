import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'

import type { SelectProps } from '@/base'
import { ConfigProvider, Select } from '@/base'
import type { DefaultOptionType, LabeledValue } from '@/base/select'
import type { RequestOptionsType } from '../../../../utils'

// 支持 key, value, label，相容 UserSearch 中只填寫了 key 的情況。
export type KeyLabel = Partial<LabeledValue> & RequestOptionsType

/** 用戶擴展資料後的值類型 */
export type DataValueType<T> = KeyLabel & T

/** 可能單選，可能多選 */
export type DataValuesType<T> = DataValueType<T> | DataValueType<T>[]

export interface SearchSelectProps<T = Record<string, any>>
  extends Omit<SelectProps<KeyLabel | KeyLabel[]>, 'options'> {
  /** 防抖動時間 預設10 單位ms */
  debounceTime?: number
  /** 自訂搜索方法, 返回搜索結果的 Promise */
  request?: (params: { query: string }) => Promise<DataValueType<T>[]>
  /** 自訂選項渲染 */
  optionItemRender?: (item: DataValueType<T>) => React.ReactNode
  /** 指定元件中的值 */
  value?: KeyLabel | KeyLabel[]
  /** 指定預設選中的條目 */
  defaultValue?: KeyLabel | KeyLabel[]

  options?: RequestOptionsType[]

  /**
   * 樣式
   *
   * @ignore
   */
  style?: React.CSSProperties
  /**
   * ClassName 類名
   *
   * @ignore
   */
  className?: string
  /**
   * Placeholder 輸入提示
   *
   * @default 請輸入關鍵字搜索
   */
  placeholder?: string
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
   * 自訂前綴
   *
   * @ignore
   */
  prefixCls?: string

  /** 刷新資料 */
  fetchData: (keyWord?: string) => void

  /** 清空資料 */
  resetData: () => void

  /**
   * 當搜索關鍵字發生變化時是否請求 API 資料
   *
   * @default true
   */
  fetchDataOnSearch?: boolean

  /** 預設搜索關鍵字 */
  defaultSearchValue?: string
}

const SearchSelect = <T,>(props: SearchSelectProps<T[]>, ref: any) => {
  const {
    optionItemRender,
    mode,
    onSearch,
    onFocus,
    onChange,
    autoClearSearchValue = true,
    searchOnFocus = false,
    resetAfterSelect = false,
    fetchDataOnSearch = true,
    optionFilterProp = 'label',
    optionLabelProp = 'label',
    className,
    disabled,
    options,
    fetchData,
    resetData,
    prefixCls: customizePrefixCls,
    onClear,
    searchValue: propsSearchValue,
    showSearch,
    fieldNames,
    defaultSearchValue,
    ...restProps
  } = props

  const {
    label: labelPropsName = 'label',
    value: valuePropsName = 'value',
    options: optionsPropsName = 'options',
  } = fieldNames || {}

  const [searchValue, setSearchValue] = useState(
    propsSearchValue ?? defaultSearchValue,
  )

  const selectRef = useRef<any>()

  useImperativeHandle(ref, () => selectRef.current)

  useEffect(() => {
    if (restProps.autoFocus) {
      selectRef?.current?.focus()
    }
  }, [restProps.autoFocus])

  useEffect(() => {
    setSearchValue(propsSearchValue)
  }, [propsSearchValue])

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)

  const prefixCls = getPrefixCls('pro-filed-search-select', customizePrefixCls)

  // 相容 renderXXX API。

  const classString = classNames(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled,
  })

  const getMergeValue: SelectProps<any>['onChange'] = (value, option) => {
    if (Array.isArray(value) && value.length > 0) {
      // 多選情況且用戶有選擇
      return value.map((item, index) => {
        // @ts-ignore
        const optionItem = option?.[index] as DefaultOptionType
        const dataItem = optionItem?.['data-item'] || {}
        return {
          ...dataItem,
          ...item,
        }
      })
    }
    return []
  }

  const genOptions = (
    mapOptions: RequestOptionsType[],
  ): DefaultOptionType[] => {
    return mapOptions.map((item, index) => {
      const {
        className: itemClassName,
        optionType,
        ...resetItem
      } = item as RequestOptionsType

      const label = item[labelPropsName]
      const value = item[valuePropsName]
      const itemOptions = item[optionsPropsName] ?? []

      if (optionType === 'optGroup' || item.options) {
        return {
          label: label,
          ...resetItem,
          data_title: label,
          title: label,
          key: value ?? label?.toString(),
          children: genOptions(itemOptions),
        } as DefaultOptionType
      }

      return {
        title: label,
        ...resetItem,
        data_title: label,
        value: value ?? index,
        key: value ?? label?.toString(),
        'data-item': item,
        className: `${prefixCls}-option ${itemClassName || ''}`.trim(),
        label: optionItemRender?.(item as any) || label,
      } as DefaultOptionType
    })
  }
  return (
    <Select<any>
      ref={selectRef}
      className={classString}
      allowClear
      autoClearSearchValue={autoClearSearchValue}
      disabled={disabled}
      mode={mode}
      showSearch={showSearch}
      searchValue={searchValue}
      optionFilterProp={optionFilterProp}
      optionLabelProp={optionLabelProp}
      onClear={() => {
        onClear?.()
        fetchData(undefined)
        if (showSearch) {
          setSearchValue(undefined)
        }
      }}
      {...restProps}
      filterOption={
        restProps.filterOption == false
          ? false
          : (inputValue, option) => {
            if (
              restProps.filterOption &&
              typeof restProps.filterOption === 'function'
            ) {
              return restProps.filterOption(inputValue, {
                ...option,
                label: option?.data_title,
              })
            }
            return !!(
              option?.data_title
                ?.toString()
                .toLowerCase()
                .includes(inputValue.toLowerCase()) ||
              option?.label
                ?.toString()
                .toLowerCase()
                .includes(inputValue.toLowerCase()) ||
              option?.value
                ?.toString()
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            )
          }
      } // 這裡使用pro-components的過濾邏輯
      onSearch={
        showSearch
          ? (value) => {
            if (fetchDataOnSearch) {
              fetchData(value)
            }
            onSearch?.(value)
            setSearchValue(value)
          }
          : undefined
      }
      onChange={(value, optionList, ...rest) => {
        // 將搜索框置空 和 ipass customized lib 行為保持一致
        if (showSearch && autoClearSearchValue) {
          fetchData(undefined)
          onSearch?.('')
          setSearchValue(undefined)
        }

        if (!props.labelInValue) {
          onChange?.(value, optionList, ...rest)
          return
        }

        if (mode !== 'multiple') {
          // 單選情況且用戶選擇了選項
          // @ts-ignore
          const dataItem = optionList && optionList['data-item']
          // 如果value值為空則是清空時產生的回調,直接傳值就可以了
          if (!value || !dataItem) {
            onChange?.(value, optionList, ...rest)
          } else {
            onChange?.({ ...value, ...dataItem }, optionList, ...rest)
          }
          return
        }
        // 合併值
        const mergeValue = getMergeValue(value, optionList) as any
        onChange?.(mergeValue, optionList, ...rest)

        // 將搜索結果置空，重新搜索
        if (resetAfterSelect) resetData()
      }}
      onFocus={(e) => {
        if (searchOnFocus) {
          fetchData(searchValue)
        }
        onFocus?.(e)
      }}
      options={genOptions(options || [])}
    />
  )
}

export default React.forwardRef(SearchSelect)
