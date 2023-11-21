import React from 'react';
/** 一條分割線 */
export declare const Line: ({ padding }: {
    padding?: string | number | undefined;
}) => React.JSX.Element;
export declare const MediaQueryKeyEnum: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};
/** 列表子項目骨架屏 */
export declare const ListSkeletonItem: React.FC<{
    active: boolean;
}>;
/** 列表骨架屏 */
export declare const ListSkeleton: React.FC<{
    size: number;
    active?: boolean;
    actionButton?: boolean;
}>;
/**
 * 麵包屑的 骨架屏
 *
 * @param param0
 */
export declare const PageHeaderSkeleton: ({ active }: {
    active: boolean;
}) => React.JSX.Element;
export type ListPageSkeletonProps = {
    active?: boolean;
    pageHeader?: false;
    statistic?: number | false;
    actionButton?: false;
    toolbar?: false;
    list?: number | false;
};
/**
 * 列表操作欄的骨架屏
 *
 * @param param0
 */
export declare const ListToolbarSkeleton: ({ active }: {
    active: boolean;
}) => React.JSX.Element;
declare const ListPageSkeleton: React.FC<ListPageSkeletonProps>;
export default ListPageSkeleton;
