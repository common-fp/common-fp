import { describe, expect, test } from 'tstyche'
import type { Collection } from '@common-fp/shared-types'
import pForEach from '#src/async/p-for-each'

describe('async/p-each', () => {
  describe('return function type', () => {
    test('no params', () => {
      const pForEachNoop = pForEach(async () => {})
      expect(pForEachNoop).type.toBe<
        <C2 extends Collection>(collection: C2) => Promise<C2>
      >()
    })

    test('only predicate value', () => {
      const discardGt1 = pForEach(async (_n: number) => {})
      expect(discardGt1).type.toBe<
        <C2 extends Collection<number>>(collection: C2) => Promise<C2>
      >()
    })

    test('predicate value and number key', () => {
      const discardGt1 = pForEach(async (_n: number, _k: number) => {})
      expect(discardGt1).type.toBe<
        <C2 extends Collection<number, number>>(collection: C2) => Promise<C2>
      >()
    })

    test('predicate value and string key', () => {
      const discardGt1 = pForEach(async (_n: number, _k: string) => {})
      expect(discardGt1).type.toBe<
        <C2 extends Collection<number, string>>(collection: C2) => Promise<C2>
      >()
    })

    test('predicate all args', () => {
      const discardGt1 = pForEach(
        async (_n: number, _k: string, _coll: Map<string, number>) => {}
      )
      expect(discardGt1).type.toBe<
        <C2 extends Map<string, number>>(collection: C2) => Promise<C2>
      >()
    })

    test('invalid args', () => {
      pForEach(
        // @ts-expect-error Type 'Record<string, number> | ReadonlyMap<string, number>' is not assignable to type 'Map<number, string>'
        async (_n: number, _k: string, _coll: Map<number, string>) => {}
      )
    })
  })
})
