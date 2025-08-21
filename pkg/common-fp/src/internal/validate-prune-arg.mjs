import {
  assertArgIsOneOfType,
  commonTypes as ct,
  getType,
} from '@common-fp/shared-internals'

const validatePruneArg = pruneArg => {
  assertArgIsOneOfType(pruneArg, 'pruneArg', ct.sequence, 'prune')

  if (typeof pruneArg === 'string') {
    if (pruneArg.length !== 1) {
      let msg = 'when passing a string to prune it must be a single character'
      msg +=
        pruneArg.length ?
          '\nif you want to prune all characters in the string, pass an array of chars instead'
        : '\nan empty string was passed instead'
      throw new Error(msg)
    }
  } else {
    // pruneArg is array
    let nonStringType
    let nonCharLength
    for (const el of pruneArg) {
      if (typeof el !== 'string') {
        nonStringType = getType(el)
        break
      }
      if (el.length !== 1) {
        nonCharLength = el.length
        break
      }
    }
    if (nonStringType || nonCharLength) {
      let msg =
        'when passing an array to prune it must contain all strings of a single character'
      msg +=
        nonStringType ?
          `\n  element found with type ${nonStringType}`
        : `\n  string found with length ${nonCharLength}`
      throw new Error(msg)
    }
  }
}

export default validatePruneArg
