import { createTheme, getComputedToken } from '@/hooks/cssinjs/theme'
import type { ThemeConfig } from '@/base/Config/ConfigContext'
import type { AliasToken } from './interface'
import defaultDerivative from './themes/default'
import seedToken from './themes/seed'
import formatToken from '@/base/theme/util/alias'

const getDesignToken = (config?: ThemeConfig): AliasToken => {
  const theme = config?.algorithm ? createTheme(config.algorithm) : createTheme(defaultDerivative)
  const mergedToken = {
    ...seedToken,
    ...config?.token,
  }
  return getComputedToken(mergedToken as any, { override: config?.token }, theme, formatToken)
}

export default getDesignToken
