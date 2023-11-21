import type React from 'react'

import type { ColProps, FormItemProps, RowProps } from '@/components/base'
import type {
  ProFieldProps,
  ProFieldValueType,
  ProFormBaseGroupProps,
  ProSchema,
  SearchConvertKeyFn,
} from '../utils'
import type { ProFormInstance } from './BaseForm'
import type { ProFormItemProps } from './components'

export interface ProFormGridConfig {
  /**
   * open grid layout
   * @default false
   */
  grid?: boolean
  /**
   * only works when grid is enabled
   *
   * When passing the `span` attribute, the default value is empty
   * @default
   * { xs: 24 }
   */
  colProps?: ColProps
  /**
   * only works when grid is enabled
   * @default
   * { gutter: 8 }
   */
  rowProps?: RowProps
}

export type ProFormItemCreateConfig = {
  /** 自訂類型 */
  valueType?: ProFieldValueType
  /** 自訂 lightMode */
  customLightMode?: boolean
  /** Light mode 自訂的 label 模式 */
  lightFilterLabelFormatter?: (value: any) => string
  /** 預設的props，如果用戶設置會被覆蓋 */
  defaultProps?: Record<string, any>
  /** @name 不使用預設的寬度 */
  ignoreWidth?: boolean
} & ProFormItemProps

// 給控制項擴展的通用的屬性
export type ExtendsProps = {
  secondary?: boolean
  allowClear?: boolean
  bordered?: boolean
  colSize?: number
  /**
   * 需要與 request 配合使用
   *
   * @name 網路請求用的輸出，會觸發reload
   */
  params?:
  | ((form: ProFormInstance) => Record<string, any>)
  | Record<string, any>

  /** @name 需要放在formItem 時使用 */
  ignoreFormItem?: boolean

  /**
   * 實驗性質，可能 api 會有改動，謹慎使用
   *
   * @name 唯獨模式
   */
  readonly?: boolean

  /**
   * @name 取得時轉換值，一般用於將資料格式化為元件接收的格式
   */
  convertValue?: SearchConvertKeyFn

  /**
   * 給 protable 開的口子
   *
   * @name 自訂的 formItemProps
   */
  formItemProps?: FormItemProps
  /** 給自訂元件行為開的口子 */
  filedConfig?: ProFormItemCreateConfig
}

export type ProFormGroupProps = ProFormBaseGroupProps & ProFormGridConfig

export type FieldProps<K> = {
  style?: React.CSSProperties
  width?: string
  ref?: React.Ref<K>
}

export type LightFilterFooterRender =
  | ((
    /**
     * @name 確認選擇的值
     */
    onConfirm?: (e?: React.MouseEvent) => void,
    /**
     * @name 清除選擇
     */
    onClear?: (e?: React.MouseEvent) => void,
  ) => JSX.Element | false)
  | false

export type ProFormFieldItemProps<T = Record<string, any>, K = any> = {
  /**
   * @name 設置到控制項上的屬性
   *
   * @example 設置select 多選
   * <ProFormSelect fieldProps={{mode:"multiple"}} />
   * @example 設置select 多選
   * <ProFormText fieldProps={{placeholder:"請輸入！"}} />
   */
  fieldProps?: Partial<FieldProps<K> & T>
  /**
   * @name 輸入的描述，沒有值的時候顯示
   */
  placeholder?: string | string[]
  /**
   * @name 是否是次要控制項，只針對 LightFilter 下有效
   */
  secondary?: boolean
  /**
   * @name 是否使用 swr 來快取 快取可能導致資料更新不及時，請謹慎使用，尤其是頁面中多個元件 name 相同
   *
   * @default false
   */
  cacheForSwr?: boolean
  /**
   * @name disabled=true 時控制項不可用
   */
  disabled?: boolean
  /**
   * @type auto 使用元件預設的寬度
   * @type xs=104px 適用於短數字、短文本或選項。
   * @type sm=216px 適用於較短欄位輸入、如姓名、電話、ID 等。
   * @type md=328px 標準寬度，適用於大部分欄位長度。
   * @type lg=440px 適用於較長欄位輸入，如長網址、標籤組、文件路徑等。
   * @type xl=552px 適用於長文本輸入，如長連結、描述、備註等，通常搭配自適應多行輸入框或定高文本域使用。
   */
  width?: number | 'sm' | 'md' | 'xl' | 'xs' | 'lg'
  /**
   * @name 設置到 ProField 上面的 Props，內部屬性
   */
  proFieldProps?: ProFieldProps

  /**
   * @name QueryFilter 上的footer
   *
   * @example 自訂清除按鈕
   * footerRender={(onConfirm,onClear)=>{ return <Button onClick={onClear}>清除</Button> }}
   */
  footerRender?: LightFilterFooterRender

  children?: React.ReactNode
} & Omit<ProFormItemProps, 'valueType'> &
  Pick<ProFormGridConfig, 'colProps'> &
  ExtendsProps

/**
 * load remote data props
 */
export type ProFormFieldRemoteProps = Pick<
  ProSchema,
  'debounceTime' | 'request' | 'valueEnum' | 'params'
>
