import type { CSSObject } from '@/StyleContext'
import type { GenerateStyle } from '../../theme/internal'
import type { TableToken } from './index'

const genPaginationStyle: GenerateStyle<TableToken, CSSObject> = (token) => {
  const { componentCls, ipassCls } = token
  return {
    [`${componentCls}-wrapper`]: {
      // ========================== Pagination ==========================
      [`${componentCls}-pagination${ipassCls}-pagination`]: {
        margin: `${token.margin}px 0`,
      },

      [`${componentCls}-pagination`]: {
        display: 'flex',
        flexWrap: 'wrap',
        rowGap: token.paddingXS,

        '> *': {
          flex: 'none',
        },

        '&-left': {
          justifyContent: 'flex-start',
        },

        '&-center': {
          justifyContent: 'center',
        },

        '&-right': {
          justifyContent: 'flex-end',
        },
      },
    },
  }
}

export default genPaginationStyle
