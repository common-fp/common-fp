import fsp from 'node:fs/promises'
import { camelCase } from 'change-case'
import { fromRoot } from './utils.mjs'

const createIndexJs = async () => {
  const files = (await fsp.readdir('./dist')).filter(
    fn => !fn.startsWith('index.') && fn.endsWith('.mjs')
  )
  const esExports = files.map(toEsExportLine).sort(asc).join('\n') + '\n'

  await fsp.writeFile(fromRoot('dist/index.mjs'), esExports)
}

function toEsExportLine(fileName) {
  const varName = camelCase(removeExtension(fileName), {
    preserveConsecutiveUppercase: true,
  })

  return varName === 'commonTypes' ?
      `export * as ${varName} from './${fileName}'`
    : `export { default as ${varName} } from './${fileName}'`
}

function removeExtension(fpath) {
  const defExtRe = /\.d\.c?ts$/
  const extRe = /\.[^.]+$/
  const isDefinitionFile = defExtRe.test(fpath)
  return isDefinitionFile ?
      fpath.replace(defExtRe, '')
    : fpath.replace(extRe, '')
}

function asc(left, right) {
  return left.localeCompare(right, undefined, { sensitivity: 'base' })
}

export default createIndexJs
