import { useContext, useEffect, useRef } from 'react'
import { animate } from 'motion'
import { transitionDurSlowSeconds } from '@/utils/style-variables'
import { TabCtx } from './context'

import './header.scss'

const TabHeader = props => {
  const { buttons, links } = props

  const { selectedTab } = useContext(TabCtx)
  const tabButtonsEl = useRef()
  const overlayEl = useRef()
  const overlayState = useRef()

  useEffect(() => {
    const prevId = overlayState.current
    overlayState.current = selectedTab
    const selectedBtn = tabButtonsEl.current.querySelector('button.selected')

    if (prevId === undefined) {
      // if it wasn't displayed previously, just display it
      Object.assign(overlayEl.current.style, {
        left: `${selectedBtn.offsetLeft}px`,
        opacity: 0,
        bottom: '-1px',
        width: `${selectedBtn.offsetWidth}px`,
      })
      overlayEl.current.classList.add('visible')
      animate(
        overlayEl.current,
        { opacity: 1 },
        { duration: transitionDurSlowSeconds }
      )
    } else {
      // otherwise animate to the new tab
      animate(
        overlayEl.current,
        {
          left: selectedBtn.offsetLeft,
          width: selectedBtn.offsetWidth,
        },
        { duration: transitionDurSlowSeconds, ease: 'circOut' }
      )
    }
  }, [selectedTab])

  return (
    <header ref={tabButtonsEl} className="tab-header">
      <div className="tab-buttons">{buttons}</div>
      <div className="tab-links">{links}</div>
      <div ref={overlayEl} className="selection-overlay" />
    </header>
  )
}

export default TabHeader
