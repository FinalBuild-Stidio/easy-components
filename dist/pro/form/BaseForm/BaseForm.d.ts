import type { FieldProps } from '../typing';
import type { ProFieldProps } from '../../utils/typing';
import { ProFormInstanceType } from '../../utils/components/ProFormContext';
import type { ProRequestData } from '../../utils/hooks/useFetchData';
import type { FormInstance, FormItemProps, FormProps } from '../../../base/form';
import type dayjs from 'dayjs';
import React from 'react';
import type { SubmitterProps } from '../components';
import type { ProFormGridConfig, ProFormGroupProps } from '../typing';
export type CommonFormProps<T = Record<string, any>, U = Record<string, any>> = {
    /**
     * @name 自訂提交的設定
     *
     * @example 不顯示提交按鈕和重設按鈕
     * submitter={false}
     * @example 修改重設按鈕的 style ，並且隱藏提交按鈕
     * submitter={{resetButtonProps: { type: 'dashed'},submitButtonProps: { style: { display: 'none', }}}}
     *
     * @example 修改提交按鈕和重設按鈕的順序
     * submitter={{ render:(props,dom)=> [...dom.reverse()]}}
     *
     * @example 修改提交和重設按鈕文字
     * submitter={{ searchConfig: { submitText: '提交2',restText: '重設2'}}}
     */
    submitter?: SubmitterProps<{
        form?: FormInstance<any>;
    }> | false;
    /**
     * @name 表單結束後調用
     * @description 支援非同步操作，更加方便
     *
     * @example onFinish={async (values) => { await save(values); return true }}
     */
    onFinish?: (formData: T) => Promise<boolean | void>;
    /**
     * @name 表單按鈕的 loading 狀態
     */
    loading?: boolean;
    /**
     * @name 這是一個可選的屬性(onLoadingChange)，它接受一個名為loading的參數，類型為boolean，表示載入狀態是否改變。
     * 當loading狀態發生變化時，將會調用一個函數，這個函數接受這個loading狀態作為參數，並且沒有返回值(void)。
     */
    onLoadingChange?: (loading: boolean) => void;
    /**
     * @name 取得 ProFormInstance
     *
     * ProFormInstance 可以用來取得當前表單的一些資訊
     *
     * @example 取得 name 的值 formRef.current.getFieldValue("name");
     * @example 取得所有的表單值 formRef.current.getFieldsValue(true);
     */
    formRef?: React.MutableRefObject<ProFormInstance<T> | undefined> | React.RefObject<ProFormInstance<T> | undefined>;
    /**
     * @name 同步結果到 url 中
     * */
    syncToUrl?: boolean | ((values: T, type: 'get' | 'set') => T);
    /**
     * @name 當 syncToUrl 為 true，在頁面回顯示時，以url上的參數為主，預設為false
     */
    syncToUrlAsImportant?: boolean;
    /**
     * @name 額外的 url 參數 中
     * */
    extraUrlParams?: Record<string, any>;
    /**
     * 同步結果到 initialValues,預設為true如果為false，reset的時將會忽略從url上取得的資料
     *
     * @name 是否將 url 參數寫入 initialValues
     */
    syncToInitialValues?: boolean;
    /**
     * 如果為 false,會原樣保存。
     *
     * @default true
     * @param 要不要值中的 Null 和 undefined
     */
    omitNil?: boolean;
    /**
     * 格式化 Date 的方式，預設轉換為 string
     *
     * @example  dateFormatter="string" : Moment -> YYYY-MM-DD
     * @example  dateFormatter="YYYY-MM-DD  HH:mm:SS" Moment -> YYYY-MM-DD  HH:mm:SS
     * @example  dateFormatter="HH:mm:SS" Moment -> HH:mm:SS
     * @example  dateFormatter="number" Moment -> timestamp
     * @example  dateFormatter=false Moment -> Moment
     * @example  dateFormatter={(value)=>value.format("YYYY-MM-DD")}
     */
    dateFormatter?: 'string' | 'number' | ((value: dayjs.Dayjs, valueType: string) => string | number) | false;
    /**
     * @name 表單初始化成功，比如布局，label等計算完成
     * @example  (values)=>{ console.log(values) }
     */
    onInit?: (values: T, form: ProFormInstance<any>) => void;
    /**
     * @name 發起網路請求的參數
     *
     * @example  params={{productId: 1}}
     * */
    params?: U;
    /**
     * @name 發起網路請求的參數,返回值會覆蓋給 initialValues
     *
     * @example async (params)=>{ return initialValues }
     */
    request?: ProRequestData<T, U>;
    /** 是否回車提交 */
    isKeyPressSubmit?: boolean;
    /** 用於控制form 是否相同的key，高階用法 */
    formKey?: string;
    /**
     * @name自動選中第一項
     * @description 只對有input的類型有效
     */
    autoFocusFirstInput?: boolean;
    /**
     *  @name 是否唯獨模式，對所有表單項生效
     *  @description 優先低於表單項的 readonly
     */
    readonly?: boolean;
} & ProFormGridConfig;
export type BaseFormProps<T = Record<string, any>, U = Record<string, any>> = {
    contentRender?: (items: React.ReactNode[], submitter: React.ReactElement<SubmitterProps> | undefined, form: FormInstance<any>) => React.ReactNode;
    fieldProps?: FieldProps<unknown>;
    proFieldProps?: ProFieldProps;
    /** 表單初始化完成，form已經存在，可以進行賦值的操作了 */
    onInit?: (values: T, form: ProFormInstance<any>) => void;
    formItemProps?: FormItemProps;
    groupProps?: ProFormGroupProps;
    /** 是否回車提交 */
    isKeyPressSubmit?: boolean;
    /** Form 元件的類型，內部使用 */
    formComponentType?: 'DrawerForm' | 'ModalForm' | 'QueryFilter';
} & Omit<FormProps, 'onFinish'> & CommonFormProps<T, U>;
type ProFormInstance<T = any> = FormInstance<T> & ProFormInstanceType<T>;
declare function BaseForm<T = Record<string, any>, U = Record<string, any>>(props: BaseFormProps<T, U>): React.JSX.Element;
export type { FormProps, ProFormInstance, FormItemProps, FormInstance };
export { BaseForm };
