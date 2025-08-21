import { describe, expect, test } from 'tstyche'
import order from '#src/array/order'

describe('array/order', () => {
  const asc = (left: number, right: number) => left - right
  const sortNumAsc = order(asc)

  test('returned function', () => {
    expect(sortNumAsc).type.toBe<
      <V2 extends number>(anArray: ReadonlyArray<V2>) => V2[]
    >()
  })

  test('array', () => {
    const res = sortNumAsc([2, 1, 3] as number[])
    expect(res).type.toBe<number[]>()
  })

  test('literals', () => {
    const res = sortNumAsc([2, 1, 3])
    expect(res).type.toBe<(2 | 1 | 3)[]>()
  })

  test('invalid type', () => {
    type T123 = 1 | 2 | 3
    const asc = (left: T123, right: T123) => left - right
    const sortAsc = order(asc)
    expect(sortAsc([2, 1, 3])).type.not.toRaiseError()

    // @ts-expect-error Type '4' is not assignable to type 'T123'
    sortAsc([2, 1, 3, 4])
  })
})
