import {
  assertArgHasValuesOfType,
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const getMinValue = collection => {
  const collType = getType(collection)
  assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'getMinValue')
  assertArgHasValuesOfType(collection, 'collection', 'number', 'getMinValue')

  const values = Array.from(getIterator('values', collection, collType))
  return values.length ? Math.min(...values) : undefined
}

export default getMinValue
