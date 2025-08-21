import { globby } from 'globby'
import { fromRoot } from './utils.mjs'

/**
 * This is a cache allowing us to quickly determine if a typescript code example
 * exists - and thus whether we should test it
 */

let codeExampleFilePaths

const getCodeExampleFilePaths = async () => {
  codeExampleFilePaths ??= new Promise(async (res, rej) => {
    try {
      const rawPaths = await globby(fromRoot('code-examples/**/code/*'))
      const result = rawPaths.map(toParts).reduce(toStructuredPaths, {})
      res(result)
    } catch (err) {
      rej(err)
    }
  })
  return codeExampleFilePaths
}

function toParts(fpath) {
  const apiAndPagesRe = /.*\/code-examples\/([^/]+)\/([^/]+)\/code\/(.*)\.(.*)/
  const miscRe = /.*\/code-examples\/misc\/code\/(.*)\.(.*)/

  if (miscRe.test(fpath)) {
    const [, exampleFileName, lang] = fpath.match(miscRe)
    return { typeName: 'misc', exampleFileName, lang }
  }

  const [, typeName, dirName, exampleFileName, lang] =
    fpath.match(apiAndPagesRe)
  return { typeName, dirName, exampleFileName, lang }
}

function toStructuredPaths(res, parts) {
  const { typeName, dirName, exampleFileName, lang } = parts

  res[typeName] ??= {}

  if (typeName === 'misc') {
    res[typeName][exampleFileName] ??= new Set()
    res[typeName][exampleFileName].add(lang)
  } else {
    res[typeName][dirName] ??= {}
    res[typeName][dirName][exampleFileName] ??= new Set()
    res[typeName][dirName][exampleFileName].add(lang)
  }

  return res
}

export default getCodeExampleFilePaths
