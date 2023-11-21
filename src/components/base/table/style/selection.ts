import type { CSSObject } from '@/components/StyleContext'

import type { GenerateStyle } from '../../theme/internal'
import type { TableToken } from './index'

const genSelectionStyle: GenerateStyle<TableToken, CSSObject> = (token) => {
  const {
    componentCls,
    ipassCls,
    iconCls,
    fontSizeIcon,
    padding,
    paddingXS,
    tableHeaderIconColor,
    tableHeaderIconColorHover,
    tableSelectionColumnWidth,
    tableSelectedRowBg,
    tableSelectedRowHoverBg,
    tableRowHoverBg,
  } = token

  return {
    [`${componentCls}-wrapper`]: {
      // ========================== Selections ==========================
      [`${componentCls}-selection-col`]: {
        width: tableSelectionColumnWidth,
        [`&${componentCls}-selection-col-with-dropdown`]: {
          width: tableSelectionColumnWidth + fontSizeIcon + padding / 4,
        },
      },

      [`${componentCls}-bordered ${componentCls}-selection-col`]: {
        width: tableSelectionColumnWidth + paddingXS * 2,
        [`&${componentCls}-selection-col-with-dropdown`]: {
          width: tableSelectionColumnWidth + fontSizeIcon + padding / 4 + paddingXS * 2,
        },
      },

      [`
        table tr th${componentCls}-selection-column,
        table tr td${componentCls}-selection-column,
        ${componentCls}-selection-column
      `]: {
        paddingInlineEnd: token.paddingXS,
        paddingInlineStart: token.paddingXS,
        textAlign: 'center',

        [`${ipassCls}-radio-wrapper`]: {
          marginInlineEnd: 0,
        },
      },

      [`table tr th${componentCls}-selection-column${componentCls}-cell-fix-left`]: {
        zIndex: token.zIndexTableFixed + 1,
      },

      [`table tr th${componentCls}-selection-column::after`]: {
        backgroundColor: 'transparent !important',
      },

      [`${componentCls}-selection`]: {
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column',
      },

      [`${componentCls}-selection-extra`]: {
        position: 'absolute',
        top: 0,
        zIndex: 1,
        cursor: 'pointer',
        transition: `all ${token.motionDurationSlow}`,
        marginInlineStart: '100%',
        paddingInlineStart: `${token.tablePaddingHorizontal / 4}px`,

        [iconCls]: {
          color: tableHeaderIconColor,
          fontSize: fontSizeIcon,
          verticalAlign: 'baseline',

          '&:hover': {
            color: tableHeaderIconColorHover,
          },
        },
      },

      // ============================= Rows =============================
      [`${componentCls}-tbody`]: {
        [`${componentCls}-row`]: {
          [`&${componentCls}-row-selected`]: {
            [`> ${componentCls}-cell`]: {
              background: tableSelectedRowBg,

              '&-row-hover': {
                background: tableSelectedRowHoverBg,
              },
            },
          },

          [`> ${componentCls}-cell-row-hover`]: {
            background: tableRowHoverBg,
          },
        },
      },
    },
  }
}

export default genSelectionStyle
