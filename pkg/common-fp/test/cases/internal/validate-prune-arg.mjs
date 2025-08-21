import { expect } from 'chai'
import si from '#test/spies/shared-internals'
import validatePruneArg from '#internal/validate-prune-arg'

suite('internal/validate-prune-arg', () => {
  test('calls assertArgIsOneOfType', () => {
    validatePruneArg('-')
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      ['-', 'pruneArg', si.commonTypes.sequence, 'prune'],
    ])
  })
  test('error when a non-character string is passed', () => {
    const errMsgBase =
      'when passing a string to prune it must be a single character'
    const errMsg1 = errMsgBase + '\nan empty string was passed instead'
    expect(() => validatePruneArg('')).to.throw(errMsg1)

    const errMsg2 =
      errMsgBase +
      '\nif you want to prune all characters in the string, pass an array of chars instead'
    expect(() => validatePruneArg('ab')).to.throw(errMsg2)
  })

  test('error when a non-character string is in the array', () => {
    let errMsg =
      'when passing an array to prune it must contain all strings of a single character'
    errMsg += `\n  string found with length 2`
    expect(() => validatePruneArg(['ab'])).to.throw(errMsg)
  })

  test('error when a non-string is in the array', () => {
    let errMsg =
      'when passing an array to prune it must contain all strings of a single character'
    errMsg += `\n  element found with type number`
    expect(() => validatePruneArg([1])).to.throw(errMsg)
  })
})
