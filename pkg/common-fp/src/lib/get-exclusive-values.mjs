/**
 * returns values which appear exclusively in one set
 * e.g. getExclusiveValues([[1, 2], [2, 3], [3, 4]]) returns [1, 4]
 */

import {
  assertArgIsArrayOfAcceptedTypes,
  commonTypes as ct,
  ensureSet,
} from '@common-fp/shared-internals'

const getExclusiveValues = anArray => {
  assertArgIsArrayOfAcceptedTypes(
    anArray,
    'anArray',
    ct.valueCollection,
    'getExclusiveValues'
  )

  if (!anArray.length) return []

  const result = new Set()
  const arrOfSets = anArray.map(ensureSet)
  for (const set1 of arrOfSets) {
    for (const el of set1) {
      let elIsDifferent = true

      for (const set2 of arrOfSets) {
        if (set1 === set2) continue
        if (set2.has(el)) {
          elIsDifferent = false
          break
        }
      }

      if (elIsDifferent) result.add(el)
    }
  }

  return [...result]
}

export default getExclusiveValues
