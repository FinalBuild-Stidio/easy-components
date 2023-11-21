import React, { useContext } from 'react'
import type { Dayjs } from 'dayjs'

import type { RangePickerProps } from '@/components/base/date-picker'
import { dateArrayFormatter } from '../../../utils'
import FieldContext from '../../FieldContext'
import type { ProFormFieldItemProps } from '../../typing'
import ProField from '../Field'

const valueType = 'dateTimeRange' as const

/**
 * 日期時間區間選擇元件
 *
 * @param
 */
const ProFormDateTimeRangePicker: React.FC<
  ProFormFieldItemProps<RangePickerProps>
> = React.forwardRef(({ fieldProps, proFieldProps, ...rest }, ref) => {
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
          dateArrayFormatter(value, 'YYYY-MM-DD HH:mm:ss'),
      }}
      {...rest}
    />
  )
})

export default ProFormDateTimeRangePicker
