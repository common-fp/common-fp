import {
  assertArgIsType,
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const pFind = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'pFind')

  return async collection => {
    const collType = getType(collection)
    assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'pFind')
    const entries = getIterator('entries', collection, collType)

    for (const [key, val] of entries) {
      if (await predicate(val, key, collection)) return val
    }
  }
}

export default pFind
