import React from 'react';
import type { LabelTooltipType } from '../../../../base/form/FormItemLabel';
/**
 * 在 form 的 label 後面增加一個 tips 來顯示一些說明文案
 *
 * @param props
 */
export declare const LabelIconTip: React.FC<{
    label: React.ReactNode;
    subTitle?: React.ReactNode;
    tooltip?: string | LabelTooltipType;
    ellipsis?: boolean | {
        showTitle?: boolean;
    };
}>;
