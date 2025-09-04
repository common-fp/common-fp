import fsp from 'node:fs/promises'
import path from 'node:path'
import dedent from 'dedent'
import { globby } from 'globby'
import { format } from 'prettier'
import prettierConfig from '@common-fp/prettier-config'
import { parserByLang } from './utils.mjs'
import { myCamelCase } from '../utils.mjs'
import { removeExt } from '../../utils/index.mjs'

const buildIndexJs = async ({ destDir, srcDir }) => {
  const allExamples = srcDir + '/*.js'
  const fullExamples = srcDir + '/*_full.js'
  const exampleFpaths = await globby([allExamples, `!${fullExamples}`])
  const examples = exampleFpaths.map(toExampleInfo)

  const imports = examples.reduce(
    (res, { codeName, fname }) =>
      res +
      dedent(`
        import ${codeName}_tabletAndLarger_display_js from './code/${fname}_tablet-and-larger_display.js'
        import ${codeName}_tabletAndLarger_full_js from './code/${fname}_tablet-and-larger_full.js'
        import ${codeName}_mobileAndSmaller_display_js from './code/${fname}_mobile-and-smaller_display.js'
        import ${codeName}_mobileAndSmaller_full_js from './code/${fname}_mobile-and-smaller_full.js'
        import ${codeName}_tabletAndLarger_display_ts from './code/${fname}_tablet-and-larger_display.ts'
        import ${codeName}_tabletAndLarger_full_ts from './code/${fname}_tablet-and-larger_full.ts'
        import ${codeName}_mobileAndSmaller_display_ts from './code/${fname}_mobile-and-smaller_display.ts'
        import ${codeName}_mobileAndSmaller_full_ts from './code/${fname}_mobile-and-smaller_full.ts'
      `) +
      '\n',
    ''
  )

  const codeExamplesVar =
    examples.reduce((res, { codeName }) => {
      const prop = dedent(`
          ${codeName}: {
            tabletAndLarger: {
              display: {
                js: ${codeName}_tabletAndLarger_display_js,
                ts: ${codeName}_tabletAndLarger_display_ts,
              },
              full: {
                js: ${codeName}_tabletAndLarger_full_js,
                ts: ${codeName}_tabletAndLarger_full_ts,
              }
            },
            mobileAndSmaller: {
              display: {
                js: ${codeName}_mobileAndSmaller_display_js,
                ts: ${codeName}_mobileAndSmaller_display_ts,
              },
              full: {
                js: ${codeName}_mobileAndSmaller_full_js,
                ts: ${codeName}_mobileAndSmaller_full_ts,
              }
            },
          },
        `)

      return `${res}\n${prop}`
    }, 'const codeExamples = {') + '\n}\n'

  const rawIndexJsContent = `${imports}\n${codeExamplesVar}\nexport default codeExamples`

  const indexJsContent = await format(rawIndexJsContent, {
    ...prettierConfig,
    parser: parserByLang.js,
  })

  const indexJsPath = path.resolve(destDir, 'index.js')
  await fsp.writeFile(indexJsPath, indexJsContent)
}

function toExampleInfo(fpath) {
  const fname = removeExt(path.basename(fpath))
  const codeName = myCamelCase(fname)
  return { codeName, fname }
}

export default buildIndexJs
