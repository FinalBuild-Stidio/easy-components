import React from 'react';
import type { SelectProps } from '../../../../base';
import type { RefSelectProps } from '../../../../base/select';
import type { ProFormFieldItemProps, ProFormFieldRemoteProps } from '../../typing';
export type ProFormSelectProps<ValueType = any, OptionType = any> = ProFormFieldItemProps<SelectProps<ValueType> & {
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
     * 當搜索關鍵字發生變化時是否請求 API 資料
     *
     * @default true
     */
    fetchDataOnSearch?: boolean;
    /** 自訂選項渲染 */
    optionItemRender?: (item: ValueType) => React.ReactNode;
}, RefSelectProps> & {
    options?: SelectProps<ValueType, any>['options'] | string[];
    mode?: SelectProps<ValueType, any>['mode'] | 'single';
    showSearch?: SelectProps<ValueType, any>['showSearch'];
    readonly?: boolean;
    onChange?: SelectProps<ValueType, any>['onChange'];
} & ProFormFieldRemoteProps;
declare const ProFormSearchSelect: <T, OptionType = any>(props: ProFormSelectProps<T, OptionType>) => React.ReactElement;
declare const WrappedProFormSelect: (<T, OptionType = any>(props: ProFormSelectProps<T, OptionType>) => React.ReactElement) & {
    SearchSelect: typeof ProFormSearchSelect;
};
export default WrappedProFormSelect;
