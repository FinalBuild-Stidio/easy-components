import React from 'react';
import type { DescriptionsProps, FormProps } from '../../base';
import type { LabelTooltipType } from '../../base/form/FormItemLabel';
import type { RequestData } from './useFetchData';
import type { ProCoreActionType, ProFieldValueType, ProSchema, ProSchemaComponentTypes } from '../utils';
import type { ProFieldFCMode } from '../../providers';
export interface DescriptionsItemProps {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    label?: React.ReactNode;
    labelStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    children: React.ReactNode;
    span?: number;
}
/**
 * 定義列表屬性的類型定義，用於定義列表的一列
 * @typedef {Object} ProDescriptionsItemProps
 * @property {ProSchema} schema - 用於生成表格項的 schema 配置對象
 * @property {boolean} [hide] - 是否隱藏該列，可用於權限控制
 * @property {boolean} [plain] - 是否只展示文字，不展示標籤
 * @property {boolean} [copyable] - 是否可以拷貝該列的內容
 * @property {boolean | { showTitle?: boolean }} [ellipsis] - 是否展示省略號，如果是一個對象，可以設置滑鼠懸浮時是否展示完整的內容
 * @property {ProFieldFCMode} [mode] - ProField 組件的模式
 * @property {React.ReactNode} [children] - 表格項的子組件
 * @property {number} [order] - 表格項的排序
 * @property {number} [index] - 表格項的索引
 * @template T - 表格資料的類型
 * @template ValueType - 表格項的值類型
 */
export type ProDescriptionsItemProps<T = Record<string, any>, ValueType = 'text'> = ProSchema<T, Omit<DescriptionsItemProps, 'children'> & {
    hide?: boolean;
    plain?: boolean;
    copyable?: boolean;
    ellipsis?: boolean | {
        showTitle?: boolean;
    };
    mode?: ProFieldFCMode;
    children?: React.ReactNode;
    /**
     * 子項的排序
     */
    order?: number;
    /**
     * 子項的索引
     */
    index?: number;
}, ProSchemaComponentTypes, ValueType>;
export type ProDescriptionsActionType = ProCoreActionType;
export type ProDescriptionsProps<RecordType = Record<string, any>, ValueType = 'text'> = DescriptionsProps & {
    /** Params 參數 params 改變的時候會觸發 reload */
    params?: Record<string, any>;
    /** 網路請求報錯 */
    onRequestError?: (e: Error) => void;
    /** 獲取資料的方法 */
    request?: (params: Record<string, any>) => Promise<RequestData>;
    columns?: ProDescriptionsItemProps<RecordType, ValueType>[];
    /** 一些簡單的操作 */
    actionRef?: React.MutableRefObject<ProCoreActionType<any> | undefined>;
    loading?: boolean;
    onLoadingChange?: (loading?: boolean) => void;
    tooltip?: LabelTooltipType | string;
    /** @deprecated 你可以使用 tooltip，這個更改是為了與 ipass customized lib 統一 */
    tip?: string;
    /** Form props 的相關配置 */
    formProps?: FormProps;
    /** 預設的資料來源 */
    dataSource?: RecordType;
    /** 受控資料來源改變 */
    onDataSourceChange?: (value: RecordType) => void;
};
export declare const FieldRender: React.FC<ProDescriptionsItemProps<any> & {
    text: any;
    valueType: ProFieldValueType;
    entity: any;
    action: ProCoreActionType<any>;
    index: number;
    emptyText?: React.ReactNode;
}>;
declare const ProDescriptions: {
    <RecordType extends Record<string, any>, ValueType = "text">(props: ProDescriptionsProps<RecordType, ValueType>): React.JSX.Element;
    Item: React.FC<ProDescriptionsItemProps<Record<string, any>, "text">>;
};
export { ProDescriptions };
export default ProDescriptions;
