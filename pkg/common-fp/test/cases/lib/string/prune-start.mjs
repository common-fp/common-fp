import { expect } from 'chai'
import { sharedInternals as si, validatePruneArg } from '#test/spies'
import pruneStart from '#lib/string/prune-start'

suite('string/prune-start', () => {
  suite('returns the expected result', () => {
    test('prunes the character', () => {
      expect(pruneStart('-')('--abc--')).to.equal('abc--')
      expect(pruneStart('-')('|--abc--')).to.equal('|--abc--')
      expect(pruneStart('-')('--abc--|')).to.equal('abc--|')
      expect(pruneStart('-')('abc')).to.equal('abc')
    })

    test('prunes an array of characters', () => {
      expect(pruneStart(['-', '='])('=-abc-=')).to.equal('abc-=')
      expect(pruneStart(['-', '='])('|=-abc-=')).to.equal('|=-abc-=')
      expect(pruneStart(['-', '='])('=-abc-=|')).to.equal('abc-=|')
      expect(pruneStart(['-', '='])('abc')).to.equal('abc')
    })
  })

  test('shared internals are called as expected', () => {
    const pruneArg = '-'
    const aString = '--abc--'
    const pruneInitialDashes = pruneStart(pruneArg)
    expect(validatePruneArg.argsPerCall).to.deep.equal([[pruneArg]])

    pruneInitialDashes(aString)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [aString, 'aString', 'string', 'prune'],
    ])
  })
})
