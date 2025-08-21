import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import last from '#lib/last'

suite('last', () => {
  const prop2 = { prop: 2 }
  const seq = [1, prop2]

  test('returns the expected result', () => {
    expect(last(seq)).to.equal(prop2)
    expect(last([])).to.equal(undefined)
  })

  test('shared internals are called as expected', () => {
    last(seq)
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [seq, 'sequence', si.commonTypes.sequence, 'last'],
    ])
  })
})
