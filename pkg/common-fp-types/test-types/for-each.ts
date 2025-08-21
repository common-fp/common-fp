import { describe, expect, test } from 'tstyche'
import type { Collection } from '@common-fp/shared-types'
import forEach from '#src/for-each'

describe('each', () => {
  test('no params', () => {
    const forEachNoop = forEach(() => undefined)
    expect(forEachNoop).type.toBe<
      <C2 extends Collection>(collection: C2) => C2
    >()
  })

  test('only predicate value', () => {
    const forEachNumNoop = forEach((_n: number) => undefined)
    expect(forEachNumNoop).type.toBe<
      <C2 extends Collection<number>>(collection: C2) => C2
    >()
  })

  test('predicate value and number key', () => {
    const forEachNumNoop = forEach((_n: number, _k: number) => undefined)
    expect(forEachNumNoop).type.toBe<
      <C2 extends Collection<number, number>>(collection: C2) => C2
    >()
  })

  test('predicate value and string key', () => {
    const forEachNumNoop = forEach((_n: number, _k: string) => undefined)
    expect(forEachNumNoop).type.toBe<
      <C2 extends Collection<number, string>>(collection: C2) => C2
    >()
  })

  test('predicate all args', () => {
    const forEachNumNoop = forEach(
      (_n: number, _k: string, _coll: Map<string, number>) => undefined
    )
    expect(forEachNumNoop).type.toBe<
      <C2 extends Map<string, number>>(collection: C2) => C2
    >()
  })

  test('invalid args', () => {
    forEach(
      // @ts-expect-error Type 'Record<string, number> | ReadonlyMap<string, number>' is not assignable to type 'ReadonlyMap<number, string>'
      (_n: number, _k: string, _coll: ReadonlyMap<number, string>) => undefined
    )
  })
})
