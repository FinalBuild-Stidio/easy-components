import * as React from 'react';
import type { ChipProps } from '@mui/material/Chip';
import type { BreadcrumbsProps } from '@mui/material/Breadcrumbs';
import type { ContentWidth } from '../../../defaultSettings';
import type { BreadcrumbItemType } from '../../utils/getBreadcrumbProps';
export interface PageHeaderProps {
    backIcon?: React.ReactNode;
    prefixCls?: string;
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
    style?: React.CSSProperties;
    childrenContentStyle?: React.CSSProperties;
    breadcrumb?: BreadcrumbsProps;
    breadcrumbItems?: BreadcrumbItemType[];
    breadcrumbRender?: ((props: PageHeaderProps, defaultDom: React.ReactNode) => React.ReactNode) | false;
    tags?: React.ReactElement<ChipProps> | React.ReactElement<ChipProps>[];
    footer?: React.ReactNode;
    extra?: React.ReactNode;
    onBack?: (e?: React.MouseEvent<HTMLElement>) => void;
    className?: string;
    contentWidth?: ContentWidth;
    layout?: string;
    ghost?: boolean;
    children?: React.ReactNode;
}
declare const PageHeader: React.FC<PageHeaderProps>;
export { PageHeader };
