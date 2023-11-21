import dayjs from 'dayjs'

type FormatType = ((dayjs: any) => string) | string

/**
 * 通過 format 來格式化日期，因為支援了function 所以需要單獨的方法來處理
 * @param  {any} endText
 * @param  {FormatType} format
 * @return string
 */
const formatString = (endText: any, format: FormatType): string => {
  if (typeof format === 'function') {
    return format(dayjs(endText))
  }
  return dayjs(endText).format(format)
}
/**
 * 格式化區域日期,如果是一個數組，會返回 start ~ end
 * @param  {any} value
 * @param  {FormatType | FormatType[]} format
 * returns string
 */
export const dateArrayFormatter = (
  value: any[],
  format: FormatType | FormatType[],
): string => {
  const [startText, endText] = Array.isArray(value) ? value : []

  let formatFirst: FormatType
  let formatEnd: FormatType

  if (Array.isArray(format)) {
    formatFirst = format[0]
    formatEnd = format[1]
  } else {
    formatFirst = format
    formatEnd = format
  }

  const parsedStartText: string = startText
    ? formatString(startText, formatFirst)
    : ''
  const parsedEndText: string = endText ? formatString(endText, formatEnd) : ''
  const valueStr: string =
    parsedStartText && parsedEndText
      ? `${parsedStartText} ~ ${parsedEndText}`
      : ''

  return valueStr
}
