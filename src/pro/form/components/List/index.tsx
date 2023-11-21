import type { NamePath } from 'rc-field-form/lib/interface'
import classNames from 'classnames'
import { noteOnce } from 'rc-util/lib/warning'
import type { ReactNode } from 'react'
import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { useIntl } from 'react-intl'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeleteIcon from '@mui/icons-material/Delete'

import type { ColProps } from '@/base'
import { ConfigProvider, Form } from '@/base'
import type { LabelTooltipType } from '@/base/form/FormItemLabel'
import type {
  FormListFieldData,
  FormListOperation,
  FormListProps,
} from '@/base/form'
import { ProFormContext } from '../../../utils'
import { useGridHelpers } from '../../helpers'
import type { ProFormGridConfig } from '../../typing'
import { ProFormListContainer } from './ListContainer'
import type {
  ChildrenItemFunction,
  FormListActionGuard,
  ProFromListCommonProps,
} from './ListItem'
import { useStyle } from './style'

const FormListContext = React.createContext<
  | (FormListFieldData & {
    listName: NamePath
  })
  | Record<string, any>
>({})

export type FormListActionType<T = any> = FormListOperation & {
  get: (index: number) => T | undefined
  getList: () => T[] | undefined
}

export type ProFormListProps<T> = Omit<FormListProps, 'children' | 'rules'> &
  ProFromListCommonProps & {
    /**
     * @name 列表的標籤
     */
    label?: ReactNode
    /**
     * @name 標題旁邊的？號提示顯示的資訊
     *
     * @example 自訂提示資訊
     * <ProForm.Group title="標題"  tooltip="自訂提示資訊">
     *  @example 自訂Icon
     * <ProForm.Group title="標題"  tooltip={{icon:<Info/>,title:自訂提示資訊}}>
     */
    tooltip?: LabelTooltipType
    /**
     * @name 行操作的鉤子設定
     *
     * @example 阻止刪除 actionGuard={{beforeAddRow:()=> return false}}
     * @example 阻止新增 actionGuard={{beforeAddRow:()=> return false}}
     */
    actionGuard?: FormListActionGuard
    children?: ReactNode | ChildrenItemFunction

    /**
     * @name 在最後增加一個 dom
     *
     * @example 自訂新增按鈕
     * fieldExtraRender={(fieldAction) => {<a onClick={()=>fieldAction.add({id:"xx"})}>新增</a>}}
     */
    fieldExtraRender?: (
      fieldAction: FormListOperation,
      meta: {
        errors?: React.ReactNode[]
        warnings?: React.ReactNode[]
      },
    ) => React.ReactNode
    /**
     * @name 取得到 list 操作實例
     * @description 可用刪除，新增，移動等操作
     *
     * @example  actionRef?.current.add?.({},1);
     * @example  actionRef?.current.remove?.(1);
     * @example  actionRef?.current.move?.(1,2);
     * @example  actionRef?.current.get?.(1);
     * @example  actionRef?.current.getList?.();
     */
    actionRef?: React.MutableRefObject<FormListActionType<T> | undefined>
    /** 放在div上面的屬性 */
    style?: React.CSSProperties
    /**
     * 資料新增成功回調
     */
    onAfterAdd?: (
      ...params: [...Parameters<FormListOperation['add']>, number]
    ) => void
    /**
     * 資料移除成功回調
     */
    onAfterRemove?: (
      ...params: [...Parameters<FormListOperation['remove']>, number]
    ) => void
    /** 是否同時校驗列表是否為空 */
    isValidateList?: boolean
    /** 當 isValidateList 為 true 時執行為空提示 */
    emptyListMessage?: string
    rules?: (Required<FormListProps>['rules'][number] & {
      required?: boolean
    })[]
    required?: boolean
    wrapperCol?: ColProps
    className?: string
    readonly?: boolean
  } & Pick<ProFormGridConfig, 'colProps' | 'rowProps'>

function ProFormList<T>(props: ProFormListProps<T>) {
  const actionRefs = useRef<FormListOperation>()
  const context = useContext(ConfigProvider.ConfigContext)
  const listContext = useContext(FormListContext)
  const baseClassName = context.getPrefixCls('pro-form-list')
  // Internationalization
  const intl = useIntl()

  const {
    actionRender,
    label,
    alwaysShowItemLabel,
    tooltip,
    creatorRecord,
    itemRender,
    rules,
    itemContainerRender,
    fieldExtraRender,
    copyIconProps = {
      Icon: ContentCopyIcon,
      tooltipText: intl.formatMessage({ id: 'copyThisLine', defaultMessage: '複製此項' }),
    },
    children,
    deleteIconProps = {
      Icon: DeleteIcon,
      tooltipText: intl.formatMessage({ id: 'deleteThisLine', defaultMessage: '刪除此項' }),
    },
    actionRef,
    style,
    prefixCls,
    actionGuard,
    min,
    max,
    colProps,
    wrapperCol,
    rowProps,
    onAfterAdd,
    onAfterRemove,
    isValidateList = false,
    emptyListMessage = '列表不能為空',
    className,
    ...rest
  } = props

  const { ColWrapper, RowWrapper } = useGridHelpers({ colProps, rowProps })

  const proFormContext = useContext(ProFormContext)

  // 處理 list 的嵌套
  const name = useMemo(() => {
    if (listContext.name === undefined) {
      return [rest.name].flat(1)
    }
    return [listContext.name, rest.name].flat(1)
  }, [listContext.name, rest.name])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(
    actionRef,
    () =>
    ({
      ...actionRefs.current,
      get: (index: number) => {
        return proFormContext.formRef!.current!.getFieldValue([
          ...name,
          index,
        ])
      },
      getList: () =>
        proFormContext.formRef!.current!.getFieldValue([...name]),
    } as any),
    [name, proFormContext.formRef],
  )

  useEffect(() => {
    noteOnce(
      !!proFormContext.formRef,
      `ProFormList 必須要放到 ProForm 中,否則會造成行為異常。`,
    )
    noteOnce(
      !!proFormContext.formRef,
      `Proformlist must be placed in ProForm, otherwise it will cause abnormal behavior.`,
    )
  }, [proFormContext.formRef])

  const { wrapSSR, hashId } = useStyle(baseClassName)

  if (!proFormContext.formRef) return null
  return wrapSSR(
    <ColWrapper>
      <div className={classNames(baseClassName, hashId)} style={style}>
        <Form.Item
          label={label}
          prefixCls={prefixCls}
          tooltip={tooltip}
          style={style}
          required={rules?.some((rule) => rule.required)}
          wrapperCol={wrapperCol}
          className={className}
          {...rest}
          name={isValidateList ? name : undefined}
          rules={
            isValidateList
              ? [
                {
                  validator: (rule, value) => {
                    if (!value || value.length === 0) {
                      return Promise.reject(new Error(emptyListMessage))
                    }
                    return Promise.resolve()
                  },
                  required: true,
                },
              ]
              : undefined
          }
        >
          <Form.List rules={rules} {...rest} name={name}>
            {(fields, action, meta) => {
              // 將 action 暴露給外部
              actionRefs.current = action
              return (
                <RowWrapper>
                  <ProFormListContainer
                    name={name}
                    readonly={!!rest.readonly}
                    originName={rest.name}
                    copyIconProps={copyIconProps}
                    deleteIconProps={deleteIconProps}
                    formInstance={proFormContext.formRef!.current!}
                    prefixCls={baseClassName}
                    meta={meta}
                    fields={fields}
                    itemContainerRender={itemContainerRender}
                    itemRender={itemRender}
                    fieldExtraRender={fieldExtraRender}
                    creatorRecord={creatorRecord}
                    actionRender={actionRender}
                    action={action}
                    actionGuard={actionGuard}
                    alwaysShowItemLabel={alwaysShowItemLabel}
                    min={min}
                    max={max}
                    count={fields.length}
                    onAfterAdd={(defaultValue, insertIndex, count) => {
                      if (isValidateList) {
                        proFormContext.formRef!.current!.validateFields([name])
                      }
                      onAfterAdd?.(defaultValue, insertIndex, count)
                    }}
                    onAfterRemove={(index, count) => {
                      if (isValidateList) {
                        if (count === 0) {
                          proFormContext.formRef!.current!.validateFields([
                            name,
                          ])
                        }
                      }
                      onAfterRemove?.(index, count)
                    }}
                    containerClassName={props.containerClassName}
                    containerStyle={props.containerStyle}
                  >
                    {children}
                  </ProFormListContainer>
                  <Form.ErrorList errors={meta.errors} />
                </RowWrapper>
              )
            }}
          </Form.List>
        </Form.Item>
      </div>
    </ColWrapper>,
  )
}

export { FormListContext, ProFormList }
