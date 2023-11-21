import type { FormInstance } from '../../../../base';
import type { NamePath } from 'rc-field-form/lib/interface';
import React from 'react';
export type ProFormInstanceType<T> = {
    /**
     * 取得被 ProForm 格式化後的所有資料
     * @param nameList boolean
     * @returns T
     *
     * @example  getFieldsFormatValue() ->返回所有資料
     * @example  getFieldsFormatValue(true) ->返回所有資料，即使沒有被 form 託管的
     */
    getFieldsFormatValue?: (nameList?: true, omitNil?: boolean) => T;
    /**
     * 取得被 ProForm 格式化後的單個資料
     * @param nameList (string|number)[]
     * @returns T
     *
     * @example {a:{b:value}} -> getFieldFormatValue(['a', 'b']) -> value
     */
    getFieldFormatValue?: (nameList?: NamePath) => T;
    /**
     * 取得被 ProForm 格式化後的單個資料, 包含他的 name
     * @param nameList (string|number)[]
     * @returns T
     *
     * @example {a:{b:value}}->getFieldFormatValueObject(['a','b'])->{a:{b:value}}
     */
    getFieldFormatValueObject?: (nameList?: NamePath) => T;
    /**
     *驗欄位後返回格式化之後的所有資料
     * @param nameList (string|number)[]
     * @returns T
     *
     * @example validateFieldsReturnFormatValue -> {a:{b:value}}
     */
    validateFieldsReturnFormatValue?: (nameList?: NamePath[]) => Promise<T>;
};
export declare const ProFormContext: React.Context<ProFormInstanceType<any> & {
    formRef?: React.MutableRefObject<FormInstance<any>> | undefined;
}>;
