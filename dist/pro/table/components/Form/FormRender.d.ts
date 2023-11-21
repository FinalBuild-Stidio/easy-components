import React from 'react';
import type { FormItemProps } from '../../../../base';
import type { BaseQueryFilterProps, ProFormInstance, ProFormProps } from '../../../form';
import type { ActionType, ProColumns, ProTableProps } from '../../typing';
import type { ProSchemaComponentTypes } from '../../../utils';
export type SearchConfig = BaseQueryFilterProps & {
    filterType?: 'query' | 'light';
};
export type TableFormItem<T, U = any> = {
    onSubmit?: (value: T, firstLoad: boolean) => void;
    onReset?: (value: T) => void;
    form?: Omit<ProFormProps, 'form'>;
    type?: ProSchemaComponentTypes;
    dateFormatter?: ProTableProps<T, U, any>['dateFormatter'];
    search?: false | SearchConfig;
    columns: ProColumns<U, any>[];
    formRef: React.MutableRefObject<ProFormInstance | undefined>;
    submitButtonLoading?: boolean;
    manualRequest?: boolean;
    bordered?: boolean;
    action: React.MutableRefObject<ActionType | undefined>;
    ghost?: boolean;
} & Omit<FormItemProps, 'children' | 'onReset'>;
/**
 * 這裡會把 列配置轉化為 form 表單
 *
 * @param param0
 * @returns
 */
declare const FormRender: <T, U = any>({ onSubmit, formRef, dateFormatter, type, columns, action, ghost, manualRequest, onReset, submitButtonLoading, search: searchConfig, form: formConfig, bordered, }: TableFormItem<T, U>) => React.JSX.Element;
export default FormRender;
