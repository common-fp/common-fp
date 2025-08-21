import { useCallback } from 'react'
import queryString from 'query-string'
import { pxToNum } from '@/utils'
import useSmoothScrollTo from './use-smooth-scroll-to'

const useScrollAndUpdateUrl = id => {
  const smoothScrollTo = useSmoothScrollTo()

  const scrollAndUpdateUrl = useCallback(
    evt => {
      evt.preventDefault()
      runAsync()

      async function runAsync() {
        try {
          const el = document.getElementById(id)
          const elStyle = window.getComputedStyle(el)
          const offset = -pxToNum(elStyle.scrollPaddingTop, 0)
          const scrollSucceeded = await smoothScrollTo(el, offset)

          if (!scrollSucceeded) return

          const updatedHashObj = queryString.parse(location.hash)
          updatedHashObj['scroll-to'] = id
          const updatedHashStr = '#' + queryString.stringify(updatedHashObj)
          history.replaceState(history.state, '', updatedHashStr)
        } catch (err) {
          console.error('error during scrollAndUpdateUrl\n', err)
        }
      }
    },
    [id, smoothScrollTo]
  )

  return scrollAndUpdateUrl
}

export default useScrollAndUpdateUrl
