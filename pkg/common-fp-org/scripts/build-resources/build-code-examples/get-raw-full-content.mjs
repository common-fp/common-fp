import path from 'node:path'
import dedent from 'dedent'
import {
  getExt,
  myCamelCase,
  passThrough,
  readUtf8IfExists,
} from '../utils.mjs'
import { removeExt } from '../../utils/index.mjs'

const getRawFullContent = async ({ fpath, fname, content }) => {
  const pathToFullContent = removeExt(fpath) + '_full.' + getExt(fpath)
  let rawFullContent = await readUtf8IfExists(pathToFullContent)
  if (rawFullContent) return rawFullContent

  const codeName = myCamelCase(removeExt(fname))
  const lang = getExt(fname)

  const { default: fullTransforms } = await importFullTransforms(fpath)

  let transformedContent = passThrough(
    content,
    fullTransforms[codeName]?.both || []
  )
  transformedContent = passThrough(
    transformedContent,
    fullTransforms[codeName]?.[lang] || []
  )

  rawFullContent = transformedContent

  if (typeof rawFullContent !== 'string') {
    throw new Error(
      dedent(`
        transforms returned something other than a string for file: ${fpath}
        typeof rawFullContent: ${typeof rawFullContent}
      `)
    )
  }

  return rawFullContent
}

async function importFullTransforms(fpath) {
  const fdir = path.dirname(fpath)
  try {
    const attempt1 = path.resolve(fdir, '../full-transforms.mjs')
    return await import(attempt1)
  } catch (err) {
    if (err.code === 'ERR_MODULE_NOT_FOUND') {
      const attempt2 = path.resolve(fdir, '../full-transforms/index.mjs')
      return import(attempt2)
    }
  }
}

export default getRawFullContent
