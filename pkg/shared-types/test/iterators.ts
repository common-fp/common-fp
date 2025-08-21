import { describe, expect, test } from 'tstyche'
import type * as T from '#src/iterators'

describe('if-types', () => {
  test('CollectionEntriesIterator', () => {
    expect<T.CollectionEntriesIterator<string[]>>().type.toBe<
      IterableIterator<[number, string]>
    >()
    expect<T.CollectionEntriesIterator<Map<number, string>>>().type.toBe<
      IterableIterator<[number, string]>
    >()
    expect<T.CollectionEntriesIterator<Set<number>>>().type.toBe<
      IterableIterator<[number, number]>
    >()
    expect<T.CollectionEntriesIterator<Record<number, string>>>().type.toBe<
      IterableIterator<[string, string]>
    >()
  })

  test('CollectionKeysIterator', () => {
    expect<T.CollectionKeysIterator<string[]>>().type.toBe<
      IterableIterator<number>
    >()
    expect<T.CollectionKeysIterator<Map<number, string>>>().type.toBe<
      IterableIterator<number>
    >()
    expect<T.CollectionKeysIterator<Set<number>>>().type.toBe<
      IterableIterator<number>
    >()
    expect<T.CollectionKeysIterator<Record<number, string>>>().type.toBe<
      IterableIterator<string>
    >()
  })
})
