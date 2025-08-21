#! /usr/bin/env node

import fsp from 'node:fs/promises'
import path from 'node:path'
import cpy from 'cpy'
import { makeDirectory } from 'make-dir'
import { deleteAsync } from 'del'
import { globby } from 'globby'

const { dirname } = import.meta
const fromRoot = fpath => path.resolve(dirname, '..', fpath)
const distDir = fromRoot('dist')

run()

async function run() {
  try {
    await deleteAsync(distDir)
    await makeDirectory(distDir)
    await cpy(fromRoot('src/*'), distDir)
    await createIndexFile()
    await createCtsFiles()
    console.log('build finished !')
  } catch (err) {
    console.error('error during build\n', err)
  }
}

async function createIndexFile() {
  const exportTypesRe = /export type \{.*\}/s
  const fpaths = await globby(fromRoot('dist/*'))
  const exportTypePerFile = await Promise.all(
    fpaths.map(async f => {
      const fname = path.basename(f)
      const content = await fsp.readFile(f, 'utf8')
      return content.match(exportTypesRe)[0] + ` from './${fname}'\n`
    })
  )

  const indexContent = exportTypePerFile.join('')
  await fsp.writeFile(fromRoot('dist/index.d.ts'), indexContent)
}

async function createCtsFiles() {
  await cpy(fromRoot('dist/*'), distDir, {
    rename: bn => {
      const noExt = path.basename(bn, '.ts')
      return noExt + '.cts'
    },
  })
}
