import path from 'node:path'
import { kebabCase } from 'change-case'

const { dirname } = import.meta
const kebabVersion = kebabCase(process.version)

const fromTestDir = fpath => path.resolve(dirname, fpath)

// allows for node versions to be tested in parallel
const getBundleDirName = bundlerName => `${bundlerName}_node${kebabVersion}`

export { fromTestDir, getBundleDirName }
