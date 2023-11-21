import React from 'react';
export type CheckCardValueType = string | number | boolean;
export type CheckGroupValueType = CheckCardValueType[] | CheckCardValueType | undefined;
export interface CheckCardOptionType {
    /**
     * 標題展示
     *
     * @title 標題
     */
    title?: React.ReactNode;
    /**
     * 選項值
     *
     * @title 值
     */
    value: CheckCardValueType;
    /**
     * 描述展示
     *
     * @title 描述
     */
    description?: React.ReactNode;
    /**
     * 組件尺寸，支持大，中，小三種默認尺寸，用戶可以自訂寬高
     *
     * @default default
     * @title 組件尺寸
     */
    size?: 'large' | 'default' | 'small';
    /**
     * 左側頭像展示，可以是一個連結也可以是是一個 ReactNode
     *
     * @title 左側頭像區域
     */
    avatar?: React.ReactNode;
    /**
     * 圖片封面默認，該模式下其他展示值被忽略
     *
     * @title 圖片封面
     */
    cover?: React.ReactNode;
    /**
     * 不可用
     *
     * @default false
     * @title 不可用
     */
    disabled?: boolean;
    /** Change 回調 */
    onChange?: (checked: boolean) => void;
}
export interface AbstractCheckCardGroupProps {
    /** @ignore */
    prefixCls?: string;
    /** @ignore */
    className?: string;
    /** 指定可選項 */
    options?: (CheckCardOptionType | string)[];
    /** 整組失效 */
    disabled?: boolean;
    /** @ignore */
    style?: React.CSSProperties;
    /**
     * 組件尺寸，支持大，中，小三種默認尺寸，用戶可以自訂寬高
     *
     * @default default
     */
    size?: 'large' | 'default' | 'small';
    /**
     * @acceptions CheckCard
     * @ignore
     */
    children?: React.ReactNode;
}
export declare const CardLoading: React.FC<{
    prefixCls: string;
}>;
export interface CheckCardGroupProps extends AbstractCheckCardGroupProps {
    /**
     * 是否多選
     *
     * @title 是否多選
     */
    multiple?: boolean;
    /**
     * 默認選中的選項
     *
     * @title 默認選中的選項
     */
    defaultValue?: CheckGroupValueType;
    /**
     * 指定選中的選項
     *
     * @title 指定選中的選項
     */
    value?: CheckGroupValueType;
    /**
     * 當卡片組內容還在載入中時，可以用 loading 展示一個占位
     *
     * @title 載入中
     */
    loading?: boolean;
    /**
     * 是否顯示邊框
     *
     * @title 顯示邊框
     */
    bordered?: boolean;
    /** 變化時回調函數 */
    onChange?: (checkedValue: CheckGroupValueType) => void;
}
export interface CheckCardGroupState {
    value: CheckGroupValueType;
    registeredValues: CheckCardValueType[];
}
export type CheckCardGroupConnextType = {
    toggleOption?: (option: CheckCardOptionType) => void;
    value?: any;
    disabled?: boolean;
    size?: any;
    loading?: any;
    bordered?: any;
    multiple?: any;
    registerValue?: (value: any) => void;
    cancelValue?: (value: any) => void;
};
export declare const CheckCardGroupConnext: React.Context<CheckCardGroupConnextType | null>;
declare const CheckCardGroup: React.FC<CheckCardGroupProps>;
export default CheckCardGroup;
