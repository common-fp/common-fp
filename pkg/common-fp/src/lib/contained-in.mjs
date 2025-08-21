import { getFnByType, getType } from '@common-fp/shared-internals'
import containsTypeToFn from '#internal/contains-type-to-fn'

const containedIn = collection => {
  const collType = getType(collection)
  const fn = getFnByType(
    containsTypeToFn,
    collType,
    'collection',
    'containedIn'
  )

  return value => {
    const valueType = getType(value)
    if (collType === 'string' && valueType !== 'string') {
      throw new Error(
        `When calling containedIn with a string collection, value must also be a string` +
          `\n  value type: ${valueType}`
      )
    }
    return fn(collection, value)
  }
}

export default containedIn
