import { describe, expect, test } from 'tstyche'
import type { Collection, WithValueType } from '@common-fp/shared-types'
import pMapValues from '#src/async/p-map-values'

describe('async/p-map-values', () => {
  describe('return function type', () => {
    test('no params', () => {
      const pFillUp = pMapValues(async () => 'up' as const)
      expect(pFillUp).type.toBe<
        <C2 extends Collection>(
          collection: C2
        ) => Promise<WithValueType<C2, 'up'>>
      >()
    })

    test('mapper value and number key', () => {
      const numToStr = pMapValues(async (n: number, _k: number) => `${n}`)
      expect(numToStr).type.toBe<
        <C2 extends Collection<number, number>>(
          collection: C2
        ) => Promise<WithValueType<C2, string>>
      >()
    })

    test('mapper value and string key', () => {
      const numToStr = pMapValues(async (n: number, _k: string) => `${n}`)
      expect(numToStr).type.toBe<
        <C2 extends Collection<number, string>>(
          collection: C2
        ) => Promise<WithValueType<C2, string>>
      >()
    })

    test('mapper all args', () => {
      const numToStr = pMapValues(
        async (n: number, _k: string, _coll: Map<string, number>) => `${n}`
      )
      expect(numToStr).type.toBe<
        <C2 extends Map<string, number>>(
          collection: C2
        ) => Promise<WithValueType<C2, string>>
      >()
    })

    test('invalid args', () => {
      pMapValues(
        // @ts-expect-error Type 'Record<string, number> | ReadonlyMap<string, number>' is not assignable to type 'Map<number, string>'
        async (n: number, _k: string, _coll: Map<number, string>) => `${n}`
      )
    })
  })

  describe('result type', () => {
    const numToStr = pMapValues(async (n: number) => `${n}`)

    test('array', () => {
      const res = numToStr([1, 2] as const)
      expect(res).type.toBe<Promise<string[]>>()
    })
    test('object', () => {
      const resObj = numToStr({ a: 1, b: 2 } as const)
      expect(resObj).type.toBe<Promise<{ a: string; b: string }>>()
    })
    test('map', () => {
      const resMap = numToStr(
        new Map([
          ['a', 1],
          ['b', 2],
        ] as const)
      )
      expect(resMap).type.toBe<Promise<Map<'a' | 'b', string>>>()
    })
    test('set', () => {
      const resSet = numToStr(new Set([1, 2] as const))
      expect(resSet).type.toBe<Promise<Set<string>>>()
    })
    test('no params', () => {
      const pFillUp = pMapValues(async () => 'up' as const)
      const res = pFillUp([1, 2] as const)
      expect(res).type.toBe<Promise<'up'[]>>()
    })
  })
})
