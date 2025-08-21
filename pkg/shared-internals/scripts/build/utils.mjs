import os from 'node:os'
import path from 'node:path'

const { dirname } = import.meta

const concurrency = (os.cpus().length || 1) * 2

const fromRoot = fpath => path.resolve(dirname, '../..', fpath)

export { concurrency, fromRoot }
