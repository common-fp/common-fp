import { getFnByType, getType } from '@common-fp/shared-internals'

const findKeyWithVal = value => {
  const valType = getType(value)

  return collection => {
    const colType = getType(collection)
    const fn = getFnByType(typeToFn, colType, 'collection', 'findKeyWithVal')

    if (colType === 'string' && valType !== 'string') {
      throw new Error(
        'When calling findKeyWithVal with a collection of type string, value must also be a string' +
          `\n  value type: ${valType}`
      )
    }

    return fn(collection, value)
  }
}

const typeToFn = {
  array: findKeyWithVal_indexOf,
  map: findKeyWithVal_map,
  object: findKeyWithVal_object,
  string: findKeyWithVal_indexOf,
}

function findKeyWithVal_indexOf(sequence, value) {
  const idx = sequence.indexOf(value)
  return idx === -1 ? undefined : idx
}

function findKeyWithVal_map(aMap, value) {
  for (const [key, val] of aMap.entries()) {
    if (val === value) return key
  }
}

function findKeyWithVal_object(obj, value) {
  for (const [key, val] of Object.entries(obj)) {
    if (val === value) return key
  }
}

export default findKeyWithVal
