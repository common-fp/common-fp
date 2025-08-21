import makeLog from '@/utils/make-log'

let worker
let tsEditorWorker

const getTsEditorWorker = async () => {
  if (tsEditorWorker) return tsEditorWorker

  tsEditorWorker = new Promise(async (resolve, reject) => {
    try {
      const logDuration = makeLog.duration('info')
      const innerWorker = new Worker(
        new URL('ts-editor-worker/index.js', import.meta.url),
        {
          type: 'module',
        }
      )
      const Comlink = await import('comlink')
      worker = Comlink.wrap(innerWorker)
      await worker.initialize()
      logDuration('init ts editor worker')
      resolve(worker)
    } catch (innerError) {
      const err = new Error(
        'Error initializing ts-editor-worker.  See innerError for details'
      )
      err.innerError = innerError
      reject(err)
    }
  })

  return tsEditorWorker
}

export default getTsEditorWorker
