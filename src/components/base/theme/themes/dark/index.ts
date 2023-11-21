import generate from '../generateColor'
import type { DerivativeFunc } from '@/components/StyleContext'
import type {
  ColorPalettes,
  LegacyColorPalettes,
  MapToken,
  PresetColorKey,
  SeedToken,
} from '../../interface'
import { defaultPresetColors } from '../seed'
import genColorMapToken from '../shared/genColorMapToken'
import { generateColorPalettes, generateNeutralColorPalettes } from './colors'
import defaultAlgorithm from '../default'

const derivative: DerivativeFunc<SeedToken, MapToken> = (token, mapToken) => {
  const colorPalettes = Object.keys(defaultPresetColors)
    .map((colorKey) => {

      const colors = generate(token[colorKey as PresetColorKey], { theme: 'dark' })

      return new Array(10).fill(1).reduce((prev, _, i) => {
        prev[`${colorKey}-${i + 1}`] = colors[i]
        prev[`${colorKey}${i + 1}`] = colors[i]
        return prev
      }, {}) as ColorPalettes
    })
    .reduce((prev, cur) => {
      prev = {
        ...prev,
        ...cur,
      }
      return prev
    }, {} as ColorPalettes & LegacyColorPalettes)

  const mergedMapToken = mapToken ?? defaultAlgorithm(token)

  return {
    ...mergedMapToken,

    // Dark tokens
    ...colorPalettes,
    // Colors
    ...genColorMapToken(token, {
      generateColorPalettes,
      generateNeutralColorPalettes,
    }),
  }
}

export default derivative
