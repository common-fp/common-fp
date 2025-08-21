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
    await copyUtilsToDist()
    const distFiles = await globby(fromRoot('dist/*.d.ts'))
    await Promise.all([createIndexFile(distFiles)])
    console.log('build finished !')
  } catch (err) {
    console.error('error during build\n', err)
  }
}

function fromRoot(fpath) {
  return path.resolve(dirname, '..', fpath)
}

async function copyUtilsToDist() {
  const allSrcFiles = fromRoot('src/**/*.d.ts')
  const allSrcIndexFiles = fromRoot('src/**/index.d.ts')
  return cpy([allSrcFiles, `!${allSrcIndexFiles}`], distDir, {
    flat: true,
  })
}

async function createIndexFile(distFiles) {
  const distFnames = distFiles.map(f => path.basename(f, '.d.ts'))
  let content = distFnames
    .map(fname => {
      const varName = camelCase(fname)
      return `export { default as ${varName} } from './${fname}.js'\n`
    })
    .join('')

  content += "export * from '@common-fp/shared-types'\n"

  await fsp.writeFile(fromRoot('dist/index.d.ts'), content)
}
