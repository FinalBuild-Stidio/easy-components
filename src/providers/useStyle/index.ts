import { TinyColor } from '@ctrl/tinycolor'
import { useContext } from 'react'

import type { CSSInterpolation, CSSObject } from '@/components/StyleContext'
import useStyleRegister from '@/hooks/cssinjs'
import { ConfigContext } from '@/components/base/Config/ConfigContext'
import { GlobalToken } from '@/components/base/theme/interface'
import theme from '@/components/base/theme'
import * as batToken from './token'

import { ProProvider } from '../index'

import type { ProTokenType } from '../typing/layoutToken'

/**
 * 調整顏色的透明度
 * @example (#fff, 0.5) => rgba(255, 255, 255, 0.5)
 * @param baseColor {string}
 * @param alpha {0-1}
 * @returns rgba {string}
 */
export const setAlpha = (baseColor: string, alpha: number) =>
  new TinyColor(baseColor).setAlpha(alpha).toRgbString()

/**
* 調整顏色的亮度
* @example (#000, 50) => #808080
* @param baseColor {string}
* @param brightness {0-100}
* @returns hexColor {string}
*/
export const lighten = (baseColor: string, brightness: number) => {
  const instance = new TinyColor(baseColor)
  return instance.lighten(brightness).toHexString()
}

const genTheme = (): any => {
  if (typeof theme === 'undefined' || !theme) return batToken as any
  return theme
}

export const proTheme = genTheme() as typeof theme

export const useToken = proTheme.useToken

export type ProAliasToken = GlobalToken &
  ProTokenType & {
    themeId: number
    /**
     * pro 的 className
     * @type {string}
     * @example .ipass-pro
     */
    proComponentsCls: string
    /**
     * ipass 的 className
     * @type {string}
     * @example .ipass
     */
    ipassCls: string
  }

/**
 * 封裝了一下 ipass customized lib 的 useStyle，支援了 v4 版本
 * @param componentName {string} 元件的名字
 * @param styleFn {GenerateStyle} 生成 style 的函數
 * @returns UseStyleResult
 */
export function useStyle(
  componentName: string,
  styleFn: (token: ProAliasToken) => CSSInterpolation,
) {
  let { token = {} as ProAliasToken } = useContext(ProProvider)
  const { hashId = '', theme: provideTheme } = useContext(ProProvider)
  const { token: ipassToken } = useToken()
  const { getPrefixCls } = useContext(ConfigContext)

  // 如果不在 ProProvider 裡面，就用 ipass customized lib 的
  if (!token.layout) {
    token = { ...ipassToken } as any
  }
  token.proComponentsCls = token.proComponentsCls ?? `.${getPrefixCls('pro')}`
  token.ipassCls = `.${getPrefixCls()}`

  return {
    wrapSSR: useStyleRegister(
      {
        theme: provideTheme! as any,
        token,
        hashId,
        path: [componentName],
      },
      () => styleFn(token as ProAliasToken),
    ),
    hashId,
  }
}

