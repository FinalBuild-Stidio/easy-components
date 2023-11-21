import React from 'react';
import type { TableColumnType } from '../../../../base';
import type { LabelTooltipType } from '../../../../base/form/FormItemLabel';
import type { ActionType, OptionSearchProps, ProTableProps } from '../../typing';
import type { ListToolBarProps } from '../ListToolBar';
export type SettingOptionType = {
    draggable?: boolean;
    checkable?: boolean;
    showListItemOption?: boolean;
    checkedReset?: boolean;
    listsHeight?: number;
    extra?: React.ReactNode;
    children?: React.ReactNode;
    settingIcon?: React.ReactNode;
};
export type OptionConfig = {
    density?: boolean;
    fullScreen?: OptionsType;
    reload?: OptionsType;
    setting?: boolean | SettingOptionType;
    search?: (OptionSearchProps & {
        name?: string;
    }) | boolean;
    reloadIcon?: React.ReactNode;
    densityIcon?: React.ReactNode;
};
export type OptionsFunctionType = (e: React.MouseEvent<HTMLSpanElement>, action?: ActionType) => void;
export type OptionsType = OptionsFunctionType | boolean;
export type ToolBarProps<T = unknown> = {
    headerTitle?: React.ReactNode;
    tooltip?: string | LabelTooltipType;
    toolbar?: ListToolBarProps;
    toolBarRender?: (action: ActionType | undefined, rows: {
        selectedRowKeys?: (string | number)[];
        selectedRows?: T[];
    }) => React.ReactNode[];
    action: React.MutableRefObject<ActionType | undefined>;
    options?: OptionConfig | false;
    optionsRender?: ToolbarRenderProps<T>['optionsRender'];
    selectedRowKeys?: (string | number)[];
    selectedRows?: T[];
    className?: string;
    onSearch?: (keyWords: string) => void;
    columns: TableColumnType<T>[];
};
export type ToolbarRenderProps<T> = {
    hideToolbar: boolean;
    onFormSearchSubmit: (params: any) => void;
    searchNode: React.ReactNode;
    tableColumn: any[];
    tooltip?: string | LabelTooltipType;
    selectedRows: T[];
    selectedRowKeys: React.Key[] | (string | number)[];
    headerTitle: React.ReactNode;
    toolbar: ProTableProps<T, any, any>['toolbar'];
    options: ProTableProps<T, any, any>['options'];
    optionsRender?: (props: ToolBarProps<T>, defaultDom: React.ReactNode[]) => React.ReactNode[];
    toolBarRender?: ToolBarProps<T>['toolBarRender'];
    actionRef: React.MutableRefObject<ActionType | undefined>;
};
/** 這裡負責與table交互，並且減少 render次數 */
declare class ToolbarRender<T> extends React.Component<ToolbarRenderProps<T>> {
    onSearch: (keyword: string) => void;
    isEquals: (next: ToolbarRenderProps<T>) => boolean;
    shouldComponentUpdate: (next: ToolbarRenderProps<T>) => boolean;
    render: () => React.JSX.Element | null;
}
export default ToolbarRender;
