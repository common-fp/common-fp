import {
  assertArgIsOneOfType,
  commonTypes as ct,
  ensureSet,
  getFn,
} from '@common-fp/shared-internals'

const discard = values => {
  assertArgIsOneOfType(values, 'values', ct.valueCollection, 'discard')
  const setOfVals = ensureSet(values)

  return collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'discard')
    return fn(collection, setOfVals)
  }
}

const typeToFn = {
  array: discard_array,
  map: discard_map,
  object: discard_object,
  set: discard_set,
}

function discard_array(arr, vals) {
  return arr.filter(v => !vals.has(v))
}

function discard_map(aMap, vals) {
  const result = new Map()

  for (const [k, v] of aMap) {
    if (!vals.has(v)) result.set(k, v)
  }

  return result
}

function discard_object(obj, vals) {
  const result = {}

  for (const [k, v] of Object.entries(obj)) {
    if (!vals.has(v)) result[k] = v
  }

  return result
}

function discard_set(aSet, vals) {
  const result = new Set()

  for (const v of aSet) {
    if (!vals.has(v)) result.add(v)
  }

  return result
}

export default discard
