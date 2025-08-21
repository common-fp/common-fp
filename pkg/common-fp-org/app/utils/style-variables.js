import pxToNum from './px-to-num'
import vars from '@/styles/vars.module.scss'

const commonScrollPaddingTopPx = pxToNum(vars.commonScrollPaddingTop)
const transitionDurSeconds = Number(vars.transitionDur.slice(0, -1))
const transitionDurMs = transitionDurSeconds * 1000
const transitionDurSlowSeconds = Number(vars.transitionDurSlow.slice(0, -1))
const transitionDurSlowMs = transitionDurSlowSeconds * 1000

export {
  commonScrollPaddingTopPx,
  transitionDurMs,
  transitionDurSeconds,
  transitionDurSlowMs,
  transitionDurSlowSeconds,
}
