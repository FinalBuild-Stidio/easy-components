import * as React from 'react';
import type { TooltipProps } from '@mui/material/Tooltip';
import type { ColProps } from '../grid/col';
import type { RequiredMark } from './Form';
import type { FormLabelAlign } from './interface';
export type WrapperTooltipProps = Omit<TooltipProps, 'children'> & {
    icon?: React.ReactElement;
};
export type LabelTooltipType = WrapperTooltipProps | React.ReactNode;
export interface FormItemLabelProps {
    colon?: boolean;
    htmlFor?: string;
    label?: React.ReactNode;
    labelAlign?: FormLabelAlign;
    labelCol?: ColProps;
    /**
     * @internal Used for pass `requiredMark` from `<Form />`
     */
    requiredMark?: RequiredMark;
    tooltip?: LabelTooltipType;
}
declare const FormItemLabel: React.FC<FormItemLabelProps & {
    required?: boolean;
    prefixCls: string;
}>;
export default FormItemLabel;
