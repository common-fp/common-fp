import { describe, expect, test } from 'tstyche'
import fillRangeWith from '#src/array/fill-range-with'

describe('array/fill-range-with', () => {
  // the return type doesn't depend on these values
  const firstTwo = { startIdx: 0, endIdx: 1 }
  const fillFirstTwoWithA = fillRangeWith('a', firstTwo)

  test('returned function', () => {
    expect(fillFirstTwoWithA).type.toBe<
      <const V2>(anArray: ReadonlyArray<V2>) => Array<'a' | V2>
    >()
  })
  test('array', () => {
    const res = fillFirstTwoWithA([1, 2] as number[])
    expect(res).type.toBe<(number | 'a')[]>()
  })
  test('literal tuple', () => {
    const res = fillFirstTwoWithA([1, 2])
    expect(res).type.toBe<(1 | 'a' | 2)[]>()
  })
})
