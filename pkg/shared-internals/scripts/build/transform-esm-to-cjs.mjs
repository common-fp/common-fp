import fsp from 'node:fs/promises'
import { fromRoot } from './utils.mjs'

const transformEsmToCjs = async fpath => {
  const esmContent = await fsp.readFile(fpath, 'utf8')
  await Promise.all([
    fsp.writeFile(fromRoot(fpath), esmContent),
    fsp.writeFile(
      fromRoot(fpath.replace(/\.mjs$/, '.cjs')),
      transformContent(esmContent, fpath)
    ),
  ])
}

function transformContent(content, fpath) {
  const newContent = transformImports(content)
  return transformExports(newContent, fpath)
}

function transformImports(content) {
  return content
    .replace(/\bimport (.*?) from '([^']+?)'/gs, (_s, m1, m2) => {
      const name = m1.replace(/(\*|[a-zA-Z]\w*) as /g, '')
      return `const ${name} = require('${m2}')`
    })
    .replace(/require\('([^']+?).mjs'/g, "require('$1.cjs'")
}

function transformExports(content, fpath) {
  let newContent = content
    .replace(/\bexport default\b/, 'module.exports =')
    .replace(
      /\bexport \{ default as ([a-zA-Z][a-zA-Z0-9]+) \} from '\.\/(.*)\.mjs'/g,
      (_s, m1, m2) => `  ${m1}: require('./${m2}.cjs'),`
    )
    .replace(/\bexport \{ default \} from '([^']+?)'/g, (_s, m1) => {
      const moduleStr = m1.replace(/\.mjs$/, '.cjs')
      return `module.exports = require('${moduleStr}')`
    })
    .replace(
      /\bexport \* as ([a-zA-Z][a-zA-Z0-9]+) from '\.\/(.*)\.mjs'/g,
      (_s, m1, m2) => `  ${m1}: require('./${m2}.cjs'),`
    )
    .replace(
      /\nexport \{([\s\S]*)\}\n/g,
      (_s, m) => `\nmodule.exports = {${m}}\n`
    )

  if (fpath.endsWith('/index.mjs')) {
    newContent = `module.exports = {\n${newContent}}\n`
  }

  return newContent
}

export default transformEsmToCjs
