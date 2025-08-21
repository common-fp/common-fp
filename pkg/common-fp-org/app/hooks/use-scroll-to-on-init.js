import { useContext, useEffect, useRef } from 'react'
import queryString from 'query-string'
import { SiteCtx } from '@/site-context'
import useSmoothScrollTo from '@/hooks/use-smooth-scroll-to'

const useScrollToOnInit = ({ willHaveChildren = false } = {}) => {
  const wasRun = useRef(false)
  const { areAllComponentsRendered, componentToIsRendered } =
    useContext(SiteCtx).pageState
  const hasChildren = !!componentToIsRendered.size
  const smoothScrollTo = useSmoothScrollTo()

  useEffect(() => {
    if (
      !areAllComponentsRendered ||
      wasRun.current ||
      (willHaveChildren && !hasChildren)
    )
      return

    wasRun.current = areAllComponentsRendered
    const anchor = queryString.parse(location.hash)['scroll-to']
    if (anchor) {
      smoothScrollTo(document.getElementById(anchor))
    }
  }, [areAllComponentsRendered, hasChildren, smoothScrollTo, willHaveChildren])
}

export default useScrollToOnInit
