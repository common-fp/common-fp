import { getFn } from '@common-fp/shared-internals'

const isLaden = collection => {
  const fn = getFn(typeToFn, collection, 'collection', 'isLaden')
  return fn(collection)
}

const typeToFn = {
  array: isLaden_hasLength,
  map: isLaden_hasSize,
  object: isLaden_object,
  set: isLaden_hasSize,
  string: isLaden_hasLength,
}

function isLaden_hasSize(coll) {
  return coll.size !== 0
}

function isLaden_hasLength(coll) {
  return coll.length !== 0
}

function isLaden_object(coll) {
  return Object.keys(coll).length !== 0
}

export default isLaden
