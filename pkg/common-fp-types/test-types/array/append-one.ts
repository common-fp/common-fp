import { describe, expect, test } from 'tstyche'
import type { UnknownArray } from '@common-fp/shared-types'
import appendOne from '#src/array/append-one'

describe('array/append-one', () => {
  test('returned function', () => {
    const append3 = appendOne(3)
    expect(append3).type.toBe<
      <const A extends UnknownArray>(anArray: A) => [...A, 3]
    >()
  })
  test('general', () => {
    const res = appendOne(3 as number)([1, 2] as number[])
    expect(res).type.toBe<[...number[], number]>()
  })
  test('literals', () => {
    const res = appendOne(3)([1, 2])
    expect(res).type.toBe<[1, 2, 3]>()
  })
  test('mixed', () => {
    const res = appendOne(3)([1, 2] as number[])
    expect(res).type.toBe<[...number[], 3]>()
  })
})
