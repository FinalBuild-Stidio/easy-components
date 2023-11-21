import type { KeyType } from '../Cache';
export declare function useGlobalCache<CacheType>(prefix: string, keyPath: KeyType[], cacheFn: () => CacheType, onCacheRemove?: (cache: CacheType, fromHMR: boolean) => void, onCacheEffect?: (cachedValue: CacheType) => void): CacheType;
export default useGlobalCache;
