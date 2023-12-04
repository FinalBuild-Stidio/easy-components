import type { CSSObject } from '@/StyleContext'
import type { CSSProperties } from 'react'
import { resetComponent, resetIcon, textEllipsis } from '../../style'
import { genCompactItemStyle } from '../../style/compact-item'
import type { FullToken, GenerateStyle } from '../../theme/internal'
import { genComponentStyleHook, mergeToken } from '../../theme/internal'
import genDropdownStyle from './dropdown'
import genMultipleStyle from './multiple'
import genSingleStyle from './single'

export interface ComponentToken {
  /**
   * @desc 下拉菜單 z-index
   * @descEN z-index of dropdown
   */
  zIndexPopup: number
  /**
   * @desc 選項選中時文本顏色
   * @descEN Text color when option is selected
   */
  optionSelectedColor: string
  /**
   * @desc 選項選中時文本字重
   * @descEN Font weight when option is selected
   */
  optionSelectedFontWeight: CSSProperties['fontWeight']
  /**
   * @desc 選項選中時背景色
   * @descEN Background color when option is selected
   */
  optionSelectedBg: string
  /**
   * @desc 選項啟用態時背景色
   * @descEN Background color when option is active
   */
  optionActiveBg: string
  /**
   * @desc 選項內間距
   * @descEN Padding of option
   */
  optionPadding: CSSProperties['padding']
  /**
   * @desc 選項字體大小
   * @descEN Font size of option
   */
  optionFontSize: number
  /**
   * @desc 選項行高
   * @descEN Line height of option
   */
  optionLineHeight: CSSProperties['lineHeight']
  /**
   * @desc 選項高度
   * @descEN Height of option
   */
  optionHeight: number
  /**
   * @desc 選框背景色
   * @descEN Background color of selector
   */
  selectorBg: string
  /**
   * @desc 清空按鈕背景色
   * @descEN Background color of clear button
   */
  clearBg: string
  /**
   * @desc 單選大號回填項高度
   * @descEN Height of single selected item with large size
   */
  singleItemHeightLG: number
  /**
   * @desc 多選標籤背景色
   * @descEN Background color of multiple tag
   */
  multipleItemBg: string
  /**
   * @desc 多選標籤邊框色
   * @descEN Border color of multiple tag
   */
  multipleItemBorderColor: string
  /**
   * @desc 多選標籤高度
   * @descEN Height of multiple tag
   */
  multipleItemHeight: number
  /**
   * @desc 大號多選標籤高度
   * @descEN Height of multiple tag with large size
   */
  multipleItemHeightLG: number
  /**
   * @desc 多選框禁用背景
   * @descEN Background color of multiple selector when disabled
   */
  multipleSelectorBgDisabled: string
  /**
   * @desc 多選標籤禁用文本顏色
   * @descEN Text color of multiple tag when disabled
   */
  multipleItemColorDisabled: string
  /**
   * @desc 多選標籤禁用邊框色
   * @descEN Border color of multiple tag when disabled
   */
  multipleItemBorderColorDisabled: string
}

export interface SelectToken extends FullToken<'Select'> {
  rootPrefixCls: string
  inputPaddingHorizontalBase: number
  multipleSelectItemHeight: number
  selectHeight: number
}

// ============================= Selector =============================
const genSelectorStyle: GenerateStyle<SelectToken, CSSObject> = (token) => {
  const { componentCls, selectorBg } = token

  return {
    position: 'relative',
    backgroundColor: selectorBg,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
    transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,

    input: {
      cursor: 'pointer',
    },

    [`${componentCls}-show-search&`]: {
      cursor: 'text',

      input: {
        cursor: 'auto',
        color: 'inherit',
        height: '100%',
      },
    },

    [`${componentCls}-disabled&`]: {
      color: token.colorTextDisabled,
      background: token.colorBgContainerDisabled,
      cursor: 'not-allowed',

      [`${componentCls}-multiple&`]: {
        background: token.multipleSelectorBgDisabled,
      },

      input: {
        cursor: 'not-allowed',
      },
    },
  }
}

// ============================== Status ==============================
const genStatusStyle = (
  rootSelectCls: string,
  token: {
    componentCls: string
    ipassCls: string
    borderHoverColor: string
    outlineColor: string
    controlOutlineWidth: number
  },
  overwriteDefaultBorder: boolean = false,
): CSSObject => {
  const { componentCls, borderHoverColor, outlineColor, ipassCls } = token

  const overwriteStyle: CSSObject = overwriteDefaultBorder
    ? {
      [`${componentCls}-selector`]: {
        borderColor: borderHoverColor,
      },
    }
    : {}

  return {
    [rootSelectCls]: {
      [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${ipassCls}-pagination-size-changer)`]:
      {
        ...overwriteStyle,

        [`${componentCls}-focused& ${componentCls}-selector`]: {
          borderColor: borderHoverColor,
          boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${outlineColor}`,
          outline: 0,
        },

        [`&:hover ${componentCls}-selector`]: {
          borderColor: borderHoverColor,
        },
      },
    },
  }
}

// ============================== Styles ==============================
// /* Reset search input style */
const getSearchInputWithoutBorderStyle: GenerateStyle<SelectToken, CSSObject> = (token) => {
  const { componentCls } = token

  return {
    [`${componentCls}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      appearance: 'none',
      fontFamily: 'inherit',

      '&::-webkit-search-cancel-button': {
        display: 'none',
        '-webkit-appearance': 'none',
      },
    },
  }
}

// =============================== Base ===============================
const genBaseStyle: GenerateStyle<SelectToken> = (token) => {
  const { ipassCls, componentCls, inputPaddingHorizontalBase, iconCls } = token

  return {
    [componentCls]: {
      ...resetComponent(token),
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',

      [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: {
        ...genSelectorStyle(token),
        ...getSearchInputWithoutBorderStyle(token),
      },

      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },

      // ======================== Selection ========================
      [`${componentCls}-selection-item`]: {
        flex: 1,
        fontWeight: 'normal',
        position: 'relative',
        userSelect: 'none',
        ...textEllipsis, [`> ${ipassCls}-typography`]: {
          display: 'inline',
        },
      },

      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: {
        ...textEllipsis,
        flex: 1,
        color: token.colorTextPlaceholder,
        pointerEvents: 'none',
      },

      // ========================== Arrow ==========================
      [`${componentCls}-arrow`]: {
        ...resetIcon(),
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        lineHeight: 1,
        textAlign: 'center',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',

        [iconCls]: {
          verticalAlign: 'top',
          transition: `transform ${token.motionDurationSlow}`,

          '> svg': {
            verticalAlign: 'top',
          },

          [`&:not(${componentCls}-suffix)`]: {
            pointerEvents: 'auto',
          },
        },

        [`${componentCls}-disabled &`]: {
          cursor: 'not-allowed',
        },

        '> *:not(:last-child)': {
          marginInlineEnd: 8, // FIXME: magic
        },
      },

      // ========================== Clear ==========================
      [`${componentCls}-clear`]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: 'inline-block',
        width: token.fontSizeIcon * 2,
        height: token.fontSizeIcon * 2,
        marginTop: -token.fontSizeIcon,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        fontStyle: 'normal',
        lineHeight: 1,
        textAlign: 'center',
        textTransform: 'none',
        background: token.clearBg,
        cursor: 'pointer',
        opacity: 0,
        transition: `color ${token.motionDurationMid} ease, opacity ${token.motionDurationSlow} ease`,
        textRendering: 'auto',

        '&:before': {
          display: 'block',
        },

        '&:hover': {
          color: token.colorTextTertiary,
        },
      },

      '&:hover': {
        [`${componentCls}-clear`]: {
          opacity: 1,
        },
      },
    },

    // ========================= Feedback ==========================
    [`${componentCls}-has-feedback`]: {
      [`${componentCls}-clear`]: {
        insetInlineEnd: inputPaddingHorizontalBase + token.fontSize + token.paddingXS,
      },
    },
  }
}

// ============================== Styles ==============================
const genSelectStyle: GenerateStyle<SelectToken> = (token) => {
  const { componentCls } = token

  return [
    {
      [componentCls]: {
        // ==================== BorderLess ====================
        [`&-borderless ${componentCls}-selector`]: {
          backgroundColor: `transparent !important`,
          borderColor: `transparent !important`,
          boxShadow: `none !important`,
        },

        // ==================== In Form ====================
        [`&${componentCls}-in-form-item`]: {
          width: '100%',
        },
      },
    },

    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    genBaseStyle(token),

    // Single
    genSingleStyle(token),

    // Multiple
    genMultipleStyle(token),

    // Dropdown
    genDropdownStyle(token),

    // =====================================================
    // ==                     Status                      ==
    // =====================================================
    genStatusStyle(
      componentCls,
      mergeToken<any>(token, {
        borderHoverColor: token.colorPrimaryHover,
        outlineColor: token.controlOutline,
      }),
    ),
    genStatusStyle(
      `${componentCls}-status-error`,
      mergeToken<any>(token, {
        borderHoverColor: token.colorErrorHover,
        outlineColor: token.colorErrorOutline,
      }),
      true,
    ),
    genStatusStyle(
      `${componentCls}-status-warning`,
      mergeToken<any>(token, {
        borderHoverColor: token.colorWarningHover,
        outlineColor: token.colorWarningOutline,
      }),
      true,
    ),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(token, {
      borderElCls: `${componentCls}-selector`,
      focusElCls: `${componentCls}-focused`,
    }),
  ]
}

// ============================== Export ==============================
export default genComponentStyleHook(
  'Select',
  (token, { rootPrefixCls }) => {
    const selectToken: SelectToken = mergeToken<SelectToken>(token, {
      rootPrefixCls,
      inputPaddingHorizontalBase: token.paddingSM - 1,
      multipleSelectItemHeight: token.multipleItemHeight,
      selectHeight: token.controlHeight,
    })

    return [genSelectStyle(selectToken)]
  },
  (token) => {
    const {
      fontSize,
      lineHeight,
      controlHeight,
      controlPaddingHorizontal,
      zIndexPopupBase,
      colorText,
      fontWeightStrong,
      controlItemBgActive,
      controlItemBgHover,
      colorBgContainer,
      colorFillSecondary,
      controlHeightLG,
      controlHeightSM,
      colorBgContainerDisabled,
      colorTextDisabled,
    } = token

    return {
      zIndexPopup: zIndexPopupBase + 50,
      optionSelectedColor: colorText,
      optionSelectedFontWeight: fontWeightStrong,
      optionSelectedBg: controlItemBgActive,
      optionActiveBg: controlItemBgHover,
      optionPadding: `${(controlHeight - fontSize * lineHeight) / 2
        }px ${controlPaddingHorizontal}px`,
      optionFontSize: fontSize,
      optionLineHeight: lineHeight,
      optionHeight: controlHeight,
      selectorBg: colorBgContainer,
      clearBg: colorBgContainer,
      singleItemHeightLG: controlHeightLG,
      multipleItemBg: colorFillSecondary,
      multipleItemBorderColor: 'transparent',
      multipleItemHeight: controlHeightSM,
      multipleItemHeightLG: controlHeight,
      multipleSelectorBgDisabled: colorBgContainerDisabled,
      multipleItemColorDisabled: colorTextDisabled,
      multipleItemBorderColorDisabled: 'transparent',
    }
  },
)
