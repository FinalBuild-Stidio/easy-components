export interface IRoute {
    breadcrumbDisabled?: boolean;
    path: string;
    absPath: string;
    file: string;
    id: string;
    parentId?: string;
    [key: string]: any;
}
export interface IClientRoute extends IRoute {
    routes?: IClientRoute[];
}
