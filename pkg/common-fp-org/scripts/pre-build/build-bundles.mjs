import { fileURLToPath } from 'url'
import cpy from 'cpy'
import { deleteAsync } from 'del'
import * as esbuild from 'esbuild'
import { makeDirectory } from 'make-dir'
import { fromRoot } from '../utils/index.mjs'
import buildRollupFs from './build-rollup-fs.mjs'

const commonEsbuildOpts = {
  bundle: true,
  sourcemap: 'inline',
  format: 'esm',
  // minify: true,
}

const buildBundles = async () => {
  const publicBundlesPath = fromRoot('public/bundles')
  await deleteAsync(publicBundlesPath)
  await makeDirectory(publicBundlesPath)
  await Promise.all([
    buildExampleSetup(),
    copyRollup(),
    buildRollupFs(),
    buildClientScriptDeps(),
  ])
}

async function buildExampleSetup() {
  const opts = {
    ...commonEsbuildOpts,
    entryPoints: [fromRoot('scripts/pre-build/run-example/index.mjs')],
    outfile: fromRoot('public/bundles/run-example.js'),
    external: ['/wrapped-example.mjs'],
  }
  await esbuild.build(opts)
}

async function copyRollup() {
  const bundle = fileURLToPath(import.meta.resolve('@rollup/browser'))
  await cpy(bundle, fromRoot('public/bundles'))
}

async function buildClientScriptDeps() {
  const opts = {
    bundle: true,
    format: 'iife',
    // minify: true,
    entryPoints: [fromRoot('./scripts/pre-build/client-scripts-entry.mjs')],
    outfile: fromRoot('public/bundles/initial-client-scripts.js'),
  }
  await esbuild.build(opts)
}

export default buildBundles
