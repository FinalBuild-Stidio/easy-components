import React from 'react';
import type { FormInstance, StepsProps } from '../../../../base';
import type { FormProviderProps } from '../../../../base/form/context';
import type { ProFormInstance } from '../../BaseForm';
import type { SubmitterProps } from '../../components';
import type { ProFormProps } from '../ProForm';
import type { StepFormProps } from './StepForm';
type StepsFormProps<T = Record<string, any>> = {
    /**
     * 返回 true 會重設步數，並且清空表單
     *
     * @name 提交方法
     */
    onFinish?: (values: T) => Promise<boolean | void>;
    current?: number;
    stepsProps?: StepsProps;
    formProps?: ProFormProps<T>;
    onCurrentChange?: (current: number) => void;
    /** 自訂步驟器 */
    stepsRender?: (steps: {
        key: string;
        title?: React.ReactNode;
    }[], defaultDom: React.ReactNode) => React.ReactNode;
    /** @name 當前展示表單的 formRef */
    formRef?: React.MutableRefObject<ProFormInstance<any> | undefined | null>;
    /** @name 所有表單的 formMapRef */
    formMapRef?: React.MutableRefObject<React.MutableRefObject<FormInstance<any> | undefined>[]>;
    /**
     * 自訂單個表單
     *
     * @param form From 的 dom，可以放置到別的位置
     */
    stepFormRender?: (from: React.ReactNode) => React.ReactNode;
    /**
     * 自訂整個表單區域
     *
     * @param form From 的 dom，可以放置到別的位置
     * @param submitter 操作按鈕
     */
    stepsFormRender?: (from: React.ReactNode, submitter: React.ReactNode) => React.ReactNode;
    /** 按鈕的統一配置，優先度低於分步表單的配置 */
    submitter?: SubmitterProps<{
        step: number;
        onPre: () => void;
        form?: FormInstance<any>;
    }> | false;
    containerStyle?: React.CSSProperties;
    /**
     * 自訂整個佈局。
     *
     * @param layoutDom stepsDom 和 formDom 元素可以放置在任何地方。
     */
    layoutRender?: (layoutDom: {
        stepsDom: React.ReactElement;
        formDom: React.ReactElement;
    }) => React.ReactNode;
} & Omit<FormProviderProps, 'children'>;
export declare const StepsFormProvide: React.Context<{
    regForm: (name: string, props: StepsFormProps<any>) => void;
    unRegForm: (name: string) => void;
    onFormFinish: (name: string, formData: any) => void;
    keyArray: string[];
    formArrayRef: React.MutableRefObject<React.MutableRefObject<FormInstance<any> | undefined>[]>;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    lastStep: boolean;
    formMapRef: React.MutableRefObject<Map<string, StepFormProps>>;
    next: () => void;
} | undefined>;
/**
 * 給  StepForm 傳遞資訊
 */
export declare const StepFormProvide: React.Context<StepFormProps<any> | null>;
declare function StepsFormWarp<T = Record<string, any>>(props: StepsFormProps<T> & {
    children: any;
}): React.JSX.Element;
declare namespace StepsFormWarp {
    var StepForm: typeof import("./StepForm").default;
    var useForm: typeof import("../../../../base/form/Form").useForm;
}
export type { StepFormProps, StepsFormProps };
export { StepsFormWarp as StepsForm };
