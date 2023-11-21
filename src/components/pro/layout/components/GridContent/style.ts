import type { GenerateStyle, ProAliasToken } from '@/providers'
import { useStyle as useIpassStyle } from '@/providers'

export interface GridContentToken extends ProAliasToken {
  componentCls: string
}

const genGridContentStyle: GenerateStyle<GridContentToken> = (token) => {
  return {
    [token.componentCls]: {
      width: '100%',
      '&-wide': {
        maxWidth: 1152,
        margin: '0 auto',
      },
    },
  }
}

export function useStyle(prefixCls: string) {
  return useIpassStyle('ProLayoutGridContent', (token) => {
    const GridContentToken: GridContentToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    }

    return [genGridContentStyle(GridContentToken)]
  })
}
