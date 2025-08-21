import {
  assertArgIsType,
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const any = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'any')

  return collection => {
    const collType = getType(collection)
    assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'any')
    const entries = getIterator('entries', collection, collType)

    for (const [key, val] of entries) {
      if (predicate(val, key, collection)) return true
    }
    return false
  }
}

export default any
