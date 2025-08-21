import { describe, expect, test } from 'tstyche'
import type { CollectionSubset, EntryCollection } from '@common-fp/shared-types'
import omit from '#src/omit'

describe('omit', () => {
  const omit1And3 = omit([1, 3])
  const omitAandB = omit(['a', 'b'])

  type Person = { name: string }
  const kim: Person = { name: 'kim' }
  const grace: Person = { name: 'grace' }
  const sam: Person = { name: 'sam' }
  const omitKimAndGrace = omit([kim, grace])

  test('numbered key type', () => {
    expect(omit1And3).type.toBe<
      <C extends EntryCollection<number>>(collection: C) => CollectionSubset<C>
    >()
  })

  test('string key type', () => {
    expect(omitAandB).type.toBe<
      <C extends EntryCollection<string>>(collection: C) => CollectionSubset<C>
    >()
  })

  test('object key type', () => {
    expect(omitKimAndGrace).type.toBe<
      <C extends ReadonlyMap<Person, unknown>>(
        collection: C
      ) => CollectionSubset<C>
    >()
  })

  describe('array', () => {
    test('happy path', () => {
      const res = omit1And3([1, 2, 3, 4])
      expect(res).type.toBe<number[]>()
    })

    test('false positive', () => {
      const res = omit1And3([1, 2, 3, 4] as const)
      expect(res).type.toBe<(1 | 2 | 3 | 4)[]>()
    })
  })

  describe('object', () => {
    test('happy path', () => {
      const obj: Record<string, number> = { a: 1, b: 2, c: 3 }
      const res = omitAandB(obj)

      expect(res).type.toBe<Partial<Record<string, number>>>()
    })

    test('false positive', () => {
      const obj = { a: 1, b: 2, c: 3 }
      const res = omitAandB(obj)
      expect(res).type.toBe<
        Partial<{
          a: number
          b: number
          c: number
        }>
      >()
    })
  })

  describe('map', () => {
    test('happy path', () => {
      const people = new Map([
        [kim, 1],
        [grace, 2],
        [sam, 3],
      ])
      const res = omitKimAndGrace(people)
      expect(res).type.toBe<Map<Person, number>>()
    })
  })
})
