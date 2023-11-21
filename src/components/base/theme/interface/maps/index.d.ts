import type { ColorPalettes, LegacyColorPalettes } from '../presetColors'
import type { SeedToken } from '../seeds'
import type { ColorMapToken } from './colors'
import type { FontMapToken } from './font'
import type { HeightMapToken, SizeMapToken } from './size'
import type { StyleMapToken } from './style'

export * from './colors'
export * from './font'
export * from './size'
export * from './style'

export interface CommonMapToken extends StyleMapToken {
  // Motion
  /**
   * @desc 動效播放速度，快速。用於小型元素動畫交互
   * @descEN Motion speed, fast speed. Used for small element animation interaction.
   */
  motionDurationFast: string
  /**
   * @desc 動效播放速度，中速。用於中型元素動畫交互
   * @descEN Motion speed, medium speed. Used for medium element animation interaction.
   */
  motionDurationMid: string
  /**
   * @desc 動效播放速度，慢速。用於大型元素如面板動畫交互
   * @descEN Motion speed, slow speed. Used for large element animation interaction.
   */
  motionDurationSlow: string
}

// ======================================================================
// ==                         Map Token                         ==
// ======================================================================
// 🔥🔥🔥🔥🔥🔥🔥 DO NOT MODIFY THIS. PLEASE CONTACT DESIGNER. 🔥🔥🔥🔥🔥🔥🔥

export interface MapToken
  extends SeedToken,
  LegacyColorPalettes,
  ColorPalettes,
  ColorMapToken,
  SizeMapToken,
  HeightMapToken,
  StyleMapToken,
  FontMapToken,
  CommonMapToken { }
