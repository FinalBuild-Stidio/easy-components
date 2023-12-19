import classNames from 'classnames'
import type { CSSMotionProps } from 'rc-motion'
import CSSMotion from 'rc-motion'
import { useComposeRef } from 'rc-util'
import KeyCode from 'rc-util/lib/KeyCode'
import pickAttrs from 'rc-util/lib/pickAttrs'
import * as React from 'react'
import type { DrawerContextProps } from './context'
import DrawerContext from './context'
import { parseWidthHeight } from './util'
import type { DrawerClassNames, DrawerStyles } from './types'

interface RefContextProps {
  panel?: React.Ref<HTMLDivElement>
}

const RefContext = React.createContext<RefContextProps>({})

export interface PanelEvents {
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>
  onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>
}

export interface DrawerPopupProps extends PanelEvents {
  prefixCls: string
  open?: boolean
  inline?: boolean
  push?: boolean | PushConfig
  forceRender?: boolean
  autoFocus?: boolean
  keyboard?: boolean

  // Root
  rootClassName?: string
  rootStyle?: React.CSSProperties
  zIndex?: number

  // Drawer
  placement?: Placement
  id?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  width?: number | string
  height?: number | string
  contentWrapperStyle?: React.CSSProperties

  // Mask
  mask?: boolean
  maskClosable?: boolean
  maskClassName?: string
  maskStyle?: React.CSSProperties

  // Motion
  motion?: CSSMotionProps | ((placement: Placement) => CSSMotionProps)
  maskMotion?: CSSMotionProps

  // Events
  afterOpenChange?: (open: boolean) => void
  onClose?: (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  ) => void

  // classNames
  classNames?: DrawerClassNames

  // styles
  styles?: DrawerStyles
}

const sentinelStyle: React.CSSProperties = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none',
  position: 'absolute',
}

export type Placement = 'left' | 'right' | 'top' | 'bottom'

export interface PushConfig {
  distance?: number | string
}

export interface PanelProps extends PanelEvents {
  prefixCls: string
  className?: string
  id?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  containerRef?: React.Ref<HTMLDivElement>
}

const Panel = (props: PanelProps) => {
  const {
    prefixCls,
    className,
    style,
    children,
    containerRef,
    id,
    onMouseEnter,
    onMouseOver,
    onMouseLeave,
    onClick,
    onKeyDown,
    onKeyUp,
  } = props

  const eventHandlers = {
    onMouseEnter,
    onMouseOver,
    onMouseLeave,
    onClick,
    onKeyDown,
    onKeyUp,
  }

  const { panel: panelRef } = React.useContext(RefContext)

  const mergedRef = useComposeRef(panelRef!, containerRef!)

  return (
    <>
      <div
        id={id}
        className={classNames(`${prefixCls}-content`, className)}
        style={{
          ...style,
        }}
        aria-modal="true"
        role="dialog"
        ref={mergedRef}
        {...eventHandlers}
      >
        {children}
      </div>
    </>
  )
}
export interface DrawerPopupProps extends PanelEvents {
  prefixCls: string
  open?: boolean
  inline?: boolean
  push?: boolean | PushConfig
  forceRender?: boolean
  autoFocus?: boolean
  keyboard?: boolean

  // Root
  rootClassName?: string
  rootStyle?: React.CSSProperties
  zIndex?: number

  // Drawer
  placement?: Placement
  id?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  width?: number | string
  height?: number | string
  contentWrapperStyle?: React.CSSProperties

  // Mask
  mask?: boolean
  maskClosable?: boolean
  maskClassName?: string
  maskStyle?: React.CSSProperties

  // Motion
  motion?: CSSMotionProps | ((placement: Placement) => CSSMotionProps)
  maskMotion?: CSSMotionProps

  // Events
  afterOpenChange?: (open: boolean) => void
  onClose?: (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  ) => void

  // classNames
  classNames?: DrawerClassNames

  // styles
  styles?: DrawerStyles
}

function DrawerPopup(props: DrawerPopupProps, ref: React.Ref<HTMLDivElement>) {
  const {
    prefixCls,
    open,
    placement,
    inline,
    push,
    forceRender,
    autoFocus,
    keyboard,

    // classNames
    classNames: drawerClassNames,
    // Root
    rootClassName,
    rootStyle,
    zIndex,

    // Drawer
    className,
    id,
    style,
    motion,
    width,
    height,
    children,
    contentWrapperStyle,

    // Mask
    mask,
    maskClosable,
    maskMotion,
    maskClassName,
    maskStyle,

    // Events
    afterOpenChange,
    onClose,
    onMouseEnter,
    onMouseOver,
    onMouseLeave,
    onClick,
    onKeyDown,
    onKeyUp,

    styles,
  } = props

  // ================================ Refs ================================
  const panelRef = React.createRef<HTMLDivElement>()
  const sentinelStartRef = React.createRef<HTMLDivElement>()
  const sentinelEndRef = React.createRef<HTMLDivElement>()

  React.useImperativeHandle(ref, () => panelRef.current!)

  const onPanelKeyDown: React.KeyboardEventHandler<HTMLDivElement> = event => {
    const { keyCode, shiftKey } = event

    switch (keyCode) {
      // Tab active
      case KeyCode.TAB: {
        if (keyCode === KeyCode.TAB) {
          if (!shiftKey && document.activeElement === sentinelEndRef.current) {
            sentinelStartRef.current?.focus({ preventScroll: true })
          } else if (
            shiftKey &&
            document.activeElement === sentinelStartRef.current
          ) {
            sentinelEndRef.current?.focus({ preventScroll: true })
          }
        }
        break
      }

      // Close
      case KeyCode.ESC: {
        if (onClose && keyboard) {
          event.stopPropagation()
          onClose(event)
        }
        break
      }
    }
  }

  // ========================== Control ===========================
  // Auto Focus
  React.useEffect(() => {
    if (open && autoFocus) {
      panelRef.current?.focus({ preventScroll: true })
    }
  }, [open])

  // ============================ Push ============================
  const [pushed, setPushed] = React.useState(false)

  const parentContext = React.useContext(DrawerContext)

  // Merge push distance
  let pushConfig: PushConfig
  if (push === false) {
    pushConfig = {
      distance: 0,
    }
  } else if (push === true) {
    pushConfig = {}
  } else {
    pushConfig = push || {}
  }
  const pushDistance =
    pushConfig?.distance ?? parentContext?.pushDistance ?? 180

  const mergedContext = React.useMemo<DrawerContextProps>(
    () => ({
      pushDistance,
      push: () => {
        setPushed(true)
      },
      pull: () => {
        setPushed(false)
      },
    }),
    [pushDistance],
  )

  // ========================= ScrollLock =========================
  // Tell parent to push
  React.useEffect(() => {
    if (open) {
      parentContext?.push?.()
    } else {
      parentContext?.pull?.()
    }
  }, [open])

  // Clean up
  React.useEffect(
    () => () => {
      parentContext?.pull?.()
    },
    [],
  )

  // ============================ Mask ============================
  const maskNode: React.ReactNode = mask && (
    <CSSMotion key="mask" {...maskMotion} visible={open}>
      {(
        { className: motionMaskClassName, style: motionMaskStyle },
        maskRef,
      ) => {
        return (
          <div
            className={classNames(
              `${prefixCls}-mask`,
              motionMaskClassName,
              drawerClassNames?.mask,
              maskClassName,
            )}
            style={{
              ...motionMaskStyle,
              ...maskStyle,
              ...styles?.mask,
            }}
            onClick={maskClosable && open ? onClose : undefined}
            ref={maskRef}
          />
        )
      }}
    </CSSMotion>
  )

  // =========================== Panel ============================
  const motionProps = typeof motion === 'function' ? motion(placement ?? 'left') : motion

  const wrapperStyle: React.CSSProperties = {}

  if (pushed && pushDistance) {
    switch (placement) {
      case 'top':
        wrapperStyle.transform = `translateY(${pushDistance}px)`
        break
      case 'bottom':
        wrapperStyle.transform = `translateY(${-pushDistance}px)`
        break
      case 'left':
        wrapperStyle.transform = `translateX(${pushDistance}px)`

        break
      default:
        wrapperStyle.transform = `translateX(${-pushDistance}px)`
        break
    }
  }

  if (placement === 'left' || placement === 'right') {
    wrapperStyle.width = parseWidthHeight(width)
  } else {
    wrapperStyle.height = parseWidthHeight(height)
  }

  const eventHandlers = {
    onMouseEnter,
    onMouseOver,
    onMouseLeave,
    onClick,
    onKeyDown,
    onKeyUp,
  }

  const panelNode: React.ReactNode = (
    <CSSMotion
      key="panel"
      {...motionProps}
      visible={open}
      forceRender={forceRender}
      onVisibleChanged={nextVisible => {
        afterOpenChange?.(nextVisible)
      }}
      removeOnLeave={false}
      leavedClassName={`${prefixCls}-content-wrapper-hidden`}
    >
      {({ className: motionClassName, style: motionStyle }, motionRef) => {
        return (
          <div
            className={classNames(
              `${prefixCls}-content-wrapper`,
              drawerClassNames?.wrapper,
              motionClassName,
            )}
            style={{
              ...wrapperStyle,
              ...motionStyle,
              ...contentWrapperStyle,
              ...styles?.wrapper,
            }}
            {...pickAttrs(props, { data: true })}
          >
            <Panel
              id={id}
              containerRef={motionRef}
              prefixCls={prefixCls}
              className={classNames(className, drawerClassNames?.content)}
              style={{
                ...style,
                ...styles?.content,
              }}
              {...eventHandlers}
            >
              {children}
            </Panel>
          </div>
        )
      }}
    </CSSMotion>
  )

  // =========================== Render ===========================
  const containerStyle: React.CSSProperties = {
    ...rootStyle,
  }

  if (zIndex) {
    containerStyle.zIndex = zIndex
  }

  return (
    <DrawerContext.Provider value={mergedContext}>
      <div
        className={classNames(
          prefixCls,
          `${prefixCls}-${placement}`,
          rootClassName,
          {
            [`${prefixCls}-open`]: open,
            [`${prefixCls}-inline`]: inline,
          },
        )}
        style={containerStyle}
        tabIndex={-1}
        ref={panelRef}
        onKeyDown={onPanelKeyDown}
      >
        {maskNode}
        <div
          tabIndex={0}
          ref={sentinelStartRef}
          style={sentinelStyle}
          aria-hidden="true"
          data-sentinel="start"
        />
        {panelNode}
        <div
          tabIndex={0}
          ref={sentinelEndRef}
          style={sentinelStyle}
          aria-hidden="true"
          data-sentinel="end"
        />
      </div>
    </DrawerContext.Provider>
  )
}

const RefDrawerPopup = React.forwardRef(DrawerPopup)

if (process.env.NODE_ENV !== 'production') {
  RefDrawerPopup.displayName = 'DrawerPopup'
}

export default RefDrawerPopup
