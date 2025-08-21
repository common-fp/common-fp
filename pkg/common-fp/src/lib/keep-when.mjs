import { assertArgIsType, getFn } from '@common-fp/shared-internals'

const keepWhen = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'keepWhen')

  return collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'keepWhen')
    return fn(collection, predicate)
  }
}

const typeToFn = {
  array: keepWhen_array,
  map: keepWhen_map,
  object: keepWhen_object,
  set: keepWhen_set,
}

function keepWhen_array(coll, predicate) {
  return coll.filter(predicate)
}

function keepWhen_map(aMap, predicate) {
  const result = new Map()

  for (const [key, val] of aMap.entries()) {
    if (predicate(val, key, aMap)) result.set(key, val)
  }

  return result
}

function keepWhen_object(obj, predicate) {
  const result = {}

  for (const [key, val] of Object.entries(obj)) {
    if (predicate(val, key, obj)) result[key] = val
  }

  return result
}

function keepWhen_set(aSet, predicate) {
  const result = new Set()

  for (const val of aSet) {
    if (predicate(val, val, aSet)) result.add(val)
  }

  return result
}

export default keepWhen
