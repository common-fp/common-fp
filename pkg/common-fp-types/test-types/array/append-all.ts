import { describe, expect, test } from 'tstyche'
import type { UnknownArray } from '@common-fp/shared-types'
import appendAll from '#src/array/append-all'

describe('array/append-all', () => {
  test('returned function', () => {
    const append34 = appendAll([3, 4])
    expect(append34).type.toBe<
      <const A1 extends UnknownArray>(anArray: A1) => [...A1, 3, 4]
    >()
  })
  test('general arrays', () => {
    const res = appendAll([3, 4] as number[])([1, 2] as number[])
    expect(res).type.toBe<number[]>()
  })
  test('literal tuples', () => {
    const res = appendAll([3, 4])([1, 2])
    expect(res).type.toBe<[1, 2, 3, 4]>()
  })
  test('mixed', () => {
    const res = appendAll([3, 4] as number[])([1, 2])
    expect(res).type.toBe<[1, 2, ...number[]]>()
  })
})
