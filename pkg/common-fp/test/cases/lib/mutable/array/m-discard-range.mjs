import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mDiscardRange from '#lib/mutable/array/m-discard-range'

suite('mutable/array/m-discard-range', () => {
  test('returns the expected result', () => {
    let arr = [1, 2, 3, 4]
    const startIdx = 1
    const endIdx = 2
    let result = mDiscardRange({ startIdx, endIdx })(arr)
    expect(result).to.deep.equal([1, 4])
    expect(result).to.equal(arr)

    arr = [1, 2, 3, 4]
    result = mDiscardRange({ startIdx: 0, endIdx: 5 })(arr)
    expect(result).to.deep.equal([])
    expect(result).to.equal(arr)
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3, 4]
    const startIdx = 1
    const endIdx = 2
    const discard1And2 = mDiscardRange({ startIdx, endIdx })
    expect(si.validateRange.argsPerCall).to.deep.equal([
      [startIdx, endIdx, 'mDiscardRange'],
    ])

    discard1And2(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'mDiscardRange'],
    ])
  })
})
