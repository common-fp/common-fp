import { describe, expect, test } from 'tstyche'
import { objToMap } from '@common-fp/test-utils'
import type { MutableEntryCollection } from '@common-fp/shared-types'

import mFillWith from '#src/mutable/m-fill-with'

describe('mutable/m-fill-with', () => {
  const zeroOut = mFillWith(0)

  test('return type', () => {
    expect(zeroOut).type.toBe<
      <C extends MutableEntryCollection<unknown, number>>(collection: C) => C
    >()
  })
  test('array', () => {
    const res = zeroOut([1, 2, 3])
    expect(res).type.toBe<number[]>()
  })
  test('object', () => {
    const res = zeroOut({ a: 1, b: 2, c: 3 })
    expect(res).type.toBe<{ a: number; b: number; c: number }>()
  })
  test('map', () => {
    const res = zeroOut(
      objToMap({ a: 1, b: 2, c: 3 } as Record<string, number>)
    )
    expect(res).type.toBe<Map<string, number>>()
  })

  /**
   * this is another false positive because we can't simply prevent tuple types.
   * This function returns the exact type given since the utility returns the
   * variable provided after mutating it - and variable types cannot change.
   */
  test('tuple', () => {
    const res = zeroOut([1, 2, 3] as [1, 2, 3])
    expect(res).type.toBe<[1, 2, 3]>()
  })

  test('doesnt allow subsets', () => {
    // @ts-expect-error Type 'string' is not assignable to type 'number'
    zeroOut(['1', 2, 3])

    // instead here we need to mFillRange with the array value type
    const zeroOutStrNum = mFillWith(0 as string | number)
    expect(zeroOutStrNum(['1', 2, 3])).type.not.toRaiseError()
  })
})
