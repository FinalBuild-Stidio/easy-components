import type { GenerateStyle, ProAliasToken } from '@/providers'
import { useStyle as useIpassStyle } from '@/providers'
export interface stylishToken extends ProAliasToken {
  componentCls: string
  proLayoutCollapsedWidth: number
}

export function useStylish(
  prefixCls: string,
  {
    stylish,
    proLayoutCollapsedWidth,
  }: {
    stylish?: GenerateStyle<stylishToken>
    proLayoutCollapsedWidth: number
  },
) {
  return useIpassStyle('ProLayoutHeaderStylish', (token) => {
    const stylishToken: stylishToken = {
      ...token,
      componentCls: `.${prefixCls}`,
      proLayoutCollapsedWidth,
    }
    if (!stylish) return []

    return [
      {
        [`div${token.proComponentsCls}-layout`]: {
          [`${stylishToken.componentCls}`]: stylish?.(stylishToken),
        },
      },
    ]
  })
}
