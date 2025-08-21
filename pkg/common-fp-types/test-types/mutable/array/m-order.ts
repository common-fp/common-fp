import { describe, expect, test } from 'tstyche'

import mOrder from '#src/mutable/array/m-order'

describe('mutable/array/m-order', () => {
  const asc = (left: number, right: number) => left - right
  const mOrderAsc = mOrder(asc)

  test('array param', () => {
    expect(mOrderAsc).type.toBe<<A extends number[]>(anArray: A) => A>()

    const res = mOrderAsc([3, 1, 2])
    expect(res).type.toBe<number[]>()
  })

  /**
   * this is another false positive because we can't simply prevent tuple types.
   * This function returns the exact type given since the utility returns the
   * variable provided after mutating it - and variable types cannot change.
   */
  test('tuple param', () => {
    const res = mOrderAsc([3, 1, 2] as [3, 1, 2])
    expect(res).type.toBe<[3, 1, 2]>()
  })
})
