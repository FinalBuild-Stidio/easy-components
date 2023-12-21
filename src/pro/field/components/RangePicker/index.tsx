import React, { useCallback } from 'react'
import { useIntl } from '@caps.dev/react-intl'
import dayjs from 'dayjs'

import type { DatePickerProps } from '@/base'
import { DatePicker } from '@/base'
import { FieldLabel, parseValueToDay } from '../../../utils'
import type { ProFieldFC, ProFieldLightProps } from '../../index'

/**
 * 日期範圍選擇元件
 *
 * @param
 */
const FieldRangePicker: ProFieldFC<
  {
    text: string[]
    format: string
    bordered?: boolean
    showTime?: boolean
    picker?: DatePickerProps['picker']
  } & ProFieldLightProps
> = (
  {
    text,
    mode,
    light,
    label,
    format,
    render,
    picker,
    renderFormItem,
    plain,
    showTime,
    lightLabel,
    bordered,
    fieldProps,
  },
  ref,
) => {
    const intl = useIntl()

    const [startText, endText] = Array.isArray(text) ? text : []
    const [open, setOpen] = React.useState<boolean>(false)
    // 改了一下 交互，這裡要相容一下，不然會導致無法選中第二個資料
    const genFormatText = useCallback(
      (formatValue: dayjs.Dayjs) => {
        if (typeof fieldProps?.format === 'function') {
          return fieldProps?.format?.(formatValue)
        }
        return fieldProps?.format || format || 'YYYY-MM-DD'
      },
      [fieldProps, format],
    )
    const parsedStartText: string = startText
      ? dayjs(startText).format(genFormatText(dayjs(startText)))
      : ''
    const parsedEndText: string = endText
      ? dayjs(endText).format(genFormatText(dayjs(endText)))
      : ''

    if (mode === 'read') {
      const dom = (
        <div ref={ref}>
          <div>{parsedStartText || '-'}</div>
          <div>{parsedEndText || '-'}</div>
        </div>
      )
      if (render) {
        return render(text, { mode, ...fieldProps }, <span>{dom}</span>)
      }
      return dom
    }

    if (mode === 'edit' || mode === 'update') {
      const dayValue = parseValueToDay(fieldProps.value) as dayjs.Dayjs[]
      let dom

      if (light) {
        dom = (
          <FieldLabel
            label={label}
            onClick={() => {
              fieldProps?.onOpenChange?.(true)
              setOpen(true)
            }}
            style={
              dayValue
                ? {
                  paddingInlineEnd: 0,
                }
                : undefined
            }
            disabled={fieldProps.disabled}
            value={
              dayValue || open ? (
                <DatePicker.RangePicker
                  picker={picker}
                  showTime={showTime}
                  format={format}
                  bordered={false}
                  {...fieldProps}
                  placeholder={
                    fieldProps.placeholder ?? [
                      intl.formatMessage({ id: 'tableForm.selectPlaceholder', defaultMessage: '請選擇' }),
                      intl.formatMessage({ id: 'tableForm.selectPlaceholder', defaultMessage: '請選擇' }),
                    ]
                  }
                  onClear={() => {
                    setOpen(false)
                    fieldProps?.onClear?.()
                  }}
                  value={dayValue}
                  onOpenChange={(isOpen) => {
                    if (dayValue) setOpen(isOpen)
                    fieldProps?.onOpenChange?.(isOpen)
                  }}
                />
              ) : null
            }
            allowClear={false}
            bordered={bordered}
            ref={lightLabel}
            downIcon={dayValue || open ? false : undefined}
          />
        )
      } else {
        dom = (
          <DatePicker.RangePicker
            ref={ref}
            format={format}
            showTime={showTime}
            placeholder={[
              intl.formatMessage({ id: 'tableForm.selectPlaceholder', defaultMessage: '請選擇' }),
              intl.formatMessage({ id: 'tableForm.selectPlaceholder', defaultMessage: '請選擇' }),
            ]}
            bordered={plain === undefined ? true : false}
            {...fieldProps}
            value={dayValue}
          />
        )
      }
      if (renderFormItem) {
        return renderFormItem(text, { mode, ...fieldProps }, dom)
      }
      return dom
    }
    return null
  }

export default React.forwardRef(FieldRangePicker)
