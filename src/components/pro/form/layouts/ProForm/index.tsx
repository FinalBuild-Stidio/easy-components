import type { FormProps } from '@/components/base'
import { Form } from '@/components/base'
import React from 'react'
import type { CommonFormProps } from '../../BaseForm'
import { BaseForm } from '../../BaseForm'
import { EditOrReadOnlyContext } from '../../BaseForm/EditOrReadOnlyContext'
import { Group, ProFormItem } from '../../components'

export type ProFormProps<
  T = Record<string, any>,
  U = Record<string, any>,
> = Omit<FormProps<T>, 'onFinish'> & CommonFormProps<T, U>

function ProForm<T = Record<string, any>>(
  props: ProFormProps<T> & {
    children?: React.ReactNode | React.ReactNode[]
  },
) {
  return (
    <BaseForm
      layout="vertical"
      submitter={{
        // 反轉按鈕，在正常模式下，按鈕應該是主按鈕在前
        render: (_, dom) => dom.reverse(),
      }}
      contentRender={(items, submitter) => {
        return (
          <>
            {items}
            {submitter}
          </>
        )
      }}
      {...props}
    />
  )
}

ProForm.Group = Group
ProForm.useForm = Form.useForm
ProForm.Item = ProFormItem
ProForm.useWatch = Form.useWatch
ProForm.ErrorList = Form.ErrorList
ProForm.Provider = Form.Provider
ProForm.useFormInstance = Form.useFormInstance
ProForm.EditOrReadOnlyContext = EditOrReadOnlyContext

export { ProForm }
