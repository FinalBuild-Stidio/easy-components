import type { CSSObject } from '@/StyleContext'
import type { FullToken, GenerateStyle } from '../../theme/internal'
import { genComponentStyleHook, mergeToken } from '../../theme/internal'

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken { }

interface EmptyToken extends FullToken<'Empty'> {
  emptyImgCls: string
  emptyImgHeight: number
  emptyImgHeightSM: number
  emptyImgHeightMD: number
}

// ============================== Shared ==============================
const genSharedEmptyStyle: GenerateStyle<EmptyToken> = (token): CSSObject => {
  const { componentCls, margin, marginXS, marginXL, fontSize, lineHeight } = token

  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: 'center',

      [`${componentCls}-description`]: {
        color: token.colorTextDisabled,
      },

      // 原來 &-footer 沒有父子結構，現在為了外層承擔我們的hashId，改成父子結果
      [`${componentCls}-footer`]: {
        marginTop: margin,
      },
    },
  }
}

// ============================== Export ==============================
export default genComponentStyleHook('Empty', (token) => {
  const { componentCls, controlHeightLG } = token

  const emptyToken: EmptyToken = mergeToken<EmptyToken>(token, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875,
  })

  return [genSharedEmptyStyle(emptyToken)]
})
