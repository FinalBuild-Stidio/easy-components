import type { CSSObject } from '@/components/StyleContext'
import type { GenerateStyle } from '../../theme/internal'
import type { TableToken } from './index'

const genRadiusStyle: GenerateStyle<TableToken, CSSObject> = (token) => {
  const { componentCls, tableRadius } = token
  return {
    [`${componentCls}-wrapper`]: {
      [componentCls]: {
        [`${componentCls}-title, ${componentCls}-header`]: {
          borderRadius: `${tableRadius}px ${tableRadius}px 0 0`,
        },

        [`${componentCls}-title + ${componentCls}-container`]: {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0, [`${componentCls}-header, table`]: {
            borderRadius: 0,
          },

          'table > thead > tr:first-child': {
            'th:first-child, th:last-child, td:first-child, td:last-child': {
              borderRadius: 0,
            },
          },
        },

        '&-container': {
          borderStartStartRadius: tableRadius,
          borderStartEndRadius: tableRadius,

          'table > thead > tr:first-child': {
            '> *:first-child': {
              borderStartStartRadius: tableRadius,
            },

            '> *:last-child': {
              borderStartEndRadius: tableRadius,
            },
          },
        },

        '&-footer': {
          borderRadius: `0 0 ${tableRadius}px ${tableRadius}px`,
        },
      },
    },
  }
}

export default genRadiusStyle
