import {
  assertArgIsType,
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const joinValues = separator => {
  assertArgIsType(separator, 'separator', 'string', 'joinValues')

  return collection => {
    const collType = getType(collection)
    assertArgTypeIsOneOf(collType, 'collection', ct.collection, 'joinValues')
    const values = getIterator('values', collection, collType)
    return Array.from(values).join(separator)
  }
}

export default joinValues
