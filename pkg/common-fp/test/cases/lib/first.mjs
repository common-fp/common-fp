import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import first from '#lib/first'

suite('first', () => {
  test('returns expected result', () => {
    expect(first(['a', 'b'])).to.equal('a')
    expect(first('ab')).to.equal('a')
    expect(first('')).to.equal(undefined)
  })

  test('shared internals are called as expected', () => {
    const seq = ['a', 'b']
    first(seq)
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [seq, 'sequence', si.commonTypes.sequence, 'first'],
    ])
  })
})
