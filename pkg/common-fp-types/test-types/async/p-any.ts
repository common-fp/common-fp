import { describe, expect, test } from 'tstyche'
import type { Collection } from '@common-fp/shared-types'
import pAny from '#src/async/p-any'

describe('async/p-any', () => {
  test('no params', () => {
    const anyExist = pAny(async () => true)
    expect(anyExist).type.toBe<
      <C2 extends Collection>(collection: C2) => Promise<boolean>
    >()
  })

  test('value param', () => {
    const anyGt1 = pAny(async (n: number) => n > 1)
    expect(anyGt1).type.toBe<
      <C2 extends Collection<number>>(collection: C2) => Promise<boolean>
    >()
  })

  test('key param - number', () => {
    const anyGt1 = pAny(async (n: number, _k: number) => n > 1)
    expect(anyGt1).type.toBe<
      <C2 extends Collection<number, number>>(
        collection: C2
      ) => Promise<boolean>
    >()
  })

  test('key param - string', () => {
    const anyGt1 = pAny(async (n: number, _k: string) => n > 1)
    expect(anyGt1).type.toBe<
      <C2 extends Collection<number, string>>(
        collection: C2
      ) => Promise<boolean>
    >()
  })

  test('collection param', () => {
    const anyGt1 = pAny(
      async (n: number, _k: string, _coll: Map<string, number>) => n > 1
    )
    expect(anyGt1).type.toBe<
      <C2 extends Map<string, number>>(collection: C2) => Promise<boolean>
    >()
  })

  test('invalid args', () => {
    // @ts-expect-error Type 'Record<string, number> | ReadonlyMap<string, number>' is not assignable to type 'Map<number, string>'
    pAny(async (n: number, _k: string, _coll: Map<number, string>) => n > 1)
  })
})
