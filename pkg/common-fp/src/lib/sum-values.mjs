import {
  assertArgHasValuesOfType,
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const sumValues = collection => {
  const collType = getType(collection)
  assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'sumValues')
  assertArgHasValuesOfType(collection, 'collection', 'number', 'sumValues')

  const values = getIterator('values', collection, collType)
  let sum = 0
  for (const num of values) {
    sum += num
  }
  return sum
}

export default sumValues
