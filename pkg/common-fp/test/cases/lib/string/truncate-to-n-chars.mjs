import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import truncateToNChars from '#lib/string/truncate-to-n-chars'

suite('string/truncate-to-n-chars', () => {
  test('returns the expected result', () => {
    expect(truncateToNChars(10)('0123456789')).to.equal('0123456789')
    expect(truncateToNChars(10)('0123456789x')).to.equal('0123456...')

    // edge case
    expect(truncateToNChars(3)('abc')).to.equal('abc')
    expect(truncateToNChars(3)('abcd')).to.equal('...')
  })

  test('shared internals are called as expected', () => {
    const numChars = 10
    const aString = '0123456789'
    const truncateTo10 = truncateToNChars(numChars)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [numChars, 'n', 'truncateToNChars', { nonNegative: true }],
    ])

    truncateTo10(aString)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [aString, 'aString', 'string', 'truncateToNChars'],
    ])
    expect(si.truncateToNChars.argsPerCall).to.deep.equal([[numChars, aString]])
  })
})
