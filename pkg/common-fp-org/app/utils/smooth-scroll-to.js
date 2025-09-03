import { getMaxScrollY } from './index'
import { commonScrollPaddingTopPx } from './style-variables'
import log from './log'

import './flash-indicator.scss'

const smoothScrollTo = (elem, opts) => {
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

export default smoothScrollTo
