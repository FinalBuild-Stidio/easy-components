import type { GenerateStyle, ProAliasToken } from '@/providers'
import { useStyle as useIpassStyle } from '@/providers'

export interface ProLayoutToken extends ProAliasToken {
  componentCls: string
}

const version = '5.1.7'

const getVersion = () => {
  if (typeof process === 'undefined') return version
  return process?.env?.VERSION || version
}

/**
 * 主要區別：
 * 需要手動引入 import 'xxxx.css';
 * 需要重設 menu 的樣式
 * @param token
 * @returns
 */
const compatibleStyle: GenerateStyle<ProLayoutToken> = (token) => {
  if (getVersion()?.startsWith('5')) {
    return {}
  }
  return {
    [token.componentCls]: {
      width: '100%',
      height: '100%',
      [`${token.proComponentsCls}-base-menu`]: {
        color: token.layout?.sider?.colorTextMenu,
        [`${token.ipassCls}-menu-sub`]: {
          backgroundColor: 'transparent!important',
          color: token.layout?.sider?.colorTextMenu,
        },
        [`& ${token.ipassCls}-layout`]: {
          backgroundColor: 'transparent',
          width: '100%',
        },
        [`${token.ipassCls}-menu-submenu-expand-icon, ${token.ipassCls}-menu-submenu-arrow`]:
        {
          color: 'inherit',
        },
        [`&${token.ipassCls}-menu`]: {
          color: token.layout?.sider?.colorTextMenu,
          [`${token.ipassCls}-menu-item`]: {
            '*': {
              transition: 'none !important',
            },
          },
          [`${token.ipassCls}-menu-item a`]: {
            color: 'inherit',
          },
        },
        [`&${token.ipassCls}-menu-inline`]: {
          [`${token.ipassCls}-menu-selected::after,${token.ipassCls}-menu-item-selected::after`]:
          {
            display: 'none',
          },
        },
        [`${token.ipassCls}-menu-sub ${token.ipassCls}-menu-inline`]: {
          backgroundColor: 'transparent!important',
        },
        [`${token.ipassCls}-menu-item:active, 
        ${token.ipassCls}-menu-submenu-title:active`]: {
          backgroundColor: 'transparent!important',
        },
        [`&${token.ipassCls}-menu-light`]: {
          [`${token.ipassCls}-menu-item:hover, 
            ${token.ipassCls}-menu-item-active,
            ${token.ipassCls}-menu-submenu-active, 
            ${token.ipassCls}-menu-submenu-title:hover`]: {
            color: token.layout?.sider?.colorTextMenuActive,
            borderRadius: token.borderRadius,
            [`${token.ipassCls}-menu-submenu-arrow`]: {
              color: token.layout?.sider?.colorTextMenuActive,
            },
          },
        },
        [`&${token.ipassCls}-menu:not(${token.ipassCls}-menu-horizontal)`]: {
          [`${token.ipassCls}-menu-item-selected`]: {
            backgroundColor: token.layout?.sider?.colorBgMenuItemSelected,
            borderRadius: token.borderRadius,
          },
          [`${token.ipassCls}-menu-item:hover, 
            ${token.ipassCls}-menu-item-active,
            ${token.ipassCls}-menu-submenu-title:hover`]: {
            color: token.layout?.sider?.colorTextMenuActive,
            borderRadius: token.borderRadius,
            backgroundColor: `${token.layout?.header?.colorBgMenuItemHover} !important`,
            [`${token.ipassCls}-menu-submenu-arrow`]: {
              color: token.layout?.sider?.colorTextMenuActive,
            },
          },
        },
        [`${token.ipassCls}-menu-item-selected`]: {
          color: token.layout?.sider?.colorTextMenuSelected,
        },
        [`${token.ipassCls}-menu-submenu-selected`]: {
          color: token.layout?.sider?.colorTextMenuSelected,
        },
        [`&${token.ipassCls}-menu:not(${token.ipassCls}-menu-inline) ${token.ipassCls}-menu-submenu-open`]:
        {
          color: token.layout?.sider?.colorTextMenuSelected,
        },

        [`&${token.ipassCls}-menu-vertical`]: {
          [`${token.ipassCls}-menu-submenu-selected`]: {
            borderRadius: token.borderRadius,
            color: token.layout?.sider?.colorTextMenuSelected,
          },
        },

        [`${token.ipassCls}-menu-submenu:hover > ${token.ipassCls}-menu-submenu-title > ${token.ipassCls}-menu-submenu-arrow`]:
        {
          color: token.layout?.sider?.colorTextMenuActive,
        },

        [`&${token.ipassCls}-menu-horizontal`]: {
          [`${token.ipassCls}-menu-item:hover,
          ${token.ipassCls}-menu-submenu:hover,
          ${token.ipassCls}-menu-item-active,
          ${token.ipassCls}-menu-submenu-active`]: {
            borderRadius: 4,
            transition: 'none',
            color: token.layout?.header?.colorTextMenuActive,
            backgroundColor: `${token.layout?.header?.colorBgMenuItemHover} !important`,
          },

          [`${token.ipassCls}-menu-item-open,
          ${token.ipassCls}-menu-submenu-open,
          ${token.ipassCls}-menu-item-selected,
          ${token.ipassCls}-menu-submenu-selected`]: {
            backgroundColor: token.layout?.header?.colorBgMenuItemSelected,
            borderRadius: token.borderRadius,
            transition: 'none',
            color: `${token.layout?.header?.colorTextMenuSelected} !important`,
            [`${token.ipassCls}-menu-submenu-arrow`]: {
              color: `${token.layout?.header?.colorTextMenuSelected} !important`,
            },
          },
          [`> ${token.ipassCls}-menu-item, > ${token.ipassCls}-menu-submenu`]: {
            paddingInline: 16,
            marginInline: 4,
          },
          [`> ${token.ipassCls}-menu-item::after, > ${token.ipassCls}-menu-submenu::after`]:
          {
            display: 'none',
          },
        },
      },

      [`${token.proComponentsCls}-top-nav-header-base-menu`]: {
        [`&${token.ipassCls}-menu`]: {
          color: token.layout?.header?.colorTextMenu,
          [`${token.ipassCls}-menu-item a`]: {
            color: 'inherit',
          },
        },
        [`&${token.ipassCls}-menu-light`]: {
          [`${token.ipassCls}-menu-item:hover, 
            ${token.ipassCls}-menu-item-active,
            ${token.ipassCls}-menu-submenu-active, 
            ${token.ipassCls}-menu-submenu-title:hover`]: {
            color: token.layout?.header?.colorTextMenuActive,
            borderRadius: token.borderRadius,
            transition: 'none',
            backgroundColor: token.layout?.header?.colorBgMenuItemSelected,
            [`${token.ipassCls}-menu-submenu-arrow`]: {
              color: token.layout?.header?.colorTextMenuActive,
            },
          },

          [`${token.ipassCls}-menu-item-selected`]: {
            color: token.layout?.header?.colorTextMenuSelected,
            borderRadius: token.borderRadius,
            backgroundColor: token.layout?.header?.colorBgMenuItemSelected,
          },
        },
      },
    },
    [`${token.ipassCls}-menu-sub${token.ipassCls}-menu-inline`]: {
      backgroundColor: 'transparent!important',
    },
    [`${token.ipassCls}-menu-submenu-popup`]: {
      backgroundColor: 'rgba(255, 255, 255, 0.42)',
      '-webkit-backdrop-filter': 'blur(8px)',
      backdropFilter: 'blur(8px)',
      [`${token.ipassCls}-menu`]: {
        background: 'transparent !important',
        backgroundColor: 'transparent !important',
        [`${token.ipassCls}-menu-item:active, 
        ${token.ipassCls}-menu-submenu-title:active`]: {
          backgroundColor: 'transparent!important',
        },
      },
      [`${token.ipassCls}-menu-item-selected`]: {
        color: token.layout?.sider?.colorTextMenuSelected,
      },
      [`${token.ipassCls}-menu-submenu-selected`]: {
        color: token.layout?.sider?.colorTextMenuSelected,
      },
      [`${token.ipassCls}-menu:not(${token.ipassCls}-menu-horizontal)`]: {
        [`${token.ipassCls}-menu-item-selected`]: {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          borderRadius: token.borderRadius,
          color: token.layout?.sider?.colorTextMenuSelected,
        },
        [`${token.ipassCls}-menu-item:hover, 
          ${token.ipassCls}-menu-item-active,
          ${token.ipassCls}-menu-submenu-title:hover`]: {
          color: token.layout?.sider?.colorTextMenuActive,
          borderRadius: token.borderRadius,
          [`${token.ipassCls}-menu-submenu-arrow`]: {
            color: token.layout?.sider?.colorTextMenuActive,
          },
        },
      },
    },
  }
}

const genProLayoutStyle: GenerateStyle<ProLayoutToken> = (token) => {
  return {
    [`${token.ipassCls}-layout`]: {
      backgroundColor: 'transparent !important',
    },
    [token.componentCls]: {
      [`& ${token.ipassCls}-layout`]: {
        display: 'flex',
        backgroundColor: 'transparent',
        width: '100%',
      },
      [`${token.componentCls}-content`]: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor:
          token.layout?.pageContainer?.colorBgPageContainer || 'transparent',
        position: 'relative',
        paddingBlock:
          token.layout?.pageContainer?.paddingBlockPageContainerContent,
        paddingInline:
          token.layout?.pageContainer?.paddingInlinePageContainerContent,
        '&-has-page-container': {
          padding: 0,
        },
      },
      [`${token.componentCls}-container`]: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        minHeight: 0,
        backgroundColor: 'transparent',
      },
      [`${token.componentCls}-bg-list`]: {
        pointerEvents: 'none',
        position: 'fixed',
        overflow: 'hidden',
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: 0,
        height: '100%',
        width: '100%',
        background: token.layout?.bgLayout,
      },
    },
  }
}

export function useStyle(prefixCls: string) {
  return useIpassStyle('ProLayout', (token) => {
    const proLayoutToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    } as ProLayoutToken

    return [genProLayoutStyle(proLayoutToken), compatibleStyle(proLayoutToken)]
  })
}
