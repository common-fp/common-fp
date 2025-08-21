import { describe, expect, test } from 'tstyche'
import type { Collection } from '@common-fp/shared-types'
import alter from '#src/alter'

describe('alter', () => {
  const makeInitialZero = () => 0 as const
  const makeInitialObj = () => ({}) as Record<string, number>

  test('no params', () => {
    const toZero = alter(() => 0 as const, makeInitialZero)
    expect(toZero).type.toBe<<C extends Collection>(collection: C) => 0>()
  })

  test('only reducer fn result', () => {
    const size = alter((result: number) => result + 1, makeInitialZero)
    expect(size).type.toBe<<C extends Collection>(collection: C) => number>()
  })

  test('reducer fn result and value', () => {
    const sum = alter(
      (result: number, num: number) => result + num,
      makeInitialZero
    )
    expect(sum).type.toBe<
      <C extends Collection<number>>(collection: C) => number
    >()
  })

  test('reducer fn result, value and key', () => {
    const sumWithNumKey = alter(
      (result: number, num: number, _key: number) => result + num,
      makeInitialZero
    )
    expect(sumWithNumKey).type.toBe<
      <C extends Collection<number, number>>(collection: C) => number
    >()

    const sumWithStrKey = alter(
      (result: number, num: number, _key: string) => result + num,
      makeInitialZero
    )
    expect(sumWithStrKey).type.toBe<
      <C extends Collection<number, string>>(collection: C) => number
    >()
  })

  type Person = { name: string }
  test('all args', () => {
    const toNumApplesByName = alter(
      (
        numApplesByName: Record<string, number>,
        numApples: number,
        person: Person,
        _numApplesByPerson: Map<Person, number>
      ) => {
        numApplesByName[person.name] = numApples
        return numApplesByName
      },
      makeInitialObj
    )
    expect(toNumApplesByName).type.toBe<
      <C extends Map<Person, number>>(collection: C) => Record<string, number>
    >()
  })

  test('reducer value must match reducer collection value', () => {
    // i.e. the error is saying we expect a type assignable to
    // ReadonlyMap<Person, number>
    alter(
      // @ts-expect-error Type 'ReadonlyMap<Person, number>' is not assignable to type 'ReadonlyMap<Person, string>'
      (
        numApplesByName: Record<string, number>,
        numApples: number,
        person: Person,
        _numApplesByPerson: ReadonlyMap<Person, string>
      ) => {
        numApplesByName[person.name] = numApples
        return numApplesByName
      },
      makeInitialObj
    )
  })
})
