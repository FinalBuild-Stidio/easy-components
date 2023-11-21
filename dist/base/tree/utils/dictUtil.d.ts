import type { DataNode, Key } from 'rc-tree/lib/interface';
/** 計算選中範圍，只考慮expanded情況以最佳化性能 */
export declare function calcRangeKeys({ treeData, expandedKeys, startKey, endKey, }: {
    treeData: DataNode[];
    expandedKeys: Key[];
    startKey?: Key;
    endKey?: Key;
}): Key[];
export declare function convertDirectoryKeysToNodes(treeData: DataNode[], keys: Key[]): DataNode[];
