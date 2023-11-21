import enUS from './locale/en_US'
import zhTW from './locale/zh_TW'

/**
 * 安全的從一個對象中讀取相應的值
 * @param source
 * @param path
 * @param defaultValue
 * @returns
 */
function get(
  source: Record<string, unknown>,
  path: string,
  defaultValue?: string,
): string | undefined {
  // a[3].b -> a.3.b
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
  let result = source
  let message = defaultValue
  // eslint-disable-next-line no-restricted-syntax
  for (const p of paths) {
    message = Object(result)[p]
    result = Object(result)[p]
    if (message === undefined) {
      return defaultValue
    }
  }
  return message
}

export type IntlType = {
  locale: string
  getMessage: (id: string, defaultMessage: string) => string
}

/**
 * 創建一個國際化的操作函數
 *
 * @param locale
 * @param localeMap
 */
export const createIntl = (
  locale: string,
  localeMap: Record<string, any>,
): IntlType => ({
  getMessage: (id: string, defaultMessage: string) =>
    get(localeMap, id, defaultMessage) || defaultMessage,
  locale,
})

const enUSIntl = createIntl('en_US', enUS)
const zhTWIntl = createIntl('zh_TW', zhTW)

const intlMap = {
  'en-US': enUSIntl,
  'zh-TW': zhTWIntl,
}

export type intlMapKey = keyof typeof intlMap

const intlMapKeys = Object.keys(intlMap)

/**
 * 根據 key 來找到的 locale 插件的 key
 *
 * @param localeKey
 */
export const findIntlKeyByLocaleKey = <T extends string>(localeKey?: T) => {
  const localeName = (localeKey || 'zh-TW').toLocaleLowerCase()
  return intlMapKeys.find((intlKey) => {
    const LowerCaseKey = intlKey.toLocaleLowerCase()
    return LowerCaseKey.includes(localeName)
  }) as intlMapKey
}

export {
  enUSIntl,
  zhTWIntl,
  intlMap,
  intlMapKeys,
}
