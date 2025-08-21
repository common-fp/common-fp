import {
  assertArgTypeIsOneOf,
  assertArgIsType,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const forEach = fn => {
  assertArgIsType(fn, 'fn', 'function', 'forEach')

  return collection => {
    const collType = getType(collection)
    assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'forEach')
    const entries = getIterator('entries', collection, collType)
    for (const [key, val] of entries) {
      fn(val, key, collection)
    }

    return collection
  }
}

export default forEach
