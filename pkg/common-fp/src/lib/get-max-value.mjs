import {
  assertArgHasValuesOfType,
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const getMaxValue = collection => {
  const collType = getType(collection)
  assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'getMaxValue')
  assertArgHasValuesOfType(collection, 'collection', 'number', 'getMaxValue')

  const values = Array.from(getIterator('values', collection, collType))
  return values.length ? Math.max(...values) : undefined
}

export default getMaxValue
