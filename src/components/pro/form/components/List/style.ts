import type { GenerateStyle, ProAliasToken } from '@/providers'
import { useStyle as useIpassStyle } from '@/providers'

export interface ProToken extends ProAliasToken {
  componentCls: string
}

const genProStyle: GenerateStyle<ProToken> = (token) => {
  return {
    [`${token.ipassCls}-pro`]: {
      [`${token.ipassCls}-form:not(${token.ipassCls}-form-horizontal)`]: {
        [token.componentCls]: {
          [`&-item:not(${token.componentCls}-item-show-label)`]: {
            [`${token.ipassCls}-form-item-label`]: {
              display: 'none',
            },
          },
        },
      },
    },
    [token.componentCls]: {
      maxWidth: '100%',
      '&-item': {
        '&&-show-label': {
          [`${token.ipassCls}-form-item-label`]: {
            display: 'inline-block',
          },
        },
        '&&-default:first-child': {
          'div:first-of-type': {
            [`${token.ipassCls}-form-item`]: {
              [`${token.ipassCls}-form-item-label`]: {
                display: 'inline-block',
              },
            },
          },
        },
        '&&-default:not(:first-child)': {
          'div:first-of-type': {
            [`${token.ipassCls}-form-item`]: {
              [`${token.ipassCls}-form-item-label`]: {
                display: 'none',
              },
            },
          },
        },
      },
      '&-action': {
        display: 'flex',
        height: '32px',
        marginBlockEnd: token.marginLG,
        lineHeight: '32px',
      },
      '&-action-icon': {
        marginInlineStart: 8,
        cursor: 'pointer',
        transition: 'color 0.3s ease-in-out',
        '&:hover': {
          color: token.colorPrimaryTextHover,
        },
      },
      [`${token.proComponentsCls}-card ${token.proComponentsCls}-card-extra`]: {
        [token.componentCls]: {
          '&-action': {
            marginBlockEnd: 0,
          },
        },
      },
      '&-creator-button-top': {
        marginBlockEnd: 24,
      },
    },
  }
}

export function useStyle(prefixCls: string) {
  return useIpassStyle('ProFormList', (token) => {
    const proToken: ProToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    }

    return [genProStyle(proToken)]
  })
}
