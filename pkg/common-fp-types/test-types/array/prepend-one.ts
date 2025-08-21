import { describe, expect, test } from 'tstyche'
import type { UnknownArray } from '@common-fp/shared-types'
import prependOne from '#src/array/prepend-one'

describe('array/prepend-one', () => {
  test('returned function', () => {
    const prepend1 = prependOne(1)
    expect(prepend1).type.toBe<
      <const A extends UnknownArray>(anArray: A) => [1, ...A]
    >()
  })
  test('general', () => {
    const res = prependOne(1 as number)([2, 3] as number[])
    expect(res).type.toBe<[number, ...number[]]>()
  })
  test('literals', () => {
    const res = prependOne(1)([2, 3])
    expect(res).type.toBe<[1, 2, 3]>()
  })
  test('mixed', () => {
    const res = prependOne(1)([2, 3] as number[])
    expect(res).type.toBe<[1, ...number[]]>()
  })
})
