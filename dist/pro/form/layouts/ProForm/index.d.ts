import type { FormProps } from '../../../../base';
import React from 'react';
import type { CommonFormProps } from '../../BaseForm';
export type ProFormProps<T = Record<string, any>, U = Record<string, any>> = Omit<FormProps<T>, 'onFinish'> & CommonFormProps<T, U>;
declare function ProForm<T = Record<string, any>>(props: ProFormProps<T> & {
    children?: React.ReactNode | React.ReactNode[];
}): React.JSX.Element;
declare namespace ProForm {
    var Group: React.FC<import("../..").GroupProps>;
    var useForm: typeof import("../../../../base/form/Form").useForm;
    var Item: React.FC<import("../../components").ProFormItemProps>;
    var useWatch: typeof import("rc-field-form/es/useWatch").default;
    var ErrorList: React.FC<import("../../../../base/form").ErrorListProps>;
    var Provider: React.FC<import("../../../../base/form/context").FormProviderProps>;
    var useFormInstance: typeof import("../../../../base/form/hooks/useFormInstance").default;
    var EditOrReadOnlyContext: React.Context<{
        mode: "edit" | "update" | "read";
    }>;
}
export { ProForm };
