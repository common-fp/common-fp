import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import expandStart from '#lib/string/expand-start'

suite('string/expand-start', () => {
  test('returns the expected result', () => {
    expect(expandStart(2, '-')('abc')).to.deep.equal('abc')
    expect(expandStart(3, '-')('abc')).to.deep.equal('abc')
    expect(expandStart(4, '-')('abc')).to.deep.equal('-abc')
  })

  test('shared internals are called as expected', () => {
    const length = 5
    const char = '-'
    const expandStartWithDashes = expandStart(length, char)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [length, 'length', 'expandStart', { nonNegative: true }],
    ])
    expect(si.assertArgIsChar.argsPerCall).to.deep.equal([
      [char, 'char', 'expandStart'],
    ])

    const str = 'abc'
    expandStartWithDashes(str)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [str, 'aString', 'string', 'expandStart'],
    ])
  })
})
