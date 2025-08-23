import fsp from 'node:fs/promises'
import path from 'node:path'
import dedent from 'dedent'
import eachLimit from 'async/eachLimit.js'
import { camelCase } from 'change-case'
import { globby } from 'globby'
import { concurrency, fromRoot } from './utils.mjs'

const buildTypes = async () => {
  const paths = await globby(fromRoot('dist/*.mjs'))
  await eachLimit(paths, concurrency, async fpath => await buildTypeDef(fpath))
}

async function buildTypeDef(fpath) {
  const name = path.basename(fpath, '.mjs')
  const isIndex = name === 'index'
  const varName = camelCase(name)
  const content = {}
  if (isIndex) {
    content.ts = `export * from 'common-fp-types'`
    content.cts = dedent(`
      import * as commonFp from 'common-fp-types'
      export = commonFp
    `)
  } else {
    content.ts = `export { default } from 'common-fp-types/${name}'`
    content.cts = dedent(`
      import { default as ${varName} } from 'common-fp-types/${name}'
      export = ${varName}
    `)
  }

  const typeFpath = path.dirname(fpath) + `/${name}.d`
  await Promise.all([
    fsp.writeFile(typeFpath + '.ts', content.ts),
    fsp.writeFile(typeFpath + '.cts', content.cts),
  ])
}

export default buildTypes
