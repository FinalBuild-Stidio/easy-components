import React from 'react';
import { LoadingButtonProps } from '@mui/lab/LoadingButton';
/** @name 用於設定操作欄 */
export type SearchConfig = {
    /** @name 重設按鈕的文本 */
    resetText?: React.ReactNode;
    /** @name 提交按鈕的文本 */
    submitText?: React.ReactNode;
};
export type SubmitterProps<T = Record<string, any>> = {
    /** @name 提交方法 */
    onSubmit?: (value?: T) => void;
    /** @name 重設方法 */
    onReset?: (value?: T) => void;
    /** @name 搜索的設定，一般用來設定文本 */
    searchConfig?: SearchConfig;
    /** @name 提交按鈕的 props */
    submitButtonProps?: false | (LoadingButtonProps & {
        preventDefault?: boolean;
    });
    /** @name 重設按鈕的 props */
    resetButtonProps?: false | (LoadingButtonProps & {
        preventDefault?: boolean;
    });
    /** @name 自訂操作的渲染 */
    render?: ((props: SubmitterProps & T & {
        submit: () => void;
        reset: () => void;
    }, dom: JSX.Element[]) => React.ReactNode[] | React.ReactNode | false) | false;
};
/**
 * FormFooter 的元件，可以自動進行一些設定
 *
 * @param props
 */
declare const Submitter: React.FC<SubmitterProps>;
export default Submitter;
