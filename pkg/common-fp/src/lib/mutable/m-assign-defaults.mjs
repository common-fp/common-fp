import {
  assertArgTypeIsOneOf,
  assertArgSharesTypeWith,
  commonTypes as ct,
  getType,
} from '@common-fp/shared-internals'

const mAssignDefaults = defaults => {
  const defaultsType = getType(defaults)
  assertArgTypeIsOneOf(
    defaultsType,
    'defaults',
    ct.keyedCollection,
    'mAssignDefaults'
  )

  return base => {
    const baseType = getType(base)
    assertArgSharesTypeWith({
      argName: 'base',
      argType: baseType,
      sharedArgName: 'defaults',
      sharedArgType: defaultsType,
      utilName: 'mAssignDefaults',
    })

    const fn = typeToFn[baseType]
    return fn(base, defaults)
  }
}

const typeToFn = {
  map: mAssignDefaults_map,
  object: mAssignDefaults_object,
}

function mAssignDefaults_map(base, defaults) {
  for (const [key, val] of defaults) {
    if (!base.has(key)) base.set(key, val)
  }

  return base
}

function mAssignDefaults_object(base, defaults) {
  for (const [key, val] of Object.entries(defaults)) {
    if (!Object.hasOwn(base, key)) base[key] = val
  }

  return base
}

export default mAssignDefaults
