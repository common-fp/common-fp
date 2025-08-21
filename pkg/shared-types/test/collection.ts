import { describe, expect, test } from 'tstyche'
import type * as C from '#src/collection'

describe('collection', () => {
  type ABObj = { a: 'A'; b: 'B' }

  describe('Collection', () => {
    test('default', () => {
      // resolves via case 1
      expect<C.Collection>().type.toBe<
        | readonly unknown[]
        | Record<PropertyKey, unknown>
        | ReadonlySet<unknown>
        | ReadonlyMap<unknown, unknown>
      >()
    })

    test('<any, any>', () => {
      // resolves via case 1
      // specifically testing any for users
      /* eslint-disable @typescript-eslint/no-explicit-any */
      expect<C.Collection<any, any>>().type.toBe<
        | readonly any[]
        | Record<PropertyKey, any>
        | ReadonlySet<any>
        | ReadonlyMap<any, any>
      >()
      /* eslint-enable @typescript-eslint/no-explicit-any */
    })

    test('<number, number>', () => {
      // resolves via case 2
      expect<C.Collection<number, number>>().type.toBe<
        | readonly number[]
        | Record<number, number>
        | ReadonlySet<number>
        | ReadonlyMap<number, number>
      >()
    })

    test('<string, string>', () => {
      // resolves via case 3
      expect<C.Collection<string, string>>().type.toBe<
        | Record<string, string>
        | ReadonlySet<string>
        | ReadonlyMap<string, string>
      >()
    })

    test('<boolean, boolean>', () => {
      // resolves via case 4
      expect<C.Collection<boolean, boolean>>().type.toBe<
        ReadonlySet<boolean> | ReadonlyMap<boolean, boolean>
      >()
    })

    test('<string, number>', () => {
      // resolves via case 5
      expect<C.Collection<string, number>>().type.toBe<
        | ReadonlyArray<string>
        | Record<number, string>
        | ReadonlyMap<number, string>
      >()
    })

    test('<number, string>', () => {
      // resolves via case 6
      expect<C.Collection<number, string>>().type.toBe<
        Record<string, number> | ReadonlyMap<string, number>
      >()
    })

    test('<string, boolean>', () => {
      // resolves via case 7
      expect<C.Collection<string, boolean>>().type.toBe<
        ReadonlyMap<boolean, string>
      >()
    })

    test('<string>', () => {
      // resolves via case 1
      expect<C.Collection<string>>().type.toBe<
        | readonly string[]
        | Record<PropertyKey, string>
        | ReadonlySet<string>
        | ReadonlyMap<unknown, string>
      >()
    })
  })

  describe('CollectionKey', () => {
    test('<string[]>', () => {
      expect<C.CollectionKey<string[]>>().type.toBe<number>()
    })
    test('<Map<T, string>>', () => {
      expect<C.CollectionKey<Map<string, string>>>().type.toBe<string>()
      expect<C.CollectionKey<Map<number, string>>>().type.toBe<number>()
    })
    test('<Record<T, string>>', () => {
      expect<C.CollectionKey<Record<string, string>>>().type.toBe<string>()
      expect<C.CollectionKey<Record<number, string>>>().type.toBe<number>()
    })
  })

  describe('CollectionSubset', () => {
    test('<T[]>', () => {
      expect<C.CollectionSubset<string[]>>().type.toBe<string[]>()
      expect<C.CollectionSubset<[string]>>().type.toBe<string[]>()
      expect<C.CollectionSubset<readonly [string, number]>>().type.toBe<
        Array<string | number>
      >()
    })
    test('<Map<K, V>>', () => {
      expect<C.CollectionSubset<Map<string, number>>>().type.toBe<
        Map<string, number>
      >()
      expect<
        C.CollectionSubset<ReadonlyMap<string | number, number>>
      >().type.toBe<Map<string | number, number>>()
    })
    test('<Set<V>>', () => {
      expect<C.CollectionSubset<Set<string>>>().type.toBe<Set<string>>()
      expect<C.CollectionSubset<ReadonlySet<string | number>>>().type.toBe<
        Set<string | number>
      >()
    })
    test('<Set<V>>', () => {
      expect<C.CollectionSubset<Set<string>>>().type.toBe<Set<string>>()
      expect<C.CollectionSubset<ReadonlySet<string | number>>>().type.toBe<
        Set<string | number>
      >()
    })
    test('<Record<K, V>>', () => {
      expect<C.CollectionSubset<Record<string, number>>>().type.toBe<
        Record<string, number | undefined>
      >()

      expect<C.CollectionSubset<ABObj>>().type.toBe<Partial<ABObj>>()
    })
  })

  describe('CollectionValue', () => {
    test('<T[]>', () => {
      expect<C.CollectionValue<string[]>>().type.toBe<string>()
      expect<C.CollectionValue<[1, 2, 3]>>().type.toBe<1 | 2 | 3>()
    })
    test('<Map<K, V>>', () => {
      expect<C.CollectionValue<Map<string, number>>>().type.toBe<number>()
      expect<C.CollectionValue<Map<string, 1 | 2 | 3>>>().type.toBe<1 | 2 | 3>()
    })
    test('<Set<V>>', () => {
      expect<C.CollectionValue<Set<number>>>().type.toBe<number>()
      expect<C.CollectionValue<Set<1 | 2 | 3>>>().type.toBe<1 | 2 | 3>()
    })
    test('<Record<K, V>>', () => {
      expect<C.CollectionValue<Record<string, number>>>().type.toBe<number>()
      expect<C.CollectionValue<ABObj>>().type.toBe<'A' | 'B'>()
    })
  })

  describe('EntryCollection', () => {
    test('default', () => {
      expect<C.EntryCollection>().type.toBe<
        | ReadonlyMap<unknown, unknown>
        | Record<PropertyKey, unknown>
        | ReadonlyArray<unknown>
      >()
    })
    test('<number, T>', () => {
      expect<C.EntryCollection<number>>().type.toBe<
        | ReadonlyMap<number, unknown>
        | Record<number, unknown>
        | ReadonlyArray<unknown>
      >()

      expect<C.EntryCollection<number, string>>().type.toBe<
        | ReadonlyMap<number, string>
        | Record<number, string>
        | ReadonlyArray<string>
      >()
    })
    test('<string>', () => {
      expect<C.EntryCollection<string>>().type.toBe<
        ReadonlyMap<string, unknown> | Record<string, unknown>
      >()
    })
    test('<boolean>', () => {
      expect<C.EntryCollection<boolean>>().type.toBe<
        ReadonlyMap<boolean, unknown>
      >()
    })
  })

  describe('KeyedCollection', () => {
    test('default', () => {
      expect<C.KeyedCollection>().type.toBe<
        ReadonlyMap<unknown, unknown> | Record<PropertyKey, unknown>
      >()
    })
    test('<number, T>', () => {
      expect<C.KeyedCollection<number>>().type.toBe<
        ReadonlyMap<number, unknown> | Record<number, unknown>
      >()

      expect<C.KeyedCollection<number, string>>().type.toBe<
        ReadonlyMap<number, string> | Record<number, string>
      >()
    })
    test('<string>', () => {
      expect<C.KeyedCollection<string>>().type.toBe<
        ReadonlyMap<string, unknown> | Record<string, unknown>
      >()
    })
    test('<boolean>', () => {
      expect<C.KeyedCollection<boolean>>().type.toBe<
        ReadonlyMap<boolean, unknown>
      >()
    })
  })

  describe('MutableEntryCollection', () => {
    test('default', () => {
      expect<C.MutableEntryCollection>().type.toBe<
        Map<unknown, unknown> | Record<PropertyKey, unknown> | unknown[]
      >()
    })
    test('<number, T>', () => {
      expect<C.MutableEntryCollection<number>>().type.toBe<
        Map<number, unknown> | Record<number, unknown> | unknown[]
      >()

      expect<C.MutableEntryCollection<number, string>>().type.toBe<
        Map<number, string> | Record<number, string> | string[]
      >()
    })
    test('<string>', () => {
      expect<C.MutableEntryCollection<string>>().type.toBe<
        Map<string, unknown> | Record<string, unknown>
      >()
    })
    test('<boolean>', () => {
      expect<C.MutableEntryCollection<boolean>>().type.toBe<
        Map<boolean, unknown>
      >()
    })
  })

  describe('MutableKeyedCollection', () => {
    test('default', () => {
      expect<C.MutableKeyedCollection>().type.toBe<
        Map<unknown, unknown> | Record<PropertyKey, unknown>
      >()
    })
    test('<number, T>', () => {
      expect<C.MutableKeyedCollection<number>>().type.toBe<
        Map<number, unknown> | Record<number, unknown>
      >()

      expect<C.MutableKeyedCollection<number, string>>().type.toBe<
        Map<number, string> | Record<number, string>
      >()
    })
    test('<string>', () => {
      expect<C.MutableKeyedCollection<string>>().type.toBe<
        Map<string, unknown> | Record<string, unknown>
      >()
    })
    test('<boolean>', () => {
      expect<C.MutableKeyedCollection<boolean>>().type.toBe<
        Map<boolean, unknown>
      >()
    })
  })

  describe('ValueCollection', () => {
    test('<T>', () => {
      expect<C.ValueCollection>().type.toBe<
        ReadonlyArray<unknown> | ReadonlySet<unknown>
      >()
      expect<C.ValueCollection<string>>().type.toBe<
        ReadonlyArray<string> | ReadonlySet<string>
      >()
    })
  })
})
