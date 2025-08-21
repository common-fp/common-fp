import {
  assertArgTypeIsOneOf,
  assertArgIsType,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const pAny = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'pAny')

  return async collection => {
    const collType = getType(collection)
    assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'pAny')
    const entries = getIterator('entries', collection, collType)

    for (const [key, val] of entries) {
      if (await predicate(val, key, collection)) return true
    }

    return false
  }
}

export default pAny
