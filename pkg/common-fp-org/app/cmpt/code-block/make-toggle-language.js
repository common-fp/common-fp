import { noop, simpleAnimate, waitAnimationDur, waitMs } from '@/utils'

const makeToggleLanguage = argObj => {
  const {
    elCodeJs,
    elCodeTs,
    elPre,
    elTabJs,
    elTabTs,
    setLanguage,
    setIsAnimating,
  } = argObj

  return ({ language, siteCtxLanguage }) => {
    if (language === siteCtxLanguage) return

    toggleLang()

    async function toggleLang() {
      setLanguage(siteCtxLanguage)
      setIsAnimating(true)
      const showLang = siteCtxLanguage
      const [showEl, hideEl, activateTabEl, deactivateTabEl] =
        showLang === 'js' ?
          [elCodeJs.current, elCodeTs.current, elTabJs.current, elTabTs.current]
        : [elCodeTs.current, elCodeJs.current, elTabTs.current, elTabJs.current]
      const preEl = elPre.current

      try {
        const beforeHeight = preEl.offsetHeight + 'px'
        hideEl.style.display = 'none'
        showEl.style.display = 'block'
        const afterHeight = preEl.offsetHeight + 'px'
        hideEl.style.display = 'block'
        showEl.style.display = 'none'

        simpleAnimate(deactivateTabEl, { backgroundColor: 'var(--bg)' })
        activateTabEl.style.backgroundColor = 'var(--bg-off)'
        let animResult = simpleAnimate(hideEl, { opacity: 0 })
        await animResult.then(noop)
        preEl.style.height = beforeHeight
        hideEl.style.display = 'none'
        if (beforeHeight !== afterHeight) {
          animResult = simpleAnimate(preEl, { height: afterHeight })
          await animResult.then(noop)
        } else {
          await waitAnimationDur()
        }
        Object.assign(showEl.style, {
          display: 'block',
          opacity: 0,
        })
        animResult = simpleAnimate(showEl, { opacity: 1 })
        await animResult.then(noop)

        preEl.style.removeProperty('height')
        activateTabEl.style.removeProperty('background-color')
        deactivateTabEl.style.removeProperty('background-color')

        await waitMs(0)

        const propsToReset = ['display', 'opacity']
        for (const prop of propsToReset) {
          for (const el of [hideEl, showEl]) {
            el.style.removeProperty(prop)
          }
        }
      } finally {
        setIsAnimating(false)
      }
    }
  }
}

export default makeToggleLanguage
