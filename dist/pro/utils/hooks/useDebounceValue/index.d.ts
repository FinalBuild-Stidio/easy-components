import type { DependencyList } from 'react';
/**
 * 一个去顫的setState 减少更新的频率
 * @param  {T} value
 * @param  {number=100} delay
 * @param  {DependencyList} deps?
 * @returns T
 */
export declare function useDebounceValue<T>(value: T, delay?: number, deps?: DependencyList): T;
