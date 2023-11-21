import * as React from 'react'
import type { ValidateMessages } from 'rc-field-form/lib/interface'
import type { Options } from 'scroll-into-view-if-needed'

import type { WarningContextProps } from '../_util/warning'
import type { ShowWaveEffect } from '../_util/wave/interface'
import type { BadgeProps } from '../badge'
import type { RequiredMark } from '../form/Form'
import type { InputProps } from '../input'
import type { Locale } from '../locale'
import type { SpaceProps } from '../space'
import type { TabsProps } from '../tabs'
import type { AliasToken, MappingAlgorithm, OverrideToken } from '../theme/interface'
import type { RenderEmptyHandler } from './defaultRenderEmpty'
import type { SizeType } from './SizeContext'

export interface Theme {
  primaryColor?: string
  infoColor?: string
  successColor?: string
  processingColor?: string
  errorColor?: string
  warningColor?: string
}

export interface CSPConfig {
  nonce?: string
}

type ComponentsConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
    algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[]
  }
}

export interface BadgeConfig extends ComponentStyleConfig {
  classNames?: BadgeProps['classNames']
  styles?: BadgeProps['styles']
}

export interface ThemeConfig {
  token?: Partial<AliasToken>
  components?: ComponentsConfig
  algorithm?: MappingAlgorithm | MappingAlgorithm[]
  hashed?: boolean
  inherit?: boolean
}

export interface ComponentStyleConfig {
  className?: string
  style?: React.CSSProperties
}

export type PopupOverflow = 'viewport' | 'scroll'

export interface WaveConfig {
  disabled?: boolean
  showEffect?: ShowWaveEffect
}

export interface ConfigConsumerProps {
  getTargetContainer?: () => HTMLElement
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement
  rootPrefixCls?: string
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string
  renderEmpty?: RenderEmptyHandler
  csp?: CSPConfig
  autoInsertSpaceInButton?: boolean
  input?: ComponentStyleConfig & {
    autoComplete?: string
    classNames?: InputProps['classNames']
    styles?: InputProps['styles']
  }
  pagination?: ComponentStyleConfig & { showSizeChanger?: boolean }
  locale?: Locale
  pageHeader?: {
    ghost: boolean
  }
  space?: {
    size?: SizeType | number
    className?: SpaceProps['className']
    classNames?: SpaceProps['classNames']
    style?: SpaceProps['style']
    styles?: SpaceProps['styles']
  }
  virtual?: boolean
  popupMatchSelectWidth?: boolean
  popupOverflow?: PopupOverflow
  form?: ComponentStyleConfig & {
    requiredMark?: RequiredMark
    colon?: boolean
    scrollToFirstError?: Options | boolean
    validateMessages?: ValidateMessages
  }
  theme?: ThemeConfig
  select?: ComponentStyleConfig & {
    showSearch?: boolean
  }
  alert?: ComponentStyleConfig
  anchor?: ComponentStyleConfig
  badge?: BadgeConfig
  divider?: ComponentStyleConfig
  drawer?: ComponentStyleConfig
  calendar?: ComponentStyleConfig
  collapse?: ComponentStyleConfig
  typography?: ComponentStyleConfig
  skeleton?: ComponentStyleConfig
  segmented?: ComponentStyleConfig
  steps?: ComponentStyleConfig
  statistic?: ComponentStyleConfig
  image?: ComponentStyleConfig
  layout?: ComponentStyleConfig
  list?: ComponentStyleConfig
  modal?: ComponentStyleConfig
  progress?: ComponentStyleConfig
  result?: ComponentStyleConfig
  breadcrumb?: ComponentStyleConfig
  menu?: ComponentStyleConfig
  checkbox?: ComponentStyleConfig
  descriptions?: ComponentStyleConfig
  empty?: ComponentStyleConfig
  radio?: ComponentStyleConfig
  switch?: ComponentStyleConfig
  transfer?: ComponentStyleConfig
  message?: ComponentStyleConfig
  tag?: ComponentStyleConfig
  table?: ComponentStyleConfig
  card?: ComponentStyleConfig
  tabs?: ComponentStyleConfig & Pick<TabsProps, 'indicatorSize'>
  timeline?: ComponentStyleConfig
  timePicker?: ComponentStyleConfig
  tree?: ComponentStyleConfig
  upload?: ComponentStyleConfig
  notification?: ComponentStyleConfig
  datePicker?: ComponentStyleConfig

  wave?: WaveConfig

  warning?: WarningContextProps
}

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) {
    return customizePrefixCls
  }
  return suffixCls ? `ipass-${suffixCls}` : 'ipass'
}

// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will cause circular dependency.
export const ConfigContext = React.createContext<ConfigConsumerProps>({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
})

export const { Consumer: ConfigConsumer } = ConfigContext
