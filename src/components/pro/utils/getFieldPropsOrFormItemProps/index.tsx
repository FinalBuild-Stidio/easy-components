import type { FormInstance } from '@/components/base'
import { runFunction } from '../runFunction'

/**
 * 因為 fieldProps 支援了 function 所以新增了這個方法
 *
 * @param fieldProps
 * @param form
 */
export const getFieldPropsOrFormItemProps = (
  fieldProps: any,
  form?: FormInstance<any> | null,
  extraProps?: any,
): Record<string, any> & {
  onChange: any
  colSize: number
} => {
  if (form === undefined) {
    return fieldProps as any
  }
  return runFunction(fieldProps, form, extraProps)
}
