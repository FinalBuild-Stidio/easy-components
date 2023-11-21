import type { TableColumnType } from '@/base'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import { noteOnce } from 'rc-util/lib/warning'
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { SizeType } from '@/base/Config/SizeContext'
import type { ProTableProps } from '../index'
import type { ActionType, ProColumns } from '../typing'
import { genColumnKey } from '../utils'

export type ColumnsState = {
  show?: boolean
  fixed?: 'right' | 'left' | undefined
  order?: number
  disable?:
  | boolean
  | {
    checkbox: boolean
  }
}

export type ProTableColumn<T> = ColumnsState & TableColumnType<T>

export type UseContainerProps<T = any> = {
  columnsStateMap?: Record<string, ColumnsState>
  onColumnsStateChange?: (map: Record<string, ColumnsState>) => void
  size?: SizeType
  defaultSize?: SizeType
  onSizeChange?: (size: SizeType) => void
  columns?: ProTableColumn<T>[] | ProColumns<T, T>[]
  columnsState?: ProTableProps<any, any, any>['columnsState']
}

function useContainer(props: UseContainerProps = {}) {
  const actionRef = useRef<ActionType>()
  const rootDomRef = useRef<HTMLDivElement>(null)
  /** 父 form item 的 name */
  const prefixNameRef = useRef<any>()

  /** 自己 props 的引用 */
  const propsRef = useRef<ProTableProps<any, any, any>>()

  // 共享狀態比較難，就放到這裡了
  const [keyWords, setKeyWords] = useState<string | undefined>('')
  // 用於排序的數組
  const sortKeyColumns = useRef<string[]>([])

  const [tableSize, setTableSize] = useMergedState<SizeType>(
    () => props.size || props.defaultSize || 'medium',
    {
      value: props.size,
      onChange: props.onSizeChange,
    },
  )

  /** 預設全選中 */
  const defaultColumnKeyMap = useMemo(() => {
    if (props?.columnsState?.defaultValue)
      return props.columnsState.defaultValue
    const columnKeyMap = {}
    props.columns?.forEach(({ key, dataIndex, fixed, disable }, index) => {
      const columnKey = genColumnKey(key ?? (dataIndex as React.Key), index)
      if (columnKey) {
        // @ts-ignore
        columnKeyMap[columnKey] = {
          show: true,
          fixed,
          disable,
        }
      }
    })
    return columnKeyMap
  }, [props.columns])

  const [columnsMap, setColumnsMap] = useMergedState<
    Record<string, ColumnsState>
  >(
    () => {
      const { persistenceType, persistenceKey } = props.columnsState || {}

      if (persistenceKey && persistenceType && typeof window !== 'undefined') {
        /** 從持久化中讀取資料 */
        const storage = window[persistenceType]
        try {
          const storageValue = storage?.getItem(persistenceKey)
          if (storageValue) {
            return JSON.parse(storageValue)
          }
        } catch (error) {
          console.warn(error)
        }
      }
      return (
        props.columnsStateMap ||
        props.columnsState?.value ||
        props.columnsState?.defaultValue ||
        defaultColumnKeyMap
      )
    },
    {
      value: props.columnsState?.value || props.columnsStateMap,
      onChange: props.columnsState?.onChange || props.onColumnsStateChange,
    },
  )

  /**  配置或列更改時對columnsMap重新賦值 */
  useEffect(() => {
    const { persistenceType, persistenceKey } = props.columnsState || {}

    if (persistenceKey && persistenceType && typeof window !== 'undefined') {
      /** 從持久化中讀取資料 */
      const storage = window[persistenceType]
      try {
        const storageValue = storage?.getItem(persistenceKey)
        if (storageValue) {
          setColumnsMap(JSON.parse(storageValue))
        } else {
          setColumnsMap(defaultColumnKeyMap)
        }
      } catch (error) {
        console.warn(error)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.columnsState?.persistenceKey,
    props.columnsState?.persistenceType,
    defaultColumnKeyMap,
  ])

  noteOnce(
    !props.columnsStateMap,
    'columnsStateMap已經廢棄，請使用 columnsState.value 替換',
  )
  noteOnce(
    !props.columnsStateMap,
    'columnsStateMap has been discarded, please use columnsState.value replacement',
  )

  /** 清空一下當前的 key */
  const clearPersistenceStorage = useCallback(() => {
    const { persistenceType, persistenceKey } = props.columnsState || {}

    if (!persistenceKey || !persistenceType || typeof window === 'undefined')
      return

    /** 給持久化中設置資料 */
    const storage = window[persistenceType]
    try {
      storage?.removeItem(persistenceKey)
    } catch (error) {
      console.warn(error)
    }
  }, [props.columnsState])

  useEffect(() => {
    if (
      !props.columnsState?.persistenceKey ||
      !props.columnsState?.persistenceType
    ) {
      return
    }
    if (typeof window === 'undefined') return
    /** 給持久化中設置資料 */
    const { persistenceType, persistenceKey } = props.columnsState
    const storage = window[persistenceType]
    try {
      storage?.setItem(persistenceKey, JSON.stringify(columnsMap))
    } catch (error) {
      console.warn(error)
      clearPersistenceStorage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.columnsState?.persistenceKey,
    columnsMap,
    props.columnsState?.persistenceType,
  ])
  const renderValue = {
    action: actionRef.current,
    setAction: (newAction?: ActionType) => {
      actionRef.current = newAction
    },
    sortKeyColumns: sortKeyColumns.current,
    setSortKeyColumns: (keys: string[]) => {
      sortKeyColumns.current = keys
    },
    propsRef,
    columnsMap,
    keyWords,
    setKeyWords: (k: string | undefined) => setKeyWords(k),
    setTableSize,
    tableSize,
    prefixName: prefixNameRef.current,
    setPrefixName: (name: any) => {
      prefixNameRef.current = name
    },
    setColumnsMap,
    columns: props.columns,
    rootDomRef,
    clearPersistenceStorage,
    defaultColumnKeyMap,
  }

  Object.defineProperty(renderValue, 'prefixName', {
    get: (): string => prefixNameRef.current,
  })

  Object.defineProperty(renderValue, 'sortKeyColumns', {
    get: (): string[] => sortKeyColumns.current,
  })

  Object.defineProperty(renderValue, 'action', {
    get: () => actionRef.current,
  })

  return renderValue
}
type ContainerReturnType = ReturnType<ContainerType>

const TableContext = createContext<ContainerReturnType>({} as any)

export type ContainerType = typeof useContainer

const Container: React.FC<{
  initValue: UseContainerProps<any>
  children: React.ReactNode
}> = (props) => {
  const value = useContainer(props.initValue)
  return (
    <TableContext.Provider value={value}>
      {props.children}
    </TableContext.Provider>
  )
}

export { TableContext, Container }
