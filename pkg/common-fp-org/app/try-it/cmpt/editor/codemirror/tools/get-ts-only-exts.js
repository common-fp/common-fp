import { Compartment } from '@codemirror/state'

import getTsEditorWorker from './get-ts-editor-worker'
import renderSanitizedTsTooltip from './render-sanitized-ts-tooltip'

const compartment = new Compartment()
let tsFacetWorkerExt
const tsOnlyExts = {}
if (typeof window !== 'undefined')
  initTsOnlyExts(document.documentElement.dataset.lang)

const getTsOnlyExts = async langId => {
  await initTsOnlyExts(langId)

  return tsOnlyExts[langId]
}

async function initTsOnlyExts(langId) {
  if (tsOnlyExts[langId]) return

  if (langId === 'js') tsOnlyExts.js = []
  else {
    const [worker, { tsFacetWorker, tsSyncWorker, tsHoverWorker }] =
      await Promise.all([
        getTsEditorWorker(),
        import('@/bundles/codemirror-ts_v2-3-1'),
      ])

    tsFacetWorkerExt = tsFacetWorker.of({ worker, path: 'example.ts' })

    tsOnlyExts.ts = [
      tsFacetWorkerExt,
      tsSyncWorker(),
      tsHoverWorker({ renderTooltip: renderSanitizedTsTooltip }),
    ]
  }
}

export default getTsOnlyExts
export { compartment, tsFacetWorkerExt }
