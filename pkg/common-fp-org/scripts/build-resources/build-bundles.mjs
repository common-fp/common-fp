import fsp from 'node:fs/promises'
import { deleteAsync } from 'del'
import * as esbuild from 'esbuild'
import { makeDirectory } from 'make-dir'
import { fromRoot } from '../utils/index.mjs'

const commonEsbuildOpts = {
  bundle: true,
  sourcemap: 'inline',
  format: 'esm',
  // minify: true,
}

const bundleFpaths = {}

const buildBundles = async () => {
  const publicBundlesPath = fromRoot('public/bundles')
  await deleteAsync(publicBundlesPath)
  await makeDirectory(publicBundlesPath)
  await Promise.all([buildExampleSetup(), buildClientScriptDeps()])
  await fsp.writeFile(
    fromRoot('app/built/bundle-fpaths.json'),
    JSON.stringify(bundleFpaths, null, 2)
  )
}

async function buildExampleSetup() {
  const opts = {
    ...commonEsbuildOpts,
    entryNames: 'run-example_[hash]',
    entryPoints: [fromRoot('scripts/build-resources/run-example/index.mjs')],
    outfile: fromRoot('public/bundles/run-example.js'),
    external: ['/wrapped-example.mjs'],
    metafile: true,
  }
  const result = await esbuild.build(opts)
  setBundleFpath('runExample', result)
}

async function buildClientScriptDeps() {
  const opts = {
    bundle: true,
    format: 'iife',
    // minify: true,
    entryNames: 'initial-client-scripts_[hash]',
    entryPoints: [
      fromRoot('./scripts/build-resources/client-scripts-entry.mjs'),
    ],
    metafile: true,
    outdir: fromRoot('public/bundles/'),
  }
  const result = await esbuild.build(opts)
  setBundleFpath('initialClientScripts', result)
}

function setBundleFpath(name, buildResult) {
  const fpath = Object.keys(buildResult.metafile.outputs)[0]
  bundleFpaths[name] = fpath.slice('public'.length)
}

export default buildBundles
