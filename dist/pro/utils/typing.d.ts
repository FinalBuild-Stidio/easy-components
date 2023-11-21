import type { NamePath } from 'rc-field-form/lib/interface';
import type { CheckboxProps } from '../../base/checkbox';
import type { DatePickerProps } from '../../base/date-picker';
import type { InputProps, PasswordProps, TextAreaProps } from '../../base/input';
import type { InputNumberProps } from '../../base/input-number';
import type { RadioProps } from '../../base/radio';
import type { RangePickerProps } from '../../base/date-picker';
import type { SelectProps } from '../../base/select';
import type { SpaceProps } from '../../base/space';
import type { SwitchProps } from '../../base/switch';
import type { TimeRangePickerProps } from '../../base/time-picker';
import type { FormInstance, FormItemProps } from '../../base/form';
import type { LabelTooltipType } from '../../base/form/FormItemLabel';
import type { ReactNode } from 'react';
import type { ProSchemaValueEnumType } from '../../providers';
export type ProFormBaseGroupProps = {
    /**
     * @name 分組的標題
     */
    title?: React.ReactNode;
    /**
     * @name 分組的標題
     * @deprecated 盡量用 title
     */
    label?: React.ReactNode;
    /**
     * @name 標題旁邊的？號提示顯示的資訊
     *
     * @example 自訂提示資訊
     * <ProForm.Group title="標題"  tooltip="自訂提示資訊">
     *  @example 自訂Icon
     * <ProForm.Group title="標題"  tooltip={{icon:<Info/>,title:自訂提示資訊}}>
     */
    tooltip?: LabelTooltipType | string;
    /**
     * @name 額外的內容設定,在標題的另外一邊
     *
     * @example 額外的內容設定
     * <ProForm.Group title="標題" extra={<ProFormSwitch name="open"/>} />
     */
    extra?: React.ReactNode;
    /**
     * @name 元件之前的間隔
     */
    size?: SpaceProps['size'];
    /**
     * @name 自訂 style
     */
    style?: React.CSSProperties;
    /**
     * @name 自訂 title  style
     * @example 增加背景顏色
     * <ProForm.Group titleStyle={{ backgroundColor: '#f0f0f0' }} />
     */
    titleStyle?: React.CSSProperties;
    /**
     * @name 自訂title
     * @example 自訂標題
     * <ProForm.Group title={(_,props)=><span>自訂標題</span>}>
     */
    titleRender?: (title: React.ReactNode, props: ProFormBaseGroupProps) => React.ReactNode;
    /** 子項的對齊方式 */
    align?: SpaceProps['align'];
    spaceProps?: SpaceProps;
    /**
     * @name 子項的排列方式
     */
    direction?: SpaceProps['direction'];
    /**
     * @name 布局方式，鍵值對模式和兩行模式
     * @default inline
     */
    labelLayout?: 'inline' | 'twoLine';
    /**
     * @name 是否摺疊
     */
    collapsed?: boolean;
    /**
     * @name 是否可摺疊
     */
    collapsible?: boolean;
    /**
     * @name 預設的摺疊狀態
     *  */
    defaultCollapsed?: boolean;
    /**
     * @name 摺疊修改的事件
     *  */
    onCollapse?: (collapsed: boolean) => void;
    /**
     * @name 自定選中一個input，只能有一個生效
     */
    autoFocus?: boolean;
    children?: React.ReactNode;
};
/**
 * ProFieldValueTypeWithFieldProps
 * 欄位值類型與 ProFieldProps 的映射關係
 */
export type ProFieldValueTypeWithFieldProps = {
    /** 文本輸入框 */
    text: InputProps;
    /** 密碼輸入框 */
    password: PasswordProps;
    /** 金額 */
    money: Record<string, any>;
    /** 索引 */
    index: Record<string, any>;
    /** 索引帶邊框 */
    indexBorder: Record<string, any>;
    /** 下拉選擇 */
    option: Record<string, any>;
    /** 多行文本 */
    textarea: TextAreaProps;
    /** 日期選擇器 */
    date: DatePickerProps;
    /** 周選擇器 */
    dateWeek: DatePickerProps;
    /** 月選擇器 */
    dateMonth: DatePickerProps;
    /** 季度選擇器 */
    dateQuarter: DatePickerProps;
    /** 年選擇器 */
    dateYear: DatePickerProps;
    /** 日期時間選擇器 */
    dateTime: DatePickerProps;
    /** 相對時間 */
    fromNow: DatePickerProps;
    /** 日期範圍選擇器 */
    dateRange: RangePickerProps;
    /** 日期時間範圍選擇器 */
    dateTimeRange: RangePickerProps;
    /** 周範圍選擇器 */
    dateWeekRange: RangePickerProps;
    /** 月範圍選擇器 */
    dateMonthRange: RangePickerProps;
    /** 季範圍選擇器 */
    dateQuarterRange: RangePickerProps;
    /** 年範圍選擇器 */
    dateYearRange: RangePickerProps;
    /** 時間選擇器 */
    time: TimeRangePickerProps;
    /** 時間範圍選擇器 */
    timeRange: TimeRangePickerProps;
    /** 下拉選擇器 */
    select: SelectProps;
    /** 複選框 */
    checkbox: CheckboxProps;
    /** 單選框 */
    radio: RadioProps;
    /** 單選框按鈕 */
    radioButton: RadioProps;
    /** 百分比輸入框 */
    percent: InputNumberProps;
    /** 數字輸入框 */
    digit: InputNumberProps;
    /** 數字範圍輸入框 */
    digitRange: InputNumberProps;
    /** 秒數輸入框 */
    second: InputNumberProps;
    /** 程式碼輸入框 */
    code: InputProps | TextAreaProps;
    /** JSON 程式碼輸入框 */
    jsonCode: InputProps | TextAreaProps;
    /** 開關 */
    switch: SwitchProps;
    /** 分組 */
    group: ProFormBaseGroupProps;
    /** 表單列表 */
    formList: Record<string, any>;
    /** 表單集合 */
    formSet: Record<string, any>;
    /** 顯示/隱藏 */
    dependency: FormItemProps;
};
/**
 * @param textarea 文本框
 * @param Password Password
 * @param money 金額 option 操作 需要返回一個數組
 * @param date 日期 YYYY-MM-DD
 * @param dateWeek 周選擇器
 * @param dateMonth 月選擇器
 * @param dateQuarter 季度選擇器
 * @param dateYear 年選擇器
 * @param dateRange 日期範圍 YYYY-MM-DD[]
 * @param dateTime 日期和時間 YYYY-MM-DD HH:mm:ss
 * @param dateTimeRange 範圍日期和時間 YYYY-MM-DD HH:mm:ss[]
 * @param time: 時間 HH:mm:ss
 * @param timeRange: 時間區間 HH:mm:ss[]
 * @param index：序列
 * @param indexBorder：序列
 * @param progress: 進度條
 * @param percent: 百分比
 * @param digit 數值
 * @param second 秒速
 * @param fromNow 相對於當前時間
 * @param avatar 頭像
 * @param code 程式碼塊
 * @param image 圖片設置
 * @param jsonCode Json 的程式碼塊，格式化了一下
 * @param color 顏色選擇器
 * @param color 顏色選擇器
 */
export type ProFieldValueType = Extract<keyof ProFieldValueTypeWithFieldProps, any>;
/**
 * 這是一個泛型類型定義，用於定義 FieldPropsTypeBase 類型。該類型包含了以下類型參數：

 * Entity：表示表單項的資料實體類型，預設為 Record<string, any>。
 * ComponentsType：表示表單項對應的元件類型，預設為 'text'。
 * ExtraProps：表示表單項元件的額外屬性類型，預設為 Record<string, any>。
 * FieldPropsType：表示表單項元件的屬性類型，預設為 Record<string, any>。
 *
 * 該類型定義了一種聯合類型，可以是一個函數類型，也可以是一個對象類型。具體來說：
 * 如果是一個函數類型，它接收兩個參數 form 和 config，並返回一個對象類型，該對象類型可以是 FieldPropsType 或 Record<string, any>。
 * 其中，form 是 ipass customized lib 的 FormInstance 類型，config 是 ProSchema 和其它額外屬性的聯合類型，並包含了一些表單項相關的資訊。
 * 如果不是一個函數類型，它可以是 FieldPropsType 或 Record<string, any> 中的任意一個。
 * 該類型的作用是定義一個通用的表單項屬性類型，使得在不同的表單項元件中，可以共用這個屬性類型，提高了程式碼的重用性。
 */
type FieldPropsTypeBase<Entity = Record<string, any>, ComponentsType = 'text', ExtraProps = Record<string, any>, FieldPropsType = ProFieldValueTypeWithFieldProps['text']> = ((form: FormInstance<any>, config: ProSchema<Entity, ExtraProps> & {
    type: ComponentsType;
    isEditable?: boolean;
    rowKey?: string;
    rowIndex: number;
    entity: Entity;
}) => FieldPropsType | Record<string, any>) | FieldPropsType | Record<string, any>;
/**
 * 這段程式碼定義了一個泛型類型 ProFieldValueObject<Type>，它的泛型參數 Type 必須是 'progress'、'money'、'percent'、'image' 中的一個。
 * 當 Type 為 'progress'、'money'、'percent'、'image' 中的一種時，這個類型將被定義為一個對象，包含以下屬性：
 *
 * - type: Type 類型值，即 'progress'、'money'、'percent'、'image' 中的一種；
 * - status: 字串類型，表示狀態，可選值為 'normal'、'active'、'success'、'exception' 或 undefined；
 * - locale: 字串類型，表示地區；
 * - showSymbol: 布爾類型或函數類型，表示是否顯示符號；
 * - showColor: 布爾類型，表示是否顯示顏色；
 * - precision: 數字類型，表示精度；
 * - moneySymbol: 布爾類型，表示是否顯示貨幣符號；
 * - request: ProFieldRequestData 類型，表示請求資料；
 * - width: 數字類型，表示寬度。
 *
 * 如果 Type 不是 'progress'、'money'、'percent'、'image' 中的一種，那麼 ProFieldValueObject<Type> 的類型為 never。
 */
export type ProFieldValueObject<Type> = Type extends 'progress' | 'money' | 'percent' | 'image' ? {
    type: Type;
    status?: 'normal' | 'active' | 'success' | 'exception' | undefined;
    locale?: string;
    /** Percent */
    showSymbol?: ((value: any) => boolean) | boolean;
    showColor?: boolean;
    precision?: number;
    moneySymbol?: boolean;
    request?: ProFieldRequestData;
    /** Image */
    width?: number;
} : never;
/**
 * 這段程式碼定義了一個泛型類型 ValueTypeWithFieldPropsBase，它包含了以下屬性：
 * - Entity：泛型類型，表示資料實體對象的類型；
 * - ComponentsType：泛型類型，表示元件的類型；
 * - ExtraProps：泛型類型，表示額外的屬性；
 * - ValueType：泛型類型，表示欄位的值類型，預設為字串類型。
 *
 * 該類型的主要作用是用於定義 ProTable 元件的列屬性 ProColumns 中的欄位屬性，包括欄位的類型（valueType）和自訂屬性（fieldProps）。其中：
 * - valueType 屬性可以是字串類型，也可以是 ProFieldValueType 枚舉類型，也可以是一個對象類型 ProFieldValueObject，或者是一個返回值為這些類型之一的函數。它表示欄位的類型，如文本、數字、日期等；
 * - fieldProps 屬性是一個泛型類型 FieldPropsTypeBase，它表示該欄位對應的元件的屬性，用於訂製元件的顯示形式、校驗規則、事件等等。根據欄位類型的不同，其屬性值也會有所不同。
 */
type ValueTypeWithFieldPropsBase<Entity = Record<string, any>, ComponentsType = 'form', ExtraProps = Record<string, any>, ValueType = 'text'> = {
    valueType?: ValueType | ProFieldValueType | ProFieldValueObject<ValueType | ProFieldValueType> | ((entity: Entity, type: ComponentsType) => ValueType | ProFieldValueType | ProFieldValueObject<ValueType | ProFieldValueType>);
    fieldProps?: FieldPropsTypeBase<Entity, ComponentsType, ExtraProps, ValueType extends ProFieldValueType ? ProFieldValueTypeWithFieldProps[ValueType] : ProFieldValueTypeWithFieldProps['text']>;
};
/**
 * 這段程式碼定義了一個泛型類型 ValueTypeWithFieldProps，它有四個類型參數。
 * 這個類型的作用是用來描述在一個資料表格中某個欄位的值（value）以及可能需要傳遞給這個欄位的其他屬性（fieldProps），以便在 UI 上正確地顯示這個欄位。
 * 具體來說，這個類型有一個屬性 valueType，表示欄位的值的類型，可以是 'text'、'money'、'percent'、'image'、ProFieldValueType 中的一個，也可以是一個函數。
 *
 * 它的參數是該行資料和元件類型（例如 'table' 或 'form'），返回值為上述值中的一種。
 *
 * 此外，這個類型還有一個屬性 fieldProps，表示需要傳遞給該欄位的其他屬性，它的類型是一個泛型 FieldPropsTypeBase。這個泛型有四個類型參數，
 * 分別是：
 *  - Entity 表示該欄位所在行的資料類型；
 *  - ComponentsType 表示該欄位所在的元件類型；
 *  - ExtraProps 表示傳遞給該欄位的其他屬性的類型；
 *  - ValueType 表示該欄位的值的類型，可以是 'text'、'money'、'percent'、'image'、ProFieldValueType 中的一種。
 * 最終，fieldProps 屬性的類型會根據 valueType 的不同，來選擇特定的類型進行限制，以確保傳遞給該欄位的其他屬性符合它的值的類型。
 */
export type ValueTypeWithFieldProps<Entity, ComponentsType, ExtraProps, ValueType = 'text'> = ValueTypeWithFieldPropsBase<Entity, ComponentsType, ExtraProps, ValueType>;
export type PageInfo = {
    pageSize: number;
    total: number;
    current: number;
};
export type RequestOptionsType = {
    /**
     * 選項的文本內容，可以是一個 React 元件。
     */
    label?: React.ReactNode;
    /**
     * 選項的值，可以是一個字串或數字類型。
     */
    value?: string | number | boolean;
    /** 渲染的節點類型 */
    optionType?: 'optGroup' | 'option';
    /**
     * 當節點類型為 optGroup 時，可以使用該屬性來定義其包含的子選項，每個子選項也可以使用 RequestOptionsType 類型來定義。
     */
    options?: Omit<RequestOptionsType, 'children' | 'optionType'>[];
    /** 其他自訂屬性。 */
    [key: string]: any;
};
export type ProFieldRequestData<U = any> = (params: U, props: any) => Promise<RequestOptionsType[]>;
export type ProFieldValueEnumType = ProSchemaValueEnumMap | ProSchemaValueEnumObj;
/**
 * ProFieldValueObjectType 對象，用於描述值為 'progress' | 'money' | 'percent' | 'image' 類型的 ProField 的屬性。
 * @typedef {Object} ProFieldValueObjectType
 * @property {('progress' | 'money' | 'percent' | 'image')} type - 值的類型。
 * @property {('normal' | 'active' | 'success' | 'exception' | undefined)} [status] - 狀態。
 * @property {string} [locale] - 本地化語言。
 * @property {((value: any) => boolean) | boolean} [showSymbol] - 是否顯示符號。
 * @property {boolean} [showColor] - 是否顯示顏色。
 * @property {number} [precision] - 精度。
 * @property {boolean} [moneySymbol] - 是否顯示貨幣符號。
 * @property {ProFieldRequestData} [request] -  API 請求資料。
 * @property {number} [width] - 圖片的寬度。
 */
export type ProFieldValueObjectType = {
    /**
     * 類型
     * - 'progress': 進度條
     * - 'money': 金錢格式
     * - 'percent': 百分比
     * - 'image': 圖片
     */
    type: 'progress' | 'money' | 'percent' | 'image';
    /**
     * 狀態
     * - 'normal': 正常
     * - 'active': 活動中
     * - 'success': 成功
     * - 'exception': 異常
     */
    status?: 'normal' | 'active' | 'success' | 'exception' | undefined;
    /** 本地化資訊 */
    locale?: string;
    /**
     * 百分比相關
     * - showSymbol?: 是否顯示百分號，預設為 true
     * - showColor?: 是否顯示顏色條，預設為 false
     * - precision?: 保留幾位小數，預設為 2
     */
    showSymbol?: ((value: any) => boolean) | boolean;
    showColor?: boolean;
    precision?: number;
    /**
     * 金錢相關
     * - moneySymbol?: 是否顯示貨幣符號，預設為 true
     */
    moneySymbol?: boolean;
    /** 資料請求 */
    request?: ProFieldRequestData;
    /**
     * width?: 圖片寬度，預設為 80
     */
    width?: number;
};
/**
 * 支援 Map 和 Record<string,any>
 *
 * @name ValueEnum 的類型
 */
export type ProSchemaValueEnumMap = Map<string | number | boolean, ProSchemaValueEnumType | ReactNode>;
export type ProSchemaValueEnumObj = Record<string, ProSchemaValueEnumType | ReactNode>;
export type ProFieldTextType = React.ReactNode | React.ReactNode[] | Record<string, any> | Record<string, any>[];
export type SearchTransformKeyFn = (value: any, namePath: string, allValues: any) => any;
export type SearchConvertKeyFn = (value: any, field: NamePath) => string | boolean | Record<string, any>;
export type ProTableEditableFnType<T> = (value: any, record: T, index: number) => boolean;
/** 支援的變形，還未完全支援完畢 */
export type ProSchemaComponentTypes = 'form' | 'list' | 'descriptions' | 'table' | 'cardList' | undefined;
/** 操作類型 */
export type ProCoreActionType<T = {}> = {
    /** @name 刷新 */
    reload: (resetPageIndex?: boolean) => Promise<void>;
    /** @name 刷新並清空，只清空頁面，不包括表單 */
    reloadAndRest?: () => Promise<void>;
    /** @name 重設任何輸入項，包括表單 */
    reset?: () => void;
    /** @name 清空選擇 */
    clearSelected?: () => void;
    /** @name p頁面的資訊都在裡面 */
    pageInfo?: PageInfo;
} & T;
export type ProSchemaFieldProps<T> = Record<string, any> | T | Partial<InputProps>;
/** 各個元件公共支援的 render */
export type ProSchema<Entity = Record<string, any>, ExtraProps = unknown, ComponentsType extends ProSchemaComponentTypes = 'form', ValueType = 'text', ExtraFormItemProps = unknown> = {
    /** @name 確定這個列的唯一值,一般用於 dataIndex 重複的情況 */
    key?: React.Key;
    /**
     * 支援一個數字，[a,b] 會轉換為 obj.a.b
     *
     * @name 與實體映射的key
     */
    dataIndex?: React.Key | React.Key[];
    /**
     * 支援 ReactNode 和 方法
     *
     * @name 標題
     */
    title?: ((schema: ProSchema<Entity, ExtraProps, ComponentsType, ValueType, ExtraFormItemProps>, type: ComponentsType, dom: React.ReactNode) => React.ReactNode) | React.ReactNode;
    /** @name 顯示一個 icon，hover 是顯示一些提示資訊 */
    tooltip?: LabelTooltipType | string;
    /** @deprecated 你可以使用 tooltip，這個更改是為了與 ipass customized lib 統一 */
    tip?: string;
    /**
     * 支援 object 和Map，Map 是支援其他基礎類型作為 key
     *
     * @name 映射值的類型
     */
    valueEnum?: ((row: Entity) => ProSchemaValueEnumObj | ProSchemaValueEnumMap) | ProSchemaValueEnumObj | ProSchemaValueEnumMap;
    /**
     * @name 自訂的 formItemProps
     */
    formItemProps?: (FormItemProps & ExtraFormItemProps) | ((form: FormInstance<any>, config: ProSchema<Entity, ExtraProps, ComponentsType, ValueType, ExtraFormItemProps> & {
        type: ComponentsType;
        isEditable?: boolean;
        rowKey?: string;
        rowIndex: number;
        entity: Entity;
    }) => FormItemProps & ExtraFormItemProps);
    /**
     * 修改的資料是會被 valueType 消費
     *
     * @name 自訂 render 內容
     */
    renderText?: (text: any, record: Entity, index: number, action: ProCoreActionType) => any;
    /**
     * Render 方法只管理的唯獨模式，編輯模式需要使用 renderFormItem
     *
     * @name 自訂唯獨模式的dom
     */
    render?: (dom: React.ReactNode, entity: Entity, index: number, action: ProCoreActionType | undefined, schema: ProSchema<Entity, ExtraProps, ComponentsType, ValueType, ExtraFormItemProps> & {
        isEditable?: boolean;
        type: ComponentsType;
    }) => React.ReactNode | {
        children: React.ReactNode;
        props: any;
    };
    /**
     * 返回一個 ReactNode，會自動包裹 value 和 onChange
     *
     * @name 自訂編輯模式
     */
    renderFormItem?: (schema: ProSchema<Entity, ExtraProps, ComponentsType, ValueType, ExtraFormItemProps> & {
        isEditable?: boolean;
        index?: number;
        type: ComponentsType;
        originProps?: any;
    }, config: {
        onSelect?: (value: any) => void;
        onChange?: <T = any>(value: T) => void;
        value?: any;
        type: ComponentsType;
        recordKey?: React.Key | React.Key[];
        record?: Entity;
        isEditable?: boolean;
        defaultRender: (newItem: ProSchema<Entity, ExtraProps, ComponentsType, ValueType>) => JSX.Element | null;
    }, form: FormInstance, action?: 'newLineRecord' | 'editableKeys' | 'actionRender' | 'setEditableRowKeys') => React.ReactNode;
    /**
     *  @name 可編輯表格是否可編輯
     *
     * @example 不允許編輯
     * editable=false
     *
     * @example 如果id=1不允許編輯
     * editable={(value,row,index)=> row.id !==1 }
     */
    editable?: false | ProTableEditableFnType<Entity>;
    /** @name 從伺服器請求枚舉 */
    request?: ProFieldRequestData;
    /** @name request防抖動時間 預設10 單位ms */
    debounceTime?: number;
    /** @name 從伺服器請求的參數，改變了會觸發 reload */
    params?: ((record: Entity, column: ProSchema<Entity, ExtraProps>) => Record<string, any>) | Record<string, any>;
    /** @name 依賴欄位的name，暫時只在擁有 request 的項目中生效，會自動注入到 params 中 */
    dependencies?: NamePath[];
    /**
     *  @name 忽略 FormItem，必須要和 renderFormItem 元件一起使用
     */
    ignoreFormItem?: boolean;
    /** @name 在 descriptions 隱藏 */
    hideInDescriptions?: boolean;
    /** @name 在 Form 中隱藏 */
    hideInForm?: boolean;
    /** @name 在 table 中隱藏 */
    hideInTable?: boolean;
    /** @name 在 table的查詢表單 中隱藏 */
    hideInSearch?: boolean;
    /** 設置到 ProField 上面的 Props，內部屬性 */
    proFieldProps?: ProFieldProps & Record<string, any>;
} & ExtraProps & ValueTypeWithFieldProps<Entity, ComponentsType, ExtraProps, ValueType>;
export interface ProFieldProps {
    /**
     * 是否啟用輕量模式
     */
    light?: boolean;
    /**
     * 空文本占位符
     */
    emptyText?: ReactNode;
    /**
     * 標籤名稱
     */
    label?: React.ReactNode;
    /**
     * 渲染模式
     */
    mode?: 'read' | 'edit';
    /**
     * 設置 useSwr 的 key
     */
    proFieldKey?: string;
    /**
     * 自訂渲染函數
     */
    render?: any;
    /**
     * 是否只讀
     */
    readonly?: boolean;
}
export {};
