import React from 'react';
export type DescriptionsPageSkeletonProps = {
    active?: boolean;
    pageHeader?: false;
    list?: false | number;
};
/**
 * Table 的子項目骨架屏
 *
 * @param param0
 */
export declare const TableItemSkeleton: ({ active, header, }: {
    active: boolean;
    header?: boolean | undefined;
}) => React.JSX.Element;
/**
 * Table 骨架屏
 *
 * @param param0
 */
export declare const TableSkeleton: React.FC<{
    active: boolean;
    size?: number;
}>;
export declare const DescriptionsSkeleton: ({ active }: {
    active: boolean;
}) => React.JSX.Element;
declare const DescriptionsPageSkeleton: React.FC<DescriptionsPageSkeletonProps>;
export default DescriptionsPageSkeleton;
