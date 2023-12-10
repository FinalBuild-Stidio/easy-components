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
   * @desc Badge z-index
   * @descEN z-index of badge
   */
  indicatorZIndex: number | string
  /**
   * @desc Badge高度
   * @descEN Height of badge
   */
  indicatorHeight: number
  /**
   * @desc 小號Badge高度
   * @descEN Height of small badge
   */
  indicatorHeightSM: number
  /**
   * @desc 點狀Badge尺寸
   * @descEN Size of dot badge
   */
  dotSize: number
  /**
   * @desc Badge文字尺寸
   * @descEN Font size of badge text
   */
  textFontSize: number
  /**
   * @desc 小號Badge文字尺寸
   * @descEN Font size of small badge text
   */
  textFontSizeSM: number
  /**
   * @desc Badge文字粗細
   * @descEN Font weight of badge text
   */
  textFontWeight: number | string
  /**
   * @desc 狀態Badge尺寸
   * @descEN Size of status badge
   */
  statusSize: number
}

export interface BadgeToken extends FullToken<'Badge'> {
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

const statusProcessing = new Keyframes('statusProcessing', {
  '0%': { transform: 'scale(0.8)', opacity: 0.5 },
  '100%': { transform: 'scale(2.4)', opacity: 0 },
})

const zoomBadgeIn = new Keyframes('zoomBadgeIn', {
  '0%': { transform: 'scale(0) translate(50%, -50%)', opacity: 0 },
  '100%': { transform: 'scale(1) translate(50%, -50%)' },
})

const zoomBadgeOut = new Keyframes('zoomBadgeOut', {
  '0%': { transform: 'scale(1) translate(50%, -50%)' },
  '100%': { transform: 'scale(0) translate(50%, -50%)', opacity: 0 },
})

const noWrapperZoomBadgeIn = new Keyframes('noWrapperZoomBadgeIn', {
  '0%': { transform: 'scale(0)', opacity: 0 },
  '100%': { transform: 'scale(1)' },
})
const noWrapperZoomBadgeOut = new Keyframes('noWrapperZoomBadgeOut', {
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(0)', opacity: 0 },
})
const badgeLoadingCircle = new Keyframes('badgeLoadingCircle', {
  '0%': { transformOrigin: '50%' },
  '100%': {
    transform: 'translate(50%, -50%) rotate(360deg)',
    transformOrigin: '50%',
  },
})

const genSharedBadgeStyle: GenerateStyle<BadgeToken> = (token: BadgeToken): CSSObject => {
  const {
    componentCls,
    iconCls,
    ipassCls,
    badgeShadowSize,
    motionDurationSlow,
    textFontSize,
    textFontSizeSM,
    statusSize,
    dotSize,
    textFontWeight,
    indicatorHeight,
    indicatorHeightSM,
    marginXS,
  } = token
  const numberPrefixCls = `${ipassCls}-scroll-number`

  const colorPreset = genPresetColor(token, (colorKey, { darkColor }) => ({
    [`&${componentCls} ${componentCls}-color-${colorKey}`]: {
      background: darkColor,
      [`&:not(${componentCls}-count)`]: {
        color: darkColor,
      },
    },
  }))

  return {
    [componentCls]: {
      ...resetComponent(token),
      position: 'relative',
      display: 'inline-block',
      width: 'fit-content',
      lineHeight: 1,

      [`${componentCls}-count`]: {
        zIndex: token.indicatorZIndex,
        minWidth: indicatorHeight,
        height: indicatorHeight,
        color: token.badgeTextColor,
        fontWeight: textFontWeight,
        fontSize: textFontSize,
        lineHeight: `${indicatorHeight}px`,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        background: token.badgeColor,
        borderRadius: indicatorHeight / 2,
        boxShadow: `0 0 0 ${badgeShadowSize}px ${token.badgeShadowColor}`,
        transition: `background ${token.motionDurationMid}`,

        a: {
          color: token.badgeTextColor,
        },
        'a:hover': {
          color: token.badgeTextColor,
        },

        'a:hover &': {
          background: token.badgeColorHover,
        },
      },
      [`${componentCls}-count-sm`]: {
        minWidth: indicatorHeightSM,
        height: indicatorHeightSM,
        fontSize: textFontSizeSM,
        lineHeight: `${indicatorHeightSM}px`,
        borderRadius: indicatorHeightSM / 2,
      },

      [`${componentCls}-multiple-words`]: {
        padding: `0 ${token.paddingXS}px`,

        bdi: {
          unicodeBidi: 'plaintext',
        },
      },

      [`${componentCls}-dot`]: {
        zIndex: token.indicatorZIndex,
        width: dotSize,
        minWidth: dotSize,
        height: dotSize,
        background: token.badgeColor,
        borderRadius: '100%',
        boxShadow: `0 0 0 ${badgeShadowSize}px ${token.badgeShadowColor}`,
      },
      [`${componentCls}-dot${numberPrefixCls}`]: {
        transition: `background ${motionDurationSlow}`,
      },
      [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
        position: 'absolute',
        top: 0,
        insetInlineEnd: 0,
        transform: 'translate(50%, -50%)',
        transformOrigin: '100% 0%',
        [`&${iconCls}-spin`]: {
          animationName: badgeLoadingCircle,
          animationDuration: '1s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
        },
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
        [`${componentCls}-status-processing`]: {
          overflow: 'visible',
          color: token.colorPrimary,
          backgroundColor: token.colorPrimary,

          '&::after': {
            position: 'absolute',
            top: 0,
            insetInlineStart: 0,
            width: '100%',
            height: '100%',
            borderWidth: badgeShadowSize,
            borderStyle: 'solid',
            borderColor: 'inherit',
            borderRadius: '50%',
            animationName: statusProcessing,
            animationDuration: token.badgeProcessingDuration,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
            content: '""',
          },
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
      [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
        animationName: zoomBadgeIn,
        animationDuration: token.motionDurationSlow,
        animationTimingFunction: token.motionEaseOutBack,
        animationFillMode: 'both',
      },
      [`${componentCls}-zoom-leave`]: {
        animationName: zoomBadgeOut,
        animationDuration: token.motionDurationSlow,
        animationTimingFunction: token.motionEaseOutBack,
        animationFillMode: 'both',
      },
      [`&${componentCls}-not-a-wrapper`]: {
        [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
          animationName: noWrapperZoomBadgeIn,
          animationDuration: token.motionDurationSlow,
          animationTimingFunction: token.motionEaseOutBack,
        },

        [`${componentCls}-zoom-leave`]: {
          animationName: noWrapperZoomBadgeOut,
          animationDuration: token.motionDurationSlow,
          animationTimingFunction: token.motionEaseOutBack,
        },
        [`&:not(${componentCls}-status)`]: {
          verticalAlign: 'middle',
        },
        [`${numberPrefixCls}-custom-component, ${componentCls}-count`]: {
          transform: 'none',
        },
        [`${numberPrefixCls}-custom-component, ${numberPrefixCls}`]: {
          position: 'relative',
          top: 'auto',
          display: 'block',
          transformOrigin: '50% 50%',
        },
      },
      [`${numberPrefixCls}`]: {
        overflow: 'hidden',
        [`${numberPrefixCls}-only`]: {
          position: 'relative',
          display: 'inline-block',
          height: indicatorHeight,
          transition: `all ${token.motionDurationSlow} ${token.motionEaseOutBack}`,
          WebkitTransformStyle: 'preserve-3d',
          WebkitBackfaceVisibility: 'hidden',
          [`> p${numberPrefixCls}-only-unit`]: {
            height: indicatorHeight,
            margin: 0,
            WebkitTransformStyle: 'preserve-3d',
            WebkitBackfaceVisibility: 'hidden',
          },
        },
        [`${numberPrefixCls}-symbol`]: { verticalAlign: 'top' },
      },

      // ====================== RTL =======================
      '&-rtl': {
        direction: 'rtl',

        [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
          transform: 'translate(-50%, -50%)',
        },
      },
    },
  }
}

// ============================== Export ==============================
export const prepareToken: (token: Parameters<GenStyleFn<'Badge'>>[0]) => BadgeToken = (token) => {
  const { fontSize, lineHeight, lineWidth, marginXS, colorBorderBg } = token

  const badgeFontHeight = Math.round(fontSize * lineHeight)
  const badgeShadowSize = lineWidth
  const badgeTextColor = token.colorBgContainer
  const badgeColor = token.colorError
  const badgeColorHover = token.colorErrorHover

  const badgeToken = mergeToken<BadgeToken>(token, {
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
  'Badge',
  (token) => {
    const badgeToken = prepareToken(token)

    return [genSharedBadgeStyle(badgeToken)]
  },
  prepareComponentToken,
)
