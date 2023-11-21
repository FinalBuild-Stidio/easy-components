import type { MenuDataItem } from '../typing';
/**
 * 獲取打平的 menuData
 * 以 path 為 key
 * @param menuData
 */
export declare const getFlatMenus: (menuData?: MenuDataItem[]) => Record<string, MenuDataItem>;
export default getFlatMenus;
