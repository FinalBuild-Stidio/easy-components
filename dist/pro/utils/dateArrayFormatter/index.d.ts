type FormatType = ((dayjs: any) => string) | string;
/**
 * 格式化區域日期,如果是一個數組，會返回 start ~ end
 * @param  {any} value
 * @param  {FormatType | FormatType[]} format
 * returns string
 */
export declare const dateArrayFormatter: (value: any[], format: FormatType | FormatType[]) => string;
export {};
