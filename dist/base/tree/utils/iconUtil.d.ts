import * as React from 'react';
import type { IpassTreeNodeProps, SwitcherIcon, TreeLeafIcon } from '../Tree';
interface SwitcherIconProps {
    prefixCls: string;
    treeNodeProps: IpassTreeNodeProps;
    switcherIcon?: SwitcherIcon;
    showLine?: boolean | {
        showLeafIcon: boolean | TreeLeafIcon;
    };
}
declare const SwitcherIconCom: React.FC<SwitcherIconProps>;
export default SwitcherIconCom;
