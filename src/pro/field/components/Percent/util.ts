/** 取得顯示符號 */
export function getSymbolByRealValue(realValue: number) {
  if (realValue === 0) {
    return null
  }
  if (realValue > 0) {
    return '+'
  }
  return '-'
}

/** 取得顏色 */
export function getColorByRealValue(realValue: number /** ,color: string */) {
  if (realValue === 0) {
    return '#595959'
  }
  return realValue > 0 ? '#ff4d4f' : '#52c41a'
}

/** 取得到最後顯示的數字 */
export function getRealTextWithPrecision(
  realValue: number,
  precision: number = 2,
) {
  return precision >= 0 ? realValue?.toFixed(precision) : realValue
}
