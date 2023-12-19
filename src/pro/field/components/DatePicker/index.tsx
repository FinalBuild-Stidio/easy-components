import React, { useState } from 'react'
import { useIntl } from '@ipasstw/react-intl'
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'

import type { DatePickerProps } from '@/base'
import { DatePicker } from '@/base'
import { FieldLabel, parseValueToDay } from '../../../utils'
import type { ProFieldFC, ProFieldLightProps } from '../../index'

dayjs.extend(weekOfYear)

const formatDate = (text: any, format: any) => {
  if (!text) return '-'
  if (typeof format === 'function') {
    return format(dayjs(text))
  } else {
    return dayjs(text).format(
      (Array.isArray(format) ? format[0] : format) || 'YYYY-MM-DD',
    )
  }
}

/**
 * 日期選擇元件
 *
 * @param
 */
const FieldDatePicker: ProFieldFC<
  {
    text: string | number
    format: string
    showTime?: boolean
    bordered?: boolean
    picker?: DatePickerProps['picker']
  } & ProFieldLightProps
> = (
  {
    text,
    mode,
    format,
    label,
    light,
    render,
    renderFormItem,
    plain,
    showTime,
    fieldProps,
    picker,
    bordered,
    lightLabel,
  },
  ref,
) => {
    const intl = useIntl()

    const [open, setOpen] = useState<boolean>(false)

    if (mode === 'read') {
      const dom = formatDate(text, fieldProps.format || format)
      if (render) {
        return render(text, { mode, ...fieldProps }, <>{dom}</>)
      }
      return <>{dom}</>
    }
    if (mode === 'edit' || mode === 'update') {
      let dom
      const {
        disabled,
        value,
        placeholder = intl.formatMessage({ id: 'tableForm.selectPlaceholder', defaultMessage: '請選擇' }),
      } = fieldProps

      const dayValue = parseValueToDay(value) as dayjs.Dayjs

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
            disabled={disabled}
            value={
              dayValue || open ? (
                <DatePicker
                  picker={picker}
                  showTime={showTime}
                  format={format}
                  ref={ref}
                  {...fieldProps}
                  value={dayValue}
                  onOpenChange={(isOpen) => {
                    setOpen(isOpen)
                    fieldProps?.onOpenChange?.(isOpen)
                  }}
                  bordered={false}
                  open={open}
                />
              ) : undefined
            }
            allowClear={false}
            downIcon={dayValue || open ? false : undefined}
            bordered={bordered}
            ref={lightLabel}
          />
        )
      } else {
        dom = (
          <DatePicker
            picker={picker}
            showTime={showTime}
            format={format}
            placeholder={placeholder}
            bordered={plain === undefined ? true : !plain}
            ref={ref}
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
export default React.forwardRef(FieldDatePicker)
