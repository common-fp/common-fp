import { describe, expect, test } from 'tstyche'
import type { Collection, WithValueType } from '@common-fp/shared-types'
import mapValues from '#src/map-values'

describe('map-values', () => {
  const personById: Record<number, string> = {
    1: 'chris',
    2: 'liz',
  }

  test('no params', () => {
    const fillWithA = mapValues(() => 'a' as const)
    expect(fillWithA).type.toBe<
      <C2 extends Collection>(collection: C2) => WithValueType<C2, 'a'>
    >()

    const res = fillWithA(personById)
    expect(res).type.toBe<Record<number, 'a'>>()
  })

  test('only mapper value', () => {
    const toNameLengthById = mapValues((name: string) => name.length)
    expect(toNameLengthById).type.toBe<
      <C2 extends Collection<string>>(
        collection: C2
      ) => WithValueType<C2, number>
    >()

    const res = toNameLengthById(personById)
    expect(res).type.toBe<Record<number, number>>()
  })

  test('mapper value and key', () => {
    const toNameAndIdById = mapValues((name: string, id: number) => name + id)
    expect(toNameAndIdById).type.toBe<
      <C2 extends Collection<string, number>>(
        collection: C2
      ) => WithValueType<C2, string>
    >()

    const res = toNameAndIdById(personById)
    expect(res).type.toBe<Record<number, string>>()
  })

  test('all args', () => {
    const personByIdMap = new Map<number, string>([
      [1, 'chris'],
      [2, 'liz'],
    ])
    const toNameAndIdById = mapValues(
      (name: string, id: number, _coll: Map<number, string>) => name + id
    )
    expect(toNameAndIdById).type.toBe<
      <C2 extends Map<number, string>>(
        collection: C2
      ) => WithValueType<C2, string>
    >()

    const res = toNameAndIdById(personByIdMap)
    expect(res).type.toBe<Map<number, string>>()
  })

  test('invalid args', () => {
    mapValues(
      // @ts-expect-error Types of parameters '_coll' and 'collection' are incompatible
      (name: number, _id: number, _coll: Record<number, string>) => name
    )
  })
})
