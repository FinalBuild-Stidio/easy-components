import type { NamePath } from '../../../base/form/interface';
import dayjs from 'dayjs';
import type { ProFieldValueType } from '../typing';
type DateFormatter = 'number' | 'string' | ((value: dayjs.Dayjs, valueType: string) => string | number) | false;
export type DateValueTypes = 'time' | 'timeRange' | 'date' | 'dateWeek' | 'dateMonth' | 'dateQuarter' | 'dateYear' | 'dateRange' | 'dateTime' | 'dateTimeRange';
export declare const dateFormatterMap: Record<DateValueTypes, string>;
/**
 * 判斷是否是一個的簡單的 object
 * @param  {{constructor:any}} o
 * @returns boolean
 */
export declare function isPlainObject(o: {
    constructor: any;
}): boolean;
/**
 * 根據不同的格式轉換 dayjs
 * @param  {dayjs.Dayjs} value
 * @param  {string|((value:dayjs.Dayjs} dateFormatter
 * @param  {string} valueType
 */
export declare const convertMoment: (value: dayjs.Dayjs, dateFormatter: string | false | ((value: dayjs.Dayjs, valueType: string) => string | number), valueType: string) => string | number | dayjs.Dayjs;
/**
 * 這裡主要是來轉換一下資料 將 dayjs 轉換為 string 將 all 預設刪除
 * @param  {T} value
 * @param  {DateFormatter} dateFormatter
 * @param  {Record<string} valueTypeMap
 * @param  {ProFieldValueType;dateFormat:string;}|any>} |{valueType
 * @param  {boolean} omitNil?
 * @param  {NamePath} parentKey?
 */
export declare const conversionMomentValue: (value: Record<string, any>, dateFormatter: DateFormatter, valueTypeMap: Record<string, {
    valueType: ProFieldValueType;
    dateFormat: string;
} | any>, omitNil?: boolean, parentKey?: NamePath) => Record<string, any>;
export {};
