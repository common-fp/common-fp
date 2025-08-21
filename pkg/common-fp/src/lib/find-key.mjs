import {
  assertArgTypeIsOneOf,
  assertArgIsType,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const findKey = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'findKey')

  return collection => {
    const collType = getType(collection)
    assertArgTypeIsOneOf(collType, 'collection', ct.entryCollection, 'findKey')
    const entries = getIterator('entries', collection, collType)

    for (const [key, val] of entries) {
      if (predicate(val, key, collection)) return key
    }
  }
}

export default findKey
