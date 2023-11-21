const isNode =
  typeof process !== 'undefined' &&
  process.versions != null &&
  process.versions.node != null

/**
 * 用於判斷當前是否在瀏覽器環境中。
 * 首先會判斷當前是否處於測試環境中（通過 process.env.NODE_ENV === 'TEST' 判斷），
 * 如果是，則返回 true。否則，會進一步判斷是否存在 window 對象、document 對象以及 matchMedia 方法
 * 同時通過 !isNode 判斷當前不是在伺服器（Node.js）環境下執行，
 * 如果都符合，則返回 true 表示當前處於瀏覽器環境中。
 * @returns  boolean
 */
export const isBrowser = () => {
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'test') {
    return true
  }
  return (
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.matchMedia !== 'undefined' &&
    !isNode
  )
}
