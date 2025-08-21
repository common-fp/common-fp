import { Compartment } from '@codemirror/state'

import getTsEditorWorker from './get-ts-editor-worker'
import renderSanitizedTsTooltip from './render-sanitized-ts-tooltip'

const compartment = new Compartment()
let tsFacetWorkerExt
const tsOnlyExts = {}

const getTsOnlyExts = async language => {
  await initTsOnlyExts(language)

  return tsOnlyExts[language]
}

async function initTsOnlyExts(lang) {
  if (!tsOnlyExts[lang]) {
    if (lang === 'js') tsOnlyExts.js = []
    else {
      const worker = await getTsEditorWorker()

      const { tsFacetWorker, tsSyncWorker, tsHoverWorker } = await import(
        '@/bundles/codemirror-ts_v2-3-1'
      )
      tsFacetWorkerExt = tsFacetWorker.of({ worker, path: 'example.ts' })

      tsOnlyExts.ts = [
        tsFacetWorkerExt,
        tsSyncWorker(),
        tsHoverWorker({ renderTooltip: renderSanitizedTsTooltip }),
      ]
    }
  }
}

export default getTsOnlyExts
export { compartment, tsFacetWorkerExt }
