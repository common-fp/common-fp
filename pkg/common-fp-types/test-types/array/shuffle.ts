import { describe, expect, test } from 'tstyche'
import shuffle from '#src/array/shuffle'

describe('array/shuffle', () => {
  test('array', () => {
    const res = shuffle([1, 2] as number[])
    expect(res).type.toBe<number[]>()
  })
  test('tuple', () => {
    const res = shuffle([1, 2])
    expect(res).type.toBe<(1 | 2)[]>()
  })
})
