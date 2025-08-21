import { createContext, useCallback, useContext, useRef, useState } from 'react'
import cn from 'classnames'
import { useMemoOne } from 'use-memo-one'
import {
  arrow,
  FloatingArrow,
  FloatingPortal,
  offset,
  safePolygon,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react'
import { shift } from '@floating-ui/dom'

import './tooltip.scss'

const TooltipCtx = createContext()

const Tooltip = props => {
  const { children, closeDelay = true, mouseOnly, openDelay, placement } = props
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef()
  const {
    context: floatingCtx,
    floatingStyles,
    refs,
  } = useFloating({
    middleware: [shift(), arrow({ element: arrowRef }), offset(8)],
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
  })
  const dismiss = useDismiss(floatingCtx)
  const hover = useHover(floatingCtx, {
    delay: {
      open: openDelay ? 500 : 200,
      close: closeDelay ? 300 : 0,
    },
    handleClose: safePolygon(),
    mouseOnly: true,
  })
  const click = useClick(floatingCtx, {
    enabled: !mouseOnly,
    ignoreMouse: true,
  })
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    click,
    dismiss,
  ])
  const { isMounted, styles } = useTransitionStyles(floatingCtx)
  const floatingProps = getFloatingProps()

  const ctx = useMemoOne(
    () => ({
      arrowRef,
      floatingCtx,
      floatingProps,
      floatingStyles,
      getReferenceProps,
      isMounted,
      refs,
      styles,
    }),
    [
      arrowRef,
      floatingCtx,
      floatingProps,
      floatingStyles,
      getReferenceProps,
      isMounted,
      refs,
      styles,
    ]
  )

  return <TooltipCtx.Provider value={ctx}>{children}</TooltipCtx.Provider>
}

const TooltipActivator = ({
  Tag = 'div',
  children,
  className,
  ...wrapperProps
}) => {
  const { getReferenceProps, refs } = useContext(TooltipCtx)
  return (
    <Tag
      className={cn(className, 'tooltip-activator')}
      {...wrapperProps}
      ref={refs.setReference}
      {...getReferenceProps()}
    >
      {children}
    </Tag>
  )
}

const TooltipContent = ({ children }) => {
  const {
    arrowRef,
    floatingCtx,
    floatingProps,
    floatingStyles,
    isMounted,
    refs,
    styles,
  } = useContext(TooltipCtx)

  const onMouseDown = useCallback(evt => {
    evt.stopPropagation()
  }, [])
  const onClick = useCallback(evt => {
    evt.stopPropagation()
  }, [])

  if (!isMounted) return null

  const styleProp = { ...floatingStyles, ...styles }

  return (
    <FloatingPortal>
      <div
        ref={refs.setFloating}
        style={styleProp}
        {...floatingProps}
        className={cn(floatingProps.className, 'tooltip-content')}
        onClick={onClick}
        onMouseDown={onMouseDown}
      >
        <FloatingArrow
          ref={arrowRef}
          context={floatingCtx}
          fill="var(--bg)"
          stroke="var(--fg)"
          strokeWidth={1}
        />
        {children}
      </div>
    </FloatingPortal>
  )
}

export default Tooltip
export { TooltipActivator, TooltipContent }
