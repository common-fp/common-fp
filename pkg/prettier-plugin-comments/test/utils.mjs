import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { camelCase, noCase } from 'change-case'

const { dirname } = import.meta

const caseNames = fs
  .readdirSync(path.resolve(dirname, 'expected'))
  .map(n => noCase(removeExt(n)))

const myCamelCase = str => camelCase(str, { mergeAmbiguousCharacters: true })

const readCases = async () => {
  return resolveValues({
    expected: readDir('expected'),
    unformatted: readDir('unformatted'),
  })
}

//
//------------------//
// Helper Functions //
//------------------//

async function readDir(name) {
  const dirPath = path.resolve(dirname, name)
  const dir = await fsp.readdir(dirPath)
  const pFiles = dir.reduce((res, fname) => {
    const codeName = myCamelCase(removeExt(fname))
    res[codeName] = readUtf8(`${dirPath}/${fname}`)
    return res
  }, {})
  return resolveValues(pFiles)
}

async function resolveValues(obj) {
  const keys = Object.keys(obj)
  const values = await Promise.all(Object.values(obj))
  const result = {}

  for (let i = 0; i < values.length; i += 1) result[keys[i]] = values[i]

  return result
}

function readUtf8(fpath) {
  return fsp.readFile(fpath, 'utf8')
}

function removeExt(fname) {
  return fname.slice(0, fname.lastIndexOf('.'))
}

export { caseNames, myCamelCase, readCases }
