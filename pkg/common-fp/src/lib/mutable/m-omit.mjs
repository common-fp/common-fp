import {
  assertArgIsOneOfType,
  commonTypes as ct,
  ensureNumber,
  ensureSet,
  getFn,
  validateArrayKeys,
  validateObjectKeys,
} from '@common-fp/shared-internals'

const mOmit = keys => {
  assertArgIsOneOfType(keys, 'keys', ct.valueCollection, 'mOmit')
  const setOfKeys = ensureSet(keys)

  return collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'mOmit')
    return fn(collection, setOfKeys)
  }
}

const typeToFn = {
  array: mOmit_array,
  map: mOmit_map,
  object: mOmit_object,
}

function mOmit_array(arr, keys) {
  validateArrayKeys(keys, 'mOmit')

  const descendingKeys = getDescendingArrayKeys(arr, keys)
  for (const k of descendingKeys) {
    arr.splice(k, 1)
  }

  return arr
}

function getDescendingArrayKeys(arr, keys) {
  const descending = (l, r) => r - l
  return [...keys]
    .map(ensureNumber)
    .filter(k => k < arr.length)
    .sort(descending)
}

function mOmit_map(aMap, keys) {
  for (const k of aMap.keys()) {
    if (keys.has(k)) aMap.delete(k)
  }

  return aMap
}

function mOmit_object(obj, keys) {
  validateObjectKeys(keys, 'mOmit')

  for (const k of Object.keys(obj)) {
    if (keys.has(k)) delete obj[k]
  }

  return obj
}

export default mOmit
