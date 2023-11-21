import type { CSSObject } from '@/StyleContext'
import { Keyframes } from '@/StyleContext'

import { resetComponent } from '../../style'
import type { GlobalToken } from '../../theme'
import type { FullToken, GenerateStyle } from '../../theme/internal'
import { genComponentStyleHook, genPresetColor, mergeToken } from '../../theme/internal'
import type { GenStyleFn } from '../../theme/util/genComponentStyleHook'

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  // Component token here
  /**
   * @desc 點狀Badge尺寸
   * @descEN Size of dot badge
   */
  dotSize: number
  statusSize: number
}

export interface StatusToken extends FullToken<'Status'> {
  badgeFontHeight: number
  badgeTextColor: string
  badgeColor: string
  badgeColorHover: string
  badgeShadowSize: number
  badgeShadowColor: string
  badgeProcessingDuration: string
  badgeRibbonOffset: number
  badgeRibbonCornerTransform: string
  badgeRibbonCornerFilter: string
}

const genSharedStatusStyle: GenerateStyle<StatusToken> = (token: StatusToken): CSSObject => {
  const {
    componentCls,
    badgeShadowSize,
    statusSize,
    dotSize,
    marginXS,
  } = token
  const colorPreset = genPresetColor(token, (colorKey, { darkColor }) => ({
    [`&${componentCls} ${componentCls}-color-${colorKey}`]: {
      background: darkColor,
    },
  }))

  return {
    [componentCls]: {
      ...resetComponent(token),
      position: 'relative',
      display: 'inline-block',
      width: 'fit-content',
      lineHeight: 1,

      [`${componentCls}-multiple-words`]: {
        padding: `0 ${token.paddingXS}px`,

        bdi: {
          unicodeBidi: 'plaintext',
        },
      },

      [`${componentCls}-dot`]: {
        width: dotSize,
        minWidth: dotSize,
        height: dotSize,
        background: token.badgeColor,
        borderRadius: '100%',
        boxShadow: `0 0 0 ${badgeShadowSize}px ${token.badgeShadowColor}`,
      },
      [`&${componentCls}-status`]: {
        lineHeight: 'inherit',
        verticalAlign: 'baseline',

        [`${componentCls}-status-dot`]: {
          position: 'relative',
          top: -1, // Magic number, but seems better experience
          display: 'inline-block',
          width: statusSize,
          height: statusSize,
          verticalAlign: 'middle',
          borderRadius: '50%',
        },

        [`${componentCls}-status-success`]: {
          backgroundColor: token.colorSuccess,
        },
        [`${componentCls}-status-default`]: {
          backgroundColor: token.colorTextPlaceholder,
        },

        [`${componentCls}-status-error`]: {
          backgroundColor: token.colorError,
        },

        [`${componentCls}-status-warning`]: {
          backgroundColor: token.colorWarning,
        },
        [`${componentCls}-status-text`]: {
          marginInlineStart: marginXS,
          color: token.colorText,
          fontSize: token.fontSize,
        },
      },
      ...colorPreset,
    },
  }
}

// ============================== Export ==============================
export const prepareToken: (token: Parameters<GenStyleFn<'Status'>>[0]) => StatusToken = (token) => {
  const { fontSize, lineHeight, lineWidth, marginXS, colorBorderBg } = token

  const badgeFontHeight = Math.round(fontSize * lineHeight)
  const badgeShadowSize = lineWidth
  const badgeTextColor = token.colorBgContainer
  const badgeColor = token.colorError
  const badgeColorHover = token.colorErrorHover

  const badgeToken = mergeToken<StatusToken>(token, {
    badgeFontHeight,
    badgeShadowSize,
    badgeTextColor,
    badgeColor,
    badgeColorHover,
    badgeShadowColor: colorBorderBg,
    badgeProcessingDuration: '1.2s',
    badgeRibbonOffset: marginXS,

    // Follow token just by Design. Not related with token
    badgeRibbonCornerTransform: 'scaleY(0.75)',
    badgeRibbonCornerFilter: `brightness(75%)`,
  })

  return badgeToken
}

export const prepareComponentToken = (token: GlobalToken) => {
  const { fontSize, lineHeight, fontSizeSM, lineWidth } = token

  return {
    indicatorZIndex: 'auto',
    indicatorHeight: Math.round(fontSize * lineHeight) - 2 * lineWidth,
    indicatorHeightSM: fontSize,
    dotSize: fontSizeSM / 2,
    textFontSize: fontSizeSM,
    textFontSizeSM: fontSizeSM,
    textFontWeight: 'normal',
    statusSize: fontSizeSM / 2,
  }
}

export default genComponentStyleHook(
  'Status',
  (token) => {
    console.log('Status token', token)
    const statusToken = prepareToken(token)

    return [genSharedStatusStyle(statusToken)]
  },
  prepareComponentToken,
)
