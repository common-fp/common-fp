import {
  assertArgTypeIsOneOf,
  assertArgSharesTypeWith,
  commonTypes as ct,
  getType,
} from '@common-fp/shared-internals'

const assignOverrides = overrides => {
  const overridesType = getType(overrides)
  assertArgTypeIsOneOf(
    overridesType,
    'overrides',
    ct.keyedCollection,
    'assignOverrides'
  )

  return base => {
    const baseType = getType(base)
    assertArgSharesTypeWith({
      argName: 'base',
      argType: baseType,
      sharedArgName: 'overrides',
      sharedArgType: overridesType,
      utilName: 'assignOverrides',
    })

    const fn = typeToFn[baseType]
    return fn(base, overrides)
  }
}

const typeToFn = {
  map: assignOverrides_map,
  object: assignOverrides_object,
}

function assignOverrides_map(base, overrides) {
  return new Map([...base, ...overrides])
}

function assignOverrides_object(base, overrides) {
  return Object.assign({}, base, overrides)
}

export default assignOverrides
