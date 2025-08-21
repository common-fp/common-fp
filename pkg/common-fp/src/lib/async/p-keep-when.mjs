import { assertArgIsType, getFn } from '@common-fp/shared-internals'

const pKeepWhen = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'pKeepWhen')

  return async collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'pKeepWhen')
    return fn(collection, predicate)
  }
}

const typeToFn = {
  array: pKeepWhen_array,
  map: pKeepWhen_map,
  object: pKeepWhen_object,
  set: pKeepWhen_set,
}

async function pKeepWhen_array(arr, predicate) {
  const shouldKeepArr = await Promise.all(
    arr.map((el, i) => predicate(el, i, arr))
  )

  return arr.filter((_el, i) => shouldKeepArr[i])
}

async function pKeepWhen_map(aMap, predicate) {
  const result = new Map()
  await Promise.all(
    [...aMap].map(async ([key, val]) => {
      const shouldKeep = await predicate(val, key, aMap)
      if (shouldKeep) result.set(key, val)
    })
  )

  return result
}

async function pKeepWhen_object(obj, predicate) {
  const result = {}
  await Promise.all(
    [...Object.entries(obj)].map(async ([key, val]) => {
      const shouldKeep = await predicate(val, key, obj)
      if (shouldKeep) result[key] = val
    })
  )

  return result
}

async function pKeepWhen_set(aSet, predicate) {
  const result = new Set()
  await Promise.all(
    [...aSet].map(async val => {
      const shouldKeep = await predicate(val, val, aSet)
      if (shouldKeep) result.add(val)
    })
  )

  return result
}

export default pKeepWhen
