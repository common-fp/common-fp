import {
  aOrAn,
  assertArgHasValuesOfType,
  assertArgTypeIsOneOf,
  commonTypes as ct,
  getIterator,
  getType,
} from '@common-fp/shared-internals'

const mUpdate = mapperFns => {
  const mapperType = getType(mapperFns)
  assertArgTypeIsOneOf(mapperType, 'mapperFns', ct.entryCollection, 'mUpdate')
  assertArgHasValuesOfType(mapperFns, 'mapperFns', 'function', 'mUpdate')

  return collection => {
    const collType = getType(collection)
    assertArgTypeIsOneOf(collType, 'collection', ct.entryCollection, 'mUpdate')
    validateCollectionType(collType, mapperType)
    const fn = typeToFn[collType]
    const mapperFnsIterator = getIterator('entries', mapperFns)
    return fn(collection, mapperFnsIterator)
  }
}

const typeToFn = {
  array: mUpdate_array,
  map: mUpdate_map,
  object: mUpdate_object,
}

function mUpdate_array(arr, mapperFnsIterator) {
  for (const [key, fn] of mapperFnsIterator) {
    if (Object.hasOwn(arr, key)) arr[key] = fn(arr[key], key, arr)
  }

  return arr
}

function mUpdate_map(aMap, mapperFnsIterator) {
  for (const [key, fn] of mapperFnsIterator) {
    if (aMap.has(key)) aMap.set(key, fn(aMap.get(key), key, aMap))
  }

  return aMap
}

function mUpdate_object(obj, mapperFnsIterator) {
  for (const [key, fn] of mapperFnsIterator) {
    if (Object.hasOwn(obj, key)) obj[key] = fn(obj[key], key, obj)
  }

  return obj
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
    const msg = `mUpdate requires argument 'collection' to be ${aOrAn(mapperType)} since you passed ${aOrAn(mapperType)} for 'mapperFns'`
    throw new Error(msg)
  }
}

export default mUpdate
