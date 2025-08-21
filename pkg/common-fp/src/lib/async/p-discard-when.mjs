import { assertArgIsType, getFn } from '@common-fp/shared-internals'

const pDiscardWhen = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'pDiscardWhen')

  return async collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'pDiscardWhen')
    return fn(collection, predicate)
  }
}

const typeToFn = {
  array: pDiscardWhen_array,
  map: pDiscardWhen_map,
  object: pDiscardWhen_object,
  set: pDiscardWhen_set,
}

async function pDiscardWhen_array(arr, predicate) {
  const shouldKeepArr = await Promise.all(
    arr.map(async (el, i) => !(await predicate(el, i, arr)))
  )

  return arr.filter((_el, i) => shouldKeepArr[i])
}

async function pDiscardWhen_map(aMap, predicate) {
  const result = new Map()
  await Promise.all(
    [...aMap].map(async ([key, val]) => {
      const shouldKeep = !(await predicate(val, key, aMap))
      if (shouldKeep) result.set(key, val)
    })
  )

  return result
}

async function pDiscardWhen_object(obj, predicate) {
  const result = {}
  await Promise.all(
    [...Object.entries(obj)].map(async ([key, val]) => {
      const shouldKeep = !(await predicate(val, key, obj))
      if (shouldKeep) result[key] = val
    })
  )

  return result
}

async function pDiscardWhen_set(aSet, predicate) {
  const result = new Set()
  await Promise.all(
    [...aSet].map(async val => {
      const shouldKeep = !(await predicate(val, val, aSet))
      if (shouldKeep) result.add(val)
    })
  )

  return result
}

export default pDiscardWhen
