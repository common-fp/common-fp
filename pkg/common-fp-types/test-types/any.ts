import { describe, expect, test } from 'tstyche'
import type { Collection } from '@common-fp/shared-types'
import any from '#src/any'

describe('any', () => {
  test('no params', () => {
    const anyExist = any(() => true)
    expect(anyExist).type.toBe<
      <C extends Collection>(collection: C) => boolean
    >()
  })

  test('only predicate value', () => {
    const anyGt1 = any((n: number) => n > 1)
    expect(anyGt1).type.toBe<
      <C extends Collection<number>>(collection: C) => boolean
    >()
  })

  test('predicate value and number key', () => {
    const anyGt1 = any((n: number, _k: number) => n > 1)
    expect(anyGt1).type.toBe<
      <C extends Collection<number, number>>(collection: C) => boolean
    >()
  })

  test('predicate value and string key', () => {
    const anyGt1 = any((n: number, _k: string) => n > 1)
    expect(anyGt1).type.toBe<
      <C extends Collection<number, string>>(collection: C) => boolean
    >()
  })

  test('predicate all args', () => {
    const anyGt1 = any(
      (n: number, _k: string, _coll: Map<string, number>) => n > 1
    )
    expect(anyGt1).type.toBe<
      <C extends Map<string, number>>(collection: C) => boolean
    >()
  })

  test('invalid args', () => {
    // @ts-expect-error Type 'Record<string, number> | ReadonlyMap<string, number>' is not assignable to type 'ReadonlyMap<number, string>'
    any((n: number, _k: string, _coll: ReadonlyMap<number, string>) => n > 1)
  })
})
