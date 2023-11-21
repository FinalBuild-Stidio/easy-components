import React from 'react';
import type { DrawerProps, FormProps } from '../../../../base';
import type { CommonFormProps } from '../../BaseForm';
export type CustomizeResizeType = {
    onResize?: () => void;
    maxWidth?: DrawerProps['width'];
    minWidth?: DrawerProps['width'];
};
export type DrawerFormProps<T = Record<string, any>, U = Record<string, any>> = Omit<FormProps, 'onFinish' | 'title'> & CommonFormProps<T, U> & {
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
    /** @name 用於觸發抽屜打開的 dom ，只能設置一個*/
    trigger?: JSX.Element;
    /**
     * @deprecated use onOpenChange replace
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * @deprecated use open replace
     */
    visible?: boolean;
    /** @name 受控的打開關閉 */
    open?: DrawerProps['open'];
    /**
     * @name 打開關閉的事件 */
    onOpenChange?: (visible: boolean) => void;
    /**
     * 不支持 'visible'，請使用全局的 visible
     *
     * @name 抽屜的配置
     */
    drawerProps?: Omit<DrawerProps, 'visible'>;
    /** @name 抽屜的標題 */
    title?: DrawerProps['title'];
    /** @name 抽屜的寬度 */
    width?: DrawerProps['width'];
    /**
     *
     * @name draggableDrawer
     */
    resize?: CustomizeResizeType | boolean;
};
declare function DrawerForm<T = Record<string, any>, U = Record<string, any>>({ children, trigger, onVisibleChange, drawerProps, onFinish, submitTimeout, title, width, resize, onOpenChange, visible: propVisible, open: propsOpen, ...rest }: DrawerFormProps<T, U>): React.JSX.Element;
export { DrawerForm };
