import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import expandEnd from '#lib/string/expand-end'

suite('string/expand-end', () => {
  test('returns the expected result', () => {
    expect(expandEnd(2, '-')('abc')).to.deep.equal('abc')
    expect(expandEnd(3, '-')('abc')).to.deep.equal('abc')
    expect(expandEnd(4, '-')('abc')).to.deep.equal('abc-')
  })

  test('shared internals are called as expected', () => {
    const length = 5
    const char = '-'
    const expandEndWithDashes = expandEnd(length, char)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [length, 'length', 'expandEnd', { nonNegative: true }],
    ])
    expect(si.assertArgIsChar.argsPerCall).to.deep.equal([
      [char, 'char', 'expandEnd'],
    ])

    const str = 'abc'
    expandEndWithDashes(str)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [str, 'aString', 'string', 'expandEnd'],
    ])
  })
})
