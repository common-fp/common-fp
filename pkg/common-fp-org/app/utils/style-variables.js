import pxToNum from './px-to-num'
import vars from '@/styles/vars.module.scss'

const commonScrollPaddingTopPx = pxToNum(vars.commonScrollPaddingTop)
const transitionDurSeconds = Number(vars.transitionDur.slice(0, -1))
const transitionDurMs = transitionDurSeconds * 1000
const transitionDurSlowSeconds = Number(vars.transitionDurSlow.slice(0, -1))
const transitionDurSlowMs = transitionDurSlowSeconds * 1000

/**
 * viewport vars
 *
 * note: typically responsiveness should be handled by css, however there are
 *   edge cases where it makes sense for js needs to handle it.
 */
const contentSizePx = pxToNum(vars.contentSize)
const desktopMinPx = pxToNum(vars.desktopMin)
const tabletMinPx = pxToNum(vars.tabletMin)
const mobileMinPx = pxToNum(vars.mobileMin)

export {
  commonScrollPaddingTopPx,
  transitionDurMs,
  transitionDurSeconds,
  transitionDurSlowMs,
  transitionDurSlowSeconds,
  contentSizePx,
  desktopMinPx,
  tabletMinPx,
  mobileMinPx,
}
