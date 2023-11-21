import type { AutoSizeType } from 'rc-textarea';
import * as React from 'react';
interface EditableProps {
    prefixCls: string;
    value: string;
    ['aria-label']?: string;
    onSave: (value: string) => void;
    onCancel: () => void;
    onEnd?: () => void;
    className?: string;
    style?: React.CSSProperties;
    maxLength?: number;
    autoSize?: boolean | AutoSizeType;
    enterIcon?: React.ReactNode;
    component?: string;
}
declare const Editable: React.FC<EditableProps>;
export default Editable;
