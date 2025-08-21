import { describe, expect, test } from 'tstyche'
import type * as T from '#src/utils'

describe('utils', () => {
  test('ArrayOfSameType', () => {
    expect<T.ArrayOfSameType<string | number>>().type.toBe<
      ReadonlyArray<string> | ReadonlyArray<number>
    >()
  })

  test('IsNotTuple', () => {
    expect<T.IsNotTuple<string[]>>().type.toBe<string[]>()
    expect<T.IsNotTuple<[string]>>().type.toBe<never>()
  })

  test('IsTuple', () => {
    expect<T.IsTuple<string[]>>().type.toBe<never>()
    expect<T.IsTuple<[string]>>().type.toBe<[string]>()
  })

  test('SubSequence', () => {
    expect<T.SubSequence<string>>().type.toBe<string>()
    expect<T.SubSequence<number[]>>().type.toBe<number[]>()
    expect<T.SubSequence<[1, 2]>>().type.toBe<Array<1 | 2>>()
  })

  describe('ValueAtKey', () => {
    type Obj = { a: 'A'; [k: string]: string }

    test('unknown object', () => {
      expect<T.ValueAtKey<unknown, 'a'>>().type.toBe<unknown>()
      expect<T.ValueAtKey<unknown, 'a', undefined>>().type.toBe<undefined>()
    })

    test('known object', () => {
      expect<T.ValueAtKey<Obj, 'a'>>().type.toBe<'A'>()
      expect<T.ValueAtKey<Obj, 'b'>>().type.toBe<string>()

      // keyof an object is always string | number, regardless what we declare
      expect<T.ValueAtKey<Obj, 1>>().type.toBe<string>()
    })

    test('known array-like', () => {
      expect<T.ValueAtKey<string[], 0>>().type.toBe<string>()
      expect<T.ValueAtKey<['a'], 0>>().type.toBe<'a'>()
      expect<T.ValueAtKey<['a'], 1>>().type.toBe<undefined>()
    })
  })

  describe('ValueAtPath', () => {
    type Obj = { a: { b: { c: 'd' } } }

    test('works on nested object', () => {
      type Path = ['a', 'b', 'c']
      type R = T.ValueAtPath<Obj, Path>
      expect<R>().type.toBe<'d'>()
    })

    test('unknown when path is unreachable', () => {
      type Path = ['a', 'b', 'e']
      type R = T.ValueAtPath<Obj, Path>
      expect<R>().type.toBe<unknown>()
    })

    test('unknown when path is dynamic', () => {
      type Path = string[]

      type R1 = T.ValueAtPath<Obj, Path>
      expect<R1>().type.toBe<unknown>()

      type R2 = T.ValueAtPath<Record<string, string>, Path>
      expect<R2>().type.toBe<unknown>()
    })

    test('works with a matching dynamic tuple', () => {
      type Path = [string]
      type R = T.ValueAtPath<Record<string, number>, Path>
      expect<R>().type.toBe<number>()
    })
  })

  test('WithUnknownKeyType', () => {
    expect<T.WithUnknownKeyType<Map<string, number>, boolean>>().type.toBe<
      Map<boolean, number>
    >()
  })

  test('WithPropertyKeyType', () => {
    expect<T.WithPropertyKeyType<Map<string, number>, number>>().type.toBe<
      Map<number, number>
    >()
    expect<T.WithPropertyKeyType<Record<string, number>, number>>().type.toBe<
      Record<number, number>
    >()
    expect<T.WithPropertyKeyType<Record<string, number>, 'a'>>().type.toBe<
      Record<'a', number>
    >()
  })

  test('WithValueType', () => {
    expect<T.WithValueType<string[], boolean>>().type.toBe<boolean[]>()
    expect<T.WithValueType<Map<string, number>, boolean>>().type.toBe<
      Map<string, boolean>
    >()
    expect<T.WithValueType<Set<string>, boolean>>().type.toBe<Set<boolean>>()
    expect<T.WithValueType<Record<string, number>, boolean>>().type.toBe<
      Record<string, boolean>
    >()
    expect<
      T.WithValueType<{ readonly a: number; b: number }, string>
    >().type.toBe<{
      a: string
      b: string
    }>()
  })
})
