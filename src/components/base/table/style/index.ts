import type { CSSObject } from '@/components/StyleContext'
import { TinyColor } from '@ctrl/tinycolor'

import { clearFix, resetComponent } from '../../style'
import type { FullToken, GenerateStyle } from '../../theme/internal'
import { genComponentStyleHook, mergeToken } from '../../theme/internal'
import genBorderedStyle from './bordered'
import genEllipsisStyle from './ellipsis'
import genEmptyStyle from './empty'
import genExpandStyle from './expand'
import genFilterStyle from './filter'
import genFixedStyle from './fixed'
import genPaginationStyle from './pagination'
import genRadiusStyle from './radius'
import genSelectionStyle from './selection'
import genSizeStyle from './size'
import genSorterStyle from './sorter'
import genStickyStyle from './sticky'
import genSummaryStyle from './summary'
import genVirtualStyle from './virtual'

export interface ComponentToken {
  /**
   * @desc 表頭背景
   * @descEN Background of table header
   */
  headerBg: string
  /**
   * @desc 表頭文字顏色
   * @descEN Color of table header text
   */
  headerColor: string
  /**
   * @desc 表頭排序啟用態背景色
   * @descEN Background color of table header when sorted
   */
  headerSortActiveBg: string
  /**
   * @desc 表頭排序啟用態懸浮背景色
   * @descEN Background color of table header when sorted and hovered
   */
  headerSortHoverBg: string
  /**
   * @desc 表格排序列背景色
   * @descEN Background color of table sorted column
   */
  bodySortBg: string
  /**
   * @desc 表格行懸浮背景色
   * @descEN Background color of table hovered row
   */
  rowHoverBg: string
  /**
   * @desc 表格行選中背景色
   * @descEN Background color of table selected row
   */
  rowSelectedBg: string
  /**
   * @desc 表格行選中懸浮背景色
   * @descEN Background color of table selected row when hovered
   */
  rowSelectedHoverBg: string
  /**
   * @desc 表格行展開背景色
   * @descEN Background color of table expanded row
   */
  rowExpandedBg: string
  /**
   * @desc 單元格縱向內間距
   * @descEN Vertical padding of table cell
   */
  cellPaddingBlock: number
  /**
   * @desc 單元格橫向內間距（預設大尺寸）
   * @descEN Horizontal padding of table cell (large size by default)
   */
  cellPaddingInline: number
  /**
   * @desc 單元格縱向內間距（中等尺寸）
   * @descEN Vertical padding of table cell (middle size)
   */
  cellPaddingBlockMD: number
  /**
   * @desc 單元格橫向內間距（中等尺寸）
   * @descEN Horizontal padding of table cell (middle size)
   */
  cellPaddingInlineMD: number
  /**
   * @desc 單元格縱向內間距（小尺寸）
   * @descEN Vertical padding of table cell (small size)
   */
  cellPaddingBlockSM: number
  /**
   * @desc 單元格橫向內間距（小尺寸）
   * @descEN Horizontal padding of table cell (small size)
   */
  cellPaddingInlineSM: number
  /**
   * @desc 表格邊框/分割線顏色
   * @descEN Border color of table
   */
  borderColor: string
  /**
   * @desc 表頭圓角
   * @descEN Border radius of table header
   */
  headerBorderRadius: number
  /**
   * @desc 表格底部背景色
   * @descEN Background of footer
   */
  footerBg: string
  /**
   * @desc 表格底部文字顏色
   * @descEN Color of footer text
   */
  footerColor: string
  /**
   * @desc 單元格文字大小（預設大尺寸）
   * @descEN Font size of table cell (large size by default)
   */
  cellFontSize: number
  /**
   * @desc 單元格文字大小（中等尺寸）
   * @descEN Font size of table cell (middle size)
   */
  cellFontSizeMD: number
  /**
   * @desc 單元格文字大小（小尺寸）
   * @descEN Font size of table cell (small size)
   */
  cellFontSizeSM: number
  /**
   * @desc 表頭分割線顏色
   * @descEN Split border color of table header
   */
  headerSplitColor: string
  /**
   * @desc 固定表頭排序啟用態背景色
   * @descEN Background color of fixed table header when sorted
   */
  fixedHeaderSortActiveBg: string
  /**
   * @desc 表頭過濾按鈕懸浮背景色
   * @descEN Background color of table header filter button when hovered
   */
  headerFilterHoverBg: string
  /**
   * @desc 過濾下拉菜單選項背景
   * @descEN Background of filter dropdown menu item
   */
  filterDropdownMenuBg: string
  /**
   * @desc 過濾下拉菜單顏色
   * @descEN Color of filter dropdown
   */
  filterDropdownBg: string
  /**
   * @desc 展開按鈕背景色
   * @descEN Background of expand button
   */
  expandIconBg: string
  /**
   * @desc 選擇列寬度
   * @descEN Width of selection column
   */
  selectionColumnWidth: number
  /**
   * @desc Sticky 模式下滾動條背景色
   * @descEN Background of sticky scrollbar
   */
  stickyScrollBarBg: string
  /**
   * @desc Sticky 模式下滾動條圓角
   * @descEN Border radius of sticky scrollbar
   */
  stickyScrollBarBorderRadius: number
}

export interface TableToken extends FullToken<'Table'> {
  tableFontSize: number
  tableBg: string
  tableRadius: number
  tablePaddingHorizontal: number
  tablePaddingVertical: number
  tablePaddingHorizontalMudium: number
  tablePaddingVerticalMudium: number
  tablePaddingHorizontalSmall: number
  tablePaddingVerticalSmall: number
  tableBorderColor: string
  tableHeaderTextColor: string
  tableHeaderBg: string
  tableFooterTextColor: string
  tableFooterBg: string
  tableHeaderCellSplitColor: string
  tableHeaderSortBg: string
  tableHeaderSortHoverBg: string
  tableHeaderIconColor: string
  tableHeaderIconColorHover: string
  tableBodySortBg: string
  tableFixedHeaderSortActiveBg: string
  tableHeaderFilterActiveBg: string
  tableFilterDropdownBg: string
  tableFilterDropdownHeight: number
  tableRowHoverBg: string
  tableSelectedRowBg: string
  tableSelectedRowHoverBg: string

  tableFontSizeMudium: number
  tableFontSizeSmall: number
  tableSelectionColumnWidth: number
  tableExpandIconBg: string
  tableExpandColumnWidth: number
  tableExpandedRowBg: string
  tableFilterDropdownWidth: number
  tableFilterDropdownSearchWidth: number

  // Z-Index
  zIndexTableFixed: number
  zIndexTableSticky: number

  // Virtual Scroll Bar
  tableScrollThumbSize: number
  tableScrollThumbBg: string
  tableScrollThumbBgHover: string
  tableScrollBg: string
}

const genTableStyle: GenerateStyle<TableToken, CSSObject> = (token) => {
  const {
    componentCls,
    fontWeightStrong,
    tablePaddingVertical,
    tablePaddingHorizontal,
    lineWidth,
    lineType,
    tableBorderColor,
    tableFontSize,
    tableBg,
    tableRadius,
    tableHeaderTextColor,
    motionDurationMid,
    tableHeaderBg,
    tableHeaderCellSplitColor,
    tableFooterTextColor,
    tableFooterBg,
  } = token
  const tableBorder = `${lineWidth}px ${lineType} ${tableBorderColor}`
  return {
    [`${componentCls}-wrapper`]: {
      clear: 'both',
      maxWidth: '100%',
      ...clearFix(),

      [componentCls]: {
        ...resetComponent(token),
        fontSize: tableFontSize,
        background: tableBg,
        borderRadius: `${tableRadius}px ${tableRadius}px 0 0`,
      }, table: {
        width: '100%',
        textAlign: 'start',
        borderRadius: `${tableRadius}px ${tableRadius}px 0 0`,
        borderCollapse: 'separate',
        borderSpacing: 0,
      },

      // ============================= Cell ==============================
      [`
          ${componentCls}-cell,
          ${componentCls}-thead > tr > th,
          ${componentCls}-tbody > tr > th,
          ${componentCls}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
        position: 'relative',
        padding: `${tablePaddingVertical}px ${tablePaddingHorizontal}px`,
        overflowWrap: 'break-word',
      },

      // ============================ Title =============================
      [`${componentCls}-title`]: {
        padding: `${tablePaddingVertical}px ${tablePaddingHorizontal}px`,
      },

      // ============================ Header ============================
      [`${componentCls}-thead`]: {
        [`
          > tr > th,
          > tr > td
        `]: {
          position: 'relative',
          color: tableHeaderTextColor,
          fontWeight: fontWeightStrong,
          textAlign: 'start',
          background: tableHeaderBg,
          borderBottom: tableBorder,
          transition: `background ${motionDurationMid} ease`,

          "&[colspan]:not([colspan='1'])": {
            textAlign: 'center',
          },

          [`&:not(:last-child):not(${componentCls}-selection-column):not(${componentCls}-row-expand-icon-cell):not([colspan])::before`]:
          {
            position: 'absolute',
            top: '50%',
            insetInlineEnd: 0,
            width: 1,
            height: '1.6em',
            backgroundColor: tableHeaderCellSplitColor,
            transform: 'translateY(-50%)',
            transition: `background-color ${motionDurationMid}`,
            content: '""',
          },
        },

        '> tr:not(:last-child) > th[colspan]': {
          borderBottom: 0,
        },
      },

      // ============================ Body ============================
      [`${componentCls}-tbody`]: {
        '> tr': {
          [`> th, > td`]: {
            transition: `background ${motionDurationMid}, border-color ${motionDurationMid}`,
            borderBottom: tableBorder,

            // ========================= Nest Table ===========================
            [`
              > ${componentCls}-wrapper:only-child,
              > ${componentCls}-expanded-row-fixed > ${componentCls}-wrapper:only-child
            `]: {
              [componentCls]: {
                marginBlock: `-${tablePaddingVertical}px`,
                marginInline: `${token.tableExpandColumnWidth - tablePaddingHorizontal
                  }px -${tablePaddingHorizontal}px`,
                [`${componentCls}-tbody > tr:last-child > td`]: {
                  borderBottom: 0,
                  '&:first-child, &:last-child': {
                    borderRadius: 0,
                  },
                },
              },
            },
          },

          '> th': {
            position: 'relative',
            color: tableHeaderTextColor,
            fontWeight: fontWeightStrong,
            textAlign: 'start',
            background: tableHeaderBg,
            borderBottom: tableBorder,
            transition: `background ${motionDurationMid} ease`,
          },
        },
      },

      // ============================ Footer ============================
      [`${componentCls}-footer`]: {
        padding: `${tablePaddingVertical}px ${tablePaddingHorizontal}px`,
        color: tableFooterTextColor,
        background: tableFooterBg,
      },
    },
  }
}

// ============================== Export ==============================
export default genComponentStyleHook(
  'Table',
  (token) => {
    const {
      colorTextHeading,
      colorSplit,
      colorIcon,
      colorIconHover,
      opacityLoading,
      colorBgContainer,
      controlInteractiveSize: checkboxSize,
      headerBg,
      headerColor,
      headerSortActiveBg,
      headerSortHoverBg,
      bodySortBg,
      rowHoverBg,
      rowSelectedBg,
      rowSelectedHoverBg,
      rowExpandedBg,
      cellPaddingBlock,
      cellPaddingInline,
      cellPaddingBlockMD,
      cellPaddingInlineMD,
      cellPaddingBlockSM,
      cellPaddingInlineSM,
      borderColor,
      footerBg,
      footerColor,
      headerBorderRadius,
      cellFontSize,
      cellFontSizeMD,
      cellFontSizeSM,
      headerSplitColor,
      fixedHeaderSortActiveBg,
      headerFilterHoverBg,
      filterDropdownBg,
      expandIconBg,
      selectionColumnWidth,
      stickyScrollBarBg,
    } = token

    const baseColorAction = new TinyColor(colorIcon)
    const baseColorActionHover = new TinyColor(colorIconHover)

    const zIndexTableFixed: number = 2

    const tableToken = mergeToken<TableToken>(token, {
      tableFontSize: cellFontSize,
      tableBg: colorBgContainer,
      tableRadius: headerBorderRadius,

      tablePaddingVertical: cellPaddingBlock,
      tablePaddingHorizontal: cellPaddingInline,
      tablePaddingVerticalMudium: cellPaddingBlockMD,
      tablePaddingHorizontalMudium: cellPaddingInlineMD,
      tablePaddingVerticalSmall: cellPaddingBlockSM,
      tablePaddingHorizontalSmall: cellPaddingInlineSM,
      tableBorderColor: borderColor,
      tableHeaderTextColor: headerColor,
      tableHeaderBg: headerBg,
      tableFooterTextColor: footerColor,
      tableFooterBg: footerBg,
      tableHeaderCellSplitColor: headerSplitColor,
      tableHeaderSortBg: headerSortActiveBg,
      tableHeaderSortHoverBg: headerSortHoverBg,
      tableHeaderIconColor: baseColorAction
        .clone()
        .setAlpha(baseColorAction.getAlpha() * opacityLoading)
        .toRgbString(),
      tableHeaderIconColorHover: baseColorActionHover
        .clone()
        .setAlpha(baseColorActionHover.getAlpha() * opacityLoading)
        .toRgbString(),
      tableBodySortBg: bodySortBg,
      tableFixedHeaderSortActiveBg: fixedHeaderSortActiveBg,
      tableHeaderFilterActiveBg: headerFilterHoverBg,
      tableFilterDropdownBg: filterDropdownBg,
      tableRowHoverBg: rowHoverBg,
      tableSelectedRowBg: rowSelectedBg,
      tableSelectedRowHoverBg: rowSelectedHoverBg,
      zIndexTableFixed,
      zIndexTableSticky: zIndexTableFixed + 1,
      tableFontSizeMudium: cellFontSizeMD,
      tableFontSizeSmall: cellFontSizeSM,
      tableSelectionColumnWidth: selectionColumnWidth,
      tableExpandIconBg: expandIconBg,
      tableExpandColumnWidth: checkboxSize + 2 * token.padding,
      tableExpandedRowBg: rowExpandedBg,

      // Dropdown
      tableFilterDropdownWidth: 120,
      tableFilterDropdownHeight: 264,
      tableFilterDropdownSearchWidth: 140,

      // Virtual Scroll Bar
      tableScrollThumbSize: 8, // Mac scroll bar size
      tableScrollThumbBg: stickyScrollBarBg,
      tableScrollThumbBgHover: colorTextHeading,
      tableScrollBg: colorSplit,
    })

    return [
      genTableStyle(tableToken),
      genPaginationStyle(tableToken),
      genSummaryStyle(tableToken),
      genSorterStyle(tableToken),
      genFilterStyle(tableToken),
      genBorderedStyle(tableToken),
      genRadiusStyle(tableToken),
      genExpandStyle(tableToken),
      genSummaryStyle(tableToken),
      genEmptyStyle(tableToken),
      genSelectionStyle(tableToken),
      genFixedStyle(tableToken),
      genStickyStyle(tableToken),
      genEllipsisStyle(tableToken),
      genSizeStyle(tableToken),
      genVirtualStyle(tableToken),
    ]
  },
  (token) => {
    const {
      colorFillAlter,
      colorBgContainer,
      colorTextHeading,
      colorFillSecondary,
      colorFillContent,
      controlItemBgActive,
      controlItemBgActiveHover,
      padding,
      paddingSM,
      paddingXS,
      colorBorderSecondary,
      borderRadiusLG,
      fontSize,
      controlHeight,
      colorTextPlaceholder,
    } = token

    const colorFillSecondarySolid = new TinyColor(colorFillSecondary)
      .onBackground(colorBgContainer)
      .toHexShortString()
    const colorFillContentSolid = new TinyColor(colorFillContent)
      .onBackground(colorBgContainer)
      .toHexShortString()
    const colorFillAlterSolid = new TinyColor(colorFillAlter)
      .onBackground(colorBgContainer)
      .toHexShortString()

    return {
      headerBg: colorFillAlterSolid,
      headerColor: colorTextHeading,
      headerSortActiveBg: colorFillSecondarySolid,
      headerSortHoverBg: colorFillContentSolid,
      bodySortBg: colorFillAlterSolid,
      rowHoverBg: colorFillAlterSolid,
      rowSelectedBg: controlItemBgActive,
      rowSelectedHoverBg: controlItemBgActiveHover,
      rowExpandedBg: colorFillAlter,
      cellPaddingBlock: padding,
      cellPaddingInline: padding,
      cellPaddingBlockMD: paddingSM,
      cellPaddingInlineMD: paddingXS,
      cellPaddingBlockSM: paddingXS,
      cellPaddingInlineSM: paddingXS,
      borderColor: colorBorderSecondary,
      headerBorderRadius: borderRadiusLG,
      footerBg: colorFillAlterSolid,
      footerColor: colorTextHeading,
      cellFontSize: fontSize,
      cellFontSizeMD: fontSize,
      cellFontSizeSM: fontSize,
      headerSplitColor: colorBorderSecondary,
      fixedHeaderSortActiveBg: colorFillSecondarySolid,
      headerFilterHoverBg: colorFillContent,
      filterDropdownMenuBg: colorBgContainer,
      filterDropdownBg: colorBgContainer,
      expandIconBg: colorBgContainer,
      selectionColumnWidth: controlHeight,
      stickyScrollBarBg: colorTextPlaceholder,
      stickyScrollBarBorderRadius: 100,
    }
  },
)
