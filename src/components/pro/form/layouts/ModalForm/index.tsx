import merge from 'lodash.merge'
import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import { noteOnce } from 'rc-util/lib/warning'

import type { FormProps, ModalProps } from '@/components/base'
import { ConfigProvider, Modal } from '@/components/base'
import { openVisibleCompatible } from '../../../utils'
import type { CommonFormProps, ProFormInstance } from '../../BaseForm'
import { BaseForm } from '../../BaseForm'

export type ModalFormProps<
  T = Record<string, any>,
  U = Record<string, any>,
> = Omit<FormProps<T>, 'onFinish' | 'title'> &
  CommonFormProps<T, U> & {
    /**
     * 接收任意值，返回 真值 會關掉這個抽屜
     *
     * @name 表單結束後調用
     *
     * @example 結束後關閉抽屜
     * onFinish: async ()=> {await save(); return true}
     *
     * @example 結束後不關閉抽屜
     * onFinish: async ()=> {await save(); return false}
     */
    onFinish?: (formData: T) => Promise<any>

    /** @name 提交資料時，禁用取消按鈕的超時時間（毫秒）。 */
    submitTimeout?: number

    /** @name 用於觸發抽屜打開的 dom */
    trigger?: JSX.Element

    /** @name 受控的打開關閉 */
    open?: ModalProps['open']

    /**
     * @deprecated use onOpenChange replace
     */
    onVisibleChange?: (visible: boolean) => void
    /**
     * @deprecated use open replace
     */
    visible?: boolean

    /** @name 打開關閉的事件 */
    onOpenChange?: (visible: boolean) => void
    /**
     * 不支持 'visible'，請使用全局的 visible
     *
     * @name 彈框的屬性
     */
    modalProps?: Omit<ModalProps, 'visible'>

    /** @name 彈框的標題 */
    title?: ModalProps['title']

    /** @name 彈框的寬度 */
    width?: ModalProps['width']
  }

function ModalForm<T = Record<string, any>, U = Record<string, any>>({
  children,
  trigger,
  onVisibleChange,
  onOpenChange,
  modalProps,
  onFinish,
  submitTimeout,
  title,
  width,
  visible: propVisible,
  open: propsOpen,
  ...rest
}: ModalFormProps<T, U>) {
  noteOnce(
    // eslint-disable-next-line @typescript-eslint/dot-notation
    // @ts-ignore
    !rest['footer'] || !modalProps?.footer,
    'ModalForm 是一個 ProForm 的特殊布局，如果想自訂按鈕，請使用 submit.render 自訂。',
  )

  const context = useContext(ConfigProvider.ConfigContext)

  const [, forceUpdate] = useState([])
  const [loading, setLoading] = useState(false)

  const [open, setOpen] = useMergedState<boolean>(!!propVisible, {
    value: propsOpen || propVisible,
    onChange: onOpenChange || onVisibleChange,
  })

  const footerRef = useRef<HTMLDivElement | null>(null)

  const footerDomRef: React.RefCallback<HTMLDivElement> = useCallback(
    (element) => {
      if (footerRef.current === null && element) {
        forceUpdate([])
      }
      footerRef.current = element
    },
    [],
  )

  const formRef = useRef<ProFormInstance>()

  const resetFields = useCallback(() => {
    const form = rest.form ?? rest.formRef?.current ?? formRef.current
    // 重設表單
    if (form && modalProps?.destroyOnClose) {
      form.resetFields()
    }
  }, [modalProps?.destroyOnClose, rest.form, rest.formRef])

  useImperativeHandle(
    rest.formRef,
    () => {
      return formRef.current
    },
    [formRef.current],
  )

  useEffect(() => {
    if (open && (propsOpen || propVisible)) {
      onOpenChange?.(true)
      onVisibleChange?.(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propVisible, propsOpen, open])

  const triggerDom = useMemo(() => {
    if (!trigger) {
      return null
    }

    return React.cloneElement(trigger, {
      key: 'trigger',
      ...trigger.props,
      onClick: async (e: any) => {
        setOpen(!open)
        trigger.props?.onClick?.(e)
      },
    })
  }, [setOpen, trigger, open])

  const submitterConfig = useMemo(() => {
    if (rest.submitter === false) {
      return false
    }

    return merge(
      {
        searchConfig: {
          submitText:
            modalProps?.okText ?? context.locale?.Modal?.okText ?? '確認',
          resetText:
            modalProps?.cancelText ??
            context.locale?.Modal?.cancelText ??
            '取消',
        },
        resetButtonProps: {
          preventDefault: true,
          // 提交表單loading時，不可關閉彈框
          disabled: submitTimeout ? loading : undefined,
          onClick: (e: any) => {
            setOpen(false)
            // fix: #6006 點擊取消按鈕時,那麼必然會觸發跳出視窗關閉，我們無需在 此處重設表單，只需在跳出視窗關閉時重設即可
            modalProps?.onCancel?.(e)
          },
        },
      },
      rest.submitter,
    )
  }, [
    context.locale?.Modal?.cancelText,
    context.locale?.Modal?.okText,
    modalProps,
    rest.submitter,
    setOpen,
    loading,
    submitTimeout,
  ])

  const contentRender = useCallback((formDom: any, submitter: any) => {
    return (
      <>
        {formDom}
        {footerRef.current && submitter ? (
          <React.Fragment key="submitter">
            {createPortal(submitter, footerRef.current)}
          </React.Fragment>
        ) : (
          submitter
        )}
      </>
    )
  }, [])

  const onFinishHandle = useCallback(
    async (values: T) => {
      const response = onFinish?.(values)

      if (submitTimeout && response instanceof Promise) {
        setLoading(true)

        const timer = setTimeout(() => setLoading(false), submitTimeout)
        response.finally(() => {
          clearTimeout(timer)
          setLoading(false)
        })
      }
      const result = await response
      // 返回真值，關閉彈框
      if (result) {
        setOpen(false)
      }
      return result
    },
    [onFinish, setOpen, submitTimeout],
  )

  const modalOpenProps = openVisibleCompatible(open)

  return (
    <>
      <Modal
        title={title}
        width={width || 800}
        {...modalProps}
        {...modalOpenProps}
        onCancel={(e) => {
          // 提交表單loading時，阻止彈框關閉
          if (submitTimeout && loading) return
          setOpen(false)
          modalProps?.onCancel?.(e)
        }}
        afterClose={() => {
          resetFields()
          setOpen(false)
          modalProps?.afterClose?.()
        }}
        footer={
          rest.submitter !== false ? (
            <div
              ref={footerDomRef}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            />
          ) : null
        }
      >
        <BaseForm<T, U>
          formComponentType="ModalForm"
          layout="vertical"
          {...rest}
          onInit={(_, form) => {
            if (rest.formRef) {
              (
                rest.formRef as React.MutableRefObject<ProFormInstance<T>>
              ).current = form
            }
            rest?.onInit?.(_, form)
            formRef.current = form
          }}
          formRef={formRef}
          submitter={submitterConfig}
          onFinish={async (values) => {
            const result = await onFinishHandle(values)
            // fix: #6006 如果 result 為 true,那麼必然會觸發跳出視窗關閉，我們無需在 此處重設表單，只需在跳出視窗關閉時重設即可
            return result
          }}
          contentRender={contentRender}
        >
          {children}
        </BaseForm>
      </Modal>
      {triggerDom}
    </>
  )
}

export { ModalForm }
