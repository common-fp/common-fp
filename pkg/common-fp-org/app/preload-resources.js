'use client'

import ReactDOM from 'react-dom'
import f from './styles/fonts.module.scss'
import { prune } from './fp-utils'

const fontPaths = [
  f.nunitoSans,
  f.nunitoSansItalic,
  f.quickSand,
  f.notoSansMono,
].map(prune([`'`, `"`]))

const PreloadResources = () => {
  for (const fp of fontPaths) {
    ReactDOM.preload(fp, { as: 'font', type: 'font/woff2' })
  }

  return null
}

export default PreloadResources
