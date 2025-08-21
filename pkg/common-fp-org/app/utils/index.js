import debounce from 'debounce'
import throttle from 'throttleit'
import { animate } from 'motion'
import queryString from 'query-string'
import {
  transitionDurMs,
  transitionDurSlowMs,
  transitionDurSeconds,
} from './style-variables'
import pxToNum from './px-to-num'

/**
 * We both debounce and throttle typically to ensure we have an updated value
 * every ms while also ensuring an accurate final value
 */
const debounceAndThrottle = (fn, ms) => {
  const debouncedFn = debounce(fn, ms)
  const throttledFn = throttle(fn, ms)
  return (...args) => {
    debouncedFn(...args)
    throttledFn(...args)
  }
}

const getHash = () => queryString.parse(location.hash)

// from SO
// https://stackoverflow.com/questions/17688595/finding-the-maximum-scroll-position-of-a-page#comment46973392_17698713
const getMaxScrollY = () => {
  const { body, documentElement: html } = document
  return (
    Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    ) - window.innerHeight
  )
}

const goHomeOnClick = evt => {
  if (location.pathname === '/') {
    evt.preventDefault()
    return
  }
}

const isTouchDevice =
  typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

const makeWaitMs = ms => () => waitMs(ms)

const nbsp = '\xA0'
const nbsp2 = '\xA0\xA0'

const noop = () => {}

const pushHash = obj => updateHash(obj, 'push')

const replaceHash = obj => updateHash(obj, 'replace')

const roundToNearest = precision => {
  const numPrecision =
    precision.includes('.') ?
      precision.length - 2 // 2 accounts for the leading "0."
    : -precision.length + 1

  return aNumber => {
    /**
     * Implementation based off lodash. Essentially we're
     *
     * 1. Shifting the exponent based off the precision passed
     * 2. Rounding the shifted result
     * 3. Shifting it back and returning the value
     *
     * Per lodash this gets around pesky floating point issues
     */
    const [base, exp] = aNumber.toExponential().split('e')
    const shiftedNum = Math.round(base + 'e' + (Number(exp) + numPrecision))

    const [shiftedBase, shiftedExp] = shiftedNum.toExponential().split('e')
    return Number(shiftedBase + 'e' + (Number(shiftedExp) - numPrecision))
  }
}

const scrollYToHideSubNav = 80

const animOpts = { duration: transitionDurSeconds }
const simpleAnimate = (el, animations) => animate(el, animations, animOpts)

const stripTrailingSlashes = str => str.replace(/\/+$/, '')

const toEnglishList = (andOr, arr) => {
  if (!arr.length) return ''
  if (arr.length === 1) return arr[0]

  const start = arr.slice(0, arr.length - 1).join(', ')
  const end = ` ${andOr} ${arr[arr.length - 1]}`
  return start + end
}

const waitAnimationDur = () => waitMs(transitionDurMs)

const waitMs = ms => new Promise(res => setTimeout(res, ms))

const waitSlowAnimationDur = () => waitMs(transitionDurSlowMs)

function updateHash(obj, pushOrReplace) {
  const hashObj = Object.assign(getHash(), obj)
  const hashStr = '#' + queryString.stringify(hashObj)
  const method = pushOrReplace + 'State'
  history[method](history.state, '', hashStr)
}

export {
  debounceAndThrottle,
  getHash,
  getMaxScrollY,
  goHomeOnClick,
  isTouchDevice,
  makeWaitMs,
  nbsp,
  nbsp2,
  noop,
  pushHash,
  pxToNum,
  replaceHash,
  roundToNearest,
  scrollYToHideSubNav,
  simpleAnimate,
  stripTrailingSlashes,
  toEnglishList,
  waitAnimationDur,
  waitMs,
  waitSlowAnimationDur,
}
