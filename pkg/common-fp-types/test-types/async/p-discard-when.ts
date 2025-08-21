import { describe, expect, test } from 'tstyche'
import type { Collection, CollectionSubset } from '@common-fp/shared-types'
import pDiscardWhen from '#src/async/p-discard-when'

describe('async/p-discard-when', () => {
  describe('return function type', () => {
    test('no params', () => {
      const empty = pDiscardWhen(async () => true)
      expect(empty).type.toBe<
        <C2 extends Collection>(collection: C2) => Promise<CollectionSubset<C2>>
      >()
    })
    test('only predicate value', () => {
      const discardGt1 = pDiscardWhen(async (n: number) => n > 1)
      expect(discardGt1).type.toBe<
        <C2 extends Collection<number>>(
          collection: C2
        ) => Promise<CollectionSubset<C2>>
      >()
    })

    test('predicate value and number key', () => {
      const discardGt1 = pDiscardWhen(async (n: number, _k: number) => n > 1)
      expect(discardGt1).type.toBe<
        <C2 extends Collection<number, number>>(
          collection: C2
        ) => Promise<CollectionSubset<C2>>
      >()
    })

    test('predicate value and string key', () => {
      const discardGt1 = pDiscardWhen(async (n: number, _k: string) => n > 1)
      expect(discardGt1).type.toBe<
        <C2 extends Collection<number, string>>(
          collection: C2
        ) => Promise<CollectionSubset<C2>>
      >()
    })

    test('predicate all args', () => {
      const discardGt1 = pDiscardWhen(
        async (n: number, _k: string, _coll: Map<string, number>) => n > 1
      )
      expect(discardGt1).type.toBe<
        <C2 extends Map<string, number>>(
          collection: C2
        ) => Promise<CollectionSubset<C2>>
      >()
    })

    test('invalid args', () => {
      pDiscardWhen(
        // @ts-expect-error Type 'Record<string, number> | ReadonlyMap<string, number>' is not assignable to type 'Map<number, string>'
        async (n: number, _k: string, _coll: Map<number, string>) => n > 1
      )
    })
  })
})
