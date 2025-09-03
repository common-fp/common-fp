import { animate } from 'motion'
import debounce from 'debounce'
import { getMaxScrollY, scrollYToHideSubNav } from './index'
import { commonScrollPaddingTopPx } from './style-variables'
import log from './log'

import './flash-indicator.scss'

const smoothScrollTo = (elem, opts = {}) => {
  const { offset = -commonScrollPaddingTopPx, showIndicator } = opts
  const rect = elem.getBoundingClientRect()
  const targetPosition = Math.min(
    Math.floor(rect.top + window.scrollY + offset),
    getMaxScrollY()
  )

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  })

  const flashIndicator = () => {
    const additionalHeightOneSide = 12
    const indicator = document.createElement('div')
    indicator.className = 'flash-indicator'
    Object.assign(indicator.style, {
      height: `${elem.offsetHeight + additionalHeightOneSide * 2}px`,
      marginTop: `-${additionalHeightOneSide}px`,
    })
    elem.appendChild(indicator)

    initClearIndicator()
  }

  return new Promise((resolve, reject) => {
    try {
      const finish = successful => {
        if (successful && showIndicator) flashIndicator()
        resolve(successful)
      }

      // after a second just finish
      const timeoutId = setTimeout(() => {
        finish(false)
      }, 1000)

      const scrollHandler = () => {
        try {
          if (window.scrollY === targetPosition) {
            window.removeEventListener('scroll', scrollHandler)
            clearTimeout(timeoutId)
            finish(true)
          }
        } catch (err) {
          reject(err)
        }
      }
      if (window.scrollY === targetPosition) {
        clearTimeout(timeoutId)
        finish(true)
      } else {
        window.addEventListener('scroll', scrollHandler)
        elem.getBoundingClientRect()
      }
    } catch (err) {
      reject(err)
    }
  }).catch(err => {
    log.error('error during smoothScrollTo\n', err)
    return false
  })
}

function initClearIndicator() {
  const initialScrollY = window.scrollY
  let isClearing = false
  const clearFlashIndicator = debounce(async () => {
    try {
      if (isClearing) return

      const distance = Math.abs(window.scrollY - initialScrollY)
      if (window.scrollY < scrollYToHideSubNav || distance >= 400) {
        isClearing = true
        const indicator = document.querySelector('.flash-indicator')
        await animate(indicator, { opacity: [1, 0] }, { duration: 0.4 })
        window.removeEventListener('scroll', clearFlashIndicator)
        indicator.remove()
      }
    } catch (err) {
      console.error('error during clearFlashIndicator\n', err)
    }
  }, 50)

  window.addEventListener('scroll', clearFlashIndicator)
}

export default smoothScrollTo
