import type { GenerateStyle } from '@/components/base/theme/internal'
import type { ProAliasToken } from '@/providers'
import { useStyle as useIpassStyle } from '@/providers'

export interface ProToken extends ProAliasToken {
  componentCls: string
}

const genProStyle: GenerateStyle<ProToken> = (token) => {
  return {
    [token.componentCls]: {
      '&-title': { marginBlockEnd: token.marginXL, fontWeight: 'bold' },
      '&-container': {
        flexWrap: 'wrap',
        maxWidth: '100%',
        [`> div${token.ipassCls}-space-item`]: {
          maxWidth: '100%',
        },
      },
      '&-twoLine': {
        display: 'block',
        width: '100%',
        [`${token.componentCls}-title`]: { width: '100%', margin: '8px 0' },
        [`${token.componentCls}-container`]: { paddingInlineStart: 16 },
        [`${token.ipassCls}-space-item,${token.ipassCls}-form-item`]: {
          width: '100%',
        },
        [`${token.ipassCls}-form-item`]: {
          '&-control': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            '&-input': {
              alignItems: 'center',
              justifyContent: 'flex-end',
              '&-content': {
                flex: 'none',
              },
            },
          },
        },
      },
    },
  }
}

export function useStyle(prefixCls: string) {
  // @ts-ignore
  return useIpassStyle('ProFormGroup', (token) => {
    const proToken: ProToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    }

    return [genProStyle(proToken)]
  })
}
