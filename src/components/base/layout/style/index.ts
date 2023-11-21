import type { CSSObject } from '@/components/StyleContext'
import type { CSSProperties } from 'react'
import type { FullToken, GenerateStyle } from '../../theme/internal'
import { genComponentStyleHook } from '../../theme/internal'
import genLayoutLightStyle from './light'

export interface ComponentToken {
  /** @deprecated Use headerBg instead */
  colorBgHeader: string
  /** @deprecated Use bodyBg instead */
  colorBgBody: string
  /** @deprecated Use triggerBg instead */
  colorBgTrigger: string

  /**
   * @desc 主體部分背景色
   * @descEN Background Color of body
   */
  bodyBg: string
  /**
   * @desc 最上面背景色
   * @descEN Background Color of header
   */
  headerBg: string
  /**
   * @desc 最上面高度
   * @descEN Height of header
   */
  headerHeight: number
  /**
   * @desc 最上面內邊距
   * @descEN Padding of header
   */
  headerPadding: CSSProperties['padding']
  /**
   * @desc 最上面文字顏色
   * @descEN Text color of header
   */
  headerColor: string
  /**
   * @desc 頁尾內邊距
   * @descEN Padding of footer
   */
  footerPadding: CSSProperties['padding']
  /**
   * @desc 頁尾背景色
   * @descEN Background Color of footer
   */
  footerBg: string
  /**
   * @desc 側邊欄背景色
   * @descEN Background Color of sider
   */
  siderBg: string
  /**
   * @desc 側邊欄開關高度
   * @descEN Height of sider trigger
   */
  triggerHeight: number
  /**
   * @desc 側邊欄開關背景色
   * @descEN Background Color of sider trigger
   */
  triggerBg: string
  /**
   * @desc 側邊欄開關顏色
   * @descEN Color of sider trigger
   */
  triggerColor: string
  /**
   * @desc collapse 為 0 時側邊欄開關寬度
   * @descEN Width of sider trigger when collapse is 0
   */
  zeroTriggerWidth: number
  /**
   * @desc collapse 為 0 時側邊欄開關高度
   * @descEN Height of sider trigger when collapse is 0
   */
  zeroTriggerHeight: number
  /**
   * @desc 亮色主題側邊欄背景色
   * @descEN Background Color of light theme sider
   */
  lightSiderBg: string
  /**
   * @desc 亮色主題側邊欄開關背景色
   * @descEN Background Color of light theme sider trigger
   */
  lightTriggerBg: string
  /**
   * @desc 亮色主題側邊欄開關顏色
   * @descEN Color of light theme sider trigger
   */
  lightTriggerColor: string
}

export interface LayoutToken extends FullToken<'Layout'> { }

const genLayoutStyle: GenerateStyle<LayoutToken, CSSObject> = (token) => {
  const {
    ipassCls, // .ipass
    componentCls, // .ipass-layout
    colorText,
    triggerColor,
    footerBg,
    triggerBg,
    headerHeight,
    headerPadding,
    headerColor,
    footerPadding,
    triggerHeight,
    zeroTriggerHeight,
    zeroTriggerWidth,
    motionDurationMid,
    motionDurationSlow,
    fontSize,
    borderRadius,
    bodyBg,
    headerBg,
    siderBg,
  } = token

  return {
    [componentCls]: {
      display: 'flex',
      flex: 'auto',
      flexDirection: 'column',

      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: bodyBg,

      '&, *': {
        boxSizing: 'border-box',
      },

      [`&${componentCls}-has-sider`]: {
        flexDirection: 'row',
        [`> ${componentCls}, > ${componentCls}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0,
        },
      },

      [`${componentCls}-header, &${componentCls}-footer`]: {
        flex: '0 0 auto',
      },

      [`${componentCls}-sider`]: {
        position: 'relative',

        // fix firefox can't set width smaller than content on flex item
        minWidth: 0,
        background: siderBg,
        transition: `all ${motionDurationMid}, background 0s`,

        '&-children': {
          height: '100%',
          // Hack for fixing margin collapse bug          // solution from https://stackoverflow.com/a/33132624/3040605
          marginTop: -0.1,
          paddingTop: 0.1,

          [`${ipassCls}-menu${ipassCls}-menu-inline-collapsed`]: {
            width: 'auto',
          },
        },

        '&-has-trigger': {
          paddingBottom: triggerHeight,
        },

        '&-right': {
          order: 1,
        },

        '&-trigger': {
          position: 'fixed',
          bottom: 0,
          zIndex: 1,
          height: triggerHeight,
          color: triggerColor,
          lineHeight: `${triggerHeight}px`,
          textAlign: 'center',
          background: triggerBg,
          cursor: 'pointer',
          transition: `all ${motionDurationMid}`,
        },

        '&-zero-width': {
          '> *': {
            overflow: 'hidden',
          },

          '&-trigger': {
            position: 'absolute',
            top: headerHeight,
            insetInlineEnd: -zeroTriggerWidth,
            zIndex: 1,
            width: zeroTriggerWidth,
            height: zeroTriggerHeight,
            color: triggerColor,
            fontSize: token.fontSizeXL,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: siderBg,
            borderStartStartRadius: 0,
            borderStartEndRadius: borderRadius,
            borderEndEndRadius: borderRadius,
            borderEndStartRadius: 0,

            cursor: 'pointer',
            transition: `background ${motionDurationSlow} ease`,

            '&::after': {
              position: 'absolute',
              inset: 0,
              background: 'transparent',
              transition: `all ${motionDurationSlow}`,
              content: '""',
            },

            '&:hover::after': {
              background: `rgba(255, 255, 255, 0.2)`,
            },

            '&-right': {
              insetInlineStart: -zeroTriggerWidth,
              borderStartStartRadius: borderRadius,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: borderRadius,
            },
          },
        },
      },
      // Light
      ...genLayoutLightStyle(token),
    },

    // ==================== Header ====================
    [`${componentCls}-header`]: {
      height: headerHeight,
      padding: headerPadding,
      color: headerColor,
      lineHeight: `${headerHeight}px`,
      background: headerBg,

      // Other components/menu/style/index.less line:686
      // Integration with header element so menu items have the same height
      [`${ipassCls}-menu`]: {
        lineHeight: 'inherit',
      },
    },

    // ==================== Footer ====================
    [`${componentCls}-footer`]: {
      padding: footerPadding,
      color: colorText,
      fontSize,
      background: footerBg,
    },

    // =================== Content ====================
    [`${componentCls}-content`]: {
      flex: 'auto',

      // fix firefox can't set height smaller than content on flex item
      minHeight: 0,
    },
  }
}

// ============================== Export ==============================
export default genComponentStyleHook(
  'Layout',
  (token) => [genLayoutStyle(token)],
  (token) => {
    const {
      colorBgLayout,
      controlHeight,
      controlHeightLG,
      colorText,
      controlHeightSM,
      marginXXS,
      colorTextLightSolid,
      colorBgContainer,
    } = token

    const paddingInline = controlHeightLG * 1.25

    return {
      // Deprecated
      colorBgHeader: '#001529',
      colorBgBody: colorBgLayout,
      colorBgTrigger: '#002140',

      bodyBg: colorBgLayout,
      headerBg: '#001529',
      headerHeight: controlHeight * 2,
      headerPadding: `0 ${paddingInline}px`,
      headerColor: colorText,
      footerPadding: `${controlHeightSM}px ${paddingInline}px`,
      footerBg: colorBgLayout,
      siderBg: '#001529',
      triggerHeight: controlHeightLG + marginXXS * 2,
      triggerBg: '#002140',
      triggerColor: colorTextLightSolid,
      zeroTriggerWidth: controlHeightLG,
      zeroTriggerHeight: controlHeightLG,
      lightSiderBg: colorBgContainer,
      lightTriggerBg: colorBgContainer,
      lightTriggerColor: colorText,
    }
  },
  {
    deprecatedTokens: [
      ['colorBgBody', 'bodyBg'],
      ['colorBgHeader', 'headerBg'],
      ['colorBgTrigger', 'triggerBg'],
    ],
  },
)
