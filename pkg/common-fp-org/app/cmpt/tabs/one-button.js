import { useCallback, useContext } from 'react'
import cn from 'classnames'
import { TabCtx } from './context'
import { waitSlowAnimationDur, waitMs } from '@/utils'

import './one-button.scss'

const OneTabButton = props => {
  const { id, text } = props
  const {
    isChangingTabs,
    setIsChangingTabs,
    setDisplayedTab,
    selectedTab,
    setSelectedTab,
    setVisibleTab,
  } = useContext(TabCtx)

  const onClick = useCallback(async () => {
    if (isChangingTabs || selectedTab === id) return
    try {
      setIsChangingTabs(true)
      setSelectedTab(id)
      setVisibleTab(undefined)
      await waitSlowAnimationDur()
      setDisplayedTab(id)
      await waitMs(50)
      setVisibleTab(id)

      if (id) history.replaceState(history.state, '', '#' + id)
      else history.replaceState(history.state, '', location.pathname)

      await waitSlowAnimationDur()
    } finally {
      setIsChangingTabs(false)
    }
  }, [
    id,
    isChangingTabs,
    selectedTab,
    setIsChangingTabs,
    setDisplayedTab,
    setSelectedTab,
    setVisibleTab,
  ])

  const selected = selectedTab === id

  return (
    <button
      className={cn('one-tab-button', { selected })}
      onClick={onClick}
      aria-label={`Switch to tab '${text}'`}
    >
      {text}
    </button>
  )
}

export default OneTabButton
