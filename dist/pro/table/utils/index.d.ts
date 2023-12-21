import { Key } from 'react';
import type React from 'react';
import type { IntlShape } from '@caps.dev/react-intl';
import type { TablePaginationConfig } from '../../../base';
import type { SortOrder } from '../../../base/table/interface';
import type { ActionType, Bordered, BorderedType, ProColumns, UseFetchDataAction } from '../typing';
/**
 * 檢查值是否存在 為了 避開 0 和 false
 *
 * @param value
 */
export declare const checkUndefinedOrNull: (value: any) => boolean;
/**
 * 合併用戶 props 和 預設的 props
 *
 * @param pagination
 * @param action
 * @param intl
 */
export declare function mergePagination<T>(pagination: TablePaginationConfig | boolean | undefined, pageInfo: UseFetchDataAction<T>['pageInfo'] & {
    setPageInfo: any;
}, intl: IntlShape): TablePaginationConfig | false | undefined;
/**
 * 獲取用戶的 action 資訊
 *
 * @param actionRef
 * @param counter
 * @param onCleanSelected
 */
export declare function useActionType<T>(ref: React.MutableRefObject<ActionType | undefined>, action: UseFetchDataAction<T>, props: {
    fullScreen: () => void;
    onCleanSelected: () => void;
    resetAll: () => void;
}): void;
type PostDataType<T> = (data: T) => T;
/**
 * 一個轉化的 pipeline 列表
 *
 * @param data
 * @param pipeline
 */
export declare function postDataPipeline<T>(data: T, pipeline: PostDataType<T>[]): T;
export declare const isBordered: (borderType: BorderedType, border?: Bordered) => boolean | undefined;
export declare const isMergeCell: (dom: any) => any;
/**
 * 根據 key 和 dataIndex 生成唯一 id
 *
 * @param key 用戶設置的 key
 * @param dataIndex 在對象中的資料
 * @param index 序號，理論上唯一
 */
export declare const genColumnKey: (key?: string | number | Key, index?: number | string) => string;
/**
 * 從 ProColumns 數組中取出預設的排序和篩選資料
 *
 * @param columns ProColumns
 */
export declare function parseDefaultColumnConfig<T, Value>(columns: ProColumns<T, Value>[]): {
    sort: Record<string, SortOrder>;
    filter: Record<string, (string | number)[] | null>;
};
export {};
