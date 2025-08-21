import {
  assertArgTypeIsOneOf,
  assertArgSharesTypeWith,
  commonTypes as ct,
  getType,
} from '@common-fp/shared-internals'

const mAssignOverrides = overrides => {
  const overridesType = getType(overrides)
  assertArgTypeIsOneOf(
    overridesType,
    'overrides',
    ct.keyedCollection,
    'mAssignOverrides'
  )

  return base => {
    const baseType = getType(base)
    assertArgSharesTypeWith({
      argName: 'base',
      argType: baseType,
      sharedArgName: 'overrides',
      sharedArgType: overridesType,
      utilName: 'mAssignOverrides',
    })

    const fn = typeToFn[baseType]
    return fn(base, overrides)
  }
}

const typeToFn = {
  map: mAssignOverrides_map,
  object: mAssignOverrides_object,
}

function mAssignOverrides_map(base, overrides) {
  for (const [key, val] of overrides) {
    base.set(key, val)
  }

  return base
}

function mAssignOverrides_object(base, overrides) {
  return Object.assign(base, overrides)
}

export default mAssignOverrides
