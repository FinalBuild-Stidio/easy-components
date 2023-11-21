import React from 'react';
import type { IClientRoute } from '../config/routes';
export interface AppData {
    clientRoutes: IClientRoute[];
}
export declare const AppContext: React.Context<AppData>;
export declare function useAppData(): AppData;
