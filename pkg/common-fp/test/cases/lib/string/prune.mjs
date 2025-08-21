import { expect } from 'chai'
import { sharedInternals as si, validatePruneArg } from '#test/spies'
import prune from '#lib/string/prune'

suite('string/prune', () => {
  suite('returns the expected result', () => {
    test('prunes the character', () => {
      expect(prune('-')('--abc--')).to.equal('abc')
      expect(prune('-')('|--abc--')).to.equal('|--abc')
      expect(prune('-')('--abc--|')).to.equal('abc--|')
      expect(prune('-')('abc')).to.equal('abc')
    })

    test('prunes an array of characters', () => {
      expect(prune(['-', '='])('=-abc-=')).to.equal('abc')
      expect(prune(['-', '='])('|=-abc-=')).to.equal('|=-abc')
      expect(prune(['-', '='])('=-abc-=|')).to.equal('abc-=|')
      expect(prune(['-', '='])('abc')).to.equal('abc')
    })
  })

  test('shared internals are called as expected', () => {
    const pruneArg = '-'
    const aString = '--abc--'
    const pruneDashes = prune(pruneArg)
    expect(validatePruneArg.argsPerCall).to.deep.equal([[pruneArg]])

    pruneDashes(aString)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [aString, 'aString', 'string', 'prune'],
    ])
  })
})
