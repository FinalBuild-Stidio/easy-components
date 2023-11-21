/**
 * 一個去顫的 hook，傳入一個 function，返回一個去顫後的 function
 * @param  {(...args:T) => Promise<any>} fn
 * @param  {number} wait?
 */
export declare function useDebounceFn<T extends any[], U = any>(fn: (...args: T) => Promise<any>, wait?: number): {
    run: (...args: any) => Promise<U | undefined>;
    cancel: () => void;
};
