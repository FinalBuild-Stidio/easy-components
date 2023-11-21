/** 取得顯示符號 */
export declare function getSymbolByRealValue(realValue: number): "-" | "+" | null;
/** 取得顏色 */
export declare function getColorByRealValue(realValue: number /** ,color: string */): "#52c41a" | "#ff4d4f" | "#595959";
/** 取得到最後顯示的數字 */
export declare function getRealTextWithPrecision(realValue: number, precision?: number): string | number;
