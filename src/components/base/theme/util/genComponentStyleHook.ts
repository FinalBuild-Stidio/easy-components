/* eslint-disable no-redeclare */
import { useContext, type ComponentType } from 'react'
import type { CSSInterpolation } from '@/components/StyleContext'
import useStyleRegister from '@/hooks/cssinjs'
import { warning } from 'rc-util'

import { ConfigContext } from '../../Config/ConfigContext'
import { genCommonStyle, genLinkStyle } from '../../style'
import type {
  ComponentTokenMap,
  GlobalToken,
  OverrideToken,
  UseComponentStyleResult,
} from '../interface'
import useToken from '../useToken'
import statisticToken, { merge as mergeToken } from './statistic'

export type OverrideTokenWithoutDerivative = ComponentTokenMap
export type OverrideComponent = keyof OverrideTokenWithoutDerivative
export type GlobalTokenWithComponent<ComponentName extends OverrideComponent> = GlobalToken &
  ComponentTokenMap[ComponentName]

type ComponentToken<ComponentName extends OverrideComponent> = Exclude<
  OverrideToken[ComponentName],
  undefined
>
type ComponentTokenKey<ComponentName extends OverrideComponent> =
  keyof ComponentToken<ComponentName>

export interface StyleInfo<ComponentName extends OverrideComponent> {
  hashId: string
  prefixCls: string
  rootPrefixCls: string
  overrideComponentToken: ComponentTokenMap[ComponentName]
}

export type TokenWithCommonCls<T> = T & {
  /** Wrap component class with `.` prefix */
  componentCls: string
  /** Origin prefix which do not have `.` prefix */
  prefixCls: string
  /** Wrap icon class with `.` prefix */
  iconCls: string
  /** Wrap ipass prefixCls class with `.` prefix */
  ipassCls: string
}
export type FullToken<ComponentName extends OverrideComponent> = TokenWithCommonCls<
  GlobalTokenWithComponent<ComponentName>
>

export type GenStyleFn<ComponentName extends OverrideComponent> = (
  token: FullToken<ComponentName>,
  info: StyleInfo<ComponentName>,
) => CSSInterpolation

export default function genComponentStyleHook<ComponentName extends OverrideComponent>(
  componentName: ComponentName | [ComponentName, string],
  styleFn: GenStyleFn<ComponentName>,
  getDefaultToken?:
    | null
    | OverrideTokenWithoutDerivative[ComponentName]
    | ((token: GlobalToken) => OverrideTokenWithoutDerivative[ComponentName]),
  options: {
    resetStyle?: boolean
    // Deprecated token key map [["oldTokenKey", "newTokenKey"], ["oldTokenKey", "newTokenKey"]]
    deprecatedTokens?: [ComponentTokenKey<ComponentName>, ComponentTokenKey<ComponentName>][]
    /**
     * Only use component style in client side. Ignore in SSR.
     */
    clientOnly?: boolean
    /**
     * Set order of component style. Default is -999.
     */
    order?: number
  } = {},
) {
  const cells = (Array.isArray(componentName) ? componentName : [componentName, componentName]) as [
    ComponentName,
    string,
  ]

  const [component] = cells
  const concatComponent = cells.join('-')

  return (prefixCls: string): UseComponentStyleResult => {
    const [theme, token, hashId] = useToken()
    const { getPrefixCls, csp } = useContext(ConfigContext)
    const rootPrefixCls = getPrefixCls()

    // Shared config
    const sharedConfig: Omit<Parameters<typeof useStyleRegister>[0], 'path'> = {
      theme: theme as any,
      token,
      hashId,
      nonce: () => csp?.nonce!,
      clientOnly: options.clientOnly,

      // ipass customized lib is always at top of styles
      order: options.order || -999,
    }

    // Generate style for all a tags in ipass customized lib component.
    useStyleRegister(
      { ...sharedConfig, clientOnly: false, path: ['Shared', rootPrefixCls] },
      () => [
        {
          // Link
          '&': genLinkStyle(token),
        },
      ],
    )

    return [
      // @ts-ignore
      useStyleRegister(
        { ...sharedConfig, path: [concatComponent, prefixCls] },
        () => {
          const { token: proxyToken, flush } = statisticToken(token)

          const customComponentToken = { ...(token[component] as ComponentToken<ComponentName>) }
          if (options.deprecatedTokens) {
            const { deprecatedTokens } = options
            deprecatedTokens.forEach(([oldTokenKey, newTokenKey]) => {
              if (process.env.NODE_ENV !== 'production') {
                warning(
                  !customComponentToken?.[oldTokenKey],
                  `The token '${String(oldTokenKey)}' of ${component} had deprecated, use '${String(
                    newTokenKey,
                  )}' instead.`,
                )
              }

              // Should wrap with `if` clause, or there will be `undefined` in object.
              if (customComponentToken?.[oldTokenKey] || customComponentToken?.[newTokenKey]) {
                customComponentToken[newTokenKey] ??= customComponentToken?.[oldTokenKey]
              }
            })
          }
          const defaultComponentToken =
            typeof getDefaultToken === 'function'
              ? getDefaultToken(mergeToken(proxyToken, customComponentToken ?? {}))
              : getDefaultToken

          const mergedComponentToken = { ...defaultComponentToken, ...customComponentToken }

          const componentCls = `.${prefixCls}`
          const mergedToken = mergeToken<
            TokenWithCommonCls<GlobalTokenWithComponent<OverrideComponent>>
          >(
            proxyToken,
            {
              componentCls,
              prefixCls,
              ipassCls: `.${rootPrefixCls}`,
            },
            mergedComponentToken,
          )

          const styleInterpolation = styleFn(mergedToken as unknown as FullToken<ComponentName>, {
            hashId,
            prefixCls,
            rootPrefixCls,
            overrideComponentToken: customComponentToken as any,
          })
          flush(component, mergedComponentToken)
          return [
            options.resetStyle === false ? null : genCommonStyle(token, prefixCls),
            styleInterpolation,
          ]
        },
      ),
      hashId,
    ]
  }
}

export interface SubStyleComponentProps {
  prefixCls: string
}

// Get from second argument
type RestParameters<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never

export const genSubStyleComponent: <ComponentName extends OverrideComponent>(
  componentName: [ComponentName, string],
  ...args: RestParameters<Parameters<typeof genComponentStyleHook<ComponentName>>>
) => ComponentType<SubStyleComponentProps> = (componentName, styleFn, getDefaultToken, options) => {
  const useStyle = genComponentStyleHook(componentName, styleFn, getDefaultToken, {
    resetStyle: false,

    // Sub Style should default after root one
    order: -998,
    ...options,
  })

  const StyledComponent: ComponentType<SubStyleComponentProps> = ({
    prefixCls,
  }: SubStyleComponentProps) => {
    useStyle(prefixCls)
    return null
  }

  if (process.env.NODE_ENV !== 'production') {
    StyledComponent.displayName = `SubStyle_${Array.isArray(componentName) ? componentName.join('.') : componentName
      }`
  }

  return StyledComponent
}
