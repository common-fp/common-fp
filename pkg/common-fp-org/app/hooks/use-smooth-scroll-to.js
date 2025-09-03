import { useCallback, useContext } from 'react'
import { SiteCtx } from '@/site-context'
import { waitSlowAnimationDur } from '@/utils'
import smoothScrollTo from '@/utils/smooth-scroll-to'

const useSmoothScrollTo = () => {
  const { pageState, updatePageState } = useContext(SiteCtx)
  const { isSubNavShown } = pageState

  return useCallback(
    async (...smoothScrollToArgs) => {
      try {
        if (isSubNavShown) {
          updatePageState({ hideSubNav: true })
          await waitSlowAnimationDur()
        }

        updatePageState({ anchorRecentlyScrolledTo: true })
        const result = await smoothScrollTo(...smoothScrollToArgs)

        if (isSubNavShown) {
          updatePageState({ hideSubNav: false })
        }

        return result
      } catch (err) {
        console.error('error during async callback of useSmoothScrollTo\n', err)
      }
    },
    [isSubNavShown, updatePageState]
  )
}

export default useSmoothScrollTo
