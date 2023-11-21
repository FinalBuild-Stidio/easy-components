import type { CSSObject } from '@/StyleContext'
import type { GenerateStyle } from '../../theme/internal'
import type { TableToken } from './index'

const genSizeStyle: GenerateStyle<TableToken, CSSObject> = (token) => {
  const { componentCls } = token
  const getSizeStyle = (
    size: 'small' | 'medium',
    paddingVertical: number,
    paddingHorizontal: number,
    fontSize: number,
  ) => ({
    [`${componentCls}${componentCls}-${size}`]: {
      fontSize,
      [`
        ${componentCls}-title,
        ${componentCls}-footer,
        ${componentCls}-cell,
        ${componentCls}-thead > tr > th,
        ${componentCls}-tbody > tr > th,
        ${componentCls}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: {
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
      },

      [`${componentCls}-filter-trigger`]: {
        marginInlineEnd: `-${paddingHorizontal / 2}px`,
      },

      [`${componentCls}-expanded-row-fixed`]: {
        margin: `-${paddingVertical}px -${paddingHorizontal}px`,
      },

      [`${componentCls}-tbody`]: {
        // ========================= Nest Table ===========================
        [`${componentCls}-wrapper:only-child ${componentCls}`]: {
          marginBlock: `-${paddingVertical}px`,
          marginInline: `${token.tableExpandColumnWidth - paddingHorizontal
            }px -${paddingHorizontal}px`,
        },
      }, [`${componentCls}-selection-extra`]: {
        paddingInlineStart: `${paddingHorizontal / 4}px`,
      },
    },
  })
  return {
    [`${componentCls}-wrapper`]: {
      ...getSizeStyle(
        'medium',
        token.tablePaddingVerticalMudium,
        token.tablePaddingHorizontalMudium,
        token.tableFontSizeMudium,
      ),
      ...getSizeStyle(
        'small',
        token.tablePaddingVerticalSmall,
        token.tablePaddingHorizontalSmall,
        token.tableFontSizeSmall,
      ),
    },
  }
}

export default genSizeStyle
