import { RecognizedBrowser } from 'sniffr'
import { waitMs } from '@/utils'
import { getTsEditorWorker } from '../../codemirror/tools'

let worker

const buildCode = ({ editorCode, language }) => {
  initWorker()

  const code = new Promise(async (resolve, reject) => {
    const browser = RecognizedBrowser.browser.name
    let tsCompiledCode, tsSourceMap
    if (language === 'ts') {
      const tsEditorWorker = await getTsEditorWorker()
      const { code, sourcemap } = await tsEditorWorker.transpile(editorCode)
      tsCompiledCode = maybeStripEmptyExport(code, editorCode)
      tsSourceMap = sourcemap
    }
    worker.postMessage({ browser, editorCode, tsCompiledCode, tsSourceMap })
    worker.onmessage = arg => {
      const { bundle, error, sourcemap } = arg.data
      if (error) {
        const err = new Error(
          "error bundling code.  See details in property 'workerError'"
        )
        err.workerError = error
        reject(err)
      } else resolve({ bundle, sourcemap })
    }
    worker.onerror = evt => {
      const err = new Error(
        "there was an error bundling this code.   See property 'workerErrorEvent' for details"
      )
      err.workerErrorEvent = evt
      reject(err)
    }
  })

  return Promise.race([
    code,
    waitMs(5000).then(() =>
      Promise.reject(
        new Error(
          'code took longer than 5 seconds to build, something must have gone wrong'
        )
      )
    ),
  ])
}

function initWorker() {
  if (!worker) {
    worker = new Worker(new URL('./build-code-worker.js', import.meta.url))
  }
}

/**
 * No idea why this error is occurring, but without an import, typescript adds a
 * line "export {};" I think to make it a module. And rollup for some reason
 * trips up on this even though the file extension is .mjs.
 *
 * Instead of digging into this I'm just going to remove the extraneous line
 * "export {};" when it wasn't explicitly added via editorCode
 */
function maybeStripEmptyExport(code, editorCode) {
  return editorCode.includes('\nexport {};\n') ? code : (
      code.replace(/\nexport {};\n/, '\n')
    )
}

export default buildCode
