import { assertArgIsType, getFn } from '@common-fp/shared-internals'

const mapKeys = mapperFn => {
  assertArgIsType(mapperFn, 'mapperFn', 'function', 'mapKeys')

  return collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'mapKeys')
    return fn(collection, mapperFn)
  }
}

const typeToFn = {
  map: mapKeys_map,
  object: mapKeys_object,
}

function mapKeys_map(aMap, mapperFn) {
  const result = new Map()

  for (const [key, val] of aMap) result.set(mapperFn(val, key, aMap), val)

  return result
}

function mapKeys_object(obj, mapperFn) {
  const result = {}

  for (const [key, val] of Object.entries(obj)) {
    result[mapperFn(val, key, obj)] = val
  }

  return result
}

export default mapKeys
