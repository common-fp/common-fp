import { describe, expect, test } from 'tstyche'

import mFillRangeWith from '#src/mutable/array/m-fill-range-with'

describe('mutable/array/m-fill-range-with', () => {
  const zeroOutFirstTwo = mFillRangeWith(0, { startIdx: 0, endIdx: 1 })

  test('array param', () => {
    const res = zeroOutFirstTwo([1, 2, 3])
    expect(res).type.toBe<number[]>()
  })

  /**
   * this is another false positive because we can't simply prevent tuple types.
   * This function returns the exact type given since the utility returns the
   * variable provided after mutating it - and variable types cannot change.
   */
  test('tuple param', () => {
    const res = zeroOutFirstTwo([1, 2, 3] as [1, 2, 3])
    expect(res).type.toBe<[1, 2, 3]>()
  })

  test('doesnt allow subsets', () => {
    // @ts-expect-error Type 'string' is not assignable to type 'number'
    zeroOutFirstTwo(['1', 2, 3])

    // instead here we need to mFillRange with the array value type
    const zeroOutFirstTwoStrNum = mFillRangeWith(0 as string | number, {
      startIdx: 0,
      endIdx: 1,
    })
    expect(zeroOutFirstTwoStrNum(['1', 2, 3])).type.not.toRaiseError()
  })
})
