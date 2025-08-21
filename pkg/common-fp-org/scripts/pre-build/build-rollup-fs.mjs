import fsp from 'node:fs/promises'
import os from 'node:os'
import mapLimit from 'async-es/mapLimit.js'
import { globby } from 'globby'
import { fromRoot } from '../utils/index.mjs'

const concurrency = (os.cpus().length || 1) * 2
const pkgPath = fromRoot('..')

const buildRollupFs = async () => {
  const [cfp, sharedInternals] = await Promise.all([
    buildCfp(),
    buildSharedInternals(),
  ])

  const rollupFs = { ...cfp, ...sharedInternals }
  await fsp.writeFile(
    fromRoot('public/bundles/rollup-fs.json'),
    JSON.stringify(rollupFs)
  )
}

async function buildCfp() {
  const srcPaths = await globby(fromRoot('../common-fp/dist/**/*.mjs'))
  const entries = await mapLimit(srcPaths, concurrency, async fpath =>
    Promise.all([
      `/node_modules${fpath.slice(pkgPath.length)}`,
      fsp.readFile(fpath, 'utf8'),
    ])
  )

  return Object.fromEntries(entries)
}

async function buildSharedInternals() {
  const srcPaths = await globby(fromRoot('../shared-internals/dist/**/*.mjs'))
  const entries = await mapLimit(srcPaths, concurrency, async fpath =>
    Promise.all([
      `/node_modules/@common-fp${fpath.slice(pkgPath.length)}`,
      fsp.readFile(fpath, 'utf8'),
    ])
  )

  return Object.fromEntries(entries)
}

export default buildRollupFs
