import buildBundles from './build-bundles.mjs'
import buildCfpTypes from './build-cfp-types.mjs'
import buildCodeExamples from './build-code-examples/index.mjs'
import buildCodemirrorTsBundle from './build-codemirror-ts-bundle/index.mjs'
import buildCompatibleTsEslintBundle from './build-compatible-ts-eslint-bundle/index.mjs'
import buildRollupFs from './build-rollup-fs.mjs'
import buildTrimmedGlobals from './build-trimmed-globals.mjs'
import buildTsLibFiles from './build-ts-lib-files.mjs'
import builtUtilityNames from './build-utility-names.mjs'
import buildVfsSlim from './build-vfs-slim/index.mjs'
import { cleanDir, fromRoot } from '../utils/index.mjs'

run()

async function run() {
  try {
    await cleanDir(fromRoot('app/built'))
    await Promise.all([
      buildBundles(),
      buildCfpTypes(),
      buildCodeExamples(),
      buildRollupFs(),
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
