import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import prepend from '#lib/string/prepend'

suite('string/prepend', () => {
  test('returns the expected result', () => {
    expect(prepend('a')('b')).to.equal('ab')
  })

  test('shared internals are called as expected', () => {
    const start = 'a'
    const base = 'b'
    prepend(start)(base)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [start, 'start', 'string', 'append'],
      [base, 'base', 'string', 'append'],
    ])
  })
})
