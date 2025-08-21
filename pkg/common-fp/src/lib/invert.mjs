import { getFn } from '@common-fp/shared-internals'

const invert = collection => {
  const fn = getFn(typeToFn, collection, 'collection', 'invert')
  return fn(collection)
}

const typeToFn = {
  map: invert_map,
  object: invert_obj,
}

function invert_map(coll) {
  const res = new Map()
  for (const [k, v] of coll.entries()) {
    res.set(v, k)
  }
  return res
}

function invert_obj(coll) {
  const res = {}

  for (const [k, v] of Object.entries(coll)) res[v] = k

  return res
}

export default invert
