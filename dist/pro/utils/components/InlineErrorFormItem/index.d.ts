import React from 'react';
import type { FormItemProps, PopoverProps } from '../../../../base';
interface InlineErrorFormItemProps extends FormItemProps {
    errorType?: 'popover' | 'default';
    popoverProps?: PopoverProps;
    children: any;
}
export declare const InlineErrorFormItem: (props: InlineErrorFormItemProps) => React.JSX.Element;
export {};
