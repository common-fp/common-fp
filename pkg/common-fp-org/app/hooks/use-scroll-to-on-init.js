import { animate } from 'motion'
import debounce from 'debounce'
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

    let scrollDistance
    let prevScrollY
    const clearFlashIndicator = debounce(async () => {
      try {
        scrollDistance += Math.abs(window.scrollY - prevScrollY)
        prevScrollY = window.scrollY
        if (scrollDistance >= 400) {
          const indicator = document.querySelector('.flash-indicator')
          await animate(indicator, { opacity: [1, 0] }, { duration: 0.4 })
          indicator.remove()
          window.removeEventListener('scroll', clearFlashIndicator)
        }
      } catch (err) {
        console.error('error during clearFlashIndicator\n', err)
      }
    }, 50)

    wasRun.current = areAllComponentsRendered
    const anchor = queryString.parse(location.hash)['scroll-to']
    if (anchor) {
      const scrolled = smoothScrollTo(document.getElementById(anchor), {
        showIndicator: true,
      })
      scrolled.then(() => {
        scrollDistance = 0
        prevScrollY = window.scrollY
        window.addEventListener('scroll', clearFlashIndicator)
      })
    }

    return () => {
      window.removeEventListener('scroll', clearFlashIndicator)
    }
  }, [areAllComponentsRendered, hasChildren, smoothScrollTo, willHaveChildren])
}

export default useScrollToOnInit
