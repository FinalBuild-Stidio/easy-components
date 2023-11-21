import type { GenerateStyle, ProAliasToken } from '@/providers'
import { useStyle as useIpassStyle } from '@/providers'

export interface ProToken extends ProAliasToken {
  componentCls: string
}

const genProStyle: GenerateStyle<ProToken> = (token) => {
  return {
    [token.componentCls]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginBlock: token.marginLG,
      marginInline: 0,
      color: token.colorText,
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '38px',
    },
  }
}

export function useStyle(prefixCls: string) {
  return useIpassStyle('ProCardOperation', (token) => {
    const proToken: ProToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    }

    return [genProStyle(proToken)]
  })
}
