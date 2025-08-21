import { describe, expect, test } from 'tstyche'
import type { CollectionValue, UnknownArray } from '@common-fp/shared-types'
import findLast from '#src/array/find-last'

describe('array/find-last', () => {
  test('no params', () => {
    const last = findLast(() => true)
    expect(last).type.toBe<
      <const A2 extends UnknownArray>(
        anArray: A2
      ) => CollectionValue<A2> | undefined
    >()

    const res = last(['a', 'b'])
    expect(res).type.toBe<'a' | 'b' | undefined>()
  })

  test('value param', () => {
    const findLastA = findLast((s: string) => s === 'a')
    expect(findLastA).type.toBe<
      <const A2 extends ReadonlyArray<string>>(
        anArray: A2
      ) => CollectionValue<A2> | undefined
    >()
  })

  test('array param', () => {
    const findLastA = findLast(
      (s: string, _idx: number, _anArray: string[]) => s === 'a'
    )
    expect(findLastA).type.toBe<
      <const A2 extends string[]>(
        anArray: A2
      ) => CollectionValue<A2> | undefined
    >()
  })

  test('tuple param', () => {
    const findLastA = findLast(
      (s: string, _idx: number, _anArray: [string, string]) => s === 'a'
    )
    expect(findLastA).type.toBe<
      <const A2 extends [string, string]>(
        anArray: A2
      ) => CollectionValue<A2> | undefined
    >()

    const resInferred = findLastA(['a', 'b'])
    // @tstyche if { target: [">=5.3"] }
    expect(resInferred).type.toBe<'a' | 'b' | undefined>()

    const resExplicit = findLastA(['a', 'b'] as ['a', 'b'])
    // @tstyche if { target: ["<5.3"] }
    expect(resExplicit).type.toBe<'a' | 'b' | undefined>()
  })
})
