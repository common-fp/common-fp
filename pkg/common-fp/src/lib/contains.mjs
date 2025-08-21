import { getFnByType, getType } from '@common-fp/shared-internals'
import containsTypeToFn from '#internal/contains-type-to-fn'

const contains = value => {
  const valueType = getType(value)

  return collection => {
    const collectionType = getType(collection)
    const fn = getFnByType(
      containsTypeToFn,
      collectionType,
      'collection',
      'contains'
    )

    if (collectionType === 'string' && valueType !== 'string') {
      throw new Error(
        'When calling contains with a collection of type string, value must also be a string' +
          `\n  value type: ${valueType}`
      )
    }

    return fn(collection, value)
  }
}

export default contains
