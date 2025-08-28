import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import truncateToNLines from '#lib/string/truncate-to-n-lines'

suite('string/truncate-to-n-lines', () => {
  test('returns the expected result', () => {
    expect(truncateToNLines(0)('abc')).to.equal('')
    expect(truncateToNLines(1)('abc')).to.equal('abc')
    expect(truncateToNLines(1)('abc\ndef')).to.equal('abc...')
    expect(truncateToNLines(1)('abc\r\ndef')).to.equal('abc...')
    expect(truncateToNLines(2)('abc\ndef')).to.equal('abc\ndef')
    expect(truncateToNLines(2)('abc\ndef\nghi')).to.equal('abc\ndef\n...')
  })

  test('shared internals are called as expected', () => {
    const numLines = 1
    const aString = 'abc'
    truncateToNLines(numLines)(aString)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [numLines, 'numLines', 'truncateToNLines', { nonNegative: true }],
    ])
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [aString, 'aString', 'string', 'truncateToNLines'],
    ])
  })
})
