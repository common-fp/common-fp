import { describe, expect, test } from 'tstyche'
import type { Collection } from '@common-fp/shared-types'
import pAll from '#src/async/p-all'

describe('async/p-all', () => {
  describe('return function type', () => {
    test('no params', () => {
      const pFalse = pAll(async () => true)
      expect(pFalse).type.toBe<
        <C extends Collection>(collection: C) => Promise<boolean>
      >()
    })

    test('only predicate value', () => {
      const allGt1 = pAll(async (n: number) => n > 1)
      expect(allGt1).type.toBe<
        <C extends Collection<number>>(collection: C) => Promise<boolean>
      >()
    })

    test('predicate value and number key', () => {
      const allGt1 = pAll(async (n: number, _k: number) => n > 1)
      expect(allGt1).type.toBe<
        <C extends Collection<number, number>>(
          collection: C
        ) => Promise<boolean>
      >()
    })

    test('predicate value and string key', () => {
      const allGt1 = pAll(async (n: number, _k: string) => n > 1)
      expect(allGt1).type.toBe<
        <C extends Collection<number, string>>(
          collection: C
        ) => Promise<boolean>
      >()
    })

    test('predicate all args', () => {
      const allGt1 = pAll(
        async (n: number, _k: string, _coll: Map<string, number>) => n > 1
      )
      expect(allGt1).type.toBe<
        <C extends Map<string, number>>(collection: C) => Promise<boolean>
      >()
    })

    test('invalid args', () => {
      // @ts-expect-error Type 'Record<string, number> | ReadonlyMap<string, number>' is not assignable to type 'Map<number, string>'
      pAll(async (n: number, _k: string, _coll: Map<number, string>) => n > 1)
    })
  })
})
