import { assertArgIsType, getFn, negate } from '@common-fp/shared-internals'

const discardWhen = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'discardWhen')

  return collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'discardWhen')
    return fn(collection, predicate)
  }
}

const typeToFn = {
  array: discardWhen_array,
  map: discardWhen_map,
  object: discardWhen_object,
  set: discardWhen_set,
}

function discardWhen_array(arr, predicate) {
  return arr.filter(negate(predicate))
}

function discardWhen_map(aMap, predicate) {
  const result = new Map()

  for (const [key, val] of aMap) {
    if (!predicate(val, key, aMap)) result.set(key, val)
  }

  return result
}

function discardWhen_object(obj, predicate) {
  const result = {}

  for (const key of Object.keys(obj)) {
    if (!predicate(obj[key], key, obj)) result[key] = obj[key]
  }

  return result
}

function discardWhen_set(aSet, predicate) {
  const result = new Set()

  for (const val of aSet) {
    if (!predicate(val, val, aSet)) result.add(val)
  }

  return result
}

export default discardWhen
