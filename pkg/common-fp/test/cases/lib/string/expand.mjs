import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import expand from '#lib/string/expand'

suite('string/expand', () => {
  test('returns the expected result', () => {
    expect(expand(2, '-')('abc')).to.deep.equal('abc')
    expect(expand(3, '-')('abc')).to.deep.equal('abc')
    expect(expand(4, '-')('abc')).to.deep.equal('abc-')
    expect(expand(5, '-')('abc')).to.deep.equal('-abc-')
  })

  test('shared internals are called as expected', () => {
    const length = 5
    const char = '-'
    const expandWithDashes = expand(length, char)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [length, 'length', 'expand', { nonNegative: true }],
    ])
    expect(si.assertArgIsChar.argsPerCall).to.deep.equal([
      [char, 'char', 'expand'],
    ])

    const str = 'abc'
    expandWithDashes(str)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [str, 'aString', 'string', 'expand'],
    ])
  })
})
