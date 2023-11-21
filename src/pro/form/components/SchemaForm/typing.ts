import type { NamePath } from 'rc-field-form/lib/interface'

import type {
  ProCoreActionType,
  ProSchema,
  ProSchemaComponentTypes,
  SearchConvertKeyFn,
  SearchTransformKeyFn,
} from '../../../utils'
import type { FormInstance, FormProps } from '@/base'
import type { CommonFormProps } from '../../BaseForm'
import type { DrawerFormProps } from '../../layouts/DrawerForm'
import type { ModalFormProps } from '../../layouts/ModalForm'
import type { ProFormProps } from '../../layouts/ProForm'
import type { StepFormProps, StepsFormProps } from '../../layouts/StepsForm'
import type { ProFormGridConfig } from '../../typing'

export type ExtraProColumnType = {
  tooltip?: React.ReactNode
  key?: React.Key
  className?: string
  /**
   * @type auto 使用元件預設的寬度
   * @type xs=104px 適用於短數字、短文本或選項。
   * @type sm=216px 適用於較短欄位輸入、如姓名、電話、ID 等。
   * @type md=328px 標準寬度，適用於大部分欄位長度。
   * @type lg=440px 適用於較長欄位輸入，如長網址、標籤組、文件路徑等。
   * @type xl=552px 適用於長文本輸入，如長連結、描述、備註等，通常搭配自適應多行輸入框或定高文本域使用。
   */
  width?: string | number

  name?: NamePath | NamePath[]
  defaultKeyWords?: string
} & Pick<ProFormGridConfig, 'rowProps' | 'colProps'>

/**
 * ProForm 支援的相關類型
 */
export type ProFormPropsType<T, ValueType = 'text'> =
  | ((
    | ({ layoutType?: 'Form' } & ProFormProps<T>)
    | ({ layoutType: 'DrawerForm' } & DrawerFormProps<T>)
    | ({ layoutType: 'ModalForm' } & ModalFormProps<T>)
    | ({ layoutType: 'StepForm' } & StepFormProps<T>)
    | { layoutType: 'Embed' }
  ) & {
    columns: ProFormColumnsType<T, ValueType>[]
  })
  | ({
    layoutType: 'StepsForm'
    columns: ProFormColumnsType<T, ValueType>[][]
  } & StepsFormProps<T>)

/** ProForm 的特色 layout */
export type ProFormLayoutType = ProFormPropsType<any>['layoutType']

export type FormFieldType =
  | 'group'
  | 'formList'
  | 'formSet'
  | 'divider'
  | 'dependency'

export type ProFormColumnsType<T = any, ValueType = 'text'> = ProSchema<
  T,
  ExtraProColumnType & {
    index?: number
    /**
     * 每個表單占據的格子大小
     *
     * @param 總寬度 = span* colSize
     * @param 預設為 1
     */
    colSize?: number
    /** 是否唯獨模式 */
    readonly?: boolean
    /** 搜索表單的預設值 */
    initialValue?: any
    /**
     * @name 取得時轉化值，一般用於將資料格式化為元件接收的格式
     * @param value 欄位的值
     * @param namePath 欄位的name
     * @returns 欄位新的值
     *
     *
     * @example a,b => [a,b]     convertValue: (value,namePath)=> value.split(",")
     * @example string => json   convertValue: (value,namePath)=> JSON.parse(value)
     * @example number => date   convertValue: (value,namePath)=> Dayjs(value)
     * @example YYYY-MM-DD => date   convertValue: (value,namePath)=> Dayjs(value,"YYYY-MM-DD")
     * @example  string => object   convertValue: (value,namePath)=> { return {value,label:value} }
     */
    convertValue?: SearchConvertKeyFn
    /**
     * @name 提交時轉化值，一般用於將值轉化為提交的資料
     * @param value 欄位的值
     * @param namePath 欄位的name
     * @param allValues 所有的欄位
     * @returns 欄位新的值，如果返回對象，會和所有值 merge 一次
     *
     * @example {name:[a,b] => {name:a,b }    transform: (value,namePath,allValues)=> value.join(",")
     * @example {name: string => { newName:string }    transform: (value,namePath,allValues)=> { newName:value }
     * @example {name:dayjs} => {name:string transform: (value,namePath,allValues)=> value.format("YYYY-MM-DD")
     * @example {name:dayjs}=> {name:時間戳} transform: (value,namePath,allValues)=> value.valueOf()
     * @example {name:{value,label}} => { name:string} transform: (value,namePath,allValues)=> value.value
     * @example {name:{value,label}} => { valueName,labelName  } transform: (value,namePath,allValues)=> { valueName:value.value, labelName:value.name }
     */
    transform?: SearchTransformKeyFn
    /** Form 的排序 */
    order?: number
    /** 嵌套子項 */
    columns?:
    | ProFormColumnsType<T, ValueType | FormFieldType>[]
    | ((values: any) => ProFormColumnsType<T, ValueType | FormFieldType>[])
  },
  ProSchemaComponentTypes,
  ValueType | FormFieldType
>

export type FormSchema<T = Record<string, any>, ValueType = 'text'> = {
  title?:
  | React.ReactNode
  | ((
    schema: ProFormColumnsType<T, ValueType>,
    type: 'form',
    dom: React.ReactNode,
  ) => React.ReactNode)
  description?: React.ReactNode
  steps?: StepFormProps[]
  type?: any
  action?: React.MutableRefObject<ProCoreActionType | undefined>
  /**
   * @default true
   * Fine-grained control over when to update
   */
  shouldUpdate?: boolean | ((newValues: T, oldValues?: T) => boolean)
} & Omit<FormProps<T>, 'onFinish'> &
  ProFormPropsType<T, ValueType> &
  CommonFormProps<T> & {
    open?: boolean
  }

export type ProFormRenderValueTypeItem<T, ValueType> = {
  label: any
  getFieldProps?: () => any
  getFormItemProps?: () => any
} & ProFormColumnsType<T, ValueType>

export type ProFormRenderValueTypeHelpers<T, ValueType> = {
  originItem: ProFormColumnsType<T, ValueType>
  type: ProSchemaComponentTypes
  formRef: React.MutableRefObject<FormInstance<any> | undefined>
  genItems: (items: ProFormColumnsType<T, ValueType>[]) => React.ReactNode[]
} & Pick<FormSchema<T, ValueType>, 'action'>

export type ItemType<T, ValueType> = Omit<
  ProFormRenderValueTypeItem<T, ValueType>,
  'key'
> & {
  key?: React.Key | React.Key[]
}

export type ProSchemaRenderValueTypeFunction<T = any, ValueType = any> = (
  item: ItemType<T, ValueType>,
  helpers: ProFormRenderValueTypeHelpers<T, ValueType>,
) => React.ReactNode
