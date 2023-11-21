import React from 'react';
import type { SwitchProps } from '../../../../base';
import type { ProFormFieldItemProps } from '../../typing';
export type ProFormSwitchProps = ProFormFieldItemProps<SwitchProps, HTMLElement> & {
    checkedChildren?: SwitchProps['checkedChildren'];
    unCheckedChildren?: SwitchProps['unCheckedChildren'];
};
/**
 * @en-us Single Choice Switch
 */
declare const ProFormSwitch: React.FC<ProFormSwitchProps>;
export default ProFormSwitch;
