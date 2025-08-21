import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import keepRange from '#lib/keep-range'

suite('keep-range', () => {
  const arr = [1, 2, 3, 4]
  test('returns the expected result', () => {
    expect(keepRange({ startIdx: 1, endIdx: 2 })(arr)).to.deep.equal([2, 3])
    expect(keepRange({ startIdx: 0, endIdx: 5 })(arr)).to.deep.equal([
      1, 2, 3, 4,
    ])
  })

  test('shared internals are called as expected', () => {
    const startIdx = 1
    const endIdx = 2
    const range = { startIdx, endIdx }
    const keep1And2 = keepRange(range)
    expect(si.validateRange.argsPerCall).to.deep.equal([
      [startIdx, endIdx, 'keepRange'],
    ])

    keep1And2(arr)
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [arr, 'sequence', si.commonTypes.sequence, 'keepRange'],
    ])
  })
})
