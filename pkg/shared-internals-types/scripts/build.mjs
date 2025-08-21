#! /usr/bin/env node

import fsp from 'node:fs/promises'
import path from 'node:path'
import cpy from 'cpy'
import { camelCase } from 'change-case'
import { deleteAsync } from 'del'
import { globby } from 'globby'
import { makeDirectory } from 'make-dir'

const { dirname } = import.meta
const distDir = fromRoot('dist')

run()

async function run() {
  try {
    await deleteAsync(distDir)
    await makeDirectory(distDir)
    await cpy(fromRoot('src/*.d.ts'), distDir)
    const distFiles = await globby(fromRoot('dist/*.d.ts'))
    await createIndexFile(distFiles)
    console.log('build finished !')
  } catch (err) {
    console.error('error during build\n', err)
  }
}

function fromRoot(fpath) {
  return path.resolve(dirname, '..', fpath)
}

async function createIndexFile(distFiles) {
  const distFnames = distFiles.map(f => path.basename(f, '.d.ts'))
  const content = distFnames
    .map(fname => {
      const varName = camelCase(fname)
      return varName === 'commonTypes' ?
          `export * as ${varName} from './${fname}.js'\n`
        : `export { default as ${varName} } from './${fname}.js'\n`
    })
    .sort(asc)
    .join('')

  await fsp.writeFile(fromRoot('dist/index.d.ts'), content)
}

function asc(left, right) {
  return left.localeCompare(right, undefined, { sensitivity: 'base' })
}
