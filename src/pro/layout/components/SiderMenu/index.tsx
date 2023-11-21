import React, { useContext, useEffect } from 'react'
import classNames from 'classnames'
import Omit from 'omit.js'

import { ProProvider } from '@/providers'
import { Drawer } from '@/base'
import type { PrivateSiderMenuProps, SiderMenuProps } from './SiderMenu'
import { SiderMenu } from './SiderMenu'
import { useStyle } from './style/index'
import { openVisibleCompatible } from '../../../utils'

const SiderMenuWrapper: React.FC<SiderMenuProps & PrivateSiderMenuProps> = (
  props,
) => {
  const {
    isMobile,
    siderWidth,
    collapsed,
    onCollapse,
    style,
    className,
    hide,
    prefixCls,
  } = props

  const { token } = useContext(ProProvider)

  const omitProps = Omit(props, ['className', 'style'])

  const { wrapSSR, hashId } = useStyle(`${prefixCls}-sider`, {
    proLayoutCollapsedWidth: 64,
  })

  const siderClassName = classNames(`${prefixCls}-sider`, className, hashId)

  if (hide) {
    return null
  }

  const drawerOpenProps = openVisibleCompatible(!collapsed, () =>
    onCollapse?.(true),
  )

  return wrapSSR(
    isMobile ? (
      <Drawer
        placement="left"
        className={classNames(`${prefixCls}-drawer-sider`, className)}
        {...drawerOpenProps}
        style={{
          padding: 0,
          height: '100vh',
          ...style,
        }}
        onClose={() => {
          onCollapse?.(true)
        }}
        maskClosable
        closable={false}
        width={siderWidth}
        bodyStyle={{
          height: '100vh',
          padding: 0,
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: token.layout?.sider?.colorMenuBackground,
        }}
      >
        <SiderMenu
          {...omitProps}
          isMobile={true}
          className={siderClassName}
          collapsed={isMobile ? false : collapsed}
          splitMenus={false}
          originCollapsed={collapsed}
        />
      </Drawer>
    ) : (
      <SiderMenu
        className={siderClassName}
        originCollapsed={collapsed}
        {...omitProps}
        style={style}
      />
    ),
  )
}

export { SiderMenuWrapper as SiderMenu }
