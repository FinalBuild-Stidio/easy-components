import type { DatePickerProps, RangePickerProps } from '@/base/date-picker'

import { dateArrayFormatter } from '../../../utils/dateArrayFormatter'
import React, { useContext } from 'react'
import FieldContext from '../../FieldContext'
import type { ProFormFieldItemProps } from '../../typing'
import ProField from '../Field'

const valueType = 'time' as const

/** 時間區間選擇器 */
const TimeRangePicker: React.FC<ProFormFieldItemProps<RangePickerProps>> =
  React.forwardRef(({ fieldProps, proFieldProps, ...rest }, ref: any) => {
    const context = useContext(FieldContext)
    return (
      <ProField
        ref={ref}
        fieldProps={{
          getPopupContainer: context.getPopupContainer,
          ...fieldProps,
        }}
        valueType="timeRange"
        proFieldProps={proFieldProps}
        filedConfig={
          {
            valueType: 'timeRange',
            customLightMode: true,
            lightFilterLabelFormatter: (value) =>
              dateArrayFormatter(value, 'HH:mm:ss'),
          } as const
        }
        {...rest}
      />
    )
  })

/**
 * 時間選擇元件
 *
 * @param
 */
const ProFormTimePicker: React.FC<ProFormFieldItemProps<DatePickerProps>> = ({
  fieldProps,
  proFieldProps,
  ...rest
}) => {
  const context = useContext(FieldContext)
  return (
    <ProField
      fieldProps={{
        getPopupContainer: context.getPopupContainer,
        ...fieldProps,
      }}
      valueType={valueType}
      proFieldProps={proFieldProps}
      filedConfig={
        {
          customLightMode: true,
          valueType,
        } as const
      }
      {...rest}
    />
  )
}

const WrappedProFormTimePicker: typeof ProFormTimePicker & {
  RangePicker: typeof TimeRangePicker
} = ProFormTimePicker as any

WrappedProFormTimePicker.RangePicker = TimeRangePicker

export default WrappedProFormTimePicker
