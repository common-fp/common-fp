import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mKeepRange from '#lib/mutable/array/m-keep-range'

suite('mutable/array/m-keep-range', () => {
  test('returns the expected result', () => {
    let arr = [1, 2, 3, 4]
    let result = mKeepRange({ startIdx: 1, endIdx: 2 })(arr)
    expect(result).to.deep.equal([2, 3])
    expect(result).to.equal(arr)

    arr = [1, 2, 3, 4]
    result = mKeepRange({ startIdx: 0, endIdx: 5 })(arr)
    expect(result).to.deep.equal([1, 2, 3, 4])
    expect(result).to.equal(arr)
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3, 4]
    const keep1And2 = mKeepRange({ startIdx: 1, endIdx: 2 })
    expect(si.validateRange.argsPerCall).to.deep.equal([[1, 2, 'mKeepRange']])

    keep1And2(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'mKeepRange'],
    ])
  })
})
