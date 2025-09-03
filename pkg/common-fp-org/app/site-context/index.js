'use client'

import { useCallbackOne, useMemoOne } from 'use-memo-one'
import { createContext, useEffect, useState } from 'react'
import { initialCtx, localStorageKey } from './utils'

const SiteCtx = createContext()
const initialPageState = {
  areAllComponentsRendered: true,
  componentToIsRendered: new Map(),
  hideSubNav: false,
  isSubNavShown: false,
  willScroll: false,
  anchorRecentlyScrolledTo: false,
}

const Context = props => {
  const { children } = props
  const [language, setLanguageInner] = useState(initialCtx.language)
  const [isClientControlled, setIsClientControlled] = useState(false)
  const [pageState, setPageState] = useState(initialPageState)
  const hydrationAwareLanguage = isClientControlled ? language : 'js'

  useEffect(() => setIsClientControlled(true), [])

  /**
   * We don't want to set it inside useEffect since we only want to save the
   * language the user chooses to localStorage. This solves an issue where the
   * user might prefer to view the site in js, but clicked a /try-it link with
   * typescript in its editor data. In this case we wouldn't want to save ts to
   * localStorage
   */

  const setLanguage = lang => {
    localStorage.setItem(localStorageKey, JSON.stringify({ language: lang }))
    document.documentElement.dataset.prefLang = lang
    setLanguageInner(lang)
  }

  const setComponentToIsRendered = useCallbackOne((ref, isRendered) => {
    setPageState(prevState => {
      const { componentToIsRendered } = prevState
      componentToIsRendered.set(ref, isRendered)
      const areAllComponentsRendered =
        isRendered && !new Set(componentToIsRendered.values()).has(false)

      return {
        ...prevState,
        areAllComponentsRendered,
        componentToIsRendered: new Map(componentToIsRendered),
      }
    })
  }, [])

  const updatePageState = useCallbackOne(updatedState => {
    setPageState(prevState => ({
      ...prevState,
      ...updatedState,
    }))

    // when we scroll to an anchor, this state should last for 1s before
    // resetting.  This allows us to override the scroll listener which
    // typically syncs the url with the currently scrolled-to anchor.
    if (updatedState.anchorRecentlyScrolledTo) {
      setTimeout(() => {
        setPageState(prevState => ({
          ...prevState,
          anchorRecentlyScrolledTo: false,
        }))
      }, 1000)
    }
  }, [])

  const value = useMemoOne(
    () => ({
      hydrationAwareLanguage,
      isClientControlled,
      language,
      setLanguage,
      pageState,
      setComponentToIsRendered,
      updatePageState,
    }),
    [hydrationAwareLanguage, isClientControlled, language, pageState]
  )

  return <SiteCtx.Provider value={value}>{children}</SiteCtx.Provider>
}

export default Context
export { SiteCtx }
