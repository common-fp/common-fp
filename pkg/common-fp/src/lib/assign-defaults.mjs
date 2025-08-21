import {
  assertArgTypeIsOneOf,
  assertArgSharesTypeWith,
  commonTypes as ct,
  getType,
} from '@common-fp/shared-internals'

const assignDefaults = defaults => {
  const defaultsType = getType(defaults)
  assertArgTypeIsOneOf(
    defaultsType,
    'defaults',
    ct.keyedCollection,
    'assignDefaults'
  )

  return base => {
    const baseType = getType(base)
    assertArgSharesTypeWith({
      argName: 'base',
      argType: baseType,
      sharedArgName: 'defaults',
      sharedArgType: defaultsType,
      utilName: 'assignDefaults',
    })

    const fn = typeToFn[baseType]
    return fn(base, defaults)
  }
}

const typeToFn = {
  map: assignDefaults_map,
  object: assignDefaults_object,
}

function assignDefaults_map(base, defaults) {
  return new Map([...defaults, ...base])
}

function assignDefaults_object(base, defaults) {
  return Object.assign({}, defaults, base)
}

export default assignDefaults
