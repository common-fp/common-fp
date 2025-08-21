import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import endsWith from '#lib/string/ends-with'

suite('string/ends-with', () => {
  test('returns the expected result', () => {
    expect(endsWith('bc')('abc')).to.be.true
    expect(endsWith('d')('abc')).to.be.false
  })

  test('shared internals are called as expected', () => {
    const suffix = 'bc'
    const aString = 'abc'
    endsWith(suffix)(aString)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [suffix, 'suffix', 'string', 'endsWith'],
      [aString, 'aString', 'string', 'endsWith'],
    ])
  })
})
