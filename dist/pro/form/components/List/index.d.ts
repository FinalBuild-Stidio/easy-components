import type { NamePath } from 'rc-field-form/lib/interface';
import type { ReactNode } from 'react';
import React from 'react';
import type { ColProps } from '../../../../base';
import type { LabelTooltipType } from '../../../../base/form/FormItemLabel';
import type { FormListFieldData, FormListOperation, FormListProps } from '../../../../base/form';
import type { ProFormGridConfig } from '../../typing';
import type { ChildrenItemFunction, FormListActionGuard, ProFromListCommonProps } from './ListItem';
declare const FormListContext: React.Context<Record<string, any> | (FormListFieldData & {
    listName: NamePath;
})>;
export type FormListActionType<T = any> = FormListOperation & {
    get: (index: number) => T | undefined;
    getList: () => T[] | undefined;
};
export type ProFormListProps<T> = Omit<FormListProps, 'children' | 'rules'> & ProFromListCommonProps & {
    /**
     * @name 列表的標籤
     */
    label?: ReactNode;
    /**
     * @name 標題旁邊的？號提示顯示的資訊
     *
     * @example 自訂提示資訊
     * <ProForm.Group title="標題"  tooltip="自訂提示資訊">
     *  @example 自訂Icon
     * <ProForm.Group title="標題"  tooltip={{icon:<Info/>,title:自訂提示資訊}}>
     */
    tooltip?: LabelTooltipType;
    /**
     * @name 行操作的鉤子設定
     *
     * @example 阻止刪除 actionGuard={{beforeAddRow:()=> return false}}
     * @example 阻止新增 actionGuard={{beforeAddRow:()=> return false}}
     */
    actionGuard?: FormListActionGuard;
    children?: ReactNode | ChildrenItemFunction;
    /**
     * @name 在最後增加一個 dom
     *
     * @example 自訂新增按鈕
     * fieldExtraRender={(fieldAction) => {<a onClick={()=>fieldAction.add({id:"xx"})}>新增</a>}}
     */
    fieldExtraRender?: (fieldAction: FormListOperation, meta: {
        errors?: React.ReactNode[];
        warnings?: React.ReactNode[];
    }) => React.ReactNode;
    /**
     * @name 取得到 list 操作實例
     * @description 可用刪除，新增，移動等操作
     *
     * @example  actionRef?.current.add?.({},1);
     * @example  actionRef?.current.remove?.(1);
     * @example  actionRef?.current.move?.(1,2);
     * @example  actionRef?.current.get?.(1);
     * @example  actionRef?.current.getList?.();
     */
    actionRef?: React.MutableRefObject<FormListActionType<T> | undefined>;
    /** 放在div上面的屬性 */
    style?: React.CSSProperties;
    /**
     * 資料新增成功回調
     */
    onAfterAdd?: (...params: [...Parameters<FormListOperation['add']>, number]) => void;
    /**
     * 資料移除成功回調
     */
    onAfterRemove?: (...params: [...Parameters<FormListOperation['remove']>, number]) => void;
    /** 是否同時校驗列表是否為空 */
    isValidateList?: boolean;
    /** 當 isValidateList 為 true 時執行為空提示 */
    emptyListMessage?: string;
    rules?: (Required<FormListProps>['rules'][number] & {
        required?: boolean;
    })[];
    required?: boolean;
    wrapperCol?: ColProps;
    className?: string;
    readonly?: boolean;
} & Pick<ProFormGridConfig, 'colProps' | 'rowProps'>;
declare function ProFormList<T>(props: ProFormListProps<T>): React.JSX.Element | null;
export { FormListContext, ProFormList };
