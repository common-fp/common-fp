import {
  assertArgIsOneOfType,
  commonTypes as ct,
  ensureNumber,
  ensureSet,
  getFn,
  validateArrayKeys,
  validateObjectKeys,
} from '@common-fp/shared-internals'

const mPick = keys => {
  assertArgIsOneOfType(keys, 'keys', ct.valueCollection, 'mPick')
  const setOfKeys = ensureSet(keys)

  return collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'mPick')
    return fn(collection, setOfKeys)
  }
}

const typeToFn = {
  array: mPick_array,
  map: mPick_map,
  object: mPick_object,
}

function mPick_array(arr, keys) {
  validateArrayKeys(keys, 'mPick')

  const descendingKeys = getDescendingArrayKeys(arr, keys)
  let boundary = arr.length
  for (const k of descendingKeys) {
    const deleteIdx = k + 1
    const numToDelete = boundary - deleteIdx
    boundary = k
    if (numToDelete) arr.splice(deleteIdx, numToDelete)
  }
  if (boundary) arr.splice(0, boundary)

  return arr
}

function getDescendingArrayKeys(arr, keys) {
  const descending = (l, r) => r - l
  return [...keys]
    .map(ensureNumber)
    .filter(k => k < arr.length)
    .sort(descending)
}

function mPick_map(aMap, keys) {
  for (const k of aMap.keys()) {
    if (!keys.has(k)) aMap.delete(k)
  }

  return aMap
}

function mPick_object(obj, keys) {
  validateObjectKeys(keys, 'mPick')

  for (const k of Object.keys(obj)) {
    if (!keys.has(k)) delete obj[k]
  }

  return obj
}

export default mPick
