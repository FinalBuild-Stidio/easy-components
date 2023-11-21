import * as React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import classNames from 'classnames'
import Dialog from 'rc-dialog'

import useClosable from '../_util/hooks/useClosable'
import { getTransitionName } from '../_util/motion'
import { canUseDocElement } from '../_util/styleChecker'
import { devUseWarning } from '../_util/warning'
import { ConfigContext } from '../Config/ConfigContext'
import { NoFormStyle } from '../form/context'
import { NoCompactStyle } from '../space/Compact'
import type { ModalProps, MousePosition } from './interface'
import { Footer, renderCloseIcon } from './shared'
import useStyle from './style'

let mousePosition: MousePosition

const getClickPosition = (e: MouseEvent) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY,
  }
  // 100ms 內發生過點擊事件，則從點擊位置動畫顯示
  // 否則直接 zoom 顯示
  // 這樣可以相容非點擊方式展開
  setTimeout(() => {
    mousePosition = null
  }, 100)
}

// 只有點擊事件支援從滑鼠位置動畫展開
if (canUseDocElement()) {
  document.documentElement.addEventListener('click', getClickPosition, true)
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    modal,
  } = React.useContext(ConfigContext)

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onCancel } = props
    onCancel?.(e)
  }

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onOk } = props
    onOk?.(e)
  }

  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Modal')

    warning.deprecated(!('visible' in props), 'visible', 'open')
  }

  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    open,
    wrapClassName,
    centered,
    getContainer,
    closeIcon,
    closable,
    focusTriggerAfterClose = true,
    style,
    // Deprecated
    visible,

    width = 520,
    footer,
    ...restProps
  } = props

  const prefixCls = getPrefixCls('modal', customizePrefixCls)
  const rootPrefixCls = getPrefixCls()
  // Style
  const [wrapSSR, hashId] = useStyle(prefixCls)

  const wrapClassNameExtended = classNames(wrapClassName, {
    [`${prefixCls}-centered`]: !!centered,
  })

  const dialogFooter = footer !== null && (
    <Footer {...props} onOk={handleOk} onCancel={handleCancel} />
  )
  const [mergedClosable, mergedCloseIcon] = useClosable(
    closable,
    closeIcon,
    (icon) => renderCloseIcon(prefixCls, icon),
    <CloseIcon className={`${prefixCls}-close-icon`} />,
    true,
  )

  // =========================== Render ===========================
  return wrapSSR(
    <NoCompactStyle>
      <NoFormStyle status override>
        <Dialog
          width={width}
          {...restProps}
          getContainer={getContainer === undefined ? getContextPopupContainer : getContainer}
          prefixCls={prefixCls}
          rootClassName={classNames(hashId, rootClassName)}
          wrapClassName={wrapClassNameExtended}
          footer={dialogFooter}
          visible={open ?? visible}
          mousePosition={restProps.mousePosition ?? mousePosition}
          onClose={handleCancel as any}
          closable={mergedClosable}
          closeIcon={mergedCloseIcon}
          focusTriggerAfterClose={focusTriggerAfterClose}
          transitionName={getTransitionName(rootPrefixCls, 'zoom', props.transitionName)}
          maskTransitionName={getTransitionName(rootPrefixCls, 'fade', props.maskTransitionName)}
          className={classNames(hashId, className, modal?.className)}
          style={{ ...modal?.style, ...style }}
        />
      </NoFormStyle>
    </NoCompactStyle>,
  )
}

export default Modal
