import type { ReactNode } from 'react';
import React from 'react';
import type { SelectProps } from '../../../../base';
import { ProFieldRequestData, ProFieldValueEnumType, ProSchemaValueEnumMap, RequestOptionsType } from '../../../utils';
import type { ProFieldLightProps } from '../../index';
type SelectOptionType = Partial<RequestOptionsType>[];
export type FieldSelectProps<FieldProps = any> = {
    text: string;
    /** 值的枚舉，如果存在枚舉，Search 中會生成 select */
    valueEnum?: ProFieldValueEnumType;
    /** 防抖動時間 預設10 單位ms */
    debounceTime?: number;
    /** 從伺服器讀取選項 */
    request?: ProFieldRequestData;
    /** 重新觸發的時機 */
    params?: any;
    /** 元件的全局設置 */
    fieldProps?: FieldProps;
    bordered?: boolean;
    id?: string;
    children?: ReactNode;
    /** 預設搜素條件 */
    defaultKeyWords?: string;
} & ProFieldLightProps;
export declare const ObjToMap: (value: ProFieldValueEnumType | undefined) => ProSchemaValueEnumMap;
/**
 * 轉化 text 和 valueEnum 通過 type 來添加 Status
 *
 * @param text
 * @param valueEnum
 * @param pure 純淨模式，不增加 status
 */
export declare const proFieldParsingText: (text: string | number | (string | number)[], valueEnumParams: ProFieldValueEnumType, key?: number | string) => React.ReactNode;
/**
 * 把 value 的枚舉轉化為數組
 *
 * @param valueEnum
 */
export declare const proFieldParsingValueEnumToArray: (valueEnumParams: ProFieldValueEnumType) => SelectOptionType;
export declare const useFieldFetchData: (props: FieldSelectProps & {
    proFieldKey?: React.Key;
    defaultKeyWords?: string;
    cacheForSwr?: boolean;
}) => [boolean, SelectOptionType, (keyWord?: string) => void, () => void];
declare const _default: React.ForwardRefExoticComponent<import("../../..").BaseProFieldFC & import("../../..").ProRenderFieldPropsType & {
    text: string;
    /** 值的枚舉，如果存在枚舉，Search 中會生成 select */
    valueEnum?: ProFieldValueEnumType | undefined;
    /** 防抖動時間 預設10 單位ms */
    debounceTime?: number | undefined;
    /** 從伺服器讀取選項 */
    request?: ProFieldRequestData | undefined;
    /** 重新觸發的時機 */
    params?: any;
    /** 元件的全局設置 */
    fieldProps?: any;
    bordered?: boolean | undefined;
    id?: string | undefined;
    children?: ReactNode;
    /** 預設搜素條件 */
    defaultKeyWords?: string | undefined;
} & ProFieldLightProps & Pick<SelectProps<any, import("rc-select/lib/Select").DefaultOptionType>, "style" | "className" | "fieldNames"> & React.RefAttributes<any>>;
export default _default;
