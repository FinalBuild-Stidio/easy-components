import React from 'react';
import type { BaseProFieldFC, ProFieldFCRenderProps, ProRenderFieldPropsType } from '../../providers';
import { ProFieldRequestData, ProFieldTextType, ProFieldValueObjectType, ProFieldValueType } from '../utils';
import FieldDatePicker from './components/DatePicker';
import FieldIndexColumn from './components/IndexColumn';
import type { FieldMoneyProps } from './components/Money';
import FieldMoney from './components/Money';
import FieldPercent from './components/Percent';
import FieldRangePicker from './components/RangePicker';
import FieldSelect, { proFieldParsingText, proFieldParsingValueEnumToArray } from './components/Select';
import FieldStatus from './components/Status';
import FieldText from './components/Text';
import FieldTimePicker from './components/TimePicker';
export type ProFieldMoneyProps = FieldMoneyProps;
export type ProFieldEmptyText = string | false;
/** 預設的 Field 需要實現的功能 */
export type ProFieldFC<T = {}> = React.ForwardRefRenderFunction<any, BaseProFieldFC & ProRenderFieldPropsType & T>;
/** 輕量篩選的field屬性 */
export type ProFieldLightProps = {
    lightLabel?: React.RefObject<{
        labelRef: React.RefObject<HTMLElement>;
        clearRef: React.RefObject<HTMLElement>;
    }>;
    labelTrigger?: boolean;
};
/** Value type by function */
export type ProFieldValueTypeFunction<T> = (item: T) => ProFieldValueType | ProFieldValueObjectType;
type RenderProps = Omit<ProFieldFCRenderProps, 'text' | 'placeholder'> & ProRenderFieldPropsType & {
    /** 從伺服器讀取選項 */
    request?: ProFieldRequestData;
    emptyText?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    /**
     * @deprecated use onOpenChange replace
     */
    onVisible?: (visible: boolean) => void;
    /**
     * @deprecated use open replace
     */
    visible?: boolean;
    [key: string]: any;
};
/**
 * 根據不同的類型來轉化數值
 *
 * @param dataValue
 * @param valueType
 */
declare const defaultRenderText: (dataValue: ProFieldTextType, valueType: ProFieldValueType | ProFieldValueObjectType, props: RenderProps, valueTypeMap: Record<string, ProRenderFieldPropsType>) => React.ReactNode;
export { defaultRenderText };
export type { ProFieldValueType, FieldMoneyProps };
export { FieldPercent, FieldIndexColumn, FieldMoney, FieldDatePicker, FieldRangePicker, FieldTimePicker, FieldText, FieldStatus, FieldSelect, proFieldParsingText, proFieldParsingValueEnumToArray, };
/** ProField 的類型 */
export type ProFieldPropsType = {
    text?: ProFieldTextType;
    valueType?: ProFieldValueType | ProFieldValueObjectType;
} & RenderProps;
export declare const ProField: React.ForwardRefRenderFunction<any, ProFieldPropsType>;
export default ProField;
