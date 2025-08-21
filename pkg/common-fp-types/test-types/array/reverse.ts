import { describe, expect, test } from 'tstyche'
import reverse from '#src/array/reverse'

describe('array/reverse', () => {
  test('array', () => {
    const res = reverse([1, 2] as number[])
    expect(res).type.toBe<number[]>()
  })
  test('tuple', () => {
    const res = reverse([1, 2])
    expect(res).type.toBe<[2, 1]>()
  })
})
