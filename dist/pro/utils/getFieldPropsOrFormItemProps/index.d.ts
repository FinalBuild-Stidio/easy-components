import type { FormInstance } from '../../../base';
/**
 * 因為 fieldProps 支援了 function 所以新增了這個方法
 *
 * @param fieldProps
 * @param form
 */
export declare const getFieldPropsOrFormItemProps: (fieldProps: any, form?: FormInstance<any> | null, extraProps?: any) => Record<string, any> & {
    onChange: any;
    colSize: number;
};
