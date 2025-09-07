import { describe, expect, test } from 'tstyche'
import type {
  EntryCollection,
  KeyedCollection,
  UnknownMap,
} from '@common-fp/shared-types'
import set, { WithAddedKeyVal } from '#src/set'

describe('set', () => {
  describe('numeric key', () => {
    const set1A = set(1, 'a')

    test('returned function', () => {
      expect(set1A).type.toBe<
        <C extends EntryCollection>(collection: C) => WithAddedKeyVal<1, 'a', C>
      >()
    })

    test('array', () => {
      const resLiteral = set1A(['b'] as const)
      expect(resLiteral).type.toBe<Array<'a' | 'b'>>()

      const resGeneral = set1A(['b'])
      // because ('a' | string) simplifies to string
      expect(resGeneral).type.toBe<string[]>()
    })

    test('map', () => {
      const resLiteral = set1A(new Map([[2, 'b']] as const))
      expect(resLiteral).type.toBe<Map<1 | 2, 'a' | 'b'>>()

      const resGeneral = set1A(new Map([[2, 'b']]))
      expect(resGeneral).type.toBe<Map<number, string>>()
    })

    test('object', () => {
      const resLiteral = set1A({ 2: 'b' } as const)
      expect(resLiteral).type.toBe<Record<1 | 2, 'a' | 'b'>>()

      const resGeneral = set1A({ 2: 'b' } as Record<number, string>)
      expect(resGeneral).type.toBe<Record<number, string>>()
    })
  })

  describe('string key', () => {
    const setAToC = set('a', 'c')

    test('returned function', () => {
      expect(setAToC).type.toBe<
        <C extends KeyedCollection>(
          collection: C
        ) => WithAddedKeyVal<'a', 'c', C>
      >()
    })

    test('map', () => {
      const resLiteral = setAToC(new Map([['b', 2]] as const))
      expect(resLiteral).type.toBe<Map<'a' | 'b', 'c' | 2>>()

      const resGeneral = setAToC(new Map([['b', 2]]))
      expect(resGeneral).type.toBe<Map<string, number | 'c'>>()
    })

    test('object', () => {
      const resLiteral = setAToC({ b: 2 } as const)
      expect(resLiteral).type.toBe<Record<'a' | 'b', 'c' | 2>>()

      const resGeneral = setAToC({ b: 2 } as Record<string, number>)
      expect(resGeneral).type.toBe<Record<string, number | 'c'>>()
    })
  })

  describe('object key', () => {
    type Person = { name: string }
    const luke: Person = { name: 'luke' }
    const setLukeTo1 = set(luke, 1)

    test('returned function', () => {
      expect(setLukeTo1).type.toBe<
        <C extends UnknownMap>(collection: C) => WithAddedKeyVal<Person, 1, C>
      >()
    })

    test('map', () => {
      const resLiteral = setLukeTo1(new Map([['b', 2]] as const))
      expect(resLiteral).type.toBe<Map<'b' | Person, 1 | 2>>()

      const resGeneral = setLukeTo1(new Map([['b', 2]]))
      expect(resGeneral).type.toBe<Map<string | Person, number>>()
    })
  })
})
