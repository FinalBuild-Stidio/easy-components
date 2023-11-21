import type { FullToken, GenerateStyle } from '../../theme/internal'
import { genComponentStyleHook, mergeToken } from '../../theme/internal'
import genSpaceCompactStyle from './compact'

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  // Component token here
}

interface SpaceToken extends FullToken<'Space'> {
  spaceGapSmallSize: number
  spaceGapMediumSize: number
  spaceGapLargeSize: number
}

const genSpaceStyle: GenerateStyle<SpaceToken> = (token) => {
  const { componentCls } = token

  return {
    [componentCls]: {
      display: 'inline-flex',
      '&-vertical': {
        flexDirection: 'column',
      },
      '&-align': {
        flexDirection: 'column',
        '&-center': {
          alignItems: 'center',
        },
        '&-start': {
          alignItems: 'flex-start',
        },
        '&-end': {
          alignItems: 'flex-end',
        },
        '&-baseline': {
          alignItems: 'baseline',
        },
      },
      [`${componentCls}-item:empty`]: {
        display: 'none',
      },
    },
  }
}

const genSpaceGapStyle: GenerateStyle<SpaceToken> = (token) => {
  const { componentCls } = token
  return {
    [componentCls]: {
      '&-gap-row-small': {
        rowGap: token.spaceGapSmallSize,
      },
      '&-gap-row-medium': {
        rowGap: token.spaceGapMediumSize,
      },
      '&-gap-row-large': {
        rowGap: token.spaceGapLargeSize,
      },
      '&-gap-col-small': {
        columnGap: token.spaceGapSmallSize,
      },
      '&-gap-col-medium': {
        columnGap: token.spaceGapMediumSize,
      },
      '&-gap-col-large': {
        columnGap: token.spaceGapLargeSize,
      },
    },
  }
}

// ============================== Export ==============================
export default genComponentStyleHook(
  'Space',
  (token) => {
    const spaceToken = mergeToken<SpaceToken>(token, {
      spaceGapSmallSize: token.paddingXS,
      spaceGapMediumSize: token.padding,
      spaceGapLargeSize: token.paddingLG,
    })
    return [
      genSpaceStyle(spaceToken),
      genSpaceGapStyle(spaceToken),
      genSpaceCompactStyle(spaceToken),
    ]
  },
  () => ({}),
  {
    // Space component don't apply extra font style    resetStyle: false,
  },
)
