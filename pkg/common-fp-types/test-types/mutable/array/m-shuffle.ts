import { describe, expect, test } from 'tstyche'

import mShuffle from '#src/mutable/array/m-shuffle'

describe('mutable/array/m-shuffle', () => {
  test('array param', () => {
    const res = mShuffle(['a', 1])
    expect(res).type.toBe<Array<string | number>>()
  })

  /**
   * this is another false positive because we can't simply prevent tuple types.
   * This function returns the exact type given since the utility returns the
   * variable provided after mutating it - and variable types cannot change.
   */
  test('tuple param', () => {
    const res = mShuffle(['a', 1] as ['a', 1])
    expect(res).type.toBe<['a', 1]>()
  })
})
