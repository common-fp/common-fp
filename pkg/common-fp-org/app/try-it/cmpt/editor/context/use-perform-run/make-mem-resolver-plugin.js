/**
 * This is a very naive approach specific to my use case. I spent a bit looking
 * for a workable generic solution and came up empty
 */

const base = {
  commonFp: '/node_modules/common-fp/dist',
  sharedInternals: '/node_modules/@common-fp/shared-internals/dist',
}

const entry = {
  commonFp: `${base.commonFp}/index.mjs`,
  sharedInternals: `${base.sharedInternals}/index.mjs`,
}

const makeMemResolverPlugin = modules => ({
  name: 'mem-resolver-plugin',
  resolveId: (source, importer) => {
    let resolvedId = source
    if (source === '@common-fp/shared-internals')
      resolvedId = entry.sharedInternals
    else if (source.startsWith('@common-fp/shared-internals/')) {
      const relative = source.slice('@common-fp/shared-internals/'.length)
      resolvedId = `${base.sharedInternals}/${relative}.mjs`
    } else if (source === 'common-fp') resolvedId = entry.commonFp
    else if (source.startsWith('common-fp/')) {
      const relative = source.slice('common-fp/'.length)
      resolvedId = `${base.commonFp}/${relative}.mjs`
    } else if (source.startsWith('.')) {
      resolvedId = resolveRelative(source, importer)
    }

    if (!Object.hasOwn(modules, resolvedId)) {
      throw new Error(getUnsupportedImportMsg(source, importer))
    }

    return resolvedId
  },
  load: id => {
    if (Object.hasOwn(modules, id)) return modules[id]
  },
})

function getUnsupportedImportMsg(source, importer) {
  return `unsupported import '${source}' from '${importer}'`
}

/**
 * Again, this function is mostly specific to my usage. There are a lot of cases
 * where bad input would cause issues
 */
function resolveRelative(source, importer) {
  const curPath = importer.split('/')
  curPath.pop()
  const pathToResolve = source.split('/').filter(segment => segment !== '.')

  for (const p of pathToResolve) {
    if (p === '..') {
      if (curPath.length <= 1) {
        throw new Error(getUnsupportedImportMsg(source, importer))
      }
      curPath.pop()
    } else curPath.push(p)
  }

  return curPath.join('/')
}

export default makeMemResolverPlugin
