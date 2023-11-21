import type * as React from 'react'

import type { ColorPalettes, LegacyColorPalettes } from '@/components/base/theme/interface/presetColors'
import type { SeedToken } from '@/components/base/theme/interface/seeds'
import type { ColorMapToken } from '@/components/base/theme/interface/maps/colors'
import type { FontMapToken } from '@/components/base/theme/interface/maps/font'
import type { HeightMapToken, SizeMapToken } from '@/components/base/theme/interface/maps/size'
import type { StyleMapToken } from '@/components/base/theme/interface/maps/style'
import type { ComponentTokenMap } from '@/components/base/theme/interface/components'

export type { SeedToken }

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

// ======================================================================
// ==                           Alias Token                            ==
// ======================================================================
// 🔥🔥🔥🔥🔥🔥🔥 DO NOT MODIFY THIS. PLEASE CONTACT DESIGNER. 🔥🔥🔥🔥🔥🔥🔥

export interface AliasToken extends MapToken {
  // Background
  /**
   * @nameZH 內容區域背景色（懸停）
   * @nameEN Background color of content area (hover)
   * @desc 控制內容區域背景色在滑鼠懸停時的 style 。
   * @descEN Control the style of background color of content area when mouse hovers over it.
   */
  colorFillContentHover: string
  /**
   * @nameZH 替代背景色
   * @nameEN Alternative background color
   * @desc 控制元素替代背景色。
   * @descEN Control the alternative background color of element.
   */
  colorFillAlter: string
  /**
   * @nameZH 內容區域背景色
   * @nameEN Background color of content area
   * @desc 控制內容區域的背景色。
   * @descEN Control the background color of content area.
   */
  colorFillContent: string
  /**
   * @nameZH 容器禁用態下的背景色
   * @nameEN Disabled container background color
   * @desc 控制容器在禁用狀態下的背景色。
   * @descEN Control the background color of container in disabled state.
   */
  colorBgContainerDisabled: string
  /**
   * @nameZH 文本懸停態背景色
   * @nameEN Text hover background color
   * @desc 控制文本在懸停狀態下的背景色。
   * @descEN Control the background color of text in hover state.
   */
  colorBgTextHover: string
  /**
   * @nameZH 文本active態背景色
   * @nameEN Text active background color
   * @desc 控制文本在active狀態下的背景色。
   * @descEN Control the background color of text in active state.
   */
  colorBgTextActive: string

  // Border
  /**
   * @nameZH 背景邊筐顏色
   * @nameEN Background border color
   * @desc 控制元素背景邊框的顏色。
   * @descEN Control the color of background border of element.
   */
  colorBorderBg: string
  /**
   * @nameZH 分割線顏色
   * @nameEN Separator Color
   * @desc 用於作為分割線的顏色，此顏色和 colorBorderSecondary 的顏色一致，但是用的是透明色。
   * @descEN Used as the color of separator, this color is the same as colorBorderSecondary but with transparency.
   */
  colorSplit: string

  // Text
  /**
   * @nameZH 占位文本顏色
   * @nameEN Placeholder Text Color
   * @desc 控制占位文本的顏色。
   * @descEN Control the color of placeholder text.
   */
  colorTextPlaceholder: string
  /**
   * @nameZH 禁用字體顏色
   * @nameEN Disabled Text Color
   * @desc 控制禁用狀態下的字體顏色。
   * @descEN Control the color of text in disabled state.
   */
  colorTextDisabled: string
  /**
   * @nameZH 標題字體顏色
   * @nameEN Heading Text Color
   * @desc 控制標題字體顏色。
   * @descEN Control the font color of heading.
   */
  colorTextHeading: string
  /**
   * @nameZH 文本標籤字體顏色
   * @nameEN Text label font color
   * @desc 控制文本標籤字體顏色。
   * @descEN Control the font color of text label.
   */
  colorTextLabel: string
  /**
   * @nameZH 文本描述字體顏色
   * @nameEN Text description font color
   * @desc 控制文本描述字體顏色。
   * @descEN Control the font color of text description.
   */
  colorTextDescription: string
  /**
   * @nameZH 固定文本高亮顏色
   * @nameEN Fixed text highlight color
   * @desc 控制帶背景色的文本，例如 Primary Button 元件中的文本高亮顏色。
   * @descEN Control the highlight color of text with background color, such as the text in Primary Button components.
   */
  colorTextLightSolid: string

  /**
  /**
   * @nameZH 弱操作圖示顏色
   * @nameEN Weak action icon color
   * @desc 控制弱操作圖示的顏色，例如 allowClear 或 Alert 關閉按鈕。
   * @descEN Weak action. Such as `allowClear` or Alert close button
   */
  colorIcon: string

  /**  */
  /**
   * @nameZH 弱操作圖示懸浮態顏色
   * @nameEN Weak action icon hover color
   * @desc 控制弱操作圖示在懸浮狀態下的顏色，例如 allowClear 或 Alert 關閉按鈕。
   * @descEN Weak action hover color. Such as `allowClear` or Alert close button
   */
  colorIconHover: string

  /**
   * @nameZH 高亮顏色
   * @nameEN Highlight color
   * @desc 控制頁面元素高亮時的顏色。
   * @descEN Control the color of page element when highlighted.
   */
  colorHighlight: string

  /**
   * @nameZH 輸入元件的 Outline 顏色
   * @nameEN Input component outline color
   * @desc 控制輸入元件的外輪廓線顏色。
   * @descEN Control the outline color of input component.
   */
  controlOutline: string

  /**
   * @nameZH 警告狀態下的 Outline 顏色
   * @nameEN Warning outline color
   * @desc 控制輸入元件警告狀態下的外輪廓線顏色。
   * @descEN Control the outline color of input component in warning state.
   */
  colorWarningOutline: string

  /**
   * @nameZH 錯誤狀態下的 Outline 顏色
   * @nameEN Error outline color
   * @desc 控制輸入元件錯誤狀態下的外輪廓線顏色。
   * @descEN Control the outline color of input component in error state.
   */
  colorErrorOutline: string

  // Font
  /**
   * @nameZH 選擇器、級聯選擇器等中的操作圖示字體大小
   * @nameEN Operation icon font size in Select, Cascader, etc.
   * @desc 控制選擇器、級聯選擇器等中的操作圖示字體大小。正常情況下與 fontSizeSM 相同。
   * @descEN Control the font size of operation icon in Select, Cascader, etc. Normally same as fontSizeSM.
   */
  fontSizeIcon: number

  /**
   * @nameZH 標題類元件（如 h1、h2、h3）或選中項的字體粗細
   * @nameEN Font weight for heading components (such as h1, h2, h3) or selected item
   * @desc 控制標題類元件（如 h1、h2、h3）或選中項的字體粗細。
   * @descEN Control the font weight of heading components (such as h1, h2, h3) or selected item.
   */
  fontWeightStrong: number

  // Control

  /**
   * @nameZH 輸入元件的外輪廓線寬度
   * @nameEN Input component outline width
   * @desc 控制輸入元件的外輪廓線寬度。
   * @descEN Control the outline width of input component.
   */
  controlOutlineWidth: number

  /**
   * @nameZH 控制元件項在滑鼠懸浮時的背景顏色
   * @nameEN Background color of control component item when hovering
   * @desc 控制元件項在滑鼠懸浮時的背景顏色。
   * @descEN Control the background color of control component item when hovering.
   */
  controlItemBgHover: string // Note. It also is a color

  /**
   * @nameZH 控制元件項在active狀態下的背景顏色
   * @nameEN Background color of control component item when active
   * @desc 控制元件項在active狀態下的背景顏色。
   * @descEN Control the background color of control component item when active.
   */
  controlItemBgActive: string // Note. It also is a color

  /**
   * @nameZH 控制元件項在滑鼠懸浮且active狀態下的背景顏色
   * @nameEN Background color of control component item when hovering and active
   * @desc 控制元件項在滑鼠懸浮且active狀態下的背景顏色。
   * @descEN Control the background color of control component item when hovering and active.
   */
  controlItemBgActiveHover: string // Note. It also is a color

  /**
   * @nameZH 控制元件的交互大小
   * @nameEN Interactive size of control component
   * @desc 控制元件的交互大小。
   * @descEN Control the interactive size of control component.
   */
  controlInteractiveSize: number

  /**
   * @nameZH 控制元件項在禁用狀態下的active背景顏色
   * @nameEN Background color of control component item when active and disabled
   * @desc 控制元件項在禁用狀態下的active背景顏色。
   * @descEN Control the background color of control component item when active and disabled.
   */
  controlItemBgActiveDisabled: string // Note. It also is a color

  // Line
  /**
   * @nameZH 線條寬度(聚焦態)
   * @nameEN Line width(focus state)
   * @desc 控制線條的寬度，當元件處於聚焦態時。
   * @descEN Control the width of the line when the component is in focus state.
   */
  lineWidthFocus: number

  // Padding
  /**
   * @nameZH 極小內間距
   * @nameEN Extra extra small padding
   * @desc 控制元素的極小內間距。
   * @descEN Control the extra extra small padding of the element.
   */
  paddingXXS: number
  /**
   * @nameZH 特小內間距
   * @nameEN Extra small padding
   * @desc 控制元素的特小內間距。
   * @descEN Control the extra small padding of the element.
   */
  paddingXS: number
  /**
   * @nameZH 小內間距
   * @nameEN Small padding
   * @desc 控制元素的小內間距。
   * @descEN Control the small padding of the element.
   */
  paddingSM: number
  /**
   * @nameZH 內間距
   * @nameEN Padding
   * @desc 控制元素的內間距。
   * @descEN Control the padding of the element.
   */
  padding: number
  /**
   * @nameZH 中等內間距
   * @nameEN Medium padding
   * @desc 控制元素的中等內間距。
   * @descEN Control the medium padding of the element.
   */
  paddingMD: number
  /**
   * @nameZH 大內間距
   * @nameEN Large padding
   * @desc 控制元素的大內間距。
   * @descEN Control the large padding of the element.
   */
  paddingLG: number
  /**
   * @nameZH 特大內間距
   * @nameEN Extra large padding
   * @desc 控制元素的特大內間距。
   * @descEN Control the extra large padding of the element.
   */
  paddingXL: number

  // Padding Content
  /**
   * @nameZH 內容水平內間距（LG）
   * @nameEN Content horizontal padding (LG)
   * @desc 控制內容元素水平內間距，適用於大螢幕設備。
   * @descEN Control the horizontal padding of content element, suitable for large screen devices.
   */
  paddingContentHorizontalLG: number
  /**
   * @nameZH 內容水平內間距
   * @nameEN Content horizontal padding
   * @desc 控制內容元素水平內間距。
   * @descEN Control the horizontal padding of content element.
   */
  paddingContentHorizontal: number
  /**
   * @nameZH 內容水平內間距（SM）
   * @nameEN Content horizontal padding (SM)
   * @desc 控制內容元素水平內間距，適用於小螢幕設備。
   * @descEN Control the horizontal padding of content element, suitable for small screen devices.
   */
  paddingContentHorizontalSM: number
  /**
   * @nameZH 內容垂直內間距（LG）
   * @nameEN Content vertical padding (LG)
   * @desc 控制內容元素垂直內間距，適用於大螢幕設備。
   * @descEN Control the vertical padding of content element, suitable for large screen devices.
   */
  paddingContentVerticalLG: number
  /**
   * @nameZH 內容垂直內間距
   * @nameEN Content vertical padding
   * @desc 控制內容元素垂直內間距。
   * @descEN Control the vertical padding of content element.
   */
  paddingContentVertical: number
  /**
   * @nameZH 內容垂直內間距（SM）
   * @nameEN Content vertical padding (SM)
   * @desc 控制內容元素垂直內間距，適用於小螢幕設備。
   * @descEN Control the vertical padding of content element, suitable for small screen devices.
   */
  paddingContentVerticalSM: number

  // Margin
  /**
   * @nameZH 外邊距 XXS
   * @nameEN Margin XXS
   * @desc 控制元素外邊距，最小尺寸。
   * @descEN Control the margin of an element, with the smallest size.
   */
  marginXXS: number
  /**
   * @nameZH 外邊距 XS
   * @nameEN Margin XS
   * @desc 控制元素外邊距，小尺寸。
   * @descEN Control the margin of an element, with a small size.
   */
  marginXS: number
  /**
   * @nameZH 外邊距 SM
   * @nameEN Margin SM
   * @desc 控制元素外邊距，中小尺寸。
   * @descEN Control the margin of an element, with a medium-small size.
   */
  marginSM: number
  /**
   * @nameZH 外邊距
   * @nameEN Margin
   * @desc 控制元素外邊距，中等尺寸。
   * @descEN Control the margin of an element, with a medium size.
   */
  margin: number
  /**
   * @nameZH 外邊距 MD
   * @nameEN Margin MD
   * @desc 控制元素外邊距，中大尺寸。
   * @descEN Control the margin of an element, with a medium-large size.
   */
  marginMD: number
  /**
   * @nameZH 外邊距 LG
   * @nameEN Margin LG
   * @desc 控制元素外邊距，大尺寸。
   * @descEN Control the margin of an element, with a large size.
   */
  marginLG: number
  /**
   * @nameZH 外邊距 XL
   * @nameEN Margin XL
   * @desc 控制元素外邊距，超大尺寸。
   * @descEN Control the margin of an element, with an extra-large size.
   */
  marginXL: number
  /**
   * @nameZH 外邊距 XXL
   * @nameEN Margin XXL
   * @desc 控制元素外邊距，最大尺寸。
   * @descEN Control the margin of an element, with the largest size.
   */
  marginXXL: number

  // =============== Legacy: should be remove ===============
  /**
   * @nameZH 載入狀態透明度
   * @nameEN Loading opacity
   * @desc 控制載入狀態的透明度。
   * @descEN Control the opacity of the loading state.
   */
  opacityLoading: number

  /**
   * @nameZH 一級陰影
   * @nameEN Box shadow
   * @desc 控制元素陰影 style 。
   * @descEN Control the box shadow style of an element.
   */
  boxShadow: string
  /**
   * @nameZH 二級陰影
   * @nameEN Secondary box shadow
   * @desc 控制元素二級陰影 style 。
   * @descEN Control the secondary box shadow style of an element.
   */
  boxShadowSecondary: string
  /**
   * @nameZH 三級陰影
   * @nameEN Tertiary box shadow
   * @desc 控制元素三級盒子陰影 style 。
   * @descEN Control the tertiary box shadow style of an element.
   */
  boxShadowTertiary: string

  /**
   * @nameZH 連結文本裝飾
   * @nameEN Link text decoration
   * @desc 控制連結文本的裝飾 style 。
   * @descEN Control the text decoration style of a link.
   */
  linkDecoration: React.CSSProperties['textDecoration']
  /**
   * @nameZH 連結滑鼠懸浮時文本裝飾
   * @nameEN Link text decoration on mouse hover
   * @desc 控制連結滑鼠懸浮時文本的裝飾 style 。
   * @descEN Control the text decoration style of a link on mouse hover.
   */
  linkHoverDecoration: React.CSSProperties['textDecoration']
  /**
   * @nameZH 連結聚焦時文本裝飾
   * @nameEN Link text decoration on focus
   * @desc 控制連結聚焦時文本的裝飾 style 。
   * @descEN Control the text decoration style of a link on focus.
   */
  linkFocusDecoration: React.CSSProperties['textDecoration']

  /**
   * @nameZH 控制水平內間距
   * @nameEN Control horizontal padding
   * @desc 控制元素水平內間距。
   * @descEN Control the horizontal padding of an element.
   */
  controlPaddingHorizontal: number
  /**
   * @nameZH 控制中小尺寸水平內間距
   * @nameEN Control horizontal padding with a small-medium size
   * @desc 控制元素中小尺寸水平內間距。
   * @descEN Control the horizontal padding of an element with a small-medium size.
   */
  controlPaddingHorizontalSM: number

  // Media queries breakpoints
  /**
   * @nameZH 螢幕寬度（像素） - 超小螢幕
   * @nameEN Screen width (pixels) - Extra small screens
   * @desc 控制超小螢幕的螢幕寬度。
   * @descEN Control the screen width of extra small screens.
   */
  screenXS: number
  /**
   * @nameZH 螢幕寬度（像素） - 超小螢幕最小值
   * @nameEN Screen width (pixels) - Extra small screens minimum value
   * @desc 控制超小螢幕的最小寬度。
   * @descEN Control the minimum width of extra small screens.
   */
  screenXSMin: number
  /**
   * @nameZH 螢幕寬度（像素） - 超小螢幕最大值
   * @nameEN Screen width (pixels) - Extra small screens maximum value
   * @desc 控制超小螢幕的最大寬度。
   * @descEN Control the maximum width of extra small screens.
   */
  screenXSMax: number
  /**
   * @nameZH 螢幕寬度（像素） - 小螢幕
   * @nameEN Screen width (pixels) - Small screens
   * @desc 控制小螢幕的螢幕寬度。
   * @descEN Control the screen width of small screens.
   */
  screenSM: number
  /**
   * @nameZH 螢幕寬度（像素） - 小螢幕最小值
   * @nameEN Screen width (pixels) - Small screens minimum value
   * @desc 控制小螢幕的最小寬度。
   * @descEN Control the minimum width of small screens.
   */
  screenSMMin: number
  /**
   * @nameZH 螢幕寬度（像素） - 小螢幕最大值
   * @nameEN Screen width (pixels) - Small screens maximum value
   * @desc 控制小螢幕的最大寬度。
   * @descEN Control the maximum width of small screens.
   */
  screenSMMax: number
  /**
   * @nameZH 螢幕寬度（像素） - 中等螢幕
   * @nameEN Screen width (pixels) - Medium screens
   * @desc 控制中等螢幕的螢幕寬度。
   * @descEN Control the screen width of medium screens.
   */
  screenMD: number
  /**
   * @nameZH 螢幕寬度（像素） - 中等螢幕最小值
   * @nameEN Screen width (pixels) - Medium screens minimum value
   * @desc 控制中等螢幕的最小寬度。
   * @descEN Control the minimum width of medium screens.
   */
  screenMDMin: number
  /**
   * @nameZH 螢幕寬度（像素） - 中等螢幕最大值
   * @nameEN Screen width (pixels) - Medium screens maximum value
   * @desc 控制中等螢幕的最大寬度。
   * @descEN Control the maximum width of medium screens.
   */
  screenMDMax: number
  /**
   * @nameZH 螢幕寬度（像素） - 大螢幕
   * @nameEN Screen width (pixels) - Large screens
   * @desc 控制大螢幕的螢幕寬度。
   * @descEN Control the screen width of large screens.
   */
  screenLG: number
  /**
   * @nameZH 螢幕寬度（像素） - 大螢幕最小值
   * @nameEN Screen width (pixels) - Large screens minimum value
   * @desc 控制大螢幕的最小寬度。
   * @descEN Control the minimum width of large screens.
   */
  screenLGMin: number
  /**
   * @nameZH 螢幕寬度（像素） - 大螢幕最大值
   * @nameEN Screen width (pixels) - Large screens maximum value
   * @desc 控制大螢幕的最大寬度。
   * @descEN Control the maximum width of large screens.
   */
  screenLGMax: number
  /**
   * @nameZH 螢幕寬度（像素） - 超大螢幕
   * @nameEN Screen width (pixels) - Extra large screens
   * @desc 控制超大螢幕的螢幕寬度。
   * @descEN Control the screen width of extra large screens.
   */
  screenXL: number
  /**
   * @nameZH 螢幕寬度（像素） - 超大螢幕最小值
   * @nameEN Screen width (pixels) - Extra large screens minimum value
   * @desc 控制超大螢幕的最小寬度。
   * @descEN Control the minimum width of extra large screens.
   */
  screenXLMin: number
  /**
   * @nameZH 螢幕寬度（像素） - 超大螢幕最大值
   * @nameEN Screen width (pixels) - Extra large screens maximum value
   * @desc 控制超大螢幕的最大寬度。
   * @descEN Control the maximum width of extra large screens.
   */
  screenXLMax: number
  /**
   * @nameZH 螢幕寬度（像素） - 超超大螢幕
   * @nameEN Screen width (pixels) - Extra extra large screens
   * @desc 控制超超大螢幕的螢幕寬度。
   * @descEN Control the screen width of extra extra large screens.
   */
  screenXXL: number
  /**
   * @nameZH 螢幕寬度（像素） - 超超大螢幕最小值
   * @nameEN Screen width (pixels) - Extra extra large screens minimum value
   * @desc 控制超超大螢幕的最小寬度。
   * @descEN Control the minimum width of extra extra large screens.
   */
  screenXXLMin: number

  /**
   * @deprecated
   * Used for DefaultButton, Switch which has default outline
   * @desc 預設 style 的 Outline 顏色
   * @descEN Default style outline color.
   */
  controlTmpOutline: string

  // FIXME: component box-shadow, should be removed
  /** @internal */
  boxShadowPopoverArrow: string
  /** @internal */
  boxShadowCard: string
  /** @internal */
  boxShadowDrawerRight: string
  /** @internal */
  boxShadowDrawerLeft: string
  /** @internal */
  boxShadowDrawerUp: string
  /** @internal */
  boxShadowDrawerDown: string
  /** @internal */
  boxShadowTabsOverflowLeft: string
  /** @internal */
  boxShadowTabsOverflowRight: string
  /** @internal */
  boxShadowTabsOverflowTop: string
  /** @internal */
  boxShadowTabsOverflowBottom: string
}

export type GlobalToken = AliasToken & ComponentTokenMap
