import type { CSSObject } from '../../../StyleContext';
import type { PanelComponentToken, PickerPanelToken } from '../../date-picker/style';
import type { FullToken } from '../../theme/internal';
export interface ComponentToken {
    /**
     * @desc 年選擇器寬度
     * @descEN Width of year select
     */
    yearControlWidth: number;
    /**
     * @desc 月選擇器寬度
     * @descEN Width of month select
     */
    monthControlWidth: number;
    /**
     * @desc 迷你日曆內容高度
     * @descEN Height of mini calendar content
     */
    miniContentHeight: number;
    /**
     * @desc 完整日曆背景色
     * @descEN Background color of full calendar
     */
    fullBg: string;
    /**
     * @desc 完整日曆面板背景色
     * @descEN Background color of full calendar panel
     */
    fullPanelBg: string;
    /**
     * @desc 日期項選中背景色
     * @descEN Background color of selected date item
     */
    itemActiveBg: string;
}
interface CalendarToken extends FullToken<'Calendar'>, PickerPanelToken, PanelComponentToken {
    calendarCls: string;
    dateValueHeight: number;
    weekHeight: number;
    dateContentHeight: number;
}
export declare const genCalendarStyles: (token: CalendarToken) => CSSObject;
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
