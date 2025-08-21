import { describe, expect, test } from 'tstyche'
import mDiscardRange from '#src/mutable/array/m-discard-range'

describe('mutable/array/m-discard-range', () => {
  const discardFirstTwo = mDiscardRange({ startIdx: 0, endIdx: 1 })

  test('array param', () => {
    const res = discardFirstTwo([1, 2, 3])
    expect(res).type.toBe<number[]>()
  })

  /**
   * this is another false positive because we can't simply prevent tuple types.
   * This function returns the exact type given since the utility returns the
   * variable provided after mutating it - and variable types cannot change.
   */
  test('tuple param', () => {
    const res = discardFirstTwo([1, 2, 3] as [1, 2, 3])
    expect(res).type.toBe<[1, 2, 3]>()
  })
})
