import type { GenerateStyle, ProAliasToken } from '@/providers'
import { useStyle as useIpassStyle } from '@/providers'

export interface ProListToken extends ProAliasToken {
  componentCls: string
}

const genProListStyle: GenerateStyle<ProListToken> = (token) => {
  return {
    [token.componentCls]: {
      '&-icon': {
        marginInlineEnd: 8,
        color: token.colorTextSecondary,
        cursor: 'grab !important',
        padding: 4,
        fontSize: 12,
        borderRadius: token.borderRadius,
        '&:hover': {
          color: token.colorText,
          backgroundColor: token.colorInfoBg,
        },
      },
    },
  }
}

export function useStyle(prefixCls: string) {
  return useIpassStyle('DragSortTable', (token) => {
    const proListToken: ProListToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    }
    return [genProListStyle(proListToken)]
  })
}
