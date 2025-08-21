import validateLocalFiles from './validate-local-files.mjs'
import buildBundles from './build-bundles.mjs'
import buildCfpTypes from './build-cfp-types.mjs'
import buildCodeExamples from './build-code-examples/index.mjs'
import buildCodemirrorTsBundle from './build-codemirror-ts-bundle/index.mjs'
import buildCompatibleTsEslintBundle from './build-compatible-ts-eslint-bundle/index.mjs'
import buildTrimmedGlobals from './build-trimmed-globals.mjs'
import buildTsLibFiles from './build-ts-lib-files.mjs'
import builtUtilityNames from './build-utility-names.mjs'
import buildVfsSlim from './build-vfs-slim/index.mjs'
import { cleanDir, fromRoot } from '../utils/index.mjs'

run()

async function run() {
  try {
    if (!(await validateLocalFiles())) {
      process.exitCode = 1
      return
    }
    await cleanDir(fromRoot('app/built'))
    await Promise.all([
      buildBundles(),
      buildCfpTypes(),
      buildCodeExamples(),
      buildTrimmedGlobals(),
      buildTsLibFiles(),
      builtUtilityNames(),
      buildCompatibleTsEslintBundle(),
      buildCodemirrorTsBundle(),
      buildVfsSlim(),
    ])

    console.log('donezo !')
  } catch (err) {
    console.error('top level error\n', err)
    process.exitCode = 1
  }
}
