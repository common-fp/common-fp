import fsp from 'node:fs/promises'
import { globby } from 'globby'
import { fromRoot, rootDir } from './utils.mjs'

const getPkgNames = async ({ scriptKey }) => {
  const relPaths = await globby('./pkg/*/package.json', { cwd: rootDir })
  const pkgJsonContents = await Promise.all(
    relPaths.map(fromRoot).map(fpath => fsp.readFile(fpath, 'utf8'))
  )
  const pkgNames = pkgJsonContents
    .map(pjsonStr => JSON.parse(pjsonStr))
    .filter(pjsonObj => Object.hasOwn(pjsonObj.scripts || {}, scriptKey))
    .map(pjsonObj => pjsonObj.name)

  return pkgNames
}

export default getPkgNames
