import type { MenuDataItem } from '../typing'
import {
  stripQueryStringAndHashFromPath,
  childrenPropsName,
} from './transformRoute'

/**
 * 獲取打平的 menuData
 * 以 path 為 key
 * @param menuData
 */
export const getFlatMenus = (
  menuData: MenuDataItem[] = [],
): Record<string, MenuDataItem> => {
  let menus: Record<string, MenuDataItem> = {}
  menuData.forEach((mapItem) => {
    const item = { ...mapItem }
    if (!item || !item.key) {
      return
    }
    if (!item.children && item[childrenPropsName]) {
      item.children = item[childrenPropsName]
      delete item[childrenPropsName]
    }
    const routerChildren = item.children || []
    menus[stripQueryStringAndHashFromPath(item.path || item.key || '/')] = {
      ...item,
    }
    menus[item.key || item.path || '/'] = { ...item }

    if (routerChildren) {
      menus = { ...menus, ...getFlatMenus(routerChildren) }
    }
  })
  return menus
}

export default getFlatMenus