import {
  assertArgIsOneOfType,
  commonTypes as ct,
  ensureSet,
  getFn,
  validateArrayKeys,
  validateObjectKeys,
} from '@common-fp/shared-internals'

const pick = keys => {
  assertArgIsOneOfType(keys, 'keys', ct.valueCollection, 'pick')
  const setOfKeys = ensureSet(keys)

  return collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'pick')
    return fn(collection, setOfKeys)
  }
}

const typeToFn = {
  array: pick_array,
  map: pick_map,
  object: pick_object,
}

function pick_array(arr, keys) {
  validateArrayKeys(keys, 'pick')
  return arr.filter((_el, i) => keys.has(i))
}

function pick_map(aMap, keys) {
  const result = new Map()

  for (const k of keys) {
    if (aMap.has(k)) result.set(k, aMap.get(k))
  }

  return result
}

function pick_object(obj, keys) {
  validateObjectKeys(keys, 'pick')
  const result = {}

  for (const k of keys) {
    if (Object.hasOwn(obj, k)) result[k] = obj[k]
  }

  return result
}

export default pick
