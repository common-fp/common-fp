import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import append from '#lib/string/append'

suite('string/append', () => {
  test('returns the expected result', () => {
    expect(append('b')('a')).to.equal('ab')
  })

  test('shared internals are called as expected', () => {
    const end = 'b'
    const base = 'a'
    append(end)(base)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [end, 'end', 'string', 'append'],
      [base, 'base', 'string', 'append'],
    ])
  })
})
