import React, { useContext } from 'react'

import type { DatePickerProps } from '@/base/date-picker'
import FieldContext from '../../FieldContext'
import type { ProFormFieldItemProps } from '../../typing'
import ProField from '../Field'

const valueType = 'dateTime' as const

/**
 * 時間日期選擇元件
 *
 * @param
 */
const ProFormDateTimePicker: React.FC<ProFormFieldItemProps<DatePickerProps>> =
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
        }}
        {...rest}
      />
    )
  })

export default ProFormDateTimePicker
