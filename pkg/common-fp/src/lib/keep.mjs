import {
  assertArgIsOneOfType,
  commonTypes as ct,
  ensureSet,
  getFn,
} from '@common-fp/shared-internals'

const keep = values => {
  assertArgIsOneOfType(values, 'values', ct.valueCollection, 'keep')
  const setOfValues = ensureSet(values)

  return collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'keep')
    return fn(collection, setOfValues)
  }
}

const typeToFn = {
  array: keep_array,
  map: keep_map,
  object: keep_object,
  set: keep_set,
}

function keep_array(arr, values) {
  const result = []

  for (const el of arr) {
    if (values.has(el)) result.push(el)
  }

  return result
}

function keep_map(aMap, values) {
  const result = new Map()

  for (const [key, val] of aMap) {
    if (values.has(val)) result.set(key, val)
  }

  return result
}

function keep_object(obj, values) {
  const result = {}

  for (const [key, val] of Object.entries(obj)) {
    if (values.has(val)) result[key] = val
  }

  return result
}

function keep_set(aSet, values) {
  const result = new Set()

  for (const el of aSet) {
    if (values.has(el)) result.add(el)
  }

  return result
}

export default keep
