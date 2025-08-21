import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import fillRangeWith from '#lib/array/fill-range-with'

suite('array/fill-range-with', () => {
  const arr = [1, 2, 3, 4]
  const startIdx = 1
  const endIdx = 2

  test('returns expected result', () => {
    expect(fillRangeWith(0, { startIdx, endIdx })(arr)).to.deep.equal([
      1, 0, 0, 4,
    ])
  })

  test('shared internals are called as expected', () => {
    fillRangeWith(0, { startIdx, endIdx })(arr)
    expect(si.validateRange.argsPerCall).to.deep.equal([
      [startIdx, endIdx, 'fillRangeWith'],
    ])
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'fillRangeWith'],
    ])
  })
})
