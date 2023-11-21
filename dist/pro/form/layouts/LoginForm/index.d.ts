import React from 'react';
import type { ProFormProps } from '../ProForm';
export type LoginFormProps<T> = {
    /**
     * @name form 最上面的一個提示設定，可以設定一些錯誤的提示資訊
     * @example <caption>提示登入異常</caption>
     * message={<Alert message="登入異常，請重試！"/>}
     */
    message: React.ReactNode | false;
    /**
     * @name 標題，可以設定為空
     */
    title: React.ReactNode | false;
    /**
     * @name 二級標題，可以設定為空
     */
    subTitle: React.ReactNode | false;
    /**
     * @name 自訂額外的登入功能
     *
     * @example <caption>跳轉到第三方登入</caption>
     * actions={<a>跳轉到第三方登入</a>}
     *
     * @example <caption>使用圖示</caption>
     * actions={<a><Icon type="oauth" />跳轉到第三方登入</a>}
     */
    actions: React.ReactNode;
    /**
     * @name logo 的設定，支援 ReactNode 和 url
     */
    logo?: React.ReactNode;
    children?: React.ReactNode | React.ReactNode[];
    /**
     * @name 登入框主表格的 style
     */
    contentStyle?: React.CSSProperties;
    /**
     * @name 登入框容器的 style
     */
    containerStyle?: React.CSSProperties;
    otherStyle?: React.CSSProperties;
} & Omit<ProFormProps<T>, 'title'>;
declare function LoginForm<T = Record<string, any>>(props: Partial<LoginFormProps<T>>): React.JSX.Element;
export { LoginForm };
