import ky from 'ky'
import randomstring from 'randomstring'
import makeLog from '@/utils/make-log'
import makeMemResolverPlugin from './make-mem-resolver-plugin'
import wrapExample from './wrap-example'
import { encode } from 'js-base64'

let varsAreInitialized = false
let pEspree
let pRemapping
let pRollup
let pRollupFs
let pRunExampleStr

self.onmessage = async ({ data }) => {
  try {
    const { codeToRun, sourcemap } = await buildCodeToRun(data)
    self.postMessage({ bundle: codeToRun, sourcemap })
  } catch (err) {
    self.postMessage({
      error: {
        message: err.message,
        stack: err.stack,
      },
    })
  }
}

const buildCodeToRun = async argObj => {
  const { browser, editorCode, tsCompiledCode, tsSourceMap } = argObj
  const [espree, remapping, { rollup }, rollupFs, runExampleStr] =
    await getVars()

  const codeToWrap = tsCompiledCode || editorCode
  const { sourcemap, wrappedCode } = wrapExample(codeToWrap, espree)

  // rollup browser usage explained here
  // https://rollupjs.org/faqs/#how-do-i-run-rollup-itself-in-a-browser
  const memResolverPlugin = makeMemResolverPlugin({
    ...rollupFs,
    '/wrapped-example.mjs': wrappedCode,
    '/run-example.mjs': runExampleStr,
  })

  const logDuration = makeLog.duration('info')
  const bundle = await rollup({
    input: '/run-example.mjs',
    plugins: [memResolverPlugin],
  })

  const { output } = await bundle.generate({
    format: 'iife',
    sourcemap: 'hidden',
    sourcemapIgnoreList: false,
  })

  const mergedSourcemap = remapping(output[0].map, fname => {
    if (fname === 'wrapped-example.mjs') return sourcemap
    if (fname === 'example.mjs') return tsSourceMap
  })
  const base64SourceMap = encode(JSON.stringify(mergedSourcemap))
  const sourceMappingURLComment = `//# sourceMappingURL=data:application/json;charset=utf-8;base64,${base64SourceMap}\n`
  // firefox doesn't update the source so I'm cache busting the protocol.  One
  // downside is breakpoints are lost.  If this becomes a hiccup for users then
  // we'll add messaging to suggest chrome
  const cacheBuster = randomstring.generate(3)
  const sourceProtocol =
    browser === 'firefox' ? `cfp-${cacheBuster}://` : 'cfp://'
  // without sourceURL, browser devtools doesn't show the file names for
  // some reason
  const sourceURLComment = `//# sourceURL=${sourceProtocol}\n`
  const codeToRun = output[0].code + sourceMappingURLComment + sourceURLComment
  logDuration('bundling')
  return {
    codeToRun,
    sourcemap: mergedSourcemap,
  }
}

async function getVars() {
  if (!varsAreInitialized) {
    const logDuration = makeLog.duration('info')
    varsAreInitialized = true
    pEspree = import('espree')
    pRemapping = import('@ampproject/remapping').then(mod => mod.default)
    pRollup = import('@rollup/browser')
    pRollupFs = ky.get('/bundles/rollup-fs.json').json()
    pRunExampleStr = ky.get('/bundles/run-example.js').text()

    await Promise.all([pEspree, pRemapping, pRollup, pRollupFs, pRunExampleStr])
    logDuration('initialize vars')
  }

  return Promise.all([pEspree, pRemapping, pRollup, pRollupFs, pRunExampleStr])
}
