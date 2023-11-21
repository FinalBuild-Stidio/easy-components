import type { MenuDataItem } from '../typing';
export declare const getMenuMatches: (flatMenuKeys: string[] | undefined, path: string, exact?: boolean) => string[] | undefined;
/**
 * 獲取當前的選中菜單列表
 * @param pathname
 * @param menuData
 * @returns MenuDataItem[]
 */
export declare const getMatchMenu: (pathname: string, menuData: MenuDataItem[], fullKeys?: boolean, exact?: boolean) => MenuDataItem[];
export default getMatchMenu;
