import {
  assertArgTypeIsOneOf,
  assertArgIsType,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const pAll = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'pAll')

  return async collection => {
    const collType = getType(collection)
    assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'pAll')
    const entries = getIterator('entries', collection, collType)

    for (const [key, val] of entries) {
      if (!(await predicate(val, key, collection))) return false
    }

    return true
  }
}

export default pAll
