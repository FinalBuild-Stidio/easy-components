import * as React from 'react';
import type { ValidateMessages } from 'rc-field-form/lib/interface';
import type { PickerLocale as DatePickerLocale } from '../date-picker/generatePicker';
import type { TransferLocale as TransferLocaleForEmpty } from '../empty';
import type { ModalLocale } from '../modal/locale';
import type { PaginationLocale } from '../pagination/Pagination';
import type { TableLocale } from '../table/interface';
export { default as useLocale } from './useLocale';
export declare const ANT_MARK = "internalMark";
export interface Locale {
    locale: string;
    Pagination?: PaginationLocale;
    DatePicker?: DatePickerLocale;
    TimePicker?: Record<string, any>;
    Calendar?: Record<string, any>;
    Table?: TableLocale;
    Modal?: ModalLocale;
    Select?: Record<string, any>;
    Empty?: TransferLocaleForEmpty;
    global?: Record<string, any>;
    PageHeader?: {
        back: string;
    };
    Icon?: Record<string, any>;
    Text?: {
        edit?: any;
        copy?: any;
        copied?: any;
        expand?: any;
    };
    Form?: {
        optional?: string;
        defaultValidateMessages: ValidateMessages;
    };
    Image?: {
        preview: string;
    };
    QRCode?: {
        expired: string;
        refresh: string;
    };
    ColorPicker?: {
        presetEmpty: string;
    };
}
export interface LocaleProviderProps {
    locale: Locale;
    children?: React.ReactNode;
    /** @internal */
    _IPASS_MARK__?: string;
}
declare const LocaleProvider: React.FC<LocaleProviderProps>;
export default LocaleProvider;
