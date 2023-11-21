import Divider from '@mui/material/Divider'

import type { ItemType } from '../typing'

export const divider = <DataType, ValueType = 'divider'>(
  item: ItemType<DataType, ValueType>,
) => {
  /** 分割線 */
  if (item.valueType === 'divider') {
    return <Divider {...item.getFieldProps?.()} key={item.key} />
  }

  return true
}
