import React from 'react';
import type { ColProps, RowProps, FormProps } from '../../../../base';
import type { CommonFormProps } from '../../BaseForm';
import type { ActionsProps } from './Actions';
export type SpanConfig = number | {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};
export type BaseQueryFilterProps = Omit<ActionsProps, 'submitter' | 'setCollapsed' | 'isForm'> & {
    className?: string;
    defaultCollapsed?: boolean;
    /**
     * @name layout 的布局設置
     * @type 'horizontal' | 'inline' | 'vertical';
     */
    layout?: FormProps['layout'];
    /**
     * @name 默認一行顯示幾個表單項
     */
    defaultColsNumber?: number;
    /**
     * @name 文字標籤的寬度
     *
     * @example 文字標籤寬 80 ，一般用於只有兩個字
     * labelWidth={80}
     * @example 文字標籤寬 140 ，一般用於有四個字
     * labelWidth={140}
     * @example 自動計算，會導致不整齊
     * labelWidth="auto"
     */
    labelWidth?: number | 'auto';
    /**
     * @name 每一行之前要不要有分割線
     * @description 只有在 `layout` 為 `vertical` 時生效
     */
    split?: boolean;
    /**
     * @name 配置列數，一般而言是 8 的倍數
     *
     * @example 配置一行4個
     * span={6}
     *
     * @example 配置一行3個
     * span={6}
     *
     * @example 根據螢幕寬度配置
     * span={xs: 24, sm: 12, md: 8, lg: 6, xl: 6, xxl: 6}
     * */
    span?: SpanConfig;
    /**
     * @name 查詢按鈕的文本
     *  */
    searchText?: string;
    /**
     * @name 重設按鈕的文本
     */
    resetText?: string;
    /**
     * @name 查詢表單柵格間隔
     *
     * @example searchGutter={24}
     * */
    searchGutter?: RowProps['gutter'];
    form?: FormProps['form'];
    /**
     * @param searchConfig 基礎的配置
     * @param props 更加詳細的配置 {
     *     type?: 'form' | 'list' | 'table' | 'cardList' | undefined;
     *     form: FormInstance;
     *     submit: () => void;
     *     collapse: boolean;
     *     setCollapse: (collapse: boolean) => void;
     *     showCollapseButton: boolean; }
     * @name 底部操作欄的 render
     *
     *
     * @example 增加一個清空按鈕
     * optionRender={(searchConfig, props, dom) =>[ <a key="clear">清空</a>,...dom]}
     *
     * @example 增自訂提交
     *
     * optionRender={(searchConfig) => [<a key="submit" onClick={()=> searchConfig?.form?.submit()}>提交</a>]}
     */
    optionRender?: ((searchConfig: Omit<BaseQueryFilterProps, 'submitter' | 'isForm'>, props: Omit<BaseQueryFilterProps, 'searchConfig'>, dom: React.ReactNode[]) => React.ReactNode[]) | false;
    /**
     * @name 忽略 Form.Item rule規則配置
     */
    ignoreRules?: boolean;
    /**
     * @name 是否顯示 collapse 隱藏個數
     */
    showHiddenNum?: boolean;
    submitterColSpanProps?: Omit<ColProps, 'span'> & {
        span: number;
    };
};
export type QueryFilterProps<T = Record<string, any>, U = Record<string, any>> = Omit<FormProps<T>, 'onFinish'> & CommonFormProps<T, U> & BaseQueryFilterProps & {
    onReset?: (values: T) => void;
};
declare function QueryFilter<T = Record<string, any>>(props: QueryFilterProps<T>): React.JSX.Element;
export { QueryFilter };
