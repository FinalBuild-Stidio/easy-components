import { omitUndefined } from '../../utils'
import { useEffect, useState } from 'react'
import type { ProSettings } from '../../defaultSettings'

const useCurrentMenuLayoutProps = (currentMenu: ProSettings) => {
  const [currentMenuLayoutProps, setCurrentMenuLayoutProps] = useState({})

  useEffect(() => {
    setCurrentMenuLayoutProps(
      omitUndefined({
        // 有時候會變成對象，是原來的方式
        layout:
          typeof currentMenu.layout !== 'object'
            ? currentMenu.layout
            : undefined,
        navTheme: currentMenu.navTheme,
        menuRender: currentMenu.menuRender,
        footerRender: currentMenu.footerRender,
        menuHeaderRender: currentMenu.menuHeaderRender,
        headerRender: currentMenu.headerRender,
        fixSiderbar: currentMenu.fixSiderbar,
      }),
    )
  }, [
    currentMenu.layout,
    currentMenu.navTheme,
    currentMenu.menuRender,
    currentMenu.footerRender,
    currentMenu.menuHeaderRender,
    currentMenu.headerRender,
    currentMenu.fixSiderbar,
  ])
  return currentMenuLayoutProps
}

export { useCurrentMenuLayoutProps }
