import { describe, expect, test } from 'tstyche'
import type { UnknownArray } from '@common-fp/shared-types'
import prependAll from '#src/array/prepend-all'

describe('array/prepend-all', () => {
  test('returned function', () => {
    const prepend12 = prependAll([1, 2])
    expect(prepend12).type.toBe<
      <const A1 extends UnknownArray>(anArray: A1) => [1, 2, ...A1]
    >()
  })
  test('general arrays', () => {
    const res = prependAll([1, 2] as number[])([3, 4] as number[])
    expect(res).type.toBe<number[]>()
  })
  test('literal tuples', () => {
    const res = prependAll([1, 2])([3, 4])
    expect(res).type.toBe<[1, 2, 3, 4]>()
  })
  test('mixed', () => {
    const res = prependAll([1, 2])([3, 4] as number[])
    expect(res).type.toBe<[1, 2, ...number[]]>()
  })
})
