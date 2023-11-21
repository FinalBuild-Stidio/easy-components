import type { CSSProperties } from 'react';
import type { FullToken } from '../../theme/internal';
export interface ComponentToken {
    /**
     * @desc 下拉菜單 z-index
     * @descEN z-index of dropdown
     */
    zIndexPopup: number;
    /**
     * @desc 選項選中時文本顏色
     * @descEN Text color when option is selected
     */
    optionSelectedColor: string;
    /**
     * @desc 選項選中時文本字重
     * @descEN Font weight when option is selected
     */
    optionSelectedFontWeight: CSSProperties['fontWeight'];
    /**
     * @desc 選項選中時背景色
     * @descEN Background color when option is selected
     */
    optionSelectedBg: string;
    /**
     * @desc 選項啟用態時背景色
     * @descEN Background color when option is active
     */
    optionActiveBg: string;
    /**
     * @desc 選項內間距
     * @descEN Padding of option
     */
    optionPadding: CSSProperties['padding'];
    /**
     * @desc 選項字體大小
     * @descEN Font size of option
     */
    optionFontSize: number;
    /**
     * @desc 選項行高
     * @descEN Line height of option
     */
    optionLineHeight: CSSProperties['lineHeight'];
    /**
     * @desc 選項高度
     * @descEN Height of option
     */
    optionHeight: number;
    /**
     * @desc 選框背景色
     * @descEN Background color of selector
     */
    selectorBg: string;
    /**
     * @desc 清空按鈕背景色
     * @descEN Background color of clear button
     */
    clearBg: string;
    /**
     * @desc 單選大號回填項高度
     * @descEN Height of single selected item with large size
     */
    singleItemHeightLG: number;
    /**
     * @desc 多選標籤背景色
     * @descEN Background color of multiple tag
     */
    multipleItemBg: string;
    /**
     * @desc 多選標籤邊框色
     * @descEN Border color of multiple tag
     */
    multipleItemBorderColor: string;
    /**
     * @desc 多選標籤高度
     * @descEN Height of multiple tag
     */
    multipleItemHeight: number;
    /**
     * @desc 大號多選標籤高度
     * @descEN Height of multiple tag with large size
     */
    multipleItemHeightLG: number;
    /**
     * @desc 多選框禁用背景
     * @descEN Background color of multiple selector when disabled
     */
    multipleSelectorBgDisabled: string;
    /**
     * @desc 多選標籤禁用文本顏色
     * @descEN Text color of multiple tag when disabled
     */
    multipleItemColorDisabled: string;
    /**
     * @desc 多選標籤禁用邊框色
     * @descEN Border color of multiple tag when disabled
     */
    multipleItemBorderColorDisabled: string;
}
export interface SelectToken extends FullToken<'Select'> {
    rootPrefixCls: string;
    inputPaddingHorizontalBase: number;
    multipleSelectItemHeight: number;
    selectHeight: number;
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
