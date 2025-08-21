import { assertArgIsType } from '@common-fp/shared-internals'
import validatePruneArg from '#internal/validate-prune-arg'

const pruneEnd = pruneArg => {
  validatePruneArg(pruneArg)
  const charsToPrune = new Set(pruneArg)

  return aString => {
    assertArgIsType(aString, 'aString', 'string', 'prune')

    let endIdx = aString.length - 1
    while (charsToPrune.has(aString[endIdx])) endIdx -= 1

    return aString.slice(0, endIdx + 1)
  }
}

export default pruneEnd
