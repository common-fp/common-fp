import { describe, expect, test } from 'tstyche'
import mAppendOne from '#src/mutable/array/m-append-one'

describe('mutable/array/m-append-one', () => {
  const mAppend3 = mAppendOne(3)

  test('happy path', () => {
    expect(mAppend3).type.toBe<<A extends number[]>(anArray: A) => A>()

    const res = mAppend3([1, 2])
    expect(res).type.toBe<number[]>()
  })

  test('mismatched type error', () => {
    // @ts-expect-error Type 'string' is not assignable to type 'number'
    mAppend3(['3'])

    // instead we need to append a value with the same type as the array
    const mAppend3StrNum = mAppendOne(3 as string | number)
    expect(mAppend3StrNum(['1', 2])).type.not.toRaiseError()
  })
})
