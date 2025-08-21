import { describe, expect, test } from 'tstyche'
import type { Collection, CollectionValue } from '@common-fp/shared-types'
import groupBy from '#src/group-by'

describe('group-by', () => {
  test('no params', () => {
    const groupByAll = groupBy(() => 'all')
    expect(groupByAll).type.toBe<
      <C2 extends Collection>(
        collection: C2
      ) => Record<'all', CollectionValue<C2>[]>
    >()
  })

  test('only predicate value', () => {
    const groupByFirstLetter = groupBy((val: string) => val[0] || '')
    expect(groupByFirstLetter).type.toBe<
      <C2 extends Collection<string>>(
        collection: C2
      ) => Record<string, CollectionValue<C2>[]>
    >()
  })

  test('predicate value and number key', () => {
    const groupByFirstLetter = groupBy(
      (val: string, _k: number) => val[0] || ''
    )
    expect(groupByFirstLetter).type.toBe<
      <C2 extends Collection<string, number>>(
        collection: C2
      ) => Record<string, CollectionValue<C2>[]>
    >()
  })

  test('predicate value and string key', () => {
    const groupByFirstLetter = groupBy((val: string, _k: string) => val[0])
    expect(groupByFirstLetter).type.toBe<
      <C2 extends Collection<string, string>>(
        collection: C2
      ) => Record<string, CollectionValue<C2>[]>
    >()
  })

  test('predicate all args', () => {
    const groupByFirstLetter = groupBy(
      (val: string, _k: string, _coll: Map<string, string>) => val[0] || ''
    )
    expect(groupByFirstLetter).type.toBe<
      <C2 extends Map<string, string>>(
        collection: C2
      ) => Record<string, CollectionValue<C2>[]>
    >()
  })

  test('invalid args', () => {
    // @ts-expect-error Type 'Record<string, number> | ReadonlyMap<string, number>' is not assignable to type 'Map<number, string>'
    groupBy((n: number, _k: string, _coll: Map<number, string>) => n > 1 || '')
  })

  test('return types', () => {
    type Cat = { name: string; color: string }

    // just showing array and object for now
    const groupByName = groupBy((cat: Cat) => cat.name)
    const resArr = groupByName([
      { name: 'toby', color: 'gray' },
      { name: 'max', color: 'black' },
    ] as Cat[])
    expect(resArr).type.toBe<Record<string, Cat[]>>()

    const catByColor: Record<string, Cat> = {
      black: { name: 'max', color: 'black' },
      gray: { name: 'toby', color: 'gray' },
    }
    const resObj = groupByName(catByColor)
    expect(resObj).type.toBe<Record<string, Cat[]>>()
  })
})
