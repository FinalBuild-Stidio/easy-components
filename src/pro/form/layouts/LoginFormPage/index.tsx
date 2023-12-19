import React, { useContext, useMemo } from 'react'
import { useIntl } from '@ipasstw/react-intl'
import classNames from 'classnames'

import { ConfigProvider } from '@/base'
import type { ProFormProps } from '../ProForm'
import { ProForm } from '../ProForm'
import { useStyle } from './style'

export type LoginFormPageProps<T> = {
  /**
   * @name form 最上面的一個提示配置，可以配置一些錯誤的提示資訊
   * @example <caption>提示登入異常</caption>
   * message={<Alert message="登入異常，請重試！"/>}
   */
  message: React.ReactNode | false
  /**
   * @name 標題，可以配置為空
   */
  title: React.ReactNode | false
  /**
   * @name 二級標題，可以配置為空
   */
  subTitle: React.ReactNode | false
  /**
   * @name 自訂額外的登入功能
   *
   * @example <caption>配置支付寶登入</caption>
   * actions={<a>跳轉支付寶登入</a>}
   *
   * @example <caption>使用圖示</caption>
   * actions={<a><Icon type="alipay" />跳轉支付寶登入</a>}
   */
  actions: React.ReactNode
  /**
   * @name logo 的配置，支持node 和 string
   */
  logo?: React.ReactNode | string
  /**
   * @name 整個登入頁面的樣式配置
   * @type  React.CSSProperties
   */
  style: React.CSSProperties
  /**
   * @name 活動資訊的配置，一個頁面應該只有一個。
   * @example <caption>配置一個簡單的活動。</caption>
   * activityConfig={{title:"這裡有個大活動",description:"這裡有個大活動的描述",action:<a>點我去看看</a>}}
   */
  activityConfig?: {
    title?: React.ReactNode
    subTitle?: React.ReactNode
    action?: React.ReactNode
    style?: React.CSSProperties
  }
  /**
   * @name 登入頁面的背景圖片，可以用它來設置一個背景
   *
   * @example  backgroundImageUrl="xxx.svg"
   */
  backgroundImageUrl?: string
  /**
   * @name 登入頁面的背景影片，可以用它來設置一個背景，優先度高於 backgroundImageUrl
   *
   * @example  backgroundImageUrl="xxx.svg"
   */
  backgroundVideoUrl?: string
  children?: React.ReactNode | React.ReactNode[]

  containerStyle?: React.CSSProperties
  mainStyle?: React.CSSProperties
  otherStyle?: React.CSSProperties
} & ProFormProps<T>

export function LoginFormPage<T = Record<string, any>>(
  props: Partial<LoginFormPageProps<T>>,
) {
  const {
    logo,
    message,
    style,
    activityConfig = {},
    backgroundImageUrl,
    backgroundVideoUrl,
    title,
    subTitle,
    actions,
    children,
    containerStyle,
    otherStyle,
    mainStyle,
    ...proFormProps
  } = props

  const intl = useIntl()

  const genSubmitButtonProps = () => {
    if (proFormProps.submitter === false) return false
    if (proFormProps.submitter?.submitButtonProps === false) return false
    return {
      size: 'large',
      style: {
        width: '100%',
      },
      ...proFormProps.submitter?.submitButtonProps,
    }
  }

  const submitter = {
    searchConfig: {
      submitText: intl.formatMessage({ id: 'loginForm.submitText', defaultMessage: '登入' }),
    },
    render: (_, dom) => dom.pop(),
    ...proFormProps.submitter,
    submitButtonProps: genSubmitButtonProps(),
  } as ProFormProps['submitter']

  const context = useContext(ConfigProvider.ConfigContext)
  const baseClassName = context.getPrefixCls('pro-form-login-page')
  const { wrapSSR, hashId } = useStyle(baseClassName)

  const getCls = (className: string) =>
    `${baseClassName}-${className} ${hashId}`.trim()

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
      className={classNames(baseClassName, hashId)}
      style={{
        ...style,
        position: 'relative',
        backgroundImage: `url("${backgroundImageUrl}")`,
      }}
    >
      {backgroundVideoUrl ? (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            overflow: 'hidden',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <video
            src={backgroundVideoUrl}
            controls={false}
            autoPlay
            loop
            muted={true}
            crossOrigin="anonymous"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      ) : null}
      <div className={getCls('notice')}>
        {activityConfig && (
          <div
            className={getCls('notice-activity')}
            style={activityConfig.style}
          >
            {activityConfig.title && (
              <div className={getCls('notice-activity-title')}>
                {' '}
                {activityConfig.title}{' '}
              </div>
            )}
            {activityConfig.subTitle && (
              <div className={getCls('notice-activity-subTitle')}>
                {activityConfig.subTitle}
              </div>
            )}
            {activityConfig.action && (
              <div className={getCls('notice-activity-action')}>
                {activityConfig.action}
              </div>
            )}
          </div>
        )}
      </div>
      <div className={getCls('left')}>
        <div className={getCls('container')} style={containerStyle}>
          <div className={getCls('top')}>
            {title || logoDom ? (
              <div className={getCls('header')}>
                {logoDom ? (
                  <span className={getCls('logo')}>{logoDom}</span>
                ) : null}
                {title ? (
                  <span className={getCls('title')}>{title}</span>
                ) : null}
              </div>
            ) : null}
            {subTitle ? <div className={getCls('desc')}>{subTitle}</div> : null}
          </div>
          <div className={getCls('main')} style={mainStyle}>
            <ProForm isKeyPressSubmit {...proFormProps} submitter={submitter}>
              {message}
              {children}
            </ProForm>
            {actions ? (
              <div className={getCls('other')} style={otherStyle}>
                {actions}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
  )
}
