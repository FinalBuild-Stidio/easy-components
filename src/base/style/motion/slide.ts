import type { CSSInterpolation } from '@/StyleContext'
import { Keyframes } from '@/StyleContext'
import type { AliasToken } from '../../theme/internal'
import type { TokenWithCommonCls } from '../../theme/util/genComponentStyleHook'
import { initMotion } from './motion'

export const slideUpIn = new Keyframes('ipassSlideUpIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0,
  },

  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1,
  },
})

export const slideUpOut = new Keyframes('ipassSlideUpOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1,
  },

  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0,
  },
})

export const slideDownIn = new Keyframes('ipassSlideDownIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0,
  },

  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1,
  },
})

export const slideDownOut = new Keyframes('ipassSlideDownOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1,
  },

  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0,
  },
})

export const slideLeftIn = new Keyframes('ipassSlideLeftIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0,
  },

  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1,
  },
})

export const slideLeftOut = new Keyframes('ipassSlideLeftOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1,
  },

  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0,
  },
})

export const slideRightIn = new Keyframes('ipassSlideRightIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0,
  },

  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1,
  },
})

export const slideRightOut = new Keyframes('ipassSlideRightOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1,
  },

  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0,
  },
})

type SlideMotionTypes = 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right'
const slideMotion: Record<SlideMotionTypes, { inKeyframes: Keyframes; outKeyframes: Keyframes }> = {
  'slide-up': {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut,
  },
  'slide-down': {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut,
  },
  'slide-left': {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut,
  },
  'slide-right': {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut,
  },
}

export const initSlideMotion = (
  token: TokenWithCommonCls<AliasToken>,
  motionName: SlideMotionTypes,
): CSSInterpolation => {
  const { ipassCls } = token
  const motionCls = `${ipassCls}-${motionName}`
  const { inKeyframes, outKeyframes } = slideMotion[motionName]

  return [
    initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid),

    {
      [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
        transform: 'scale(0)',
        transformOrigin: '0% 0%',
        opacity: 0,
        animationTimingFunction: token.motionEaseOutQuint,

        [`&-prepare`]: {
          transform: 'scale(1)',
        },
      },

      [`${motionCls}-leave`]: {
        animationTimingFunction: token.motionEaseInQuint,
      },
    },
  ]
}
