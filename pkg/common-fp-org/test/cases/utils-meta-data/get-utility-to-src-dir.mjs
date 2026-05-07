import fsp from 'node:fs/promises'
import path from 'node:path'
import { globby } from 'globby'
import { fromRoot } from '#test/utils'
import {
  discardLast,
  join,
  passThrough,
  pMapValues,
  pPassThrough,
  pResolveValues,
  reduce,
  split,
} from '#test/fp-utils'

const getUtilityToSrcDir = async () =>
  pResolveValues({
    actual: getActual(),
    expected: getExpected(),
  })

async function getActual() {
  const utilityDataDir = fromRoot('app/docs/[utility]/utility-data')
  const metaFiles = await globby(['*/meta.js'], { cwd: utilityDataDir })
  const utilityToSrcDir = await pPassThrough(metaFiles, [
    pMapValues(async relPath => {
      const utility = relPath.split('/')[0]
      const fullPath = path.resolve(utilityDataDir, relPath)
      const content = await fsp.readFile(fullPath, 'utf8')
      const srcDir = content.match(/const srcDir = '([^']+)/)?.[1]
      return {
        utility,
        srcDir,
      }
    }),
    reduce((res, cur) => {
      if (cur.srcDir) res[cur.utility] = cur.srcDir
      return res
    }, {}),
  ])
  return utilityToSrcDir
}

async function getExpected() {
  const srcLibDir = fromRoot('../common-fp/src/lib')
  const subDirUtils = await globby(['*/**/*.mjs'], { cwd: srcLibDir })
  return passThrough(subDirUtils, [
    reduce((res, relPath) => {
      const utility = relPath.split(/[/.]/).at(-2)
      const srcDir = passThrough(relPath, [
        split('/'),
        discardLast(1),
        join('/'),
      ])
      res[utility] = srcDir
      return res
    }, {}),
  ])
}

export default getUtilityToSrcDir
