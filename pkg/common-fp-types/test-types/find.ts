import { describe, expect, test } from 'tstyche'
import type { Collection, CollectionValue } from '@common-fp/shared-types'
import find from '#src/find'

describe('find', () => {
  test('no params', () => {
    const findFirstVal = find(() => true)
    expect(findFirstVal).type.toBe<
      <C2 extends Collection>(collection: C2) => CollectionValue<C2> | undefined
    >()
  })

  test('only predicate value', () => {
    const findGt1 = find((n: number) => n > 1)
    expect(findGt1).type.toBe<
      <C2 extends Collection<number>>(
        collection: C2
      ) => CollectionValue<C2> | undefined
    >()
  })

  test('predicate value and number key', () => {
    const findGt1 = find((n: number, _k: number) => n > 1)
    expect(findGt1).type.toBe<
      <C2 extends Collection<number, number>>(
        collection: C2
      ) => CollectionValue<C2> | undefined
    >()
  })

  test('predicate value and string key', () => {
    const findGt1 = find((n: number, _k: string) => n > 1)
    expect(findGt1).type.toBe<
      <C2 extends Collection<number, string>>(
        collection: C2
      ) => CollectionValue<C2> | undefined
    >()
  })

  test('predicate all args', () => {
    const findGt1 = find(
      (n: number, _k: string, _coll: Map<string, number>) => n > 1
    )
    expect(findGt1).type.toBe<
      <C2 extends Map<string, number>>(
        collection: C2
      ) => CollectionValue<C2> | undefined
    >()
  })

  test('invalid args', () => {
    // @ts-expect-error Type 'Record<string, number> | ReadonlyMap<string, number>' is not assignable to type 'ReadonlyMap<number, string>'
    find((n: number, _k: string, _coll: ReadonlyMap<number, string>) => n > 1)
  })
})
