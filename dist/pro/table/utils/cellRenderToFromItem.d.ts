import React from 'react';
import type { ProFieldEmptyText } from '../../../pro/field';
import type { ProFormFieldProps } from '../../../pro/form';
import type { ProSchemaComponentTypes } from '../../utils';
import type { ProColumnType } from '../index';
import type { ContainerType } from '../Store/Provide';
/**
 * 拼接用於編輯的 key
 */
export declare const spellNamePath: (...rest: any[]) => React.Key[];
export type CellRenderFromItemProps<T> = {
    text: string | number | (string | number)[];
    valueType: ProColumnType['valueType'];
    index: number;
    rowData?: T;
    columnEmptyText?: ProFieldEmptyText;
    columnProps?: ProColumnType<T> & {
        entity: T;
    };
    type?: ProSchemaComponentTypes;
    recordKey?: React.Key;
    mode: 'edit' | 'read';
    /**
     * If there is, use EditableTable in the Form
     */
    prefixName?: string;
    counter: ReturnType<ContainerType>;
    proFieldProps?: ProFormFieldProps;
    subName: string[];
};
/**
 * 根據不同的類型來轉化數值
 *
 * @param text
 * @param valueType
 */
declare function cellRenderToFromItem<T>(config: CellRenderFromItemProps<T>): React.ReactNode;
export default cellRenderToFromItem;
