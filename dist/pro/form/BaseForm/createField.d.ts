import React from 'react';
import type { ExtendsProps, ProFormFieldItemProps, ProFormItemCreateConfig } from '../typing';
export declare const TYPE: unique symbol;
type ProFormComponent<P, Extends> = React.ComponentType<P & Extends>;
/**
 * 處理fieldProps和formItemProps為function時傳進來的方法
 * 目前只在SchemaForm時可能會有
 */
type FunctionFieldProps = {
    getFormItemProps?: () => Record<string, any>;
    getFieldProps?: () => Record<string, any>;
};
/**
 * 這個方法的主要作用的幫助 Field 增加 FormItem 同時也會處理 lightFilter
 *
 * @param Field
 * @param config
 */
declare function createField<P extends ProFormFieldItemProps = any>(Field: React.ComponentType<P> | React.ForwardRefExoticComponent<P>, config?: ProFormItemCreateConfig): ProFormComponent<P, ExtendsProps & FunctionFieldProps>;
export { createField };
