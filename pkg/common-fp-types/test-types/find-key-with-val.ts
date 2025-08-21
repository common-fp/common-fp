import { describe, expect, test } from 'tstyche'
import type {
  CollectionKey,
  EntryCollection,
  KeyedCollection,
  Sequence,
} from '@common-fp/shared-types'
import findKeyWithVal from '#src/find-key-with-val'

describe('find-key-with-val', () => {
  describe('find a string', () => {
    const findA = findKeyWithVal('a')

    test('returned function', () => {
      // @tstyche if { target: [">=5.1"] }
      expect(findA).type.toBe<{
        <C extends Sequence<string> | KeyedCollection<unknown, string>>(
          collection: C
        ): C extends KeyedCollection ? CollectionKey<C> | undefined
        : number | undefined
      }>()

      // @tstyche if { target: ["<5.1"] }
      expect(findA).type.toBeAssignableTo<{
        <C extends Sequence<string> | KeyedCollection<unknown, string>>(
          collection: C
        ): C extends KeyedCollection ? CollectionKey<C> | undefined
        : number | undefined
      }>()
    })

    test('result type', () => {
      const resArr = findA(['b', 'a', 'c'])
      expect(resArr).type.toBe<number | undefined>()

      const resObjLiteral = findA({ b: 'b', a: 'a', c: 'c' })
      expect(resObjLiteral).type.toBe<'b' | 'a' | 'c' | undefined>()

      const obj: Record<string, string> = { b: 'b', a: 'a', c: 'c' }
      const resObjGeneral = findA(obj)
      expect(resObjGeneral).type.toBe<string | undefined>()

      const resMap = findA(
        new Map([
          ['b', 'b'],
          ['a', 'a'],
          ['c', 'c'],
        ])
      )
      expect(resMap).type.toBe<string | undefined>()
    })
  })

  describe('find a non-string', () => {
    const find1 = findKeyWithVal(1)

    test('returned function', () => {
      expect(find1).type.toBe<{
        <C extends EntryCollection<unknown, number>>(
          collection: C
        ): CollectionKey<C> | undefined
      }>()
    })

    test('result type', () => {
      const resArr = find1([2, 1, 3])
      expect(resArr).type.toBe<number | undefined>()

      const resObjLiteral = find1({ b: 2, a: 1, c: 3 })
      expect(resObjLiteral).type.toBe<'b' | 'a' | 'c' | undefined>()

      const obj: Record<string, number> = { b: 2, a: 1, c: 3 }
      const resObjGeneral = find1(obj)
      expect(resObjGeneral).type.toBe<string | undefined>()

      const resMap = find1(
        new Map([
          ['b', 2],
          ['a', 1],
          ['c', 3],
        ])
      )
      expect(resMap).type.toBe<string | undefined>()
    })
  })
})
