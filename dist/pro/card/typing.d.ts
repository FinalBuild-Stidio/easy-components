import type { TabPaneProps, TabsProps } from '../../base';
import type { LabelTooltipType } from '../../base/form/FormItemLabel';
import type { ReactNode } from 'react';
export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type Gutter = number | Partial<Record<Breakpoint, number>>;
export type ColSpanType = number | string;
type CardPropsBase = {
    /** 標題樣式 */
    headStyle?: React.CSSProperties;
    /** 內容樣式 */
    bodyStyle?: React.CSSProperties;
    /** 頁頭是否有分割線 */
    headerBordered?: boolean;
    /** 卡片標題 */
    title?: React.ReactNode;
    /** 副標題 */
    subTitle?: React.ReactNode;
    /** 標題說明 */
    tooltip?: string | LabelTooltipType;
    /** @deprecated 你可以使用 tooltip，這個更改是為了與 ipass customized lib 統一 */
    tip?: string;
    /** 右上角自訂區域 */
    extra?: React.ReactNode;
    /** 布局，center 代表垂直居中 */
    layout?: 'default' | 'center';
    /** 卡片類型 */
    type?: 'default' | 'inner';
    /** 指定 Flex 方向，僅在嵌套子卡片時有效 */
    direction?: 'column' | 'row';
    /** 是否自動換行，僅在嵌套子卡片時有效 */
    wrap?: boolean;
    /** 尺寸 */
    size?: 'default' | 'small';
    /** 載入中 */
    loading?: boolean | ReactNode;
    /** 柵格布局寬度，24 柵格，支持指定寬度或百分，需要支持響應式 colSpan={{ xs: 12, sm: 6 }} */
    colSpan?: ColSpanType | Partial<Record<Breakpoint, ColSpanType>>;
    /** 柵格間距 */
    gutter?: Gutter | Gutter[];
    /** 操作按鈕 */
    actions?: React.ReactNode[] | React.ReactNode;
    /** 拆分卡片方式 */
    split?: 'vertical' | 'horizontal';
    /** 是否有邊框 */
    bordered?: boolean;
    /**
     * 滑鼠移過時可浮起
     *
     * @default false
     */
    hoverable?: boolean;
    /** 幽靈模式，即是否取消卡片內容區域的 padding 和 背景顏色。 */
    ghost?: boolean;
    /** 是否可摺疊 */
    collapsible?: boolean;
    /** 受控 collapsed 屬性 */
    collapsed?: boolean;
    /** 摺疊按鈕自訂節點 */
    collapsibleIconRender?: ({ collapsed, }: {
        collapsed: boolean;
    }) => React.ReactNode;
    /** 配置預設是否摺疊 */
    defaultCollapsed?: boolean;
    /** 收起卡片的事件 */
    onCollapse?: (collapsed: boolean) => void;
    /** 前綴 */
    prefixCls?: string;
    /** ProCard 的 ref */
    ref?: React.Ref<HTMLDivElement | undefined>;
    /** 是否展示選中樣式 */
    checked?: boolean;
    /** 選中改變 */
    onChecked?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /** card的陰影 */
    boxShadow?: boolean;
};
export type ProCardTabsProps = {
    cardProps?: CardPropsBase;
} & TabsProps;
export type CardProps = {
    /** 標籤欄配置 */
    tabs?: ProCardTabsProps;
} & CardPropsBase & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>;
export type ProCardTabPaneProps = {
    /** Key */
    key?: string;
    /** ProCard 相關屬性透傳 */
    cardProps?: CardProps;
} & TabPaneProps;
export type CardType = React.ForwardRefExoticComponent<CardProps>;
export {};
