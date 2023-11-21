import type { CSSObject } from '@/StyleContext'
import { Keyframes } from '@/StyleContext'
import { resetComponent } from '../../style'
import type { FullToken, GenerateStyle } from '../../theme/internal'
import { genComponentStyleHook, mergeToken } from '../../theme/internal'

export interface ComponentToken {
  /**
   * @desc 進度條預設顏色
   * @descEN Default color of progress bar
   */
  defaultColor: string
  /**
   * @desc 進度條剩餘部分顏色
   * @descEN Color of remaining part of progress bar
   */
  remainingColor: string
  /**
   * @desc 圓形進度條文字顏色
   * @descEN Text color of circular progress bar
   */
  circleTextColor: string
  /**
   * @desc 條狀進度條圓角
   * @descEN Border radius of line progress bar
   */
  lineBorderRadius: number
  /**
   * @desc 圓形進度條文本大小
   * @descEN Text size of circular progress bar
   */
  circleTextFontSize: string
}

interface ProgressToken extends FullToken<'Progress'> {
  progressStepMinWidth: number
  progressStepMarginInlineEnd: number
  progressActiveMotionDuration: string
}

const genAntProgressActive = (isRtl?: boolean) => {
  const direction = isRtl ? '100%' : '-100%'
  return new Keyframes(`antProgress${isRtl ? 'RTL' : 'LTR'}Active`, {
    '0%': {
      transform: `translateX(${direction}) scaleX(0)`,
      opacity: 0.1,
    },
    '20%': {
      transform: `translateX(${direction}) scaleX(0)`,
      opacity: 0.5,
    },
    to: {
      transform: 'translateX(0) scaleX(1)',
      opacity: 0,
    },
  })
}

const genBaseStyle: GenerateStyle<ProgressToken> = (token) => {
  const { componentCls: progressCls, iconCls: iconPrefixCls } = token

  return {
    [progressCls]: {
      ...resetComponent(token),

      display: 'inline-block',

      '&-line': {
        position: 'relative',
        width: '100%',
        fontSize: token.fontSize,
        marginInlineEnd: token.marginXS,
        marginBottom: token.marginXS,
      },

      [`${progressCls}-outer`]: {
        display: 'inline-block',
        width: '100%',
      },

      [`&${progressCls}-show-info`]: {
        [`${progressCls}-outer`]: {
          marginInlineEnd: `calc(-2em - ${token.marginXS}px)`,
          paddingInlineEnd: `calc(2em + ${token.paddingXS}px)`,
        },
      },

      [`${progressCls}-inner`]: {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        overflow: 'hidden',
        verticalAlign: 'middle',
        backgroundColor: token.remainingColor,
        borderRadius: token.lineBorderRadius,
      },

      [`${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
        [`${progressCls}-circle-path`]: {
          stroke: token.defaultColor,
        },
      },

      [`${progressCls}-success-bg, ${progressCls}-bg`]: {
        position: 'relative',
        backgroundColor: token.defaultColor,
        borderRadius: token.lineBorderRadius,
        transition: `all ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`,
      },

      [`${progressCls}-success-bg`]: {
        position: 'absolute',
        insetBlockStart: 0,
        insetInlineStart: 0,
        backgroundColor: token.colorSuccess,
      },

      [`${progressCls}-text`]: {
        display: 'inline-block',
        width: '2em',
        marginInlineStart: token.marginXS,
        color: token.colorText,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        textAlign: 'start',
        verticalAlign: 'middle',
        wordBreak: 'normal',
        [iconPrefixCls]: {
          fontSize: token.fontSize,
        },
      },

      [`&${progressCls}-status-active`]: {
        [`${progressCls}-bg::before`]: {
          position: 'absolute',
          inset: 0,
          backgroundColor: token.colorBgContainer,
          borderRadius: token.lineBorderRadius,
          opacity: 0,
          animationName: genAntProgressActive(),
          animationDuration: token.progressActiveMotionDuration,
          animationTimingFunction: token.motionEaseOutQuint,
          animationIterationCount: 'infinite',
          content: '""',
        },
      },

      [`&${progressCls}-status-exception`]: {
        [`${progressCls}-bg`]: {
          backgroundColor: token.colorError,
        },
        [`${progressCls}-text`]: {
          color: token.colorError,
        },
      },

      [`&${progressCls}-status-exception ${progressCls}-inner:not(${progressCls}-circle-gradient)`]:
      {
        [`${progressCls}-circle-path`]: {
          stroke: token.colorError,
        },
      },

      [`&${progressCls}-status-success`]: {
        [`${progressCls}-bg`]: {
          backgroundColor: token.colorSuccess,
        },
        [`${progressCls}-text`]: {
          color: token.colorSuccess,
        },
      },

      [`&${progressCls}-status-success ${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
        [`${progressCls}-circle-path`]: {
          stroke: token.colorSuccess,
        },
      },
    },
  }
}

const genCircleStyle: GenerateStyle<ProgressToken> = (token) => {
  const { componentCls: progressCls, iconCls: iconPrefixCls } = token

  return {
    [progressCls]: {
      [`${progressCls}-circle-trail`]: {
        stroke: token.remainingColor,
      },

      [`&${progressCls}-circle ${progressCls}-inner`]: {
        position: 'relative',
        lineHeight: 1,
        backgroundColor: 'transparent',
      },

      [`&${progressCls}-circle ${progressCls}-text`]: {
        position: 'absolute',
        insetBlockStart: '50%',
        insetInlineStart: 0,
        width: '100%',
        margin: 0,
        padding: 0,
        color: token.circleTextColor,
        fontSize: token.circleTextFontSize,
        lineHeight: 1,
        whiteSpace: 'normal',
        textAlign: 'center',
        transform: 'translateY(-50%)',

        [iconPrefixCls]: {
          fontSize: `${token.fontSize / token.fontSizeSM}em`,
        },
      },

      [`${progressCls}-circle&-status-exception`]: {
        [`${progressCls}-text`]: {
          color: token.colorError,
        },
      },

      [`${progressCls}-circle&-status-success`]: {
        [`${progressCls}-text`]: {
          color: token.colorSuccess,
        },
      },
    },
    [`${progressCls}-inline-circle`]: {
      lineHeight: 1,
      [`${progressCls}-inner`]: {
        verticalAlign: 'bottom',
      },
    },
  }
}

const genStepStyle: GenerateStyle<ProgressToken> = (token: ProgressToken): CSSObject => {
  const { componentCls: progressCls } = token

  return {
    [progressCls]: {
      [`${progressCls}-steps`]: {
        display: 'inline-block',
        '&-outer': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        },
        '&-item': {
          flexShrink: 0,
          minWidth: token.progressStepMinWidth,
          marginInlineEnd: token.progressStepMarginInlineEnd,
          backgroundColor: token.remainingColor,
          transition: `all ${token.motionDurationSlow}`,

          '&-active': {
            backgroundColor: token.defaultColor,
          },
        },
      },
    },
  }
}

const genSmallLine: GenerateStyle<ProgressToken> = (token: ProgressToken): CSSObject => {
  const { componentCls: progressCls, iconCls: iconPrefixCls } = token

  return {
    [progressCls]: {
      [`${progressCls}-small&-line, ${progressCls}-small&-line ${progressCls}-text ${iconPrefixCls}`]:
      {
        fontSize: token.fontSizeSM,
      },
    },
  }
}

export default genComponentStyleHook(
  'Progress',
  (token) => {
    const progressStepMarginInlineEnd = token.marginXXS / 2

    const progressToken = mergeToken<ProgressToken>(token, {
      progressStepMarginInlineEnd,
      progressStepMinWidth: progressStepMarginInlineEnd,
      progressActiveMotionDuration: '2.4s',
    })

    return [
      genBaseStyle(progressToken),
      genCircleStyle(progressToken),
      genStepStyle(progressToken),
      genSmallLine(progressToken),
    ]
  },
  (token) => ({
    circleTextColor: token.colorText,
    defaultColor: token.colorInfo,
    remainingColor: token.colorFillSecondary,
    lineBorderRadius: 100, // magic for capsule shape, should be a very large number
    circleTextFontSize: '1em',
  }),
)
