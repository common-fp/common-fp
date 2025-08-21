/**
 * returns values which appear in all sets
 * e.g. getCommonValues([[1, 2, 3], [2, 3, 4]]) returns [2, 3]
 */

import {
  assertArgIsArrayOfAcceptedTypes,
  commonTypes as ct,
  ensureSet,
} from '@common-fp/shared-internals'

const getCommonValues = anArray => {
  assertArgIsArrayOfAcceptedTypes(
    anArray,
    'anArray',
    ct.valueCollection,
    'getCommonValues'
  )

  const arrOfSets = anArray.map(ensureSet)
  const result = new Set(arrOfSets.shift())
  let nextSet = arrOfSets.shift()
  while (nextSet && result.size) {
    for (const el of result) {
      if (!nextSet.has(el)) result.delete(el)
    }
    nextSet = arrOfSets.shift()
  }

  return [...result]
}

export default getCommonValues
