import { getMaxScrollY } from './index'
import { commonScrollPaddingTopPx } from './style-variables'
import log from './log'

const smoothScrollTo = (elem, offset = -commonScrollPaddingTopPx) => {
  const rect = elem.getBoundingClientRect()
  const targetPosition = Math.min(
    Math.floor(rect.top + self.scrollY + offset),
    getMaxScrollY()
  )

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  })

  return new Promise((resolve, reject) => {
    try {
      // after a second just resolve
      const timeoutId = setTimeout(() => {
        resolve(false)
      }, 1000)

      const scrollHandler = () => {
        try {
          if (self.scrollY === targetPosition) {
            window.removeEventListener('scroll', scrollHandler)
            clearTimeout(timeoutId)
            resolve(true)
          }
        } catch (err) {
          reject(err)
        }
      }
      if (self.scrollY === targetPosition) {
        clearTimeout(timeoutId)
        resolve(true)
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
