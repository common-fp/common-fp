import {
  aOrAn,
  assertArgHasValuesOfType,
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const update = mapperFns => {
  const mapperType = getType(mapperFns)
  assertArgTypeIsOneOf(mapperType, 'mapperFns', ct.entryCollection, 'update')
  assertArgHasValuesOfType(mapperFns, 'mapperFns', 'function', 'update')

  return collection => {
    const collType = getType(collection)
    assertArgTypeIsOneOf(collType, 'collection', ct.entryCollection, 'update')
    validateCollectionType(collType, mapperType)
    const fn = typeToFn[collType]
    const mapperFnsIterator = getIterator('entries', mapperFns, mapperType)
    return fn(collection, mapperFnsIterator)
  }
}

const typeToFn = {
  array: update_array,
  map: update_map,
  object: update_object,
}

function update_array(arr, mapperFnsIterator) {
  const result = [...arr]

  for (const [key, fn] of mapperFnsIterator) {
    if (Object.hasOwn(arr, key)) result[key] = fn(arr[key], key, arr)
  }

  return result
}

function update_map(aMap, mapperFnsIterator) {
  const result = new Map(aMap)

  for (const [key, fn] of mapperFnsIterator) {
    if (aMap.has(key)) result.set(key, fn(aMap.get(key), key, aMap))
  }

  return result
}

function update_object(obj, mapperFnsIterator) {
  const result = { ...obj }

  for (const [key, fn] of mapperFnsIterator) {
    if (Object.hasOwn(obj, key)) result[key] = fn(obj[key], key, obj)
  }

  return result
}

/**
 * If mapperFns is an array or map, then collection must match.  This convention
 * will prevent odd combinations like declaring an array of mappers intended for
 * objects which happen to have number keys.
 *
 * Objects, on the other hand, will be the most common way to declare mappers
 * - and should apply to array and map collections.
 */
function validateCollectionType(collType, mapperType) {
  if (['array', 'map'].includes(mapperType) && collType !== mapperType) {
    const msg = `update requires argument 'collection' to be ${aOrAn(mapperType)} since you passed ${aOrAn(mapperType)} for 'mapperFns'`
    throw new Error(msg)
  }
}

export default update
