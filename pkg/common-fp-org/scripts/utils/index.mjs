import path from 'node:path'
import { deleteAsync } from 'del'
import { makeDirectory } from 'make-dir'

const { dirname } = import.meta

const cleanDir = async fpath => {
  await deleteAsync(fpath)
  await makeDirectory(fpath)
}

const fromRoot = fpath => path.resolve(dirname, '../..', fpath)

const removeExt = fpath => fpath.slice(0, fpath.lastIndexOf('.'))

export { cleanDir, fromRoot, removeExt }
