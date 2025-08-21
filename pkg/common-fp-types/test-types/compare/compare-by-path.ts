import { describe, expect, test } from 'tstyche'
import type { UnknownRecord } from '@common-fp/shared-types'
import compareByPath from '#src/compare/compare-by-path'

describe('compare/compare-by-path', () => {
  test('general path', () => {
    const bAsc = compareByPath(
      ['a', 'b'] as string[],
      (l: number, r: number) => l - r
    )

    expect(bAsc).type.toBe<
      <O extends UnknownRecord>(left: O, right: O) => number
    >()

    const obj1 = { a: { b: 2, c: 3 } }
    const obj2 = { a: { b: 1 } }
    expect(bAsc(obj2, obj1)).type.not.toRaiseError()

    // general paths work against any object
    expect(bAsc({}, {})).type.not.toRaiseError()
  })

  test('tuple path', () => {
    const bAsc = compareByPath(['a', 'b'], (l: number, r: number) => l - r)

    expect(bAsc).type.toBe<
      <O extends { a: { b: number } }>(left: O, right: O) => number
    >()

    const obj1 = { a: { b: 2, c: 3 } }
    const obj2 = { a: { b: 1 } }
    expect(bAsc(obj2, obj1)).type.not.toRaiseError()

    // tuple paths are safe
    // @ts-expect-error '{}' is not assignable to parameter of type '{ a: { b: number; }; }
    bAsc(obj2, {})
  })
})
