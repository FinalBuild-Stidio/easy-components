import type { DatePickerProps, RangePickerProps } from '../../../../base/date-picker';
import React from 'react';
import type { ProFormFieldItemProps } from '../../typing';
/** 時間區間選擇器 */
declare const TimeRangePicker: React.FC<ProFormFieldItemProps<RangePickerProps>>;
/**
 * 時間選擇元件
 *
 * @param
 */
declare const ProFormTimePicker: React.FC<ProFormFieldItemProps<DatePickerProps>>;
declare const WrappedProFormTimePicker: typeof ProFormTimePicker & {
    RangePicker: typeof TimeRangePicker;
};
export default WrappedProFormTimePicker;
