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
  const varName = camelCase(name)
  const content = {}
  if (name === 'index') {
    content.ts = "export * from '@common-fp/shared-internals-types'"
    content.cts = dedent(`
      import * as sharedInternals from '@common-fp/shared-internals-types'
      export = sharedInternals
    `)
  } else if (name === 'common-types') {
    content.ts = "export * from '@common-fp/shared-internals-types/common-types'"
    content.cts = dedent(`
      import * as commonTypes from '@common-fp/shared-internals-types/common-types'
      export = commonTypes
    `)
  } else {
    content.ts = `export { default } from '@common-fp/shared-internals-types/${name}'`
    content.cts = dedent(`
      import { default as ${varName} } from '@common-fp/shared-internals-types/${name}'
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
