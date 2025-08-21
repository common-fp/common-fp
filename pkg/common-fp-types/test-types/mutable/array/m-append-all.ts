import { describe, expect, test } from 'tstyche'

import mAppendAll from '#src/mutable/array/m-append-all'

describe('mutable/array/m-append-all', () => {
  test('happy path', () => {
    const append34 = mAppendAll([3, 4])
    expect(append34).type.toBe<<A extends number[]>(anArray: A) => A>()

    const res = append34([1, 2])
    expect(res).type.toBe<number[]>()
  })

  // note: ts doesn't support super constraints - which would allow this test
  //   case to pass
  test('only accepts same type', () => {
    const append34 = mAppendAll([3, 4])
    // @ts-expect-error Type 'string' is not assignable to type 'number'
    append34(['a', 1, 2])

    // instead we need to append an array with the same value type
    const append34StrNum = mAppendAll([3, 4] as Array<string | number>)
    expect(append34StrNum(['a', 1, 2])).type.not.toRaiseError()
  })
})
