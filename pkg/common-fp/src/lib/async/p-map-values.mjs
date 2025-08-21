import { assertArgIsType, getFn } from '@common-fp/shared-internals'

const pMapValues = mapperFn => {
  assertArgIsType(mapperFn, 'mapperFn', 'function', 'pMapValues')

  return async collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'pMapValues')
    return fn(collection, mapperFn)
  }
}

const typeToFn = {
  array: pMapValues_array,
  map: pMapValues_map,
  object: pMapValues_object,
  set: pMapValues_set,
}

async function pMapValues_array(arr, mapperFn) {
  return Promise.all(arr.map((el, i) => mapperFn(el, i, arr)))
}

async function pMapValues_map(aMap, mapperFn) {
  const result = new Map()
  await Promise.all(
    [...aMap].map(async ([key, val]) => {
      result.set(key, await mapperFn(val, key, aMap))
    })
  )

  return result
}

async function pMapValues_object(obj, mapperFn) {
  const result = {}
  await Promise.all(
    [...Object.entries(obj)].map(async ([key, val]) => {
      result[key] = await mapperFn(val, key, obj)
    })
  )

  return result
}

async function pMapValues_set(aSet, mapperFn) {
  const result = new Set()
  await Promise.all(
    [...aSet.entries()].map(async ([key, val]) => {
      result.add(await mapperFn(val, key, aSet))
    })
  )

  return result
}

export default pMapValues
