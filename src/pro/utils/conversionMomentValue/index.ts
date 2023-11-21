import type { InternalNamePath, NamePath } from '@/base/form/interface'
import dayjs from 'dayjs'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import get from 'rc-util/lib/utils/get'
import { isNil } from '../isNil'
import type { ProFieldValueType } from '../typing'

dayjs.extend(quarterOfYear)

type DateFormatter =
  | 'number'
  | 'string'
  | ((value: dayjs.Dayjs, valueType: string) => string | number)
  | false

export type DateValueTypes = 'time' | 'timeRange' | 'date' | 'dateWeek' | 'dateMonth' | 'dateQuarter' | 'dateYear' | 'dateRange' | 'dateTime' | 'dateTimeRange'

export const dateFormatterMap: Record<DateValueTypes, string> = {
  time: 'HH:mm:ss',
  timeRange: 'HH:mm:ss',
  date: 'YYYY-MM-DD',
  dateWeek: 'YYYY-wo',
  dateMonth: 'YYYY-MM',
  dateQuarter: 'YYYY-[Q]Q',
  dateYear: 'YYYY',
  dateRange: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:ss',
  dateTimeRange: 'YYYY-MM-DD HH:mm:ss',
}
/**
 * 判斷是不是一個 object
 * @param  {any} o
 * @returns boolean
 */
function isObject(o: any): boolean {
  return Object.prototype.toString.call(o) === '[object Object]'
}
/**
 * 判斷是否是一個的簡單的 object
 * @param  {{constructor:any}} o
 * @returns boolean
 */
export function isPlainObject(o: { constructor: any }): boolean {
  if (isObject(o) === false) return false

  // If has modified constructor
  const ctor = o.constructor
  if (ctor === undefined) return true

  // If has modified prototype
  const prot = ctor.prototype
  if (isObject(prot) === false) return false

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false
  }

  // Most likely a plain Object
  return true
}

/**
 *  一個比較hack的moment判斷工具
 * @param  {any} value
 * @returns boolean
 */
const isMoment = (value: any): boolean => !!value?._isAMomentObject

/**
 * 根據不同的格式轉換 dayjs
 * @param  {dayjs.Dayjs} value
 * @param  {string|((value:dayjs.Dayjs} dateFormatter
 * @param  {string} valueType
 */
export const convertMoment = (
  value: dayjs.Dayjs,
  dateFormatter:
    | string
    | ((value: dayjs.Dayjs, valueType: string) => string | number)
    | false,
  valueType: string,
) => {
  if (!dateFormatter) {
    return value
  }

  if (dayjs.isDayjs(value) || isMoment(value)) {
    if (dateFormatter === 'number') {
      return value.valueOf()
    }
    if (dateFormatter === 'string') {
      return value.format(dateFormatterMap[valueType as DateValueTypes] || 'YYYY-MM-DD HH:mm:ss')
    }
    if (typeof dateFormatter === 'string' && dateFormatter !== 'string') {
      return value.format(dateFormatter)
    }
    if (typeof dateFormatter === 'function') {
      return dateFormatter(value, valueType)
    }
  }
  return value
}

/**
 * 這裡主要是來轉換一下資料 將 dayjs 轉換為 string 將 all 預設刪除
 * @param  {T} value
 * @param  {DateFormatter} dateFormatter
 * @param  {Record<string} valueTypeMap
 * @param  {ProFieldValueType;dateFormat:string;}|any>} |{valueType
 * @param  {boolean} omitNil?
 * @param  {NamePath} parentKey?
 */
export const conversionMomentValue = (
  value: Record<string, any>,
  dateFormatter: DateFormatter,
  valueTypeMap: Record<
    string,
    | {
      valueType: ProFieldValueType
      dateFormat: string
    }
    | any
  >,
  omitNil?: boolean,
  parentKey?: NamePath,
): Record<string, any> => {
  const tmpValue = {} as Record<string, any>
  if (typeof window === 'undefined') return value
  // 如果 value 是 string | null | Blob類型 其中之一，直接返回
  // 形如 {key: [File, File]} 的表單欄位當進行第二次遞迴時會導致其直接越過 typeof value !== 'object' 這一判斷
  if (
    typeof value !== 'object' ||
    isNil(value) ||
    value instanceof Blob ||
    Array.isArray(value)
  ) {
    return value
  }
  Object.keys(value as Record<string, any>).forEach((valueKey) => {
    const namePath: InternalNamePath = parentKey
      ? ([parentKey, valueKey].flat(1) as string[])
      : [valueKey]
    const valueFormatMap = get(valueTypeMap, namePath) || 'text'

    let valueType: ProFieldValueType = 'text'
    let dateFormat: string | undefined
    if (typeof valueFormatMap === 'string') {
      valueType = valueFormatMap as ProFieldValueType
    } else if (valueFormatMap) {
      valueType = valueFormatMap.valueType
      dateFormat = valueFormatMap.dateFormat
    }
    const itemValue = (value as Record<string, any>)[valueKey]
    if (isNil(itemValue) && omitNil) {
      return
    }
    // 處理嵌套的情況
    if (
      isPlainObject(itemValue) &&
      // 不是數組
      !Array.isArray(itemValue) &&
      // 不是 dayjs
      !dayjs.isDayjs(itemValue) &&
      // 不是 moment
      !isMoment(itemValue)
    ) {
      tmpValue[valueKey] = conversionMomentValue(
        itemValue,
        dateFormatter,
        valueTypeMap,
        omitNil,
        [valueKey],
      )
      return
    }
    // 處理 FormList 的 value
    if (Array.isArray(itemValue)) {
      tmpValue[valueKey] = itemValue.map((arrayValue, index) => {
        if (dayjs.isDayjs(arrayValue) || isMoment(arrayValue)) {
          return convertMoment(
            arrayValue,
            dateFormat || dateFormatter,
            valueType,
          )
        }
        return conversionMomentValue(
          arrayValue,
          dateFormatter,
          valueTypeMap,
          omitNil,
          [valueKey, `${index}`].flat(1),
        )
      })
      return
    }
    tmpValue[valueKey] = convertMoment(
      itemValue,
      dateFormat || dateFormatter,
      valueType,
    )
  })

  return tmpValue
}
