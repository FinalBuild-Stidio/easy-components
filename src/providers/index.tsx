import type { Theme } from '@/hooks/cssinjs/theme'
import { useCacheToken } from '@/hooks/cssinjs/theme'
import { omitUndefined } from '@/base/_util/omitUndefined'
import ConfigProvider from '@/base/Config'
import { merge } from '@/pro/utils/merge'

import zh_TW from '@/base/locale/zh_TW'
import React, { useContext, useEffect, useMemo } from 'react'
import type { IntlType } from './intl'
import { findIntlKeyByLocaleKey, intlMap, zhTWIntl } from './intl'

import dayjs from 'dayjs'
import type { DeepPartial, ProTokenType } from './typing/layoutToken'
import { getLayoutDesignToken } from './typing/layoutToken'
import type { ProAliasToken } from './useStyle'
import { proTheme } from './useStyle'
import { defaultToken, emptyTheme } from './useStyle/token'

import 'dayjs/locale/zh-tw'

export * from './intl'
export * from './useStyle'
export { DeepPartial, ProTokenType }
export type { GenerateStyle } from '@/base/theme/internal'

export { operationUnit, resetComponent, roundedArrow } from '@/base/style'

/**
 * 用於判斷當前是否需要開啟哈希（Hash）模式。
 * 首先也會判斷當前是否處於測試環境中（通過 process.env.NODE_ENV === 'TEST' 判斷），
 * 如果是，則返回 false。否則，直接返回 true 表示需要打開。
 * @returns
 */
export const isNeedOpenHash = () => {
  if (
    typeof process !== 'undefined' &&
    (process.env.NODE_ENV?.toUpperCase() === 'TEST' ||
      process.env.NODE_ENV?.toUpperCase() === 'DEV')
  ) {
    return false
  }
  return true
}

/**
 * 用於設定 ValueEnum 的通用設定
 */
export type ProSchemaValueEnumType = {
  /** @name 示範的文案 */
  text: React.ReactNode

  /** @name 預定的顏色 */
  status?: string
  /** @name 自訂的顏色 */
  color?: string
  /** @name 是否禁用 */
  disabled?: boolean
}

/**
 * 支援 Map 和 Object
 *
 * @name ValueEnum 的類型
 */
type ProSchemaValueEnumMap = Map<
  string | number | boolean,
  ProSchemaValueEnumType | React.ReactNode
>

/**
 * 支援 Map 和 Object
 */
type ProSchemaValueEnumObj = Record<
  string,
  ProSchemaValueEnumType | React.ReactNode
>

/**
 * BaseProFieldFC 的類型設置
 */
export type BaseProFieldFC = {
  /** 值的類型 */
  text: React.ReactNode
  /** 放置到元件上 props */
  fieldProps?: any
  /**
   * 元件的渲染模式類型
   * @option read 渲染唯獨模式
   * @option edit 渲染編輯模式
   * */
  mode: ProFieldFCMode
  /**
   * 簡約模式
   */
  plain?: boolean
  /** 輕量模式 */
  light?: boolean
  /** Label */
  label?: React.ReactNode
  /** 映射值的類型 */
  valueEnum?: ProSchemaValueEnumObj | ProSchemaValueEnumMap
  /** 唯一的key，用於網路請求 */
  proFieldKey?: React.Key
}

export type ProFieldFCMode = 'read' | 'edit' | 'update'

/** Render 第二個參數，裡面包含了一些常用的參數 */
export type ProFieldFCRenderProps = {
  mode?: ProFieldFCMode
  readonly?: boolean
  placeholder?: string | string[]
  value?: any
  onChange?: (...rest: any[]) => void
} & BaseProFieldFC

export type ProRenderFieldPropsType = {
  /**
   * 自訂唯獨模式的渲染器
   * @params props 關於dom的設定
   * @params dom 預設的 dom
   * @return 返回一個用於讀的 dom
   */
  render?:
  | ((
    text: any,
    props: Omit<ProFieldFCRenderProps, 'value' | 'onChange'>,
    dom: JSX.Element,
  ) => JSX.Element)
  | undefined
  /**
   * 一個自訂的編輯渲染器。
   * @params text 預設的值類型
   * @params props 關於dom的設定
   * @params dom 預設的 dom
   * @return 返回一個用於編輯的dom
   */
  renderFormItem?:
  | ((
    text: any,
    props: ProFieldFCRenderProps,
    dom: JSX.Element,
  ) => JSX.Element)
  | undefined
}

export type ParamsType = Record<string, any>

/**
 * 自帶的token 設定
 */
export type ConfigContextPropsType = {
  intl?: IntlType
  valueTypeMap?: Record<string, ProRenderFieldPropsType>
  token: ProAliasToken
  hashId?: string
  hashed?: boolean
  dark?: boolean
  theme?: Theme<any, any>
}

/* Creating a context object with the default values. */
const ProConfigContext = React.createContext<ConfigContextPropsType>({
  intl: {
    ...zhTWIntl,
    locale: 'default',
  },
  valueTypeMap: {},
  theme: emptyTheme,
  hashed: true,
  dark: false,
  token: defaultToken as ProAliasToken,
})

export const { Consumer: ConfigConsumer } = ProConfigContext

/**
 * 用於設定 Pro 的元件,分裝之後會簡單一些
 * @param props
 * @returns
 */
const ConfigProviderContainer: React.FC<{
  children: React.ReactNode
  autoClearCache?: boolean
  valueTypeMap?: Record<string, ProRenderFieldPropsType>
  token?: DeepPartial<ProAliasToken>
  hashed?: boolean
  dark?: boolean
  prefixCls?: string
}> = (props) => {
  const {
    children,
    dark,
    valueTypeMap,
    autoClearCache = false,
    token: propsToken,
    prefixCls,
  } = props
  const { locale, getPrefixCls, ...restConfig } = useContext(
    ConfigProvider.ConfigContext,
  )
  const tokenContext = proTheme.useToken?.()
  const proProvide = useContext(ProConfigContext)

  const proComponentsCls = prefixCls
    ? `.${prefixCls}`
    : `.${getPrefixCls()}-pro`

  const ipassCls = '.' + getPrefixCls()

  const salt = `${proComponentsCls}`
  /**
   * 合併一下token，不然導致嵌套 token 失效
   */
  const proLayoutTokenMerge = useMemo(() => {
    return getLayoutDesignToken(
      propsToken || {},
      tokenContext.token || defaultToken,
    )
  }, [propsToken, tokenContext.token])

  const proProvideValue = useMemo(() => {
    const localeName = locale?.locale
    const key = findIntlKeyByLocaleKey(localeName)
    // ipass customized lib 的 key 存在的時候以 ipass customized lib 的為主
    const intl =
      localeName && proProvide.intl?.locale === 'default'
        ? intlMap[key!]
        : proProvide.intl || intlMap[key!]

    return {
      ...proProvide,
      dark: dark ?? proProvide.dark,
      token: merge(proProvide.token, tokenContext.token, {
        proComponentsCls,
        ipassCls,
        themeId: tokenContext.theme.id,
        layout: proLayoutTokenMerge,
      }),
      intl: intl || zhTWIntl,
    }
  }, [
    locale?.locale,
    proProvide,
    dark,
    tokenContext.token,
    tokenContext.theme.id,
    proComponentsCls,
    ipassCls,
    proLayoutTokenMerge,
  ])

  const finalToken = {
    ...(proProvideValue.token || {}),
    proComponentsCls,
  }

  const [token, nativeHashId] = useCacheToken<ProAliasToken>(
    tokenContext.theme as unknown as Theme<any, any>,
    [tokenContext.token, finalToken ?? {}],
    {
      salt,
      override: finalToken,
    },
  )

  const hashed = useMemo(() => {
    if (props.hashed === false) {
      return false
    }
    if (proProvide.hashed === false) return false
    return true
  }, [proProvide.hashed, props.hashed])

  const hashId = useMemo(() => {
    if (props.hashed === false) {
      return ''
    }
    if (proProvide.hashed === false) return ''
    //Fix issue with hashId code
    if (isNeedOpenHash() === false) {
      return ''
    } else {
      // 生產環境或其他環境
      return nativeHashId
    }
  }, [nativeHashId, proProvide.hashed, props.hashed])

  useEffect(() => {
    dayjs.locale(locale?.locale || 'zh-tw')
  }, [locale?.locale])

  const configProviderDom = useMemo(() => {
    const themeConfig = {
      ...restConfig.theme,
      hashId: hashId,
      hashed: hashed && isNeedOpenHash(),
    }

    return (
      <ConfigProvider {...restConfig} theme={{ ...themeConfig }}>
        <ProConfigContext.Provider
          value={{
            ...proProvideValue!,
            valueTypeMap: valueTypeMap || proProvideValue?.valueTypeMap,
            token,
            theme: tokenContext.theme as unknown as Theme<any, any>,
            hashed,
            hashId,
          }}
        >
          <>
            {children}
          </>
        </ProConfigContext.Provider>
      </ConfigProvider>
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    children,
    getPrefixCls,
    hashId,
    locale,
    proProvideValue,
    token,
  ])

  return configProviderDom
}

/**
 * 用於設定 Pro 的一些全局性的東西
 * @param props
 * @returns
 */
export const ProConfigProvider: React.FC<{
  children: React.ReactNode
  autoClearCache?: boolean
  token?: DeepPartial<ProAliasToken>
  needDeps?: boolean
  valueTypeMap?: Record<string, ProRenderFieldPropsType>
  dark?: boolean
  hashed?: boolean
  prefixCls?: string
}> = (props) => {
  const { needDeps, dark, token } = props
  const proProvide = useContext(ProConfigContext)
  const { locale, theme, ...rest } = useContext(
    ConfigProvider.ConfigContext,
  )

  // 是不是不需要渲染 provide
  const isNullProvide =
    needDeps &&
    proProvide.hashId !== undefined &&
    Object.keys(props).sort().join('-') === 'children-needDeps'

  if (isNullProvide) return <>{props.children}</>

  const mergeAlgorithm = () => {
    const isDark = dark ?? proProvide.dark
    if (isDark && !Array.isArray(theme?.algorithm)) {
      return [proTheme.darkAlgorithm, theme?.algorithm].filter(Boolean)
    }
    if (isDark && Array.isArray(theme?.algorithm)) {
      return [proTheme.darkAlgorithm, ...(theme?.algorithm || [])].filter(
        Boolean,
      )
    }
    return theme?.algorithm
  }
  // 自動注入 ipass customized lib 的設定
  const configProvider = {
    ...rest,
    locale: locale || zh_TW,
    theme: omitUndefined({
      ...theme,
      algorithm: mergeAlgorithm(),
    }),
  } as typeof theme

  return (
    <ConfigProvider {...configProvider}>
      <ConfigProviderContainer {...props} token={token} />
    </ConfigProvider>
  )
}

ProConfigContext.displayName = 'ProProvider'

export const ProProvider = ProConfigContext

export default ProConfigContext
