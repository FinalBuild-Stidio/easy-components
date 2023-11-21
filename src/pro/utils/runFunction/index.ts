/** 如果是個函式執行一下它 */
export function runFunction<T extends any[]>(valueEnum: any, ...rest: T) {
  if (typeof valueEnum === 'function') {
    return valueEnum(...rest)
  }
  return valueEnum
}
