/**
 * Nextjs was including all of typescript, so we're bundling this manually.
 *
 * Also, I tried using esbuild but couldn't figure out why its output didn't
 * match what I expected.  Rollup's output works and looks great.
 */

import path from 'node:path'
import nodeResolve from '@rollup/plugin-node-resolve'
import { rollup } from 'rollup'
import { fileExists } from '../utils.mjs'
import { fromRoot } from '../../utils/index.mjs'

const { dirname } = import.meta

const buildCodemirrorTsBundle = async () => {
  const builtFPath = fromRoot(`app/bundles/codemirror-ts_v2-3-1.js`)
  if (await fileExists(builtFPath)) return

  const inputOpts = {
    input: path.resolve(dirname, 'entry.mjs'),
    external: req => req.startsWith('@codemirror/') || req === 'typescript',
    plugins: [nodeResolve()],
    onwarn: (rollupLog, defaultHandler) => {
      const { code, message } = rollupLog
      const canIgnore =
        code === 'CIRCULAR_DEPENDENCY' &&
        message.includes('@valtown/codemirror-ts')

      if (!canIgnore) defaultHandler(rollupLog)
    },
  }

  const bundle = await rollup(inputOpts)
  const outputOpts = {
    file: builtFPath,
  }
  await bundle.write(outputOpts)
}

export default buildCodemirrorTsBundle
