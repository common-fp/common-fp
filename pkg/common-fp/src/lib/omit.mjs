import {
  assertArgIsOneOfType,
  commonTypes as ct,
  ensureSet,
  getFn,
  validateArrayKeys,
  validateObjectKeys,
} from '@common-fp/shared-internals'

const omit = keys => {
  assertArgIsOneOfType(keys, 'keys', ct.valueCollection, 'omit')
  const setOfKeys = ensureSet(keys)

  return collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'omit')
    return fn(collection, setOfKeys)
  }
}

const typeToFn = {
  array: omit_array,
  map: omit_map,
  object: omit_object,
}

function omit_array(arr, keys) {
  validateArrayKeys(keys, 'omit')

  return arr.filter((_el, i) => !keys.has(i))
}

function omit_map(aMap, keys) {
  const result = new Map()

  for (const [k, val] of aMap) {
    if (!keys.has(k)) result.set(k, val)
  }

  return result
}

function omit_object(obj, keys) {
  validateObjectKeys(keys, 'omit')

  const result = {}

  for (const k of Object.keys(obj)) {
    if (!keys.has(k)) result[k] = obj[k]
  }

  return result
}

export default omit
