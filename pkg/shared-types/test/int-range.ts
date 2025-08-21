import { describe, expect, test } from 'tstyche'
import type * as T from '#src/int-range'

describe('if-types', () => {
  test('IntRangeUnion', () => {
    expect<T.IntRangeUnion<1, 3>>().type.toBe<1 | 2 | 3>()
  })

  test('IntRangeTuple', () => {
    expect<T.IntRangeTuple<1, 3>>().type.toBe<[1, 2, 3]>()
  })
})
