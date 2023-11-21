import type { GenerateStyle, ProAliasToken } from '@/providers'
import { useStyle as useIpassStyle } from '@/providers'

export interface stylishToken extends ProAliasToken {
  componentCls: string
}

export function useStylish(
  prefixCls: string,
  {
    stylish,
  }: {
    stylish?: GenerateStyle<stylishToken>
  },
) {
  return useIpassStyle('ProLayoutFooterToolbarStylish', (token) => {
    const stylishToken: stylishToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    }
    if (!stylish) return []

    return [
      {
        [`${stylishToken.componentCls}`]: stylish?.(stylishToken),
      },
    ]
  })
}
