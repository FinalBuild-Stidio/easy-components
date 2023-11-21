/// <reference types="react" />
import type { ItemType, ProFormRenderValueTypeHelpers } from '../typing';
export declare const dependency: <DataType, ValueType>(item: ItemType<DataType, ValueType>, helpers: ProFormRenderValueTypeHelpers<DataType, ValueType>) => true | import("react").JSX.Element | null;
