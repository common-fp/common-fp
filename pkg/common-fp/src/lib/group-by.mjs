import {
  assertArgIsType,
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const groupBy = toGroup => {
  assertArgIsType(toGroup, 'toGroup', 'function', 'groupBy')

  return collection => {
    const coll = collection
    const collType = getType(coll)
    assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'groupBy')
    const entries = getIterator('entries', coll, collType)

    const result = {}
    for (const [key, val] of entries) {
      const group = toGroup(val, key, coll)

      if (!result[group]) result[group] = [val]
      else result[group].push(val)
    }

    return result
  }
}

export default groupBy
