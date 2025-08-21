import { getFn } from '@common-fp/shared-internals'

const pResolveValues = async collection => {
  const typeFn = getFn(typeToFn, collection, 'collection', 'pResolveValues')
  return typeFn(collection)
}

const typeToFn = {
  array: pResolveValues_array,
  map: pResolveValues_map,
  object: pResolveValues_object,
  set: pResolveValues_set,
}

function pResolveValues_array(arr) {
  return Promise.all(arr)
}

async function pResolveValues_set(arr) {
  return new Set(await Promise.all(arr))
}

async function pResolveValues_map(aMap) {
  const keys = Array.from(aMap.keys())
  const values = await Promise.all(aMap.values())
  const result = new Map()

  for (let i = 0; i < values.length; i += 1) result.set(keys[i], values[i])

  return result
}

async function pResolveValues_object(obj) {
  const keys = Object.keys(obj)
  const values = await Promise.all(Object.values(obj))
  const result = {}

  for (let i = 0; i < values.length; i += 1) result[keys[i]] = values[i]

  return result
}

export default pResolveValues
