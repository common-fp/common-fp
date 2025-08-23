import fsp from 'node:fs/promises'
import path from 'node:path'
import { globby } from 'globby'
import { fromRoot } from '../utils/index.mjs'

const pathToCommonFp = fromRoot('../common-fp')
const pathToSharedTypes = fromRoot('../shared-types')
const pathToCfpTypes = fromRoot('../common-fp-types')

const buildCfpTypes = async () => {
  try {
    const [cfpPathToContent, sharedTypesPathToContent, cfpTypesPathToContent] =
      await Promise.all([
        getCfpPathToContent(),
        getSharedTypesPathToContent(),
        getCfpTypesPathToContent(),
      ])

    const cfpFiles = {
      ...cfpPathToContent,
      ...sharedTypesPathToContent,
      ...cfpTypesPathToContent,
    }

    await fsp.writeFile(
      fromRoot(
        'app/try-it/cmpt/editor/codemirror/tools/ts-editor-worker/cfp-types.json'
      ),
      JSON.stringify(cfpFiles)
    )
  } catch (err) {
    console.error('top level error\n', err)
  }
}

async function getCfpPathToContent() {
  const fullPaths = await globby(path.resolve(pathToCommonFp, 'dist/**/*.d.ts'))
  const vfsPaths = fullPaths.map(
    fpath => `/node_modules/common-fp/dist/${path.basename(fpath)}`
  )
  const fcontents = await Promise.all(
    fullPaths.map(fpath => fsp.readFile(fpath, 'utf8'))
  )

  const pjsonPath = path.resolve(pathToCommonFp, 'package.json')
  const pathToContent = {
    '/node_modules/common-fp/package.json': await fsp.readFile(
      pjsonPath,
      'utf8'
    ),
  }
  for (let i = 0; i < vfsPaths.length; i += 1) {
    const fpath = vfsPaths[i]
    const fcontent = fcontents[i]
    pathToContent[fpath] = fcontent
  }

  return pathToContent
}

async function getSharedTypesPathToContent() {
  const srcPaths = await globby(path.resolve(pathToSharedTypes, 'dist/*.d.ts'))
  const vfsPaths = srcPaths.map(
    fpath =>
      `/node_modules/@common-fp/shared-types/dist/${path.basename(fpath)}`
  )
  const fcontents = await Promise.all(
    srcPaths.map(fpath => fsp.readFile(fpath, 'utf8'))
  )

  const pjsonPath = path.resolve(pathToSharedTypes, 'package.json')
  const pathToContent = {
    '/node_modules/@common-fp/shared-types/package.json': await fsp.readFile(
      pjsonPath,
      'utf8'
    ),
  }
  for (let i = 0; i < vfsPaths.length; i += 1) {
    const fpath = vfsPaths[i]
    const fcontent = fcontents[i]
    pathToContent[fpath] = fcontent
  }

  return pathToContent
}

async function getCfpTypesPathToContent() {
  const srcPaths = await globby(path.resolve(pathToCfpTypes, 'dist/*'))
  const vfsPaths = srcPaths.map(
    fpath => `/node_modules/common-fp-types/dist/${path.basename(fpath)}`
  )
  const fcontents = await Promise.all(
    srcPaths.map(fpath => fsp.readFile(fpath, 'utf8'))
  )

  const pjsonPath = path.resolve(pathToCfpTypes, 'package.json')
  const pathToContent = {
    '/node_modules/common-fp-types/package.json': await fsp.readFile(
      pjsonPath,
      'utf8'
    ),
  }
  for (let i = 0; i < vfsPaths.length; i += 1) {
    const fpath = vfsPaths[i]
    const fcontent = fcontents[i]
    pathToContent[fpath] = fcontent
  }

  return pathToContent
}

export default buildCfpTypes
