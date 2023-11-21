import React from 'react';
import type { AppItemProps, AppListProps } from './types';
/**
 * 默認顯示logo的方式，如果是個string，用img。否則直接返回
 *
 * @param logo
 * @returns
 */
export declare const defaultRenderLogo: (logo: React.ReactNode | (() => React.ReactNode)) => React.ReactNode;
/**
 * 相關品牌額icon 列表。用於展示相關的品牌
 *
 * @param props
 * @returns
 */
export declare const AppsLogoComponents: React.FC<{
    appList?: AppListProps;
    appListRender?: (props: AppListProps, defaultDom: React.ReactNode) => React.ReactNode;
    onItemClick?: (item: AppItemProps, popoverRef?: React.RefObject<HTMLSpanElement>) => void;
    prefixCls?: string;
}>;
