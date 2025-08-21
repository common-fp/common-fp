import fsp from 'node:fs/promises'
import globals from 'globals'
import globalWhitelist from './run-example/global-whitelist.mjs'
import { fromRoot } from '../utils/index.mjs'

const buildTrimmedGlobals = async () => {
  const whitelistedWorkerGlobals = Object.entries(globals.worker).filter(
    ([name]) => {
      return Object.hasOwn(globalWhitelist, name)
    }
  )
  const worker = Object.fromEntries(whitelistedWorkerGlobals)
  return fsp.writeFile(
    fromRoot('app/try-it/cmpt/editor/codemirror/tools/trimmed-globals.json'),
    JSON.stringify({ worker })
  )
}

export default buildTrimmedGlobals
