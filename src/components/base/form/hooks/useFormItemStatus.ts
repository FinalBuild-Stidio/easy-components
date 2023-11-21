import { useContext } from 'react'
import type { ValidateStatus } from '@/components/base/form/FormItem'

import { devUseWarning } from '../../_util/warning'
import { FormItemInputContext } from '../context'

type UseFormItemStatus = () => {
  status?: ValidateStatus
  errors: React.ReactNode[]
  warnings: React.ReactNode[]
}

const useFormItemStatus: UseFormItemStatus = () => {
  const { status, errors = [], warnings = [] } = useContext(FormItemInputContext)

  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Form.Item')

    warning(
      status !== undefined,
      'usage',
      'Form.Item.useStatus should be used under Form.Item component.',
    )
  }

  return { status, errors, warnings }
};

// Only used for compatible package. Not promise this will work on future version.
(useFormItemStatus as any).Context = FormItemInputContext

export default useFormItemStatus
