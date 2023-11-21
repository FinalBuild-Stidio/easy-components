import type { FormInstance } from '../../../../base';
import type { FormListFieldData, FormListOperation, FormListProps } from '../../../../base/form';
import type { CSSProperties, ReactNode } from 'react';
import React from 'react';
export type ChildrenItemFunction = (
/**
 * @name 當前行的meta資訊
 * @example {name: number; key: number}
 */
meta: FormListFieldData, 
/**
 * @name 當前行的行號
 */
index: number, 
/**
 * @name 用於操作行的一些快捷方法
 * @example 給第二行增加資料 action.add?.({},1);
 * @example 刪除第二行 action.remove?.(1);
 * @example 從 1 移到 2: action.move?.(2,1);
 * @example 取得當前行的資料: action.getCurrentRowData() -> {id:"xxx",name:'123',age:18}
 * @example 設置當前行的資料: {id:"123",name:'123'} -> action.setCurrentRowData({name:'xxx'}) -> {id:"123",name:'xxx'}
 * @example 清空檔前行的資料：{id:"123",name:'123'} -> action.setCurrentRowData({name:undefined}) -> {id:"123"}
 */
action: FormListOperation & {
    /**
     * @name 取得當前行的資料
     * @example getCurrentRowData -> {id:"xxx",name:'123',age:18}
     */
    getCurrentRowData: () => any;
    /**
     * @name 設置當前行的資料
     * @example {id:"123",name:'123'} -> setCurrentRowData({name:'xxx'}) -> {id:"123",name:'123'}
     * @example {id:"123",name:'123'} -> setCurrentRowData({name:undefined}) -> {id:"123"}
     */
    setCurrentRowData: (data: any) => void;
}, 
/**
 * 透傳總行數
 */
count: number) => React.ReactNode;
export type IconConfig = {
    /**
     * 新的icon的元件，我們會將其實例化
     * Icon: ()=> <div/>
     */
    Icon?: React.FC<any>;
    /**
     * tooltip 的提示文案
     */
    tooltipText?: string;
};
export type FormListListListMete = {
    name: FormListProps['name'];
    field: FormListFieldData;
    fields: FormListFieldData[];
    index: number;
    operation: FormListOperation;
    record: Record<string, any>;
    meta: {
        errors: React.ReactNode[];
    };
};
export type FormListActionGuard = {
    /**
     * @name 新增行之前的鉤子，返回false，會阻止這個行為
     *
     * @example 阻止新增 beforeAddRow={()=> return false}
     */
    beforeAddRow?: (...params: [...Parameters<FormListOperation['add']>, number]) => boolean | Promise<boolean>;
    /**
     * @name 刪除行之前的鉤子，返回false，會阻止這個行為
     *
     * @example 阻止刪除 beforeAddRow={()=> return false}
     */
    beforeRemoveRow?: (...params: [...Parameters<FormListOperation['remove']>, number]) => boolean | Promise<boolean>;
};
export type ProFromListCommonProps = {
    /**
     * @name 複製按鈕的設定
     * @description 可以自訂複製按鈕的文案，圖示，tooltip，設置為 false 就會消失
     * @type {IconConfig|false}
     */
    copyIconProps?: IconConfig | false;
    /**
     * @name 刪除按鈕的設定
     * @description 可以自訂刪除按鈕的文案，圖示，tooltip，設置為 false 就會消失
     * @type {IconConfig|false}
     */
    deleteIconProps?: IconConfig | false;
    /**
     * @name 新建增加的預設資料
     * @description 如果是個每次新增資料都會調用這個函數，返回一個預設的資料
     *
     * @example 新建的時候自動生成預設值
     * creatorRecord={{ age: 18}}
     * @example 每次生成新的資料都會生成 id
     * creatorRecord={()=>{ id: crypto.randomUUID()}}
     */
    creatorRecord?: Record<string, any> | (() => Record<string, any>);
    /**
     * @name 自訂操作按鈕
     *
     * @example 刪除按鈕
     * actionRender:(field,action)=><a onClick={()=>action.remove(field.name)}>刪除</a>
     * @example 最多只能新增三行
     * actionRender:(f,action,_,count)=><a onClick={()=>
     *   count>2?alert("最多三行！"):action.add({id:"xx"})}>刪除
     * </a>
     */
    actionRender?: (field: FormListFieldData, 
    /**
     * 操作能力
     * @example  action.add(data) 新增一行
     * @example  action.remove(index) 刪除一行
     * @example  action.move(formIndex,targetIndex) 移動一行
     */
    action: FormListOperation, 
    /**
     * 預設的操作dom
     * [複製，刪除]
     */
    defaultActionDom: ReactNode[], 
    /**
     * 當前共有幾個列表項
     */
    count: number) => ReactNode[];
    /**
     * @name list 的內容的渲染函數
     *
     * @example 全部包再一個卡片裡面
     * itemContainerRender: (doms,listMeta) => <Card title={listMeta.field.name}>{doms}</Card>
     */
    itemContainerRender?: (doms: ReactNode, listMeta: FormListListListMete) => ReactNode;
    /**
     * @name 自訂Item，可以用來將 action 放到別的地方
     *
     * @example 將每個item放到一個卡片裡
     * itemRender: (dom,listMeta) => <Card extra={dom.action}  title={listMeta?.record?.name}>{dom.listDom}</Card>
     */
    itemRender?: (dom: {
        listDom: ReactNode;
        action: ReactNode;
    }, 
    /**
     * list 的基本資訊
     */
    listMeta: FormListListListMete) => ReactNode;
    /**
     * @name 總是顯示每一行的label
     * @default:false
     */
    alwaysShowItemLabel?: boolean;
    /**
     * @name 允許增加的最大條數
     */
    max?: number;
    /**
     * @name 允許增加的最少條數，刪除時校驗
     */
    min?: number;
    /**
     * @name 盒子的類名稱
     */
    containerClassName?: string;
    /**
     * @name 盒子的 style
     */
    containerStyle?: CSSProperties;
};
export type ProFormListItemProps = ProFromListCommonProps & {
    formInstance: FormInstance;
    action: FormListOperation;
    actionGuard?: FormListActionGuard;
    prefixCls: string;
    fields: FormListFieldData[];
    meta: {
        errors: ReactNode[];
    };
    name: FormListProps['name'];
    originName: FormListProps['name'];
    fieldExtraRender?: (fieldAction: FormListOperation, meta: {
        errors?: React.ReactNode[];
        warnings?: React.ReactNode[];
    }) => React.ReactNode;
    /** 列表當前條目數量 */
    count: number;
    children?: ReactNode | ChildrenItemFunction;
    /**
     * 資料新增成功回調
     */
    onAfterAdd?: (...params: [...Parameters<FormListOperation['add']>, number]) => void;
    /**
     * 資料移除成功回調
     */
    onAfterRemove?: (...params: [...Parameters<FormListOperation['remove']>, number]) => void;
    /** 是否唯獨模式 */
    readonly: boolean;
};
declare const ProFormListItem: React.FC<ProFormListItemProps & {
    field: FormListFieldData;
    index: number;
}>;
export { ProFormListItem };
