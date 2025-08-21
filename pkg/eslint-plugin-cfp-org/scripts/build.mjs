import fsp from 'node:fs/promises'
import path from 'node:path'
import { deleteAsync } from 'del'
import { parseImportsExports } from 'parse-imports-exports'

const { dirname } = import.meta

const fromRoot = fpath => path.resolve(dirname, '..', fpath)

const validCfpImportsFpath = fromRoot('src/valid-cfp-imports.mjs')

run()

async function run() {
  try {
    await deleteAsync(validCfpImportsFpath)
    const [cfpExports, sharedTypesExports] = await Promise.all([
      getCfpExports(),
      getSharedTypesExports(),
    ])

    const getNamesStr = arr => arr.map(line => `  '${line}',`).join('\n')
    const validUtilNamesStr = getNamesStr(cfpExports)
    const validTypeNamesStr = getNamesStr(sharedTypesExports)
    const validImportsContent = `const validUtilNames = new Set([
${validUtilNamesStr}
])

const validTypeNames = new Set([
${validTypeNamesStr}
])

export { validUtilNames, validTypeNames }
`

    await fsp.writeFile(validCfpImportsFpath, validImportsContent)
    console.log('donezo !')
  } catch (err) {
    console.error('error during build\n', err)
  }
}

async function getCfpExports() {
  const cfpPath = fromRoot('../common-fp/dist/index.mjs')
  const source = await fsp.readFile(cfpPath, 'utf8')
  const parsed = parseImportsExports(source)
  const cfpExports = Object.values(parsed.namedReexports)
    .map(e => e[0].names)
    .flat()
    .map(e => Object.keys(e)[0])

  return cfpExports
}

async function getSharedTypesExports() {
  const sharedTypesPath = fromRoot('../shared-types/dist/index.d.ts')
  const source = await fsp.readFile(sharedTypesPath, 'utf8')
  const parsed = parseImportsExports(source)
  const sharedTypesExports = Object.values(parsed.typeNamedReexports)
    .map(e => e[0].names)
    .flat()
    .map(e => Object.keys(e))
    .flat()
    .sort()

  return sharedTypesExports
}
