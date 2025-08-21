import { Compartment } from '@codemirror/state'
import { linter } from '@codemirror/lint'
import cfpOrg from '@common-fp/eslint-plugin-cfp-org'
import baseEditorEslintConfig from './base-editor-eslint-config'

const compartment = new Compartment()
const lintExt = {}
let linterInstance
let jsEslintConfig
let tsFacetWorker

const getLintExt = async langId => {
  initLintExt(langId)

  return await lintExt[langId]
}

async function lint({ code, langId, view }) {
  initLintExt(langId)
  await lintExt[langId]

  if (langId === 'js') {
    return linterInstance.verify(code, jsEslintConfig, {
      filename: 'example.mjs',
    })
  } else {
    // langId === 'ts'
    // code from
    const config = view.state.facet(tsFacetWorker)
    return await config.worker.getLints()
  }
}

function createJsEslintConfig(jsEslint) {
  return [
    jsEslint.configs.recommended,
    cfpOrg.configs.recommended,
    baseEditorEslintConfig,
  ]
}

function initLintExt(langId) {
  if (lintExt[langId]) return

  lintExt[langId] = new Promise(async (resolve, reject) => {
    try {
      if (langId === 'js') {
        const { esLint: cmEslint } = await import('@codemirror/lang-javascript')
        const jsEslint = (await import('@eslint/js')).default
        const { Linter } = await import('eslint-linter-browserify')
        jsEslintConfig ??= createJsEslintConfig(jsEslint)
        linterInstance ??= new Linter()

        resolve(linter(cmEslint(linterInstance, jsEslintConfig)))
      } else {
        // langId === 'ts'
        const codemirrorTsBundle = await import(
          '@/bundles/codemirror-ts_v2-3-1'
        )
        tsFacetWorker = codemirrorTsBundle.tsFacetWorker
        resolve(codemirrorTsBundle.tsLinterWorker())
      }
    } catch (err) {
      reject(err)
    }
  })
}

export default getLintExt
export { compartment, lint }
