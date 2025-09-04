import path from 'node:path'
import dedent from 'dedent'
import pjson from '@typescript/vfs/package.json' with { type: 'json' }
import { rollup } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import prettier from 'rollup-plugin-prettier'
import { fileExists } from '../utils.mjs'
import { fromRoot } from '../../utils/index.mjs'

const { dirname } = import.meta

const buildVfsSlim = async () => {
  const fpath = fromRoot('app/deps/vfs-slim.mjs')
  if (await fileExists(fpath)) return

  const inputOpts = {
    input: path.resolve(dirname, 'entry.mjs'),
    plugins: [
      nodeResolve(),
      prettier({ parser: 'babel', cwd: fromRoot('../prettier-config') }),
    ],
  }

  const bundle = await rollup(inputOpts)

  const outputOpts = {
    file: fpath,
    banner: dedent(`
      /**
       * @typescript/vfs version: ${pjson.version}
       * generated at: ${new Date().toISOString()}
       */
    `),
  }
  await bundle.write(outputOpts)
}

export default buildVfsSlim
