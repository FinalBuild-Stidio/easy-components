import type { RequestData, UseFetchDataAction, UseFetchProps } from './typing';
/**
 * useFetchData hook 用來獲取資料並控制資料的狀態和分頁
 * @template T
 * @param {(undefined | ((params?: { pageSize: number; current: number }) => Promise<DataSource>))} getData - 獲取資料的函數，參數為分頁參數，
 * 返回一個 Promise 類型的 T 類型的資料
 * @param {(undefined | any[])} defaultData - 預設的資料
 * @param {UseFetchProps} options - 配置項，包括了預設的分頁參數、格式化資料的函數等
 * @returns {UseFetchDataAction} 返回一個對象，包含當前的資料列表、loading 狀態、error、以及可控制的分頁參數等
 */
declare const useFetchData: <DataSource extends RequestData<any>>(getData: ((params?: {
    pageSize: number;
    current: number;
}) => Promise<DataSource>) | undefined, defaultData: any[] | undefined, options: UseFetchProps) => UseFetchDataAction;
export default useFetchData;
