import React, { useContext, useImperativeHandle, useRef } from 'react'
import classNames from 'classnames'
import CircularProgress from '@mui/material/CircularProgress'

import { Checkbox, ConfigProvider, Form } from '@/base'
import type { CheckboxGroupProps } from '@/base/checkbox'
import { useStyle } from '../../../utils'
import type { ProFieldFC } from '../../index'
import type { FieldSelectProps } from '../Select'
import { ObjToMap, proFieldParsingText, useFieldFetchData } from '../Select'
export type GroupProps = {
  layout?: 'horizontal' | 'vertical'
  options?: CheckboxGroupProps['options']
} & FieldSelectProps

import { useToken } from '@/providers'

/**
 * 多選元件
 *
 * @param param0
 * @param ref
 */
const FieldCheckbox: ProFieldFC<GroupProps> = (
  { layout = 'horizontal', renderFormItem, mode, render, ...rest },
  ref,
) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const layoutClassName = getPrefixCls('pro-field-checkbox')
  const status = Form.Item?.useStatus?.()
  const [loading, options, fetchData] = useFieldFetchData(rest)

  // css
  const { wrapSSR, hashId } = useStyle('Checkbox', (token) => {
    return {
      [`.${layoutClassName}`]: {
        '&-error': {
          span: {
            color: token.colorError,
          },
        },
        '&-warning': {
          span: {
            color: token.colorWarning,
          },
        },
        '&-vertical': {
          [`&${token.ipassCls}-checkbox-group`]: {
            display: 'inline-block',
          },
          [`${token.ipassCls}-checkbox-wrapper+${token.ipassCls}-checkbox-wrapper`]:
          {
            'margin-inline-start': '0  !important',
          },
          [`${token.ipassCls}-checkbox-group-item`]: {
            display: 'flex',
            marginInlineEnd: 0,
          },
        },
      },
    }
  })

  const { token } = useToken?.()
  const checkBoxRef = useRef()
  useImperativeHandle(
    ref,
    () => ({
      ...(checkBoxRef.current || {}),
      fetchData: (keyWord: string) => fetchData(keyWord),
    }),
    [fetchData],
  )

  if (loading) {
    return <CircularProgress size={20} />
  }

  if (mode === 'read') {
    const optionsValueEnum = options?.length
      ? options?.reduce((pre: any, cur) => {
        return { ...pre, [(cur.value as any) ?? '']: cur.label }
      }, {})
      : undefined

    const dom = proFieldParsingText(
      rest.text,
      ObjToMap(rest.valueEnum || optionsValueEnum),
    )

    if (render) {
      return (
        render(rest.text, { mode, ...rest.fieldProps }, <>{dom}</>) ?? null
      )
    }
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: token.marginSM,
        }}
      >
        {dom}
      </div>
    )
  }

  if (mode === 'edit') {
    const dom = wrapSSR(
      <Checkbox.Group
        {...rest.fieldProps}
        className={classNames(
          rest.fieldProps?.className,
          hashId,
          `${layoutClassName}-${layout}`,
          {
            [`${layoutClassName}-error`]: status?.status === 'error',
            [`${layoutClassName}-warning`]: status?.status === 'warning',
          },
        )}
        options={options}
      />,
    )
    if (renderFormItem) {
      return (
        renderFormItem(
          rest.text,
          { mode, ...rest.fieldProps, options, loading },
          dom,
        ) ?? null
      )
    }
    return dom
  }

  return null
}

export default React.forwardRef(FieldCheckbox)
