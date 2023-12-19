import React from 'react'
import { useIntl } from '@ipasstw/react-intl'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { DatePicker, Tooltip } from '@/base'
import { parseValueToDay } from '../../../utils'
import type { ProFieldFC } from '../../index'

dayjs.extend(relativeTime)
/**
 * 與當前的時間進行比較 http://momentjs.cn/docs/displaying/fromnow.html
 *
 * @param
 */
const FieldFromNow: ProFieldFC<{
  text: string
  format?: string
}> = ({ text, mode, render, renderFormItem, format, fieldProps }, ref) => {
  const intl = useIntl()

  if (mode === 'read') {
    const dom = (
      <Tooltip
        title={dayjs(text).format(
          fieldProps?.format || format || 'YYYY-MM-DD HH:mm:ss',
        )}
      >
        {dayjs(text).fromNow()}
      </Tooltip>
    )
    if (render) {
      return render(text, { mode, ...fieldProps }, <>{dom}</>)
    }
    return <>{dom}</>
  }
  if (mode === 'edit' || mode === 'update') {
    const placeholder = intl.formatMessage({
      id: 'tableForm.selectPlaceholder',
      defaultMessage: '請選擇',
    })
    const momentValue = parseValueToDay(fieldProps.value) as dayjs.Dayjs
    const dom = (
      <DatePicker
        ref={ref}
        placeholder={placeholder}
        showTime
        {...fieldProps}
        value={momentValue}
      />
    )
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom)
    }
    return dom
  }
  return null
}

export default React.forwardRef(FieldFromNow)
