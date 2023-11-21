import type { GenerateStyle, ProAliasToken } from '@/providers'
import { useStyle as useIpassStyle } from '@/providers'

export interface ProListToken extends ProAliasToken {
  componentCls: string
}

const genProStyle: GenerateStyle<ProListToken> = (token) => {
  return {
    [token.componentCls]: {
      display: 'flex',
      fontSize: token.fontSize,
      '& + &': {
        marginBlockStart: 4,
      },
      '&-tip': {
        marginInlineStart: 4,
      },
      '&-wrapper': {
        display: 'flex',
        width: '100%',
        [`${token.componentCls}-status`]: {
          width: '14px',
        },
      },
      '&-icon': {
        marginInlineEnd: 16,
      },
      '&-trend-icon': {
        width: 0,
        height: 0,
        borderInlineEnd: '3.5px solid transparent',
        borderBlockEnd: '9px solid #000',
        borderInlineStart: '3.5px solid transparent',
        '&-up': { transform: 'rotate(0deg)' },
        '&-down': { transform: 'rotate(180deg)' },
      },
      '&-content': {
        width: '100%',
        [`${token.ipassCls}-statistic-content`]: {
          '&-value-int': {
            fontSize: token.fontSizeHeading3,
          },
        },
      },
      '&-description': {
        width: '100%',
      },
      [`${token.ipassCls}-statistic-title`]: {
        color: token.colorText,
      },
      '&-trend-up': {
        [`${token.ipassCls}-statistic-content`]: {
          color: '#f5222d',
          [`${token.componentCls}-trend-icon`]: {
            borderBlockEndColor: '#f5222d',
          },
        },
      },
      '&-trend-down': {
        [`${token.ipassCls}-statistic-content`]: {
          color: '#389e0d',
          [`${token.componentCls}-trend-icon`]: {
            borderBlockEndColor: '#52c41a',
          },
        },
      },
      '& &-layout-horizontal': {
        display: 'flex',
        justifyContent: 'space-between',
        [`${token.ipassCls}-statistic-title`]: {
          marginBlockEnd: 0,
        },
        [`${token.ipassCls}-statistic-content-value`]: {
          fontWeight: 500,
        },
        [`${token.ipassCls}-statistic-title,${token.ipassCls}-statistic-content,${token.ipassCls}-statistic-content-suffix,${token.ipassCls}-statistic-content-prefix,${token.ipassCls}-statistic-content-value-decimal`]:
        {
          fontSize: token.fontSize,
        },
      },
      '& &-layout-inline': {
        display: 'inline-flex',
        color: token.colorTextSecondary,
        [`${token.ipassCls}-statistic-title`]: {
          marginInlineEnd: '6px',
          marginBlockEnd: 0,
        },
        [`${token.ipassCls}-statistic-content`]: {
          color: token.colorTextSecondary,
        },
        [`${token.ipassCls}-statistic-title,${token.ipassCls}-statistic-content,${token.ipassCls}-statistic-content-suffix,${token.ipassCls}-statistic-content-prefix,${token.ipassCls}-statistic-content-value-decimal`]:
        {
          fontSize: token.fontSizeSM,
        },
      },
    },
  }
}

export function useStyle(prefixCls: string) {
  return useIpassStyle('Statistic', (token) => {
    const proListToken: ProListToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    }

    return [genProStyle(proListToken)]
  })
}
