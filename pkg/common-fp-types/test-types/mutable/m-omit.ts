import { describe, expect, test } from 'tstyche'
import type { MutableEntryCollection } from '@common-fp/shared-types'
import mOmit from '#src/mutable/m-omit'

describe('mutable/m-omit', () => {
  const omit1And3 = mOmit([1, 3])
  const omitAandB = mOmit(['a', 'b'])

  type Person = { name: string }
  const phil: Person = { name: 'phil' }
  const mary: Person = { name: 'mary' }
  const sarah: Person = { name: 'sarah' }
  const omitPhilAndMary = mOmit([phil, mary])

  test('numbered key type', () => {
    expect(omit1And3).type.toBe<
      <C extends MutableEntryCollection<number>>(collection: C) => C
    >()
  })

  test('string key type', () => {
    expect(omitAandB).type.toBe<
      <C extends MutableEntryCollection<string>>(collection: C) => C
    >()
  })

  test('object key type', () => {
    expect(omitPhilAndMary).type.toBe<
      <C extends Map<Person, unknown>>(collection: C) => C
    >()
  })

  describe('array', () => {
    test('happy path', () => {
      const res = omit1And3([1, 2, 3, 4])
      expect(res).type.toBe<number[]>()
    })

    test('false positive', () => {
      const res = omit1And3([1, 2, 3, 4] as [1, 2, 3, 4])
      expect(res).type.toBe<[1, 2, 3, 4]>()
    })
  })

  describe('object', () => {
    test('happy path', () => {
      const obj: Record<string, number> = { a: 1, b: 2, c: 3 }
      const res = omitAandB(obj)

      expect(res).type.toBe<Record<string, number>>()
    })

    test('false positive', () => {
      const obj = { a: 1, b: 2, c: 3 }
      const res = omitAandB(obj)
      expect(res).type.toBe<{
        a: number
        b: number
        c: number
      }>()
    })
  })

  describe('map', () => {
    test('happy path', () => {
      const people = new Map([
        [phil, 1],
        [mary, 2],
        [sarah, 3],
      ])
      const res = omitPhilAndMary(people)
      expect(res).type.toBe<Map<Person, number>>()
    })
  })
})
