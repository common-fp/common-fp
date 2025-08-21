import typescript from 'typescript'
import {
  createSystem,
  createVirtualTypeScriptEnvironment,
} from '@/deps/vfs-slim.mjs'
import tsconfig from '@common-fp/tsconfig'
import rootPjson from './root-package.json'
import cfpTypes from './cfp-types.json'
import libFiles from './lib-files.json'
import editorTypesContent from '@/misc/editor-types.d.ts'

function getInitialTsFsMap() {
  const fsMap = new Map()
  for (const [name, content] of Object.entries(libFiles)) {
    fsMap.set('/' + name, content)
  }
  return fsMap
}

/**
 * I'm leaving this as an async function because it needs to be when I test
 * against the vfs-slim's `createDefaultMapFromCDN` rather than our locally
 * cached lib-files.json. Swapping between the two and updating consuming code
 * is otherwise tedius.
 */
const createTsEnvironment = async () => {
  const workerTsConfig = {
    ...tsconfig,
    compilerOptions: {
      ...tsconfig.compilerOptions,
      lib: ['ES2023', 'webworker'],
      sourceMap: true,
      target: 'ES2023',
    },
    indclude: [...(tsconfig.include || []), '**/*.ts'],
  }

  const fsMap = createFsMap(workerTsConfig)
  const system = createSystem(fsMap)
  const { options: compilerOptions } = typescript.parseJsonConfigFileContent(
    workerTsConfig,
    system,
    '/'
  )

  return createVirtualTypeScriptEnvironment(
    system,
    ['/global.d.ts'],
    typescript,
    compilerOptions
  )
}

function createFsMap(workerTsConfig) {
  const fsMap = getInitialTsFsMap()

  fsMap.set('/tsconfig.json', JSON.stringify(workerTsConfig))
  fsMap.set('/package.json', JSON.stringify(rootPjson))
  fsMap.set('/global.d.ts', editorTypesContent)
  for (const [fname, content] of Object.entries(cfpTypes)) {
    fsMap.set(fname, content)
  }

  return fsMap
}

export default createTsEnvironment
