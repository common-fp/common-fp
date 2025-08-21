import fsp from 'node:fs/promises'
import { kebabCase } from 'change-case'
import { fromRoot } from './utils.mjs'

const transformEsmToCjs = async fpath => {
  let esmContent = await fsp.readFile(fpath, 'utf8')
  esmContent = resolveInternalImports(esmContent)
  esmContent = specifyInternalImports(esmContent)
  await Promise.all([
    fsp.writeFile(fromRoot(fpath), esmContent),
    fsp.writeFile(
      fromRoot(fpath.replace(/\.mjs$/, '.cjs')),
      transformContent(esmContent, fpath)
    ),
  ])
}

function resolveInternalImports(esmContent) {
  return esmContent.replace(
    /import (.+?) from '#internal\/([^']+)'/gs,
    "import $1 from './internal/$2.mjs'"
  )
}

function specifyInternalImports(esmContent) {
  const withAliasRe = /^(\S+) as (\S+)$/
  return esmContent.replace(
    /import \{(.*?)\} from '((?:@common-fp\/shared-internals|#internal))'/gs,
    (_match, g1, g2) => {
      const source = g2 === '#internal' ? './internal' : g2
      const imports = g1
        .split(',')
        .map(s => s.trim())
        .filter(s => s)
        .map(s => {
          const [_match, name, alias] = s.match(withAliasRe) || ['', s, s]
          return { name, alias }
        })
      return imports
        .map(({ name, alias }) => {
          const importAlias = name === 'commonTypes' ? `* as ${alias}` : alias
          const ext = source === './internal' ? '.mjs' : ''
          return `import ${importAlias} from '${source}/${kebabCase(name)}${ext}'`
        })
        .join('\n')
    }
  )
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
