import type { MonthPickerProps } from '@/components/base/date-picker'
import React, { useContext } from 'react'
import FieldContext from '../../FieldContext'
import type { ProFormFieldItemProps } from '../../typing'
import ProField from '../Field'

const valueType = 'dateMonth' as const
const ProFormDatePickerMonth: React.FC<
  ProFormFieldItemProps<MonthPickerProps>
> = React.forwardRef(({ proFieldProps, fieldProps, ...rest }, ref) => {
  const context = useContext(FieldContext)
  return (
    <ProField
      ref={ref}
      valueType={valueType}
      fieldProps={{
        getPopupContainer: context.getPopupContainer,
        ...fieldProps,
      }}
      proFieldProps={proFieldProps}
      filedConfig={{
        valueType,
        customLightMode: true,
      }}
      {...rest}
    />
  )
})

export default ProFormDatePickerMonth
