import type { CSSProperties } from 'react';
import type { FullToken } from '../../theme/internal';
import type { GenStyleFn } from '../../theme/util/genComponentStyleHook';
export interface ComponentToken {
    /**
     * @desc 必填項標記顏色
     * @descEN Required mark color
     */
    labelRequiredMarkColor: string;
    /**
     * @desc 標籤顏色
     * @descEN Label color
     */
    labelColor: string;
    /**
     * @desc 標籤字體大小
     * @descEN Label font size
     */
    labelFontSize: number;
    /**
     * @desc 標籤高度
     * @descEN Label height
     */
    labelHeight: number;
    /**
     * @desc 標籤冒號前間距
     * @descEN Label colon margin-inline-start
     */
    labelColonMarginInlineStart: number;
    /**
     * @desc 標籤冒號後間距
     * @descEN Label colon margin-inline-end
     */
    labelColonMarginInlineEnd: number;
    /**
     * @desc 表單項間距
     * @descEN Form item margin bottom
     */
    itemMarginBottom: number;
    /**
     * @desc 垂直布局標籤內邊距
     * @descEN Vertical layout label padding
     */
    verticalLabelPadding: CSSProperties['padding'];
    /**
     * @desc 垂直布局標籤外邊距
     * @descEN Vertical layout label margin
     */
    verticalLabelMargin: CSSProperties['margin'];
}
export interface FormToken extends FullToken<'Form'> {
    formItemCls: string;
    rootPrefixCls: string;
}
export declare const prepareToken: (token: Parameters<GenStyleFn<'Form'>>[0], rootPrefixCls: string) => FormToken;
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
