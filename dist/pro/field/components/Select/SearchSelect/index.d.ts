import React from 'react';
import type { SelectProps } from '../../../../../base';
import type { LabeledValue } from '../../../../../base/select';
import type { RequestOptionsType } from '../../../../utils';
export type KeyLabel = Partial<LabeledValue> & RequestOptionsType;
/** 用戶擴展資料後的值類型 */
export type DataValueType<T> = KeyLabel & T;
/** 可能單選，可能多選 */
export type DataValuesType<T> = DataValueType<T> | DataValueType<T>[];
export interface SearchSelectProps<T = Record<string, any>> extends Omit<SelectProps<KeyLabel | KeyLabel[]>, 'options'> {
    /** 防抖動時間 預設10 單位ms */
    debounceTime?: number;
    /** 自訂搜索方法, 返回搜索結果的 Promise */
    request?: (params: {
        query: string;
    }) => Promise<DataValueType<T>[]>;
    /** 自訂選項渲染 */
    optionItemRender?: (item: DataValueType<T>) => React.ReactNode;
    /** 指定元件中的值 */
    value?: KeyLabel | KeyLabel[];
    /** 指定預設選中的條目 */
    defaultValue?: KeyLabel | KeyLabel[];
    options?: RequestOptionsType[];
    /**
     * 樣式
     *
     * @ignore
     */
    style?: React.CSSProperties;
    /**
     * ClassName 類名
     *
     * @ignore
     */
    className?: string;
    /**
     * Placeholder 輸入提示
     *
     * @default 請輸入關鍵字搜索
     */
    placeholder?: string;
    /**
     * 是否在輸入框聚焦時觸發搜索
     *
     * @default false
     */
    searchOnFocus?: boolean;
    /**
     * 選擇完一個之後是否清空搜索項重新搜索
     *
     * @default false
     */
    resetAfterSelect?: boolean;
    /**
     * 自訂前綴
     *
     * @ignore
     */
    prefixCls?: string;
    /** 刷新資料 */
    fetchData: (keyWord?: string) => void;
    /** 清空資料 */
    resetData: () => void;
    /**
     * 當搜索關鍵字發生變化時是否請求 API 資料
     *
     * @default true
     */
    fetchDataOnSearch?: boolean;
    /** 預設搜索關鍵字 */
    defaultSearchValue?: string;
}
declare const _default: React.ForwardRefExoticComponent<SearchSelectProps<unknown[]> & React.RefAttributes<unknown>>;
export default _default;
