import { describe, expect, test } from 'tstyche'
import type { CollectionKey, EntryCollection } from '@common-fp/shared-types'
import findKey from '#src/find-key'

describe('find-key', () => {
  test('no params', () => {
    const findFirstKey = findKey(() => true)
    expect(findFirstKey).type.toBe<
      <C2 extends EntryCollection>(
        collection: C2
      ) => CollectionKey<C2> | undefined
    >()
  })

  test('only predicate value', () => {
    const findKeyWithValGt1 = findKey((n: number) => n > 1)
    expect(findKeyWithValGt1).type.toBe<
      <C2 extends EntryCollection<unknown, number>>(
        collection: C2
      ) => CollectionKey<C2> | undefined
    >()
  })

  test('predicate value and number key', () => {
    const findKeyWithValGt1 = findKey((n: number, _k: number) => n > 1)
    expect(findKeyWithValGt1).type.toBe<
      <C2 extends EntryCollection<number, number>>(
        collection: C2
      ) => CollectionKey<C2> | undefined
    >()
  })

  test('predicate value and string key', () => {
    const findKeyWithValGt1 = findKey((n: number, _k: string) => n > 1)
    expect(findKeyWithValGt1).type.toBe<
      <C2 extends EntryCollection<string, number>>(
        collection: C2
      ) => CollectionKey<C2> | undefined
    >()
  })

  test('predicate all args', () => {
    const findKeyWithValGt1 = findKey(
      (n: number, _k: string, _coll: Map<string, number>) => n > 1
    )
    expect(findKeyWithValGt1).type.toBe<
      <C2 extends Map<string, number>>(
        collection: C2
      ) => CollectionKey<C2> | undefined
    >()
  })

  test('invalid args', () => {
    /**
     * ideally we'd use the following error string
     * `Type 'Record<string, number> | ReadonlyMap<string, number>' is not
     * assignable to type 'ReadonlyMap<number, string>'`
     *
     * however typescript has some lovely behavior where it returns different
     * ordering between the Record<...> | ReadonlyMap<...>, and depending on
     * that ordering the error message differs substantially.  So here we'll
     * just check that the collection params are incompatible
     */
    findKey(
      // @ts-expect-error Types of parameters '_coll' and 'collection' are incompatible
      (n: number, _k: string, _coll: ReadonlyMap<number, string>) => n > 1
    )
  })
})
