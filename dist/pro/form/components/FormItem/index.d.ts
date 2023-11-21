import type { NamePath } from 'rc-field-form/lib/interface';
import { ProFieldValueType, SearchConvertKeyFn, SearchTransformKeyFn } from '../../../utils';
import type { FormItemProps } from '../../../../base';
import React from 'react';
declare const FormItemProvide: React.Context<{
    name?: NamePath;
    label?: React.ReactNode;
}>;
type WarpFormItemProps = {
    /** @name 前置的dom * */
    addonBefore?: React.ReactNode;
    /** @name 後置的dom * */
    addonAfter?: React.ReactNode;
    /**
     * @name 取得時轉換值，一般用於將資料格式化為元件接收的格式
     * @param value 欄位的值
     * @param namePath 欄位的name
     * @returns 欄位新的值
     *
     *
     * @example a,b => [a,b]     convertValue: (value,namePath)=> value.split(",")
     * @example string => json   convertValue: (value,namePath)=> JSON.parse(value)
     * @example number => date   convertValue: (value,namePath)=> Dayjs(value)
     * @example YYYY-MM-DD => date   convertValue: (value,namePath)=> Dayjs(value,"YYYY-MM-DD")
     * @example  string => object   convertValue: (value,namePath)=> { return {value,label:value} }
     */
    convertValue?: SearchConvertKeyFn;
};
export type ProFormItemProps = FormItemProps & {
    ignoreFormItem?: boolean;
    valueType?: ProFieldValueType;
    /**
     * @name 提交時轉換值，一般用於將值轉換為提交的資料
     * @param value 欄位的值
     * @param namePath 欄位的name
     * @param allValues 所有的欄位
     * @returns 欄位新的值，如果返回對象，會和所有值 merge 一次
     *
     * @example {name:[a,b] => {name:a,b }    transform: (value,namePath,allValues)=> value.join(",")
     * @example {name: string => { newName:string }    transform: (value,namePath,allValues)=> { newName:value }
     * @example {name:dayjs} => {name:string transform: (value,namePath,allValues)=> value.format("YYYY-MM-DD")
     * @example {name:dayjs}=> {name:時間戳} transform: (value,namePath,allValues)=> value.valueOf()
     * @example {name:{value,label}} => { name:string} transform: (value,namePath,allValues)=> value.value
     * @example {name:{value,label}} => { valueName,labelName  } transform: (value,namePath,allValues)=> { valueName:value.value, labelName:value.name }
     */
    transform?: SearchTransformKeyFn;
    dataFormat?: string;
    proFormFieldKey?: any;
} & WarpFormItemProps;
declare const ProFormItem: React.FC<ProFormItemProps>;
export { FormItemProvide };
export default ProFormItem;
