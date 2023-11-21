import React from 'react';
export type ProCardActionsProps = {
    /**
     * 自訂前綴
     *
     * @ignore
     */
    prefixCls?: string;
    /** 操作按鈕 */
    actions?: React.ReactNode[] | React.ReactNode;
};
declare const ProCardActions: React.FC<ProCardActionsProps>;
export default ProCardActions;
