import applyGlobalWhitelist from './apply-global-whitelist.mjs'
import sanitize from './sanitize.mjs'

// this is configured in esbuild to be an external resource
// eslint-disable-next-line import-x/no-unresolved
import * as wrappedExample from '/wrapped-example.mjs'

run()

async function run() {
  const done = globalThis.workerboxScope._done
  try {
    let runExample = true
    const { send, sendError } = globalThis.workerboxScope
    try {
      applyGlobalWhitelist()
      globalThis.show = (...args) => {
        const sanitizedArgs = args.map(sanitize)
        send({ sanitizedArgs, args })
      }
    } catch (err) {
      console.error('error setting up example.js\n', err)
      sendError({ during: 'setup', error: serializeError(err) })
      runExample = false
    }

    try {
      if (runExample) {
        delete globalThis.workerboxScope
        await wrappedExample.run()
      }
    } catch (err) {
      console.error('error running example.js\n', err)
      sendError({ during: 'runtime', error: serializeError(err) })
    }
  } finally {
    done()
  }
}

function serializeError(err) {
  return {
    name: err.name,
    message: err.message,
    stack: err.stack,
  }
}
