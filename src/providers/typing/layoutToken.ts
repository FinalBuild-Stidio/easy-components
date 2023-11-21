import { setAlpha } from '../useStyle'

export type BaseLayoutDesignToken = {
  hashId: string
  colorPrimary: string
  /**
   * 跨站點應用的圖示hover顏色
   */
  colorBgAppListIconHover: string
  /**
   * 跨站點應用的圖示hover顏色
   */
  colorTextAppListIconHover: string
  /**
   * 跨站點應用的圖示hover顏色
   */
  colorTextAppListIcon: string

  /**
   * layout 的背景顏色
   */
  bgLayout: string

  /**
   * 側邊side的 token 設定
   */
  sider: {
    colorBgCollapsedButton: string
    colorTextCollapsedButtonHover: string
    colorTextCollapsedButton: string
    colorMenuBackground: string
    menuHeight: number
    colorBgMenuItemCollapsedElevated: string
    colorMenuItemDivider: string
    colorBgMenuItemHover: string // 滑鼠懸浮態
    colorBgMenuItemActive: string // 啟用態
    colorBgMenuItemSelected: string
    colorTextMenuSelected: string
    colorTextMenuItemHover: string
    colorTextMenuActive: string
    colorTextMenu: string
    colorTextMenuSecondary: string
    paddingInlineLayoutMenu: number
    paddingBlockLayoutMenu: number
    /**
     * menu 最上面 title 的字體顏色
     */
    colorTextMenuTitle: string
    colorTextSubMenuSelected: string
  }
  /**
   * header 的 token 設置
   */
  header: {
    colorBgHeader: string
    colorBgScrollHeader: string
    colorHeaderTitle: string
    colorBgMenuItemHover: string
    colorBgMenuElevated: string
    colorBgMenuItemSelected: string
    colorTextMenuSelected: string
    colorTextMenuActive: string
    colorTextMenu: string
    colorTextMenuSecondary: string
    colorBgRightActionsItemHover: string
    colorTextRightActionsItem: string
    heightLayoutHeader: number
  }

  /**
   * pageContainer
   */
  pageContainer: {
    /**
     * pageContainer 的背景顏色
     */
    colorBgPageContainer: string
    /**
     * pageContainer 自帶的 margin inline
     * @deprecated 請使用 paddingInlinePageContainerContent
     */
    marginInlinePageContainerContent: number
    /**
     * pageContainer 自帶的 margin block
     * @deprecated 請使用 paddingBlockPageContainerContent
     */
    marginBlockPageContainerContent: number
    /**
     * pageContainer 自帶的 padding inline
     */
    paddingInlinePageContainerContent: number
    /**
     * pageContainer 自帶的 padding block
     */
    paddingBlockPageContainerContent: number
    /**
     * pageContainer 被固定時的背景顏色
     */
    colorBgPageContainerFixed: string
  }
}

export type DeepPartial<T> = T extends object
  ? {
    [P in keyof T]?: DeepPartial<T[P]>
  }
  : T

export type LayoutDesignToken = BaseLayoutDesignToken

export const getLayoutDesignToken: (
  baseDesignTokens: DeepPartial<LayoutDesignToken>,
  ipassToken: Record<string, any>,
) => LayoutDesignToken = (designTokens, ipassToken) => {
  const finalDesignTokens = { ...designTokens }

  return {
    bgLayout: `linear-gradient(${ipassToken.colorBgContainer}, ${ipassToken.colorBgLayout} 28%)`,
    colorTextAppListIcon: ipassToken.colorTextSecondary,
    appListIconHoverBgColor: finalDesignTokens?.sider?.colorBgMenuItemSelected,
    colorBgAppListIconHover: setAlpha(ipassToken.colorTextBase, 0.04),
    colorTextAppListIconHover: ipassToken.colorTextBase,
    ...finalDesignTokens,
    header: {
      colorBgHeader: setAlpha(ipassToken.colorBgElevated, 0.6),
      colorBgScrollHeader: setAlpha(ipassToken.colorBgElevated, 0.8),
      colorHeaderTitle: ipassToken.colorText,
      colorBgMenuItemHover: setAlpha(ipassToken.colorTextBase, 0.03),
      colorBgMenuItemSelected: 'transparent',
      colorBgMenuElevated:
        finalDesignTokens?.header?.colorBgHeader !== 'rgba(255, 255, 255, 0.6)'
          ? finalDesignTokens.header?.colorBgHeader
          : ipassToken.colorBgElevated,
      colorTextMenuSelected: setAlpha(ipassToken.colorTextBase, 0.95),
      colorBgRightActionsItemHover: setAlpha(ipassToken.colorTextBase, 0.03),
      colorTextRightActionsItem: ipassToken.colorTextTertiary,
      heightLayoutHeader: 56,
      colorTextMenu: ipassToken.colorTextSecondary,
      colorTextMenuSecondary: ipassToken.colorTextTertiary,
      colorTextMenuTitle: ipassToken.colorText,
      colorTextMenuActive: ipassToken.colorText,
      ...finalDesignTokens.header,
    } as LayoutDesignToken['header'],
    sider: {
      paddingInlineLayoutMenu: 8,
      paddingBlockLayoutMenu: 0,
      colorBgCollapsedButton: ipassToken.colorBgElevated,
      colorTextCollapsedButtonHover: ipassToken.colorTextSecondary,
      colorTextCollapsedButton: setAlpha(ipassToken.colorTextBase, 0.25),
      colorMenuBackground: 'transparent',
      colorMenuItemDivider: setAlpha(ipassToken.colorTextBase, 0.06),
      colorBgMenuItemHover: setAlpha(ipassToken.colorTextBase, 0.03),
      colorBgMenuItemSelected: setAlpha(ipassToken.colorTextBase, 0.04),
      colorTextMenuItemHover: ipassToken.colorText,
      colorTextMenuSelected: setAlpha(ipassToken.colorTextBase, 0.95),
      colorTextMenuActive: ipassToken.colorText,
      colorTextMenu: ipassToken.colorTextSecondary,
      colorTextMenuSecondary: ipassToken.colorTextTertiary,
      colorTextMenuTitle: ipassToken.colorText,
      colorTextSubMenuSelected: setAlpha(ipassToken.colorTextBase, 0.95),
      ...finalDesignTokens.sider,
    } as LayoutDesignToken['sider'],
    pageContainer: {
      colorBgPageContainer: 'transparent',
      paddingInlinePageContainerContent:
        finalDesignTokens.pageContainer?.marginInlinePageContainerContent || 40,
      paddingBlockPageContainerContent:
        finalDesignTokens.pageContainer?.marginBlockPageContainerContent || 32,
      colorBgPageContainerFixed: ipassToken.colorBgElevated,
      ...finalDesignTokens.pageContainer,
    },
  } as LayoutDesignToken as LayoutDesignToken
}

export type ProTokenType = {
  layout?: DeepPartial<LayoutDesignToken>
}
