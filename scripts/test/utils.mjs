import { makeDirectory } from 'make-dir'
import { deleteAsync } from 'del'
import path from 'node:path'

const { dirname } = import.meta

const cleanDir = async fpath => {
  await deleteAsync(fpath)
  await makeDirectory(fpath)
}

const fromRoot = fpath => path.resolve(dirname, '../..', fpath)

const rootDir = fromRoot('')

export { cleanDir, fromRoot, rootDir }
