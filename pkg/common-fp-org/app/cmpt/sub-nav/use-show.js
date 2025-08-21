'use client'

import { useContext, useEffect, useState } from 'react'
import { SiteCtx } from '@/site-context'
import { debounceAndThrottle, scrollYToHideSubNav } from '@/utils'

const useShow = () => {
  const { pageState, updatePageState } = useContext(SiteCtx)
  const { hideSubNav } = pageState
  const [show, setShow] = useState(true)

  useEffect(() => {
    updatePageState({ isSubNavShown: show })
    // updatePageState will never be mutated
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  useEffect(() => {
    /**
     * We both debounce and throttle to ensure we have an updated value at most
     * every 50ms while also ensuring we have the latest value upon stopping.
     */
    const updateShow = () => {
      setShow(window.scrollY < scrollYToHideSubNav)
    }
    const onScroll = debounceAndThrottle(updateShow, 50)
    addEventListener('scroll', onScroll)

    setShow(window.scrollY < scrollYToHideSubNav)

    return () => removeEventListener('scroll', onScroll)
  }, [])

  return !hideSubNav && show
}

export default useShow
