import type { CSSInterpolation } from '@/StyleContext'
import { Keyframes } from '@/StyleContext'
import type { AliasToken } from '../../theme/internal'
import type { TokenWithCommonCls } from '../../theme/util/genComponentStyleHook'
import { initMotion } from './motion'

export const zoomIn = new Keyframes('ipassZoomIn', {
  '0%': {
    transform: 'scale(0.2)',
    opacity: 0,
  },

  '100%': {
    transform: 'scale(1)',
    opacity: 1,
  },
})

export const zoomOut = new Keyframes('ipassZoomOut', {
  '0%': {
    transform: 'scale(1)',
  },

  '100%': {
    transform: 'scale(0.2)',
    opacity: 0,
  },
})

export const zoomBigIn = new Keyframes('ipassZoomBigIn', {
  '0%': {
    transform: 'scale(0.8)',
    opacity: 0,
  },

  '100%': {
    transform: 'scale(1)',
    opacity: 1,
  },
})

export const zoomBigOut = new Keyframes('ipassZoomBigOut', {
  '0%': {
    transform: 'scale(1)',
  },

  '100%': {
    transform: 'scale(0.8)',
    opacity: 0,
  },
})

export const zoomUpIn = new Keyframes('ipassZoomUpIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0,
  },

  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%',
  },
})

export const zoomUpOut = new Keyframes('ipassZoomUpOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%',
  },

  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0,
  },
})

export const zoomLeftIn = new Keyframes('ipassZoomLeftIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0,
  },

  '100%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%',
  },
})

export const zoomLeftOut = new Keyframes('ipassZoomLeftOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%',
  },

  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0,
  },
})

export const zoomRightIn = new Keyframes('ipassZoomRightIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0,
  },

  '100%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%',
  },
})

export const zoomRightOut = new Keyframes('ipassZoomRightOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%',
  },

  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0,
  },
})

export const zoomDownIn = new Keyframes('ipassZoomDownIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0,
  },

  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%',
  },
})

export const zoomDownOut = new Keyframes('ipassZoomDownOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%',
  },

  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0,
  },
})

type ZoomMotionTypes =
  | 'zoom'
  | 'zoom-big'
  | 'zoom-big-fast'
  | 'zoom-left'
  | 'zoom-right'
  | 'zoom-up'
  | 'zoom-down'
const zoomMotion: Record<ZoomMotionTypes, { inKeyframes: Keyframes; outKeyframes: Keyframes }> = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut,
  },
  'zoom-big': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut,
  },
  'zoom-big-fast': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut,
  },
  'zoom-left': {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut,
  },
  'zoom-right': {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut,
  },
  'zoom-up': {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut,
  },
  'zoom-down': {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut,
  },
}

export const initZoomMotion = (
  token: TokenWithCommonCls<AliasToken>,
  motionName: ZoomMotionTypes,
): CSSInterpolation => {
  const { ipassCls } = token
  const motionCls = `${ipassCls}-${motionName}`
  const { inKeyframes, outKeyframes } = zoomMotion[motionName]

  return [
    initMotion(
      motionCls,
      inKeyframes,
      outKeyframes,
      motionName === 'zoom-big-fast' ? token.motionDurationFast : token.motionDurationMid,
    ),
    {
      [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
        transform: 'scale(0)',
        opacity: 0,
        animationTimingFunction: token.motionEaseOutCirc,

        '&-prepare': {
          transform: 'none',
        },
      },

      [`${motionCls}-leave`]: {
        animationTimingFunction: token.motionEaseInOutCirc,
      },
    },
  ]
}
