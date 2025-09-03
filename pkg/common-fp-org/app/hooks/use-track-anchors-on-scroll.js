import { useContext, useEffect } from 'react'
import debounce from 'debounce'
import queryString from 'query-string'
import { SiteCtx } from '@/site-context'
import { getMaxScrollY } from '@/utils/index'
import { commonScrollPaddingTopPx } from '@/utils/style-variables'
import { mapKeys, passThrough, sortBy } from '@/fp-utils'

let listener
let cleanup

const useTrackAnchorsOnScroll = anchors => {
  const { pageState } = useContext(SiteCtx)
  const { anchorRecentlyScrolledTo } = pageState
  useEffect(() => {
    const cleanup = trackAnchorsOnScroll(
      Object.values(anchors),
      anchorRecentlyScrolledTo
    )
    return cleanup
  }, [anchorRecentlyScrolledTo, anchors])
}

function trackAnchorsOnScroll(anchorsToTrack, anchorRecentlyScrolledTo) {
  if (typeof window === 'undefined') return
  if (listener) return cleanup

  listener = debounce(() => {
    if (anchorRecentlyScrolledTo) return

    const { scrollY } = window
    const posToAnchorEntries = buildSortedPositionToAnchor(anchorsToTrack)
    const maxPos = getMaxScrollY()
    const isScrolledToBeginning = scrollY <= 10
    const isScrolledToEnd =
      !isScrolledToBeginning && Math.abs(maxPos - scrollY) <= 10
    let matchedAnchor
    if (isScrolledToEnd) {
      matchedAnchor = posToAnchorEntries.at(-1)[1]
    } else if (!isScrolledToBeginning) {
      let closestAnchor
      let distance = Infinity
      for (const [pos, anchor] of posToAnchorEntries) {
        const curDistance = Math.abs(pos - scrollY)
        const gettingFurther = curDistance > distance
        if (gettingFurther) break
        closestAnchor = anchor
        distance = curDistance
      }
      matchedAnchor = closestAnchor
    }
    history.replaceState(history.state, '', getUrlWith(matchedAnchor))
  }, 200)
  addEventListener('scroll', listener)
  cleanup = () => {
    removeEventListener('scroll', listener)
    listener = undefined
  }
  return cleanup
}

function getUrlWith(anchor) {
  const { pathname } = location
  const parsedHash = queryString.parse(location.hash)

  if (!anchor) delete parsedHash['scroll-to']
  else parsedHash['scroll-to'] = anchor

  const updatedHash = queryString.stringify(parsedHash)
  return updatedHash ? pathname + '#' + updatedHash : pathname
}

function buildSortedPositionToAnchor(anchors) {
  return passThrough(anchors, [
    mapKeys(anchor => {
      const el = document.getElementById(anchor)
      const rect = el.getBoundingClientRect()
      const pos = Math.floor(rect.top + self.scrollY + commonScrollPaddingTopPx)
      return pos
    }),
    Object.entries,
    sortBy(positionAscending),
  ])
}

function positionAscending([leftPos], [rightPos]) {
  return leftPos - rightPos
}

export default useTrackAnchorsOnScroll
