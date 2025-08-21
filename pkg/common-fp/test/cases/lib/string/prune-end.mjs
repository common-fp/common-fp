import { expect } from 'chai'
import { sharedInternals as si, validatePruneArg } from '#test/spies'
import pruneEnd from '#lib/string/prune-end'

suite('string/prune-end', () => {
  suite('returns the expected result', () => {
    test('prunes the character', () => {
      expect(pruneEnd('-')('--abc--')).to.equal('--abc')
      expect(pruneEnd('-')('|--abc--')).to.equal('|--abc')
      expect(pruneEnd('-')('--abc--|')).to.equal('--abc--|')
      expect(pruneEnd('-')('abc')).to.equal('abc')
    })

    test('prunes an array of characters', () => {
      expect(pruneEnd(['-', '='])('=-abc-=')).to.equal('=-abc')
      expect(pruneEnd(['-', '='])('|=-abc-=')).to.equal('|=-abc')
      expect(pruneEnd(['-', '='])('=-abc-=|')).to.equal('=-abc-=|')
      expect(pruneEnd(['-', '='])('abc')).to.equal('abc')
    })
  })

  test('shared internals are called as expected', () => {
    const pruneArg = '-'
    const aString = '--abc--'
    const pruneEndingDashes = pruneEnd(pruneArg)
    expect(validatePruneArg.argsPerCall).to.deep.equal([[pruneArg]])

    pruneEndingDashes(aString)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [aString, 'aString', 'string', 'prune'],
    ])
  })
})
