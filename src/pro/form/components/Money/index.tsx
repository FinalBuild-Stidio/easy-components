import React from 'react'

import type { InputNumberProps } from '@/base'
import type { ProFieldMoneyProps } from '../../../field'
import type { ProFormFieldItemProps } from '../../typing'
import ProFormField from '../Field'

export type ProFormMoneyProps = ProFormFieldItemProps<
  Omit<ProFieldMoneyProps, 'valueType' | 'text'> & InputNumberProps<number>
> & {
  customSymbol?: string // 自訂貨幣符號
  locale?: string // 單獨設置國際化，設置之後優先度高於全局國際化
  min?: InputNumberProps<number>['min']
  max?: InputNumberProps<number>['min']
}
/**
 * 金額輸入框
 *
 * @param
 */
const ProFormMoney: React.ForwardRefRenderFunction<any, ProFormMoneyProps> = (
  { fieldProps, proFieldProps, locale, min, max, ...rest },
  ref,
) => {
  return (
    <ProFormField
      valueType={{
        type: 'money',
        locale,
      }}
      fieldProps={{
        min,
        max,
        ...fieldProps,
      }}
      ref={ref}
      filedConfig={{
        defaultProps: {
          width: '100%',
        },
      }}
      proFieldProps={proFieldProps}
      {...rest}
    />
  )
}

export default React.forwardRef(ProFormMoney)
