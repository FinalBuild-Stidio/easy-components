import React from 'react';
import type { FormSchema } from './typing';
export * from './typing';
/**
 * 此元件可以根據 Json Schema 來生成相應的表單,大部分設定與 table 列設定相同
 *
 * @see 此元件仍為 beta 版本，api 可能發生變化
 */
declare function BetaSchemaForm<T, ValueType = 'text'>(props: FormSchema<T, ValueType>): React.JSX.Element;
export default BetaSchemaForm;
