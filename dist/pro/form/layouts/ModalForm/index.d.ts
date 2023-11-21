import React from 'react';
import type { FormProps, ModalProps } from '../../../../base';
import type { CommonFormProps } from '../../BaseForm';
export type ModalFormProps<T = Record<string, any>, U = Record<string, any>> = Omit<FormProps<T>, 'onFinish' | 'title'> & CommonFormProps<T, U> & {
    /**
     * 接收任意值，返回 真值 會關掉這個抽屜
     *
     * @name 表單結束後調用
     *
     * @example 結束後關閉抽屜
     * onFinish: async ()=> {await save(); return true}
     *
     * @example 結束後不關閉抽屜
     * onFinish: async ()=> {await save(); return false}
     */
    onFinish?: (formData: T) => Promise<any>;
    /** @name 提交資料時，禁用取消按鈕的超時時間（毫秒）。 */
    submitTimeout?: number;
    /** @name 用於觸發抽屜打開的 dom */
    trigger?: JSX.Element;
    /** @name 受控的打開關閉 */
    open?: ModalProps['open'];
    /**
     * @deprecated use onOpenChange replace
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * @deprecated use open replace
     */
    visible?: boolean;
    /** @name 打開關閉的事件 */
    onOpenChange?: (visible: boolean) => void;
    /**
     * 不支持 'visible'，請使用全局的 visible
     *
     * @name 彈框的屬性
     */
    modalProps?: Omit<ModalProps, 'visible'>;
    /** @name 彈框的標題 */
    title?: ModalProps['title'];
    /** @name 彈框的寬度 */
    width?: ModalProps['width'];
};
declare function ModalForm<T = Record<string, any>, U = Record<string, any>>({ children, trigger, onVisibleChange, onOpenChange, modalProps, onFinish, submitTimeout, title, width, visible: propVisible, open: propsOpen, ...rest }: ModalFormProps<T, U>): React.JSX.Element;
export { ModalForm };
