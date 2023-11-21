import { useIntl } from 'react-intl'
import { ConfigContext } from '@/components/base/Config'
import classNames from 'classnames'
import React, { useContext, useMemo } from 'react'
import type { SubmitterProps } from '../../components'
import type { ProFormProps } from '../ProForm'
import { ProForm } from '../ProForm'
import { useStyle } from './style'

export type LoginFormProps<T> = {
  /**
   * @name form 最上面的一個提示設定，可以設定一些錯誤的提示資訊
   * @example <caption>提示登入異常</caption>
   * message={<Alert message="登入異常，請重試！"/>}
   */
  message: React.ReactNode | false
  /**
   * @name 標題，可以設定為空
   */
  title: React.ReactNode | false
  /**
   * @name 二級標題，可以設定為空
   */
  subTitle: React.ReactNode | false
  /**
   * @name 自訂額外的登入功能
   *
   * @example <caption>跳轉到第三方登入</caption>
   * actions={<a>跳轉到第三方登入</a>}
   *
   * @example <caption>使用圖示</caption>
   * actions={<a><Icon type="oauth" />跳轉到第三方登入</a>}
   */
  actions: React.ReactNode
  /**
   * @name logo 的設定，支援 ReactNode 和 url
   */
  logo?: React.ReactNode
  children?: React.ReactNode | React.ReactNode[]

  /**
   * @name 登入框主表格的 style 
   */
  contentStyle?: React.CSSProperties
  /**
   * @name 登入框容器的 style 
   */
  containerStyle?: React.CSSProperties
  otherStyle?: React.CSSProperties
} & Omit<ProFormProps<T>, 'title'>

function LoginForm<T = Record<string, any>>(props: Partial<LoginFormProps<T>>) {
  const {
    logo,
    message,
    contentStyle,
    title,
    subTitle,
    actions,
    children,
    containerStyle,
    otherStyle,
    ...proFormProps
  } = props

  const intl = useIntl()

  const submitter =
    proFormProps.submitter === false
      ? false
      : ({
        searchConfig: {
          submitText: intl.formatMessage({ id: 'loginForm.submitText', defaultMessage: '登入' }),
        },
        ...proFormProps.submitter,
        submitButtonProps: {
          size: 'large',
          style: {
            width: '100%',
          },
          ...proFormProps.submitter?.submitButtonProps,
        },
        render: (_: any, dom: any) => {
          const loginButton = dom.pop()
          if (
            typeof (proFormProps?.submitter as SubmitterProps)?.render ===
            'function'
          ) {
            return (
              proFormProps?.submitter as {
                render: Exclude<SubmitterProps['render'], false>
              }
            )?.render?.(_, dom)
          }
          return loginButton
        },
      } as ProFormProps['submitter'])

  const context = useContext(ConfigContext)
  const baseClassName = context.getPrefixCls('pro-form-login')
  const { wrapSSR, hashId } = useStyle(baseClassName)
  const getCls = (className: string) =>
    `${baseClassName}-${className} ${hashId}`

  /** 生成logo 的dom，如果是string 設置為圖片 如果是個 dom 就原樣保留 */
  const logoDom = useMemo(() => {
    if (!logo) return null
    if (typeof logo === 'string') {
      return <img src={logo} />
    }
    return logo
  }, [logo])

  return wrapSSR(
    <div
      className={classNames(getCls('container'), hashId)}
      style={containerStyle}
    >
      <div className={`${getCls('top')} ${hashId}`.trim()}>
        {title || logoDom ? (
          <div className={`${getCls('header')}`}>
            {logoDom ? <span className={getCls('logo')}>{logoDom}</span> : null}
            {title ? <span className={getCls('title')}>{title}</span> : null}
          </div>
        ) : null}
        {subTitle ? <div className={getCls('desc')}>{subTitle}</div> : null}
      </div>
      <div
        className={getCls('main')}
        style={{
          width: 328,
          ...contentStyle,
        }}
      >
        <ProForm isKeyPressSubmit {...proFormProps} submitter={submitter}>
          {message}
          {children}
        </ProForm>
        {actions ? (
          <div className={getCls('main-other')} style={otherStyle}>
            {actions}
          </div>
        ) : null}
      </div>
    </div>,
  )
}
export { LoginForm }
