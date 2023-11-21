import type dayjs from 'dayjs'
import type React from 'react'
import type { CSSProperties } from 'react'
import type { ProCardProps } from '@/pro/card'
import type { ProFieldEmptyText } from '@/pro/field'
import type {
  ProFormProps,
  QueryFilterProps,
} from '@/pro/form'
import type { TableProps } from '@/base'
import type { SizeType } from '@/base/Config/SizeContext'
import type { LabelTooltipType } from '@/base/form/FormItemLabel'
import type { NamePath } from '@/base/form/interface'
import type { SearchProps } from '@/base/input'
import type {
  ColumnFilterItem,
  ColumnType,
  CompareFn,
  SortOrder,
} from '@/base/table/interface'
import type { AlertRenderType } from './components/Alert'
import type { SearchConfig, TableFormItem } from './components/Form/FormRender'
import type { ListToolBarProps } from './components/ListToolBar'
import type { OptionConfig, ToolBarProps } from './components/ToolBar'
import type { ColumnsState, ContainerType } from './Store/Provide'
import type {
  ProCoreActionType,
  ProSchema,
  ProSchemaComponentTypes,
  ProTableEditableFnType,
  SearchTransformKeyFn,
} from '../utils'

export type PageInfo = {
  pageSize: number
  total: number
  current: number
}

export type RequestData<T> = {
  data: T[] | undefined
  success?: boolean
  total?: number
} & Record<string, any>

export type UseFetchDataAction<T = any> = {
  dataSource: T[]
  setDataSource: (dataSource: T[]) => void
  loading?: boolean
  pageInfo: PageInfo
  reload: () => Promise<void>
  fullScreen?: () => void
  reset: () => void
  pollingLoading: boolean
  setPageInfo: (pageInfo: Partial<PageInfo>) => void
}

/** 轉化列的定義 */
export type ColumnRenderInterface<T> = {
  item: ProColumns<T>
  text: any
  row: T
  index: number
  columnEmptyText?: ProFieldEmptyText
  type: ProSchemaComponentTypes
  counter: ReturnType<ContainerType>
}

export type ExtraProColumnType<T> = Omit<
  ColumnType<T>,
  'render' | 'children' | 'title' | 'filters' | 'onFilter' | 'sorter'
> & {
  sorter?:
  | string
  | boolean
  | CompareFn<T>
  | {
    compare?: CompareFn<T>
    /** Config multiple sorter order priority */
    multiple?: number
  }
}

export type ProColumnType<T = unknown, ValueType = 'text'> = ProSchema<
  T,
  ExtraProColumnType<T> & {
    children?: ProColumns<T>[]
    index?: number
    /**
     * 每個表單占據的格子大小
     *
     * @param 總寬度 = span* colSize
     * @param 預設為 1
     */
    colSize?: number

    /** 搜索表單的預設值 */
    initialValue?: any

    /** @name 是否縮略 */
    ellipsis?: ColumnType<T>['ellipsis']
    /** @name 是否拷貝 */
    copyable?: boolean

    /** @deprecated Use `search=false` instead 在查詢表單中隱藏 */
    hideInSearch?: boolean

    /** 在查詢表單中隱藏 */
    search?:
    | false
    | {
      /**
       * Transform: (value: any) => ({ startTime: value[0], endTime: value[1] }),
       *
       * @name 轉化值的key, 一般用於事件區間的轉化
       */
      transform: SearchTransformKeyFn
    }

    /** @name 在 table 中隱藏 */
    hideInTable?: boolean

    /** @name 在新建表單中刪除 */
    hideInForm?: boolean

    /** @name 不在配置工具中顯示 */
    hideInSetting?: boolean

    /** @name 表頭的篩選菜單項 */
    filters?: boolean | ColumnFilterItem[]

    /** @name 篩選的函數，設置為 false 會關閉自帶的本地篩選 */
    onFilter?: boolean | ColumnType<T>['onFilter']

    /** @name Form 的排序 */
    order?: number

    /** @name 可編輯表格是否可編輯 */
    editable?: boolean | ProTableEditableFnType<T>

    /** @private */
    listKey?: string

    /** @name 只讀 */
    readonly?: boolean

    /** @name 列設置的 disabled */
    disable?:
    | boolean
    | {
      checkbox: boolean
    }
  },
  ProSchemaComponentTypes,
  ValueType
>

export type ProColumns<T = any, ValueType = 'text'> = ProColumnType<
  T,
  ValueType
>

export type BorderedType = 'search' | 'table'

export type Bordered =
  | boolean
  | {
    search?: boolean
    table?: boolean
  }

export type ColumnStateType = {
  /**
   * 持久化的類型，支持 localStorage 和 sessionStorage
   *
   * @param localStorage 設置在關閉瀏覽器後也是存在的
   * @param sessionStorage 關閉瀏覽器後會遺失
   */
  persistenceType?: 'localStorage' | 'sessionStorage'
  /** 持久化的key，用於儲存到 storage 中 */
  persistenceKey?: string
  /** ColumnsState 的值，columnsStateMap將會廢棄 */
  defaultValue?: Record<string, ColumnsState>
  /** ColumnsState 的值，columnsStateMap將會廢棄 */
  value?: Record<string, ColumnsState>
  onChange?: (map: Record<string, ColumnsState>) => void
}

/** ProTable 的類型定義 繼承自 ipass customized lib 的 Table */
export type ProTableProps<DataSource, U, ValueType = 'text'> = {
  /**
   * @name 列配置能力，支持一個數組
   */
  columns?: ProColumns<DataSource, ValueType>[]
  /**
   * @name ListToolBar 的屬性
   */
  toolbar?: ListToolBarProps
  /**
   * @name 幽靈模式，即是否取消卡片內容區域的 padding 和 卡片的背景顏色。
   */
  ghost?: boolean

  /**
   * request 的參數，修改之後會觸發更新
   *
   * @example pathname 修改重新觸發 request
   * params={{ pathName }}
   */
  params?: U

  /**
   * 列狀態配置，可以配置是否浮動和是否展示
   *
   * @deprecated 請使用 columnsState.value 代替
   */
  columnsStateMap?: Record<string, ColumnsState>
  /**
   * 列狀態配置修改觸發事件
   *
   * @deprecated 請使用 columnsState.onChange 代替
   */
  onColumnsStateChange?: (map: Record<string, ColumnsState>) => void

  /** @name 列狀態的配置，可以用來操作列功能 */
  columnsState?: ColumnStateType

  onSizeChange?: (size: SizeType) => void

  /**
   * @name table 外面卡片的設置
   */
  cardProps?: ProCardProps | false

  /**
   * @name 渲染 table
   */
  tableRender?: (
    props: ProTableProps<DataSource, U, ValueType>,
    defaultDom: JSX.Element,
    /** 各個區域的 dom */
    domList: {
      toolbar: JSX.Element | undefined
      alert: JSX.Element | undefined
      table: JSX.Element | undefined
    },
  ) => React.ReactNode

  /**
   * @name 渲染 table 視圖，用於訂製 ProList，不推薦直接使用
   */
  tableViewRender?: (
    props: TableProps<DataSource>,
    defaultDom: JSX.Element,
  ) => JSX.Element | undefined

  /**
   * @name table 和搜索表單之間的 dom 渲染
   *
   * @example 在table 上方增加一個統計表單
   *
   * tableExtraRender={()=> <Statistic title="統計" value={10} />}
   */
  tableExtraRender?: (
    props: ProTableProps<DataSource, U, ValueType>,
    dataSource: DataSource[],
  ) => React.ReactNode

  /**
   * @name 渲染搜索表單
   */
  searchFormRender?: (
    props: ProTableProps<DataSource, U, ValueType>,
    defaultDom: JSX.Element,
  ) => React.ReactNode

  /** @name 一個獲得 dataSource 的方法 */
  request?: (
    params: U & {
      pageSize?: number
      current?: number
      keyword?: string
    },
    sort: Record<string, SortOrder>,
    filter: Record<string, (string | number)[] | null>,
  ) => Promise<Partial<RequestData<DataSource>>>

  /** @name 對資料進行一些處理 */
  postData?: any
  /** @name 預設的資料 */
  defaultData?: DataSource[]

  /**
   * @name 初始化的參數，可以操作 table
   *
   * @example 重新刷新表格
   * actionRef.current?.reload();
   *
   * @example 重設表格
   * actionRef.current?.reset();
   */
  actionRef?: React.Ref<ActionType | undefined>

  /**
   * @name 操作自帶的 form
   */
  formRef?: TableFormItem<DataSource>['formRef']
  /**
   * @name 渲染操作欄
   */
  toolBarRender?: ToolBarProps<DataSource>['toolBarRender'] | false

  optionsRender?: ToolBarProps<DataSource>['optionsRender']

  /**
   * @name 資料載入完成後觸發
   */
  onLoad?: (dataSource: DataSource[]) => void

  /**
   * @name loading 被修改時觸發，一般是網路請求導致的
   */
  onLoadingChange?: (loading?: boolean) => void

  /**
   * @name 資料載入失敗時觸發
   */
  onRequestError?: (e: Error) => void

  /**
   * 是否輪詢 ProTable 它不會自動提交表單，如果你想自動提交表單的功能，需要在 onValueChange 中調用 formRef.current?.submit()
   * @property {number} polling 表示輪詢的時間間隔，0 表示關閉輪詢，大於 0 表示開啟輪詢，最小的輪詢時間為 2000ms
   * @param dataSource 返回當前的表單資料，你可以用它判斷要不要打開輪詢
   */
  polling?: number | ((dataSource: DataSource[]) => number)

  /** @name 給封裝的 table 的 className */
  tableClassName?: string

  /** @name 給封裝的 table 的 style */
  tableStyle?: CSSProperties

  /** @name 左上角的 title */
  headerTitle?: React.ReactNode

  /** @name 標題旁邊的 tooltip */
  tooltip?: string | LabelTooltipType

  /** @name 操作欄配置 */
  options?: OptionConfig | false

  /**
   * @type SearchConfig
   * @name 是否顯示搜索表單
   */
  search?: false | SearchConfig

  /**
   * 基本配置與 ipass customized lib Form 相同, 但是劫持了 form onFinish 的配置
   *
   * @name type="form" 和 搜索表單 的 Form 配置
   */
  form?: Omit<ProFormProps & QueryFilterProps, 'form'>
  /**
   * 暫時只支持 dayjs - string 會格式化為 YYYY-DD-MM - number 代表時間戳
   *
   * @name 如何格式化日期
   */
  dateFormatter?:
  | 'string'
  | 'number'
  | ((value: dayjs.Dayjs, valueType: string) => string | number)
  | false
  /** @name 格式化搜索表單提交資料 */
  beforeSearchSubmit?: (params: Partial<U>) => any
  /**
   * 設置或者返回false 即可關閉
   *
   * @name 自訂 table 的 alert
   */
  tableAlertRender?: AlertRenderType<DataSource>
  /**
   * 設置或者返回false 即可關閉
   *
   * @name 自訂 table 的 alert 的操作
   */
  tableAlertOptionRender?: AlertRenderType<DataSource>

  style?: React.CSSProperties

  /** 支持 ProTable 的類型 */
  type?: ProSchemaComponentTypes

  /** @name 提交表單時觸發 */
  onSubmit?: (params: U) => void

  /** @name 重設表單時觸發 */
  onReset?: () => void

  /** @name 空值時顯示 */
  columnEmptyText?: ProFieldEmptyText

  /** @name 是否手動觸發請求 */
  manualRequest?: boolean

  /**
   * @name 可編輯表格修改資料的改變
   */
  onDataSourceChange?: (dataSource: DataSource[]) => void
  /** @name 查詢表單和 Table 的卡片 border 配置 */
  cardBordered?: Bordered
  /** @name 去抖時間 */
  debounceTime?: number
  /**
   * 只在request 存在的時候生效，可編輯表格也不會生效
   *
   * @default true
   * @name 窗口聚焦時自動重新請求
   */
  revalidateOnFocus?: boolean
  /** 預設的表格大小 */
  defaultSize?: SizeType
  /**
   * @name, 可編輯表格的name,通過這個name 可以直接與 form通信，無需嵌套
   */
  name?: NamePath
  /**
   * 錯誤邊界自訂
   */
  ErrorBoundary?: React.ComponentClass<any, any> | false
} & Omit<TableProps<DataSource>, 'columns' | 'rowSelection'>

export type ActionType = ProCoreActionType & {
  fullScreen?: () => void
  setPageInfo?: (page: Partial<PageInfo>) => void
}

/**
 * 用於定義 useFetch 的參數類型
 * @typedef {Object} UseFetchProps
 * @property {any} [dataSource] - 資料來源，可選參數
 * @property {UseFetchDataAction['loading']} loading - 資料載入狀態，必須參數
 * @property {(loading: UseFetchDataAction['loading']) => void} [onLoadingChange] - 載入狀態改變時的回調函數，可選參數
 * @property {(dataSource: any[], extra: any) => void} [onLoad] - 資料載入完成時的回調函數，可選參數
 * @property {(dataSource?: any) => void} [onDataSourceChange] - 資料來源改變時的回調函數，可選參數
 * @property {any} postData - 發送到後端的資料，必須參數
 * @property {{current?: number; pageSize?: number; defaultCurrent?: number; defaultPageSize?: number;} | false} pageInfo - 分頁資訊，可選參數，false 表示不啟用分頁
 * @property {(pageInfo: PageInfo) => void} [onPageInfoChange] - 分頁資訊改變時的回調函數，可選參數
 * @property {any[]} [effects] - 依賴的其它 Hook 或其它變數，可選參數
 * @property {(e: Error) => void} [onRequestError] - 請求出錯時的回調函數，可選參數
 * @property {boolean} manual - 是否手動觸發請求，必須參數
 * @property {number} [debounceTime] - 延遲時間，可選參數，單位為毫秒
 * @property {number | ((dataSource: any[]) => number)} [polling] - 輪詢時間，可選參數，單位為毫秒或一個返回時間的函數
 * @property {boolean} [revalidateOnFocus] - 是否在焦點回到頁面時重新驗證資料，可選參數
 */
export type UseFetchProps = {
  /**
   * 資料來源
   * @type {any}
   */
  dataSource?: any

  /**
   * 是否處於載入狀態
   * @type {UseFetchDataAction['loading']}
   */
  loading: UseFetchDataAction['loading']

  /**
   * 載入狀態改變時的回調函數
   * @type {(loading: UseFetchDataAction['loading']) => void}
   */
  onLoadingChange?: (loading: UseFetchDataAction['loading']) => void

  /**
   * 資料載入完成後的回調函數
   * @type {(dataSource: any[], extra: any) => void}
   */
  onLoad?: (dataSource: any[], extra: any) => void

  /**
   * 資料來源變化時的回調函數
   * @type {(dataSource?: any) => void}
   */
  onDataSourceChange?: (dataSource?: any) => void

  /**
   * 請求時附帶的資料
   * @type {any}
   */
  postData: (dataSource: any[]) => any[]

  /**
   * 分頁資訊
   * @type {{
   *   current?: number;
   *   pageSize?: number;
   *   defaultCurrent?: number;
   *   defaultPageSize?: number;
   * } | false}
   */
  pageInfo:
  | {
    current?: number
    pageSize?: number
    defaultCurrent?: number
    defaultPageSize?: number
  }
  | false

  /**
   * 分頁資訊變化時的回調函數
   * @type {(pageInfo: PageInfo) => void}
   */
  onPageInfoChange?: (pageInfo: PageInfo) => void

  /**
   * 請求相關的副作用
   * @type {any[]}
   */
  effects?: any[]

  /**
   * 請求出錯時的回調函數
   * @type {(e: Error) => void}
   */
  onRequestError?: (e: Error) => void

  /**
   * 是否手動觸發請求
   * @type {boolean}
   */
  manual: boolean

  /**
   * 請求防抖時間
   * @type {number}
   */
  debounceTime?: number

  /**
   * 資料來源輪詢間隔時間或輪詢觸發條件
   * @type {number | ((dataSource: any[]) => number)}
   */
  polling?: number | ((dataSource: any[]) => number)

  /**
   * 是否在頁面獲得焦點時重新驗證資料
   * @type {Boolean}
   */
  revalidateOnFocus?: boolean
}

export type OptionSearchProps = Omit<SearchProps, 'onSearch'> & {
  /** 如果 onSearch 返回一個false，直接攔截請求 */
  onSearch?: (
    keyword: string,
  ) => Promise<boolean | undefined> | boolean | undefined
}
