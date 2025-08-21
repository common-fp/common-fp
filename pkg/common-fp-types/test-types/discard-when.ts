import { describe, expect, test } from 'tstyche'
import type { Collection, CollectionSubset } from '@common-fp/shared-types'
import discardWhen from '#src/discard-when'

describe('discard-when', () => {
  test('no params', () => {
    const empty = discardWhen(() => true)
    expect(empty).type.toBe<
      <C2 extends Collection>(collection: C2) => CollectionSubset<C2>
    >()
  })

  test('only predicate value', () => {
    const discardGt1 = discardWhen((n: number) => n > 1)
    expect(discardGt1).type.toBe<
      <C2 extends Collection<number>>(collection: C2) => CollectionSubset<C2>
    >()
  })

  test('predicate value and number key', () => {
    const discardGt1 = discardWhen((n: number, _k: number) => n > 1)
    expect(discardGt1).type.toBe<
      <C2 extends Collection<number, number>>(
        collection: C2
      ) => CollectionSubset<C2>
    >()
  })

  test('predicate value and string key', () => {
    const discardGt1 = discardWhen((n: number, _k: string) => n > 1)
    expect(discardGt1).type.toBe<
      <C2 extends Collection<number, string>>(
        collection: C2
      ) => CollectionSubset<C2>
    >()
  })

  test('predicate all args', () => {
    const discardGt1 = discardWhen(
      (n: number, _k: string, _coll: Map<string, number>) => n > 1
    )
    expect(discardGt1).type.toBe<
      <C2 extends Map<string, number>>(collection: C2) => CollectionSubset<C2>
    >()
  })

  test('invalid args', () => {
    discardWhen(
      // @ts-expect-error Type 'Record<string, number> | ReadonlyMap<string, number>' is not assignable to type 'ReadonlyMap<number, string>'
      (n: number, _k: string, _coll: ReadonlyMap<number, string>) => n > 1
    )
  })
})
