import React from 'react';
import type { MouseEventHandler } from 'react';
import type { CheckCardGroupProps } from './Group';
import CheckCardGroup from './Group';
interface CheckCardProps {
    /**
     * 自訂前綴
     *
     * @ignore
     */
    prefixCls?: string;
    /** Change 回調 */
    onChange?: (checked: boolean) => void;
    /** Click 回調 */
    onClick?: (event: MouseEventHandler<HTMLDivElement> | undefined) => void;
    /** 滑鼠進入時的回調 */
    onMouseEnter?: MouseEventHandler<HTMLDivElement>;
    /** 滑鼠出來時的回調 */
    onMouseLeave?: (event: MouseEventHandler<HTMLDivElement> | undefined) => void;
    /**
     * 預設是否勾選
     *
     * @default false
     * @title 默認勾選
     */
    defaultChecked?: boolean;
    /**
     * 強制勾選
     *
     * @default false
     * @title 強制勾選
     */
    checked?: boolean;
    /**
     * 不可用
     *
     * @default false
     * @title 禁用
     */
    disabled?: boolean;
    /**
     * 選項卡樣式
     *
     * @ignore
     */
    style?: React.CSSProperties;
    /**
     * 選項卡 className
     *
     * @ignore
     */
    className?: string;
    /**
     * 左側頭像展示，可以是一個連結也可以是是一個 ReactNode
     *
     * @title 頭像
     */
    avatar?: React.ReactNode;
    /**
     * 標題展示
     *
     * @title 標題
     */
    title?: React.ReactNode;
    /**
     * 二級標題展示
     *
     * @title 二級標題
     */
    subTitle?: React.ReactNode;
    /**
     * 描述展示
     *
     * @title 描述
     */
    description?: React.ReactNode;
    /**
     * 選項值
     *
     * @title 值
     */
    value?: any;
    /**
     * 內容是否在載入中
     *
     * @default false
     * @title 載入中
     */
    loading?: boolean;
    /**
     * 圖片封面默認，該模式下其他展示值被忽略
     *
     * @title 卡片背景圖片
     */
    cover?: React.ReactNode;
    /**
     * 組件尺寸，支持大，中，小三種默認尺寸，用戶可以自訂寬高
     *
     * @default default
     * @title 選擇框大小
     */
    size?: 'large' | 'default' | 'small';
    /**
     * 是否顯示邊框
     *
     * @default true
     * @title 顯示邊框
     */
    bordered?: boolean;
    /**
     * 卡片右上角的操作區域
     *
     * @title 操作欄
     */
    extra?: React.ReactNode;
    children?: React.ReactNode;
    /**
     * 內容區域的樣式設計
     */
    bodyStyle?: React.CSSProperties;
    /**
     * 右下角的操作區
     */
    actions?: React.ReactNode[];
    ghost?: boolean;
}
export interface CheckCardState {
    checked: boolean;
}
declare const CheckCard: React.FC<CheckCardProps> & {
    Group: typeof CheckCardGroup;
};
export type { CheckCardGroupProps, CheckCardProps };
export default CheckCard;
