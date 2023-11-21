import type { SearchTransformKeyFn } from '../typing';
export type DataFormatMapType = Record<string, SearchTransformKeyFn | undefined>;
/**
 * 暫時還不支援 Set和 Map 結構 判斷是不是一個能疊代的對象
 *
 * @param itemValue
 * @returns Boolean
 */
export declare function isPlainObj(itemValue: any): boolean;
export declare const transformKeySubmitValue: <T extends object = any>(values: T, dataFormatMapRaw: Record<string, SearchTransformKeyFn | undefined | DataFormatMapType>, omit?: boolean) => T;
