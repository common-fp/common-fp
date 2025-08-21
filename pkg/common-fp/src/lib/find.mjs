import {
  assertArgTypeIsOneOf,
  assertArgIsType,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const find = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'find')

  return collection => {
    const collType = getType(collection)
    assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'find')
    const entries = getIterator('entries', collection, collType)

    for (const [key, val] of entries) {
      if (predicate(val, key, collection)) return val
    }
  }
}

export default find
