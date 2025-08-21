import { describe, expect, test } from 'tstyche'
import type {
  KeyedCollection,
  WithPropertyKeyType,
  WithUnknownKeyType,
} from '@common-fp/shared-types'
import mapKeys from '#src/map-keys'

describe('map-keys', () => {
  type Person = { name: string }
  const personById: Record<number, Person> = {
    1: { name: 'tom' },
    2: { name: 'ken' },
  }

  test('no params', () => {
    const overwriteToA = mapKeys(() => 'a' as const)
    expect(overwriteToA).type.toBe<
      <C2 extends KeyedCollection>(
        collection: C2
      ) => WithPropertyKeyType<C2, 'a'>
    >()

    const res = overwriteToA(personById)
    expect(res).type.toBe<Record<'a', Person>>()
  })

  test('only mapper value', () => {
    const toPersonByName = mapKeys((p: Person) => p.name)
    expect(toPersonByName).type.toBe<
      <C2 extends KeyedCollection<unknown, Person>>(
        collection: C2
      ) => WithPropertyKeyType<C2, string>
    >()

    const res = toPersonByName(personById)
    expect(res).type.toBe<Record<string, Person>>()
  })

  test('mapper value and key', () => {
    const toPersonByNameAndId = mapKeys((p: Person, id: number) => p.name + id)
    expect(toPersonByNameAndId).type.toBe<
      <C2 extends KeyedCollection<number, Person>>(
        collection: C2
      ) => WithPropertyKeyType<C2, string>
    >()

    const res = toPersonByNameAndId(personById)
    expect(res).type.toBe<Record<string, Person>>()
  })

  test('all args', () => {
    const personByIdMap = new Map<number, Person>([
      [1, { name: 'tom' }],
      [2, { name: 'ken' }],
    ])
    const toPersonByNameAndId = mapKeys(
      (p: Person, id: number, _coll: Map<number, Person>) => p.name + id
    )
    expect(toPersonByNameAndId).type.toBe<
      <C2 extends Map<number, Person>>(
        collection: C2
      ) => WithPropertyKeyType<C2, string>
    >()

    const res = toPersonByNameAndId(personByIdMap)
    expect(res).type.toBe<Map<string, Person>>()
  })

  test('map to boolean key', () => {
    const personByIdMap = new Map<number, Person>([
      [1, { name: 'tom' }],
      [2, { name: 'ken' }],
    ])
    const mapKeysToBool = mapKeys(() => true as boolean)
    expect(mapKeysToBool).type.toBe<
      <C2 extends ReadonlyMap<unknown, unknown>>(
        collection: C2
      ) => WithUnknownKeyType<C2, boolean>
    >()

    const res = mapKeysToBool(personByIdMap)
    expect(res).type.toBe<Map<boolean, Person>>()
  })

  test('invalid args', () => {
    // @ts-expect-error Type 'ReadonlyMap<number, string>' is not assignable to type 'Record<number, Person>'
    mapKeys((p: string, _id: number, _coll: Record<number, Person>) => p)
  })
})
