import type { GenerateStyle, ProAliasToken } from '@/providers'
import { useStyle as useIpassStyle } from '@/providers'
export interface SiderMenuToken extends ProAliasToken {
  componentCls: string
  proLayoutCollapsedWidth: number
}

export function useStylish(
  prefixCls: string,
  {
    stylish,
    proLayoutCollapsedWidth,
  }: {
    stylish?: GenerateStyle<SiderMenuToken>
    proLayoutCollapsedWidth: number
  },
) {
  return useIpassStyle('ProLayoutSiderMenuStylish', (token) => {
    const siderMenuToken: SiderMenuToken = {
      ...token,
      componentCls: `.${prefixCls}`,
      proLayoutCollapsedWidth,
    }
    if (!stylish) return []
    return [
      {
        [`div${token.proComponentsCls}-layout`]: {
          [`${siderMenuToken.componentCls}`]: stylish?.(siderMenuToken),
        },
      },
    ]
  })
}
