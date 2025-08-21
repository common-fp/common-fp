import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mFillRangeWith from '#lib/mutable/array/m-fill-range-with'

suite('array/m-fill-range-with', () => {
  test('returns the expected result', () => {
    const arr = [1, 2, 3, 4]
    const startIdx = 1
    const endIdx = 2
    const result = mFillRangeWith(0, { startIdx, endIdx })(arr)
    expect(result).to.deep.equal([1, 0, 0, 4])
    expect(result).to.equal(arr)
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3, 4]
    const startIdx = 1
    const endIdx = 2
    const fill1And2 = mFillRangeWith(0, { startIdx, endIdx })
    expect(si.validateRange.argsPerCall).to.deep.equal([
      [startIdx, endIdx, 'mFillRangeWith'],
    ])

    fill1And2(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'mFillRangeWith'],
    ])
  })
})
