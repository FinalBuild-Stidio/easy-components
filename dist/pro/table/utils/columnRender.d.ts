import React from 'react';
import type { ProFieldEmptyText } from '../../../pro/field';
import type { ContainerType } from '../Store/Provide';
import type { ProColumns } from '../typing';
import type { ProSchemaComponentTypes } from '../../utils';
/** 轉化列的定義 */
type ColumnRenderInterface<T> = {
    columnProps: ProColumns<T>;
    text: any;
    rowData: T;
    index: number;
    columnEmptyText?: ProFieldEmptyText;
    type: ProSchemaComponentTypes;
    counter: ReturnType<ContainerType>;
    subName: string[];
    marginSM?: number;
};
/**
 * 增加了 icon 的功能 render title
 *
 * @param item
 */
export declare const renderColumnsTitle: (item: ProColumns<any>) => string | number | boolean | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | React.JSX.Element | null | undefined;
/**
 * 預設的 filter 方法
 *
 * @param value
 * @param record
 * @param dataIndex
 * @returns
 */
export declare const defaultOnFilter: (value: string, record: any, dataIndex: string | string[]) => boolean;
/**
 * 這個組件負責單元格的具體渲染
 *
 * @param param0
 */
export declare function columnRender<T>({ columnProps, text, rowData, index, columnEmptyText, counter, type, subName, marginSM, }: ColumnRenderInterface<T>): any;
export {};
