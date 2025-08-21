import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

const TabCtx = createContext()

const TabContext = ({ buttons, children }) => {
  const [isMounted, setMounted] = useState(false)
  const pathname = usePathname()
  const [isChangingTabs, setIsChangingTabs] = useState(false)

  /**
   * Re: displayed vs selected vs visible
   *
   * - Displayed: whether the tab should be displayed i.e. css
   * - Selected: the logical tab selected by the user
   * - Visible: whether the tab should have opacity: 1. Used for transitioning
   */
  const [displayedTab, setDisplayedTab] = useState('')
  const [selectedTab, _setSelectedTab] = useState('')
  const [visibleTab, setVisibleTab] = useState('')

  useEffect(() => {
    if (!isMounted) {
      setMounted(true)
      return
    }
    const tab = window.location.hash.slice(1)
    setDisplayedTab(tab)
    _setSelectedTab(tab)
    setVisibleTab(tab)

    // when the buttons change, that means the page has been updated so we
    // should reset the selected tab
  }, [pathname, isMounted, buttons])

  const setSelectedTab = useCallback(
    id => {
      if (id === selectedTab) return

      _setSelectedTab(id)
    },
    [selectedTab]
  )

  const value = useMemo(
    () => ({
      displayedTab,
      setDisplayedTab,
      isChangingTabs,
      setIsChangingTabs,
      selectedTab,
      setSelectedTab,
      visibleTab,
      setVisibleTab,
    }),
    [displayedTab, isChangingTabs, selectedTab, setSelectedTab, visibleTab]
  )

  return <TabCtx.Provider value={value}>{children}</TabCtx.Provider>
}

export default TabContext
export { TabCtx }
