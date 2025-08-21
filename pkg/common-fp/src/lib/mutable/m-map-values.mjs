/**
 * This doesn't support Set since I'm unsure there's a solution without copying
 * the set, and copying would be an unexpected implementation detail.
 */

import { assertArgIsType, getFn } from '@common-fp/shared-internals'

const mapValues = mapperFn => {
  assertArgIsType(mapperFn, 'mapperFn', 'function', 'mMapValues')

  return collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'mMapValues')
    return fn(collection, mapperFn)
  }
}

const typeToFn = {
  array: mMapValues_array,
  map: mMapValues_map,
  object: mMapValues_object,
}

function mMapValues_array(arr, mapperFn) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = mapperFn(arr[i], i, arr)
  }
  return arr
}

function mMapValues_map(aMap, mapperFn) {
  for (const [key, val] of aMap) {
    aMap.set(key, mapperFn(val, key, aMap))
  }

  return aMap
}

function mMapValues_object(obj, mapperFn) {
  for (const [key, val] of Object.entries(obj)) {
    obj[key] = mapperFn(val, key, obj)
  }

  return obj
}

export default mapValues
