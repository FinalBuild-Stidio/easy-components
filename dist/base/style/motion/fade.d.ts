import type { CSSInterpolation } from '../../../StyleContext';
import { Keyframes } from '../../../StyleContext';
import type { AliasToken } from '../../theme/internal';
import type { TokenWithCommonCls } from '../../theme/util/genComponentStyleHook';
export declare const fadeIn: Keyframes;
export declare const fadeOut: Keyframes;
export declare const initFadeMotion: (token: TokenWithCommonCls<AliasToken>, sameLevel?: boolean) => CSSInterpolation;
