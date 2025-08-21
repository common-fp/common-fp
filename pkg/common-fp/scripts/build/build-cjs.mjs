import eachLimit from 'async/eachLimit.js'
import { globby } from 'globby'
import transformEsmToCjs from './transform-esm-to-cjs.mjs'
import { concurrency } from './utils.mjs'

const buildCjs = async () => {
  const paths = await globby('dist/**/*.mjs')
  await eachLimit(paths, concurrency, async fpath => transformEsmToCjs(fpath))
}

export default buildCjs
