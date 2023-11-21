import React from 'react';
import type { CardProps } from '../../typing';
import Divider from '../Divider';
import Operation from '../Operation';
import type { StatisticProps } from '../Statistic';
import Statistic from '../Statistic';
export type StatisticCardProps = {
    /** 圖表配置 */
    chart?: React.ReactNode;
    /** 數值統計配置 */
    statistic?: StatisticProps;
    /** Chart 相對於 statistic 的位置 */
    chartPlacement?: 'right' | 'bottom' | 'left';
    /** 底部額外展示區域 */
    footer?: React.ReactNode;
} & CardProps;
/** @deprecated */
export type StatisticsCardProps = StatisticCardProps;
declare const StatisticCard: React.FC<StatisticCardProps> & {
    Statistic: typeof Statistic;
    Divider: typeof Divider;
    Operation: typeof Operation;
    isProCard: boolean;
    Group: typeof Group;
};
declare const Group: React.FC<StatisticCardProps>;
export default StatisticCard;
