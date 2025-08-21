import {
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getIterator,
  getRandomInt,
  getType,
} from '@common-fp/shared-internals'

const getRandomValue = collection => {
  const collType = getType(collection)
  assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'getRandomValue')
  const values = Array.from(getIterator('values', collection, collType))

  if (!values.length) return

  const randIdx = getRandomInt(0, values.length - 1)
  return values[randIdx]
}

export default getRandomValue
