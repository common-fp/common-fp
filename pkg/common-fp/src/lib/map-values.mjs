import { assertArgIsType, getFn } from '@common-fp/shared-internals'

const mapValues = mapperFn => {
  assertArgIsType(mapperFn, 'mapperFn', 'function', 'mapValues')

  return collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'mapValues')
    return fn(collection, mapperFn)
  }
}

const typeToFn = {
  array: mapValues_array,
  map: mapValues_map,
  object: mapValues_object,
  set: mapValues_set,
}

function mapValues_array(arr, mapperFn) {
  return arr.map(mapperFn)
}

function mapValues_map(aMap, mapperFn) {
  const result = new Map()

  for (const [key, val] of aMap) result.set(key, mapperFn(val, key, aMap))

  return result
}

function mapValues_object(obj, mapperFn) {
  const result = {}

  for (const [key, val] of Object.entries(obj)) {
    result[key] = mapperFn(val, key, obj)
  }

  return result
}

function mapValues_set(aSet, mapperFn) {
  const result = new Set()

  for (const el of aSet) result.add(mapperFn(el, el, aSet))

  return result
}

export default mapValues
