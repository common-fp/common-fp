import { assertArgIsType } from '@common-fp/shared-internals'
import validatePruneArg from '#internal/validate-prune-arg'

const prune = pruneArg => {
  validatePruneArg(pruneArg)
  const charsToPrune = new Set(pruneArg)

  return aString => {
    assertArgIsType(aString, 'aString', 'string', 'prune')

    let startIdx = 0
    while (charsToPrune.has(aString[startIdx])) startIdx += 1

    let endIdx = aString.length - 1
    while (charsToPrune.has(aString[endIdx])) endIdx -= 1

    return aString.slice(startIdx, endIdx + 1)
  }
}

export default prune
