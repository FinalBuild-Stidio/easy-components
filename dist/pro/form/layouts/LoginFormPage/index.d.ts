import React from 'react';
import type { ProFormProps } from '../ProForm';
export type LoginFormPageProps<T> = {
    /**
     * @name form 最上面的一個提示配置，可以配置一些錯誤的提示資訊
     * @example <caption>提示登入異常</caption>
     * message={<Alert message="登入異常，請重試！"/>}
     */
    message: React.ReactNode | false;
    /**
     * @name 標題，可以配置為空
     */
    title: React.ReactNode | false;
    /**
     * @name 二級標題，可以配置為空
     */
    subTitle: React.ReactNode | false;
    /**
     * @name 自訂額外的登入功能
     *
     * @example <caption>配置支付寶登入</caption>
     * actions={<a>跳轉支付寶登入</a>}
     *
     * @example <caption>使用圖示</caption>
     * actions={<a><Icon type="alipay" />跳轉支付寶登入</a>}
     */
    actions: React.ReactNode;
    /**
     * @name logo 的配置，支持node 和 string
     */
    logo?: React.ReactNode | string;
    /**
     * @name 整個登入頁面的樣式配置
     * @type  React.CSSProperties
     */
    style: React.CSSProperties;
    /**
     * @name 活動資訊的配置，一個頁面應該只有一個。
     * @example <caption>配置一個簡單的活動。</caption>
     * activityConfig={{title:"這裡有個大活動",description:"這裡有個大活動的描述",action:<a>點我去看看</a>}}
     */
    activityConfig?: {
        title?: React.ReactNode;
        subTitle?: React.ReactNode;
        action?: React.ReactNode;
        style?: React.CSSProperties;
    };
    /**
     * @name 登入頁面的背景圖片，可以用它來設置一個背景
     *
     * @example  backgroundImageUrl="xxx.svg"
     */
    backgroundImageUrl?: string;
    /**
     * @name 登入頁面的背景影片，可以用它來設置一個背景，優先度高於 backgroundImageUrl
     *
     * @example  backgroundImageUrl="xxx.svg"
     */
    backgroundVideoUrl?: string;
    children?: React.ReactNode | React.ReactNode[];
    containerStyle?: React.CSSProperties;
    mainStyle?: React.CSSProperties;
    otherStyle?: React.CSSProperties;
} & ProFormProps<T>;
export declare function LoginFormPage<T = Record<string, any>>(props: Partial<LoginFormPageProps<T>>): React.JSX.Element;
