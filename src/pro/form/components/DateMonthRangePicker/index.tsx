import { dateArrayFormatter } from '../../../utils'
import type { RangePickerProps } from '@/base/date-picker'
import React, { useContext } from 'react'
import FieldContext from '../../FieldContext'
import type { ProFormFieldItemProps } from '../../typing'
import ProField from '../Field'

const valueType = 'dateMonthRange' as const

/**
 * 月份區間選擇元件
 *
 * @param
 */
const DateMonthRangePicker: React.FC<ProFormFieldItemProps<RangePickerProps>> =
  React.forwardRef(({ fieldProps, proFieldProps, ...rest }, ref) => {
    const context = useContext(FieldContext)
    return (
      <ProField
        ref={ref}
        fieldProps={{
          getPopupContainer: context.getPopupContainer,
          ...fieldProps,
        }}
        valueType={valueType}
        proFieldProps={proFieldProps}
        filedConfig={{
          valueType,
          customLightMode: true,
          lightFilterLabelFormatter: (value) =>
            dateArrayFormatter(value, fieldProps?.format || 'YYYY-MM'),
        }}
        {...rest}
      />
    )
  })

export default DateMonthRangePicker
