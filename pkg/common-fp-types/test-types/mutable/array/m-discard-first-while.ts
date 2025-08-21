import { describe, expect, test } from 'tstyche'

import mDiscardFirstWhile from '#src/mutable/array/m-discard-first-while'

describe('mutable/array/m-discard-first-while', () => {
  test('predicate without array param', () => {
    const gt1 = (n: number) => n > 1
    const discardWhileGt1 = mDiscardFirstWhile(gt1)

    expect(discardWhileGt1).type.toBe<<A extends number[]>(anArray: A) => A>()

    const resArr = discardWhileGt1([1, 2, 3] as number[])
    expect(resArr).type.toBe<number[]>()

    // unlike keep-or-discard-predicate, this utility doesn't infer
    // type 1 | 2 | 3.  It returns the exact type provided
    const resTuple = discardWhileGt1([1, 2, 3])
    expect(resTuple).type.toBe<number[]>()
  })

  /**
   * although this behavior results in a potentially incorrect type, we do this
   * on purpose since the type of a variable should not change.  We can't always
   * prevent wrong usage.
   */
  test('predicate without array param - returns type passed', () => {
    const gt1 = (n: number) => n > 1
    const discardWhileGt1 = mDiscardFirstWhile(gt1)

    const resArr = discardWhileGt1([2, 3, 4] as [2, 3, 4])
    expect(resArr).type.toBe<[2, 3, 4]>()
  })

  test('predicate with array param', () => {
    const gt1 = (n: number, _idx: number, _anArray: number[]) => n > 1
    const discardWhileGt1 = mDiscardFirstWhile(gt1)

    expect(discardWhileGt1).type.toBe<
      <A2 extends number[]>(anArray: A2) => A2
    >()
  })

  test('predicate with tuple param', () => {
    const gt1 = (n: number, _idx: number, _anArray: [number, number]) => n > 1

    const discardWhileGt1 = mDiscardFirstWhile(gt1)
    expect(discardWhileGt1).type.toBe<
      <A2 extends [number, number]>(anArray: A2) => A2
    >()

    const res = discardWhileGt1([1, 2])
    expect(res).type.toBe<[number, number]>()
  })

  test('predicate with tuple param - allows subset', () => {
    const gt1 = (
      n: number | string,
      _idx: number,
      _anArray: [number | string, number | string]
    ) => Number(n) > 1

    const discardWhileGt1 = mDiscardFirstWhile(gt1)

    const res = discardWhileGt1([1, 2])
    expect(res).type.toBe<[number, number]>()
  })
})
