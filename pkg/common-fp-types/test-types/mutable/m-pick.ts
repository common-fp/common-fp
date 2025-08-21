import { describe, expect, test } from 'tstyche'
import type { MutableEntryCollection } from '@common-fp/shared-types'
import mPick from '#src/mutable/m-pick'

describe('mutable/m-pick', () => {
  const pick1And3 = mPick([1, 3])
  const pickAandB = mPick(['a', 'b'])

  type Person = { name: string }
  const matt: Person = { name: 'matt' }
  const jason: Person = { name: 'jason' }
  const amy: Person = { name: 'amy' }
  const pickMattAndJason = mPick([matt, jason])

  test('numbered key type', () => {
    expect(pick1And3).type.toBe<
      <C extends MutableEntryCollection<number>>(collection: C) => C
    >()
  })

  test('string key type', () => {
    expect(pickAandB).type.toBe<
      <C extends MutableEntryCollection<string>>(collection: C) => C
    >()
  })

  test('object key type', () => {
    expect(pickMattAndJason).type.toBe<
      <C extends Map<Person, unknown>>(collection: C) => C
    >()
  })

  describe('array', () => {
    test('happy path', () => {
      const res = pick1And3([1, 2, 3, 4])
      expect(res).type.toBe<number[]>()
    })

    test('false positive', () => {
      const res = pick1And3([1, 2, 3, 4] as [1, 2, 3, 4])
      expect(res).type.toBe<[1, 2, 3, 4]>()
    })
  })

  describe('object', () => {
    test('happy path', () => {
      const obj: Record<string, number> = { a: 1, b: 2, c: 3 }
      const res = pickAandB(obj)

      expect(res).type.toBe<Record<string, number>>()
    })

    test('false positive', () => {
      const obj = { a: 1, b: 2, c: 3 }
      const res = pickAandB(obj)
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
        [matt, 1],
        [jason, 2],
        [amy, 3],
      ])
      const res = pickMattAndJason(people)
      expect(res).type.toBe<Map<Person, number>>()
    })
  })
})
