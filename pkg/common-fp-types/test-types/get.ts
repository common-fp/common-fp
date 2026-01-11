import { describe, expect, test } from 'tstyche'
import type { ValueAtKey } from '@common-fp/shared-types'
import get from '#src/get'

describe('get', () => {
  describe('literal', () => {
    const getLength = get('length')

    test('returned function', () => {
      expect(getLength).type.toBe<
        <const O>(anything: O) => ValueAtKey<O, 'length'>
      >()
    })

    test('result', () => {
      const resArrLiteral = getLength(['a', 'b'])
      expect(resArrLiteral).type.toBe<2>()

      const resArrGeneral = getLength(['a', 'b'] as string[])
      expect(resArrGeneral).type.toBe<number>()

      const resObjLiteral = getLength({ length: 2 })
      expect(resObjLiteral).type.toBe<2>()

      const resObjGeneral = getLength({ length: 2 } as Record<
        string,
        number | undefined
      >)
      expect(resObjGeneral).type.toBe<number | undefined>()
    })
  })

  // general usage is supported but less useful
  describe('general', () => {
    const getLength = get('length' as string)

    test('returned function', () => {
      expect(getLength).type.toBe<
        <const O>(anything: O) => ValueAtKey<O, string>
      >()
    })

    test('result', () => {
      const resArr = getLength(['a', 'b'])
      expect(resArr).type.toBe<unknown>()

      const resObjLiteral = getLength({ length: 2 })
      expect(resObjLiteral).type.toBe<unknown>()

      const resObjGeneral = getLength({ length: 2 } as Record<
        string,
        number | undefined
      >)
      expect(resObjGeneral).type.toBe<number | undefined>()
    })
  })
})
