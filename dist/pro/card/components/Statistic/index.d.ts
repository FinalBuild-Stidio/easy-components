import React from 'react';
import type { BadgeProps, StatisticProps as IpassStatisticProps } from '../../../../base';
export interface StatisticProps extends IpassStatisticProps {
    /**
     * 樣式
     *
     * @ignore
     */
    style?: React.CSSProperties;
    /**
     * ClassName
     *
     * @ignore
     */
    className?: string;
    /** 描述性標籤 */
    description?: React.ReactNode;
    /** 標題提示 */
    tip?: React.ReactNode;
    /** 當前項顯示的狀態 */
    status?: BadgeProps['status'];
    /** Icon 圖示 */
    icon?: React.ReactNode;
    /** Layout 布局 */
    layout?: 'horizontal' | 'vertical' | 'inline';
    /** 趨勢 */
    trend?: 'up' | 'down';
    children?: any;
}
declare const Statistic: React.FC<StatisticProps>;
export default Statistic;
