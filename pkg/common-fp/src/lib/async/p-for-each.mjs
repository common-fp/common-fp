import {
  assertArgIsType,
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const pForEach = fn => {
  assertArgIsType(fn, 'fn', 'function', 'pForEach')

  return async collection => {
    const collType = getType(collection)
    assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'pForEach')

    const entries = [...getIterator('entries', collection, collType)]
    await Promise.all(entries.map(([key, val]) => fn(val, key, collection)))

    return collection
  }
}

export default pForEach
