import {
  assertArgTypeIsOneOf,
  assertArgIsType,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const all = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'all')

  return collection => {
    const collType = getType(collection)
    assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'all')
    const iterator = getIterator('entries', collection, collType)

    for (const [key, val] of iterator) {
      if (!predicate(val, key, collection)) return false
    }

    return true
  }
}

export default all
