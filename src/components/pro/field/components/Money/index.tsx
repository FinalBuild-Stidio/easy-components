import { useIntl } from 'react-intl'
import React, { useCallback, useMemo } from 'react'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import omit from 'omit.js'

import { intlMap as allIntlMap } from '@/providers'
import type { InputNumberProps } from '@/components/base'
import { InputNumber, Popover } from '@/components/base'
import type { ProFieldFC } from '../../index'

import { openVisibleCompatible } from '../../../utils'

export type FieldMoneyProps = {
  text: number
  moneySymbol?: boolean
  locale?: string
  /**
   * 輸入框內容為空的提示內容
   */
  placeholder?: string
  /**
   * 自訂 money 的 Symbol
   */
  customSymbol?: string
  /**
   * 自訂 Popover 的值，false 可以關閉他
   */
  numberPopoverRender?:
  | ((props: InputNumberProps, defaultText: string) => React.ReactNode)
  | boolean
  /**
   * NumberFormat 的設定，文件可以查看 mdn
   *
   * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   */
  numberFormatOptions?: {
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
     */
    localeMatcher?: string
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
     */
    style?: string
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
     */
    currency?: string
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
     */
    currencyDisplay?: string
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
     */
    currencySign?: string
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
     */
    useGrouping?: boolean
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
     */
    minimumIntegerDigits?: number
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
     */
    minimumFractionDigits?: number
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
     */
    maximumFractionDigits?: number
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
     */
    minimumSignificantDigits?: number

    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
     */
    maximumSignificantDigits?: number
  }
}

const defaultMoneyIntl = new Intl.NumberFormat('zh-Hans-CN', {
  currency: 'CNY',
  style: 'currency',
})

const enMoneyIntl = {
  style: 'currency',
  currency: 'USD',
}

const ruMoneyIntl = {
  style: 'currency',
  currency: 'RUB',
}

const rsMoneyIntl = {
  style: 'currency',
  currency: 'RSD',
}

const msMoneyIntl = {
  style: 'currency',
  currency: 'MYR',
}

const ptMoneyIntl = {
  style: 'currency',
  currency: 'BRL',
}

const intlMap = {
  default: defaultMoneyIntl,
  'zh-Hans-CN': {
    currency: 'CNY',
    style: 'currency',
  },
  'en-US': enMoneyIntl,
  'ru-RU': ruMoneyIntl,
  'ms-MY': msMoneyIntl,
  'sr-RS': rsMoneyIntl,
  'pt-BR': ptMoneyIntl,
}

/**
 * A function that formats the number.
 * @param {string | false} moneySymbol - The currency symbol, which is the first parameter of the
 * formatMoney function.
 * @param {number | string | undefined} paramsText - The text to be formatted
 * @param {number} precision - number, // decimal places
 * @param {any} [config] - the configuration of the number format, which is the same as the
 * configuration of the number format in the Intl.NumberFormat method.
 * @returns A function that takes in 4 parameters and returns a string.
 */
const getTextByLocale = (
  moneySymbol: string | false,
  paramsText: number | string | undefined,
  precision: number,
  config?: any,
) => {
  let moneyText: number | string | undefined = paramsText
    ?.toString()
    .replaceAll(',', '')
  if (typeof moneyText === 'string') {
    const parsedNum = Number(moneyText)
    // 轉換數字為NaN時，返回原始值顯示
    if (Number.isNaN(parsedNum)) return moneyText
    moneyText = parsedNum
  }

  if (!moneyText && moneyText !== 0) return ''

  try {
    // Formatting the number, when readonly moneySymbol = false, unused currency.
    const finalMoneyText = new Intl.NumberFormat(moneySymbol || 'zh-TW', {
      // @ts-ignore
      ...(intlMap[moneySymbol || 'zh-TW'] || intlMap['zh-TW']),
      maximumFractionDigits: precision,
      ...config,
    }).format(moneyText)

    // 是否有金額符號，例如 ￥ $
    const hasMoneySymbol = moneySymbol === false

    /**
     * 首字母判斷是否是正負符號
     */
    const operatorSymbol = (finalMoneyText || '').at(0) ?? ''

    // 相容正負號
    if (['+', '-'].includes(operatorSymbol)) {
      // 裁剪字串,有符號截取兩位，沒有符號截取一位
      return `${operatorSymbol}${finalMoneyText.substring(
        hasMoneySymbol ? 2 : 1,
      )}`
    }

    // 沒有正負符號截取一位
    return finalMoneyText.substring(hasMoneySymbol ? 1 : 0)
  } catch (error) {
    return moneyText
  }
}

// 預設的程式碼類型
const DefaultPrecisionCont = 2

/**
 * input 的彈框，用於顯示格式化之後的內容
 *
 * @result 10,000 -> 一萬
 * @result 10, 00, 000, 000 -> 一億
 */
const InputNumberPopover = React.forwardRef<
  any,
  InputNumberProps & {
    open?: boolean
    contentRender?: (props: InputNumberProps) => React.ReactNode
  } & {
    numberFormatOptions?: any
    numberPopoverRender?: any
  }
>(
  (
    {
      contentRender: content,
      numberFormatOptions,
      numberPopoverRender,
      open,
      ...rest
    },
    ref,
  ) => {
    const [value, onChange] = useMergedState<any>(() => rest.defaultValue, {
      value: rest.value,
      onChange: rest.onChange,
    })

    /**
     * 如果content 存在要根據 content 渲染一下
     */
    const dom = content?.({
      ...rest,
      value,
    })

    const props = openVisibleCompatible(dom ? open : false)

    return (
      <Popover
        placement="topLeft"
        {...props}
        trigger={['focus', 'click']}
        content={dom}
        getPopupContainer={(triggerNode) => {
          return triggerNode?.parentElement || document.body
        }}
      >
        <InputNumber ref={ref} {...rest} value={value} onChange={onChange} />
      </Popover>
    )
  },
)

/**
 * 金額元件
 *
 * @param FieldMoneyProps {
 *     text: number;
 *     moneySymbol?: string; }
 */
const FieldMoney: ProFieldFC<FieldMoneyProps> = (
  {
    text,
    mode: type,
    render,
    renderFormItem,
    fieldProps,
    proFieldKey,
    plain,
    valueEnum,
    placeholder,
    locale = fieldProps.customSymbol ?? 'zh-Hans-CN',
    customSymbol = fieldProps.customSymbol,
    numberFormatOptions = fieldProps?.numberFormatOptions,
    numberPopoverRender = fieldProps?.numberPopoverRender || false,
    ...rest
  },
  ref,
) => {
  const precision = fieldProps?.precision ?? DefaultPrecisionCont
  let intl = useIntl()
  // 當手動傳入locale時，應該以傳入的locale為準，未傳入時則根據全局的locale進行國際化
  // @ts-ignore
  if (locale && allIntlMap[locale]) {
    // @ts-ignore
    intl = allIntlMap[locale]
  }
  const placeholderValue =
    placeholder || intl.formatMessage({ id: 'tableForm.inputPlaceholder', defaultMessage: '請輸入' })

  /**
   * 取得貨幣的符號
   * 如果 customSymbol 存在直接使用 customSymbol
   * 如果 moneySymbol 為 false，返回空
   * 如果沒有設定使用預設的
   */
  const moneySymbol = useMemo((): string | undefined => {
    if (customSymbol) {
      return customSymbol
    }

    if (rest.moneySymbol === false || fieldProps.moneySymbol === false) {
      return undefined
    }
    return intl.formatMessage({ id: 'moneySymbol', defaultMessage: 'NT$' })
  }, [customSymbol, fieldProps.moneySymbol, intl, rest.moneySymbol])

  /*
   * A function that formats the number.
   * 1000 -> 1,000
   */
  const getFormateValue = useCallback(
    (value?: string | number) => {
      // 新建數字正則，需要設定小數點
      const reg = new RegExp(
        `\\B(?=(\\d{${3 + Math.max(precision - DefaultPrecisionCont, 0)
        }})+(?!\\d))`,
        'g',
      )
      // 切分為 整數 和 小數 不同
      const [intStr, floatStr] = String(value).split('.')

      // 最終的資料string，需要去掉 , 號。
      const resultInt = intStr.replace(reg, ',')

      // 計算最終的小數點
      let resultFloat = ''

      /* Taking the floatStr and slicing it to the precision. */
      if (floatStr && precision > 0) {
        resultFloat = `.${floatStr.slice(
          0,
          precision === undefined ? DefaultPrecisionCont : precision,
        )}`
      }

      return `${resultInt}${resultFloat}`
    },
    [precision],
  )

  // 如果是閱讀模式，直接返回字串
  if (type === 'read') {
    const dom = (
      <span ref={ref}>
        {getTextByLocale(
          moneySymbol ? locale : false,
          text,
          precision,
          numberFormatOptions ?? fieldProps.numberFormatOptions,
        )}
      </span>
    )
    if (render) {
      return render(text, { mode: type, ...fieldProps }, dom)
    }
    return dom
  }

  if (type === 'edit' || type === 'update') {
    const dom = (
      <InputNumberPopover
        contentRender={(props) => {
          if (numberPopoverRender === false) return null
          if (!props.value) return null
          const localeText = getTextByLocale(
            moneySymbol ? locale : false,
            `${getFormateValue(props.value)}`,
            precision,
            {
              ...numberFormatOptions,
              notation: 'compact',
            },
          )

          if (typeof numberPopoverRender === 'function') {
            return numberPopoverRender?.(props, localeText) as React.ReactNode
          }
          return localeText
        }}
        ref={ref}
        precision={precision}
        // 刪除預設min={0}，允許輸入一個負數的金額，用戶可自行設定min來限制是否允許小於0的金額
        formatter={(value) => {
          if (value && moneySymbol) {
            return `${moneySymbol} ${getFormateValue(value)}`
          }
          return value!?.toString()
        }}
        parser={(value) => {
          if (moneySymbol && value) {
            return value.replace(
              new RegExp(`\\${moneySymbol}\\s?|(,*)`, 'g'),
              '',
            )
          }
          return value!
        }}
        placeholder={placeholderValue}
        {...omit(fieldProps, [
          'numberFormatOptions',
          'precision',
          'numberPopoverRender',
          'customSymbol',
          'moneySymbol',
          'visible',
          'open',
        ])}
        onBlur={
          fieldProps.onBlur
            ? (e) => {
              let value = e.target.value
              if (moneySymbol && value) {
                value = value.replace(
                  new RegExp(`\\${moneySymbol}\\s?|(,*)`, 'g'),
                  '',
                )
              }
              fieldProps.onBlur?.(value)
            }
            : undefined
        }
      />
    )

    if (renderFormItem) {
      return renderFormItem(text, { mode: type, ...fieldProps }, dom)
    }
    return dom
  }
  return null
}

export default React.forwardRef(FieldMoney)
