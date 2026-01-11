import { describe, expect, test } from 'tstyche'
import type { UnknownArray } from '@common-fp/shared-types'
import discardFirstWhile from '#src/array/discard-first-while'

describe('array/discard-first-while', () => {
  test('no params', () => {
    const empty = discardFirstWhile(() => true)
    expect(empty).type.toBe<
      <const A2 extends UnknownArray>(anArray: A2) => A2[number][]
    >()

    const res = empty([1, 2])
    expect(res).type.toBe<(1 | 2)[]>()
  })

  test('value param', () => {
    const gt1 = (n: number) => n > 1
    const discardWhileGt1 = discardFirstWhile(gt1)

    expect(discardWhileGt1).type.toBe<
      <const A2 extends ReadonlyArray<number>>(anArray: A2) => A2[number][]
    >()

    const resLiteral = discardWhileGt1([1, 2, 3])
    expect(resLiteral).type.toBe<(1 | 2 | 3)[]>()

    const resGeneral = discardWhileGt1([1, 2, 3] as number[])
    expect(resGeneral).type.toBe<number[]>()
  })

  test('array param', () => {
    const gt1 = (n: number, _idx: number, _anArray: number[]) => n > 1
    const discardWhileGt1 = discardFirstWhile(gt1)

    expect(discardWhileGt1).type.toBe<
      <const A2 extends number[]>(anArray: A2) => A2[number][]
    >()
  })

  test('tuple param', () => {
    const gt1 = (n: number, _idx: number, _anArray: [number, number]) => n > 1

    const discardWhileGt1 = discardFirstWhile(gt1)
    expect(discardWhileGt1).type.toBe<
      <const A2 extends [number, number]>(anArray: A2) => A2[number][]
    >()

    const resLiteralInferred = discardWhileGt1([1, 2])
    expect(resLiteralInferred).type.toBe<(1 | 2)[]>()

    const resGeneral = discardWhileGt1([1, 2] as [number, number])
    expect(resGeneral).type.toBe<number[]>()
  })

  test('tuple param - allows subset', () => {
    const gt1 = (
      n: number | string,
      _idx: number,
      _anArray: [number | string, number | string]
    ) => Number(n) > 1

    const discardWhileGt1 = discardFirstWhile(gt1)

    const resInferred = discardWhileGt1([1, 'a'])
    expect(resInferred).type.toBe<(1 | 'a')[]>()
  })
})
