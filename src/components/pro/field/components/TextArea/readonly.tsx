import React, { useContext } from 'react'
import classNames from 'classnames'

import { ConfigProvider } from '@/components/base'
import { useStyle } from '../../../utils'
import type { ProFieldFC } from '../../index'

/**
 * Input.TextArea 唯獨模式時渲染的元件
 *
 * @param
 */
const FieldTextAreaReadonly: ProFieldFC<{
  text: string
}> = ({ text }, ref) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext)
  const readonlyClassName = getPrefixCls('pro-field-readonly')
  const compClassName = `${readonlyClassName}-textarea`

  const { wrapSSR, hashId } = useStyle('TextArea', () => {
    return {
      [`.${compClassName}`]: {
        display: 'inline-block',
        // padding: '4px 11px',
        lineHeight: '1.5715',
        maxWidth: '100%',
        whiteSpace: 'pre-wrap',
      },
    }
  })

  return wrapSSR(
    <span
      ref={ref}
      className={classNames(hashId, readonlyClassName, compClassName)}
      style={{}}
    >
      {text ?? '-'}
    </span>,
  )
}

export default React.forwardRef(FieldTextAreaReadonly)
