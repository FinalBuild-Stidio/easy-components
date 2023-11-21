import * as React from 'react';
export declare const IconMap: {
    success: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    error: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    info: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    warning: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
};
export declare const ExceptionMap: {
    '404': React.FC<{}>;
    '500': React.FC<{}>;
    '403': React.FC<{}>;
};
export type ExceptionStatusType = 403 | 404 | 500 | '403' | '404' | '500';
export type ResultStatusType = ExceptionStatusType | keyof typeof IconMap;
export interface ResultProps {
    icon?: React.ReactNode;
    status?: ResultStatusType;
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
    extra?: React.ReactNode;
    prefixCls?: string;
    className?: string;
    rootClassName?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export interface ResultType extends React.FC<ResultProps> {
    PRESENTED_IMAGE_404: React.FC;
    PRESENTED_IMAGE_403: React.FC;
    PRESENTED_IMAGE_500: React.FC;
}
declare const Result: ResultType;
export default Result;
