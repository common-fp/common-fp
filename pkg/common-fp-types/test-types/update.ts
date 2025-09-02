import { describe, expect, test } from 'tstyche'
import { objToMap } from '@common-fp/test-utils'
import update from '#src/update'

describe('update', () => {
  const inc = (n: number) => n + 1
  const dec = (n: number) => n - 1
  const toString = (n: number) => '' + n

  describe('array mappers', () => {
    type Nums = [number, number]
    type NumStr = [number, string]

    test('different result type', () => {
      const tick = update([inc, toString])<Nums, NumStr>
      expect(tick).type.toBe<(collection: Nums) => NumStr>()
    })

    test('same result type', () => {
      const tick = update([inc, dec])<Nums>
      expect(tick).type.toBe<(collection: Nums) => Nums>()
    })
  })

  describe('map mappers', () => {
    type Nums = Map<string, number>
    type NumStr = Map<string, number | string>

    test('different result type', () => {
      const aMap = objToMap({ a: inc, b: toString })
      const tick = update(aMap)<Nums, NumStr>
      expect(tick).type.toBe<(collection: Nums) => NumStr>()
    })

    test('same result type', () => {
      const aMap = objToMap({ a: inc, b: dec })
      const tick = update(aMap)<Nums>
      expect(tick).type.toBe<(collection: Nums) => Nums>()
    })
  })

  describe('object mappers', () => {
    type Nums = { a: number; b: number }
    type NumStr = { a: number; b: string }

    test('different result type', () => {
      const obj = { 0: inc, 1: toString }
      const tick = update(obj)<Nums, NumStr>

      expect(tick).type.toBe<(collection: Nums) => NumStr>()
    })
    test('same result type', () => {
      const obj = { 0: inc, 1: dec }
      const tick = update(obj)<Nums>

      expect(tick).type.toBe<(collection: Nums) => Nums>()
    })
  })
})
