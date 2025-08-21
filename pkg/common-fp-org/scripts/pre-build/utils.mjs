import fsp from 'node:fs/promises'
import path from 'node:path'
import { globby } from 'globby'
import { camelCase } from 'change-case'
import { fromRoot } from '../utils/index.mjs'

const fileExists = async fpath => {
  try {
    await fsp.stat(fpath)
    return true
  } catch (err) {
    if (err.code === 'ENOENT') return false
    else throw err
  }
}

const getExt = fname => fname.slice(fname.lastIndexOf('.') + 1)

const getPageNames = async () => {
  const pagesBlob = fromRoot('code-examples/pages/*')
  const pageFpaths = await globby(pagesBlob, { onlyDirectories: true })
  return pageFpaths.map(p => path.basename(p))
}

const getUtilNames = async () => {
  const utilDirs = await globby(fromRoot('code-examples/api/*'), {
    objectMode: true,
    onlyDirectories: true,
  })
  return utilDirs.map(d => d.name)
}

const myCamelCase = str => camelCase(str, { mergeAmbiguousCharacters: true })

const passThrough = (arg, fnArr) => fnArr.reduce((res, fn) => fn(res), arg)

const readUtf8 = fpath => fsp.readFile(fpath, 'utf8')

const readUtf8IfExists = async fpath => {
  try {
    return await fsp.readFile(fpath, 'utf8')
  } catch (err) {
    if (err.code === 'ENOENT') return
    else throw err
  }
}

const removeExt = fname => fname.slice(0, fname.lastIndexOf('.'))

export {
  fileExists,
  getExt,
  getPageNames,
  getUtilNames,
  myCamelCase,
  passThrough,
  readUtf8,
  readUtf8IfExists,
  removeExt,
}
