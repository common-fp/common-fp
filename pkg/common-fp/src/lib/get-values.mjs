import { getFn } from '@common-fp/shared-internals'

const getValues = collection => {
  const fn = getFn(typeToFn, collection, 'collection', 'getValues')

  return fn(collection)
}

const typeToFn = {
  map: getValues_map,
  object: getValues_object,
}

function getValues_map(aMap) {
  return Array.from(aMap.values())
}

function getValues_object(obj) {
  return Object.values(obj)
}

export default getValues
