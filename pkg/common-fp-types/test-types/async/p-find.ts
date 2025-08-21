import { describe, expect, test } from 'tstyche'
import type { Collection, CollectionValue } from '@common-fp/shared-types'
import pFind from '#src/async/p-find'

describe('async/p-find', () => {
  describe('return function type', () => {
    test('no params', () => {
      const pFirst = pFind(async () => true)
      expect(pFirst).type.toBe<
        <C2 extends Collection>(
          collection: C2
        ) => Promise<CollectionValue<C2> | undefined>
      >()
    })

    test('only predicate value', () => {
      const findGt1 = pFind(async (n: number) => n > 1)
      expect(findGt1).type.toBe<
        <C2 extends Collection<number>>(
          collection: C2
        ) => Promise<CollectionValue<C2> | undefined>
      >()
    })

    test('predicate value and number key', () => {
      const findGt1 = pFind(async (n: number, _k: number) => n > 1)
      expect(findGt1).type.toBe<
        <C2 extends Collection<number, number>>(
          collection: C2
        ) => Promise<CollectionValue<C2> | undefined>
      >()
    })

    test('predicate value and string key', () => {
      const findGt1 = pFind(async (n: number, _k: string) => n > 1)
      expect(findGt1).type.toBe<
        <C2 extends Collection<number, string>>(
          collection: C2
        ) => Promise<CollectionValue<C2> | undefined>
      >()
    })

    test('predicate all args', () => {
      const findGt1 = pFind(
        async (n: number, _k: string, _coll: Map<string, number>) => n > 1
      )
      expect(findGt1).type.toBe<
        <C2 extends Map<string, number>>(
          collection: C2
        ) => Promise<CollectionValue<C2> | undefined>
      >()
    })

    test('invalid args', () => {
      pFind(
        // @ts-expect-error Type 'Record<string, number> | ReadonlyMap<string, number>' is not assignable to type 'Map<number, string>'
        async (n: number, _k: string, _coll: Map<number, string>) => n > 1
      )
    })
  })
})
