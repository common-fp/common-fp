import path from 'node:path'

const { dirname } = import.meta
const shallowCodeExampleRe = /.*\/(code-examples\/.*)/

const fromRoot = fpath => path.resolve(dirname, '..', fpath)

const toShallowCodeExamplePath = fpath => fpath.match(shallowCodeExampleRe)[1]

export { fromRoot, toShallowCodeExamplePath }
