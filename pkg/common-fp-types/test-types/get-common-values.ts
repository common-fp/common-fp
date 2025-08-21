import { describe, expect, test } from 'tstyche'
import getCommonValues from '#src/get-common-values'

describe('get-common-values', () => {
  test('literal', () => {
    const res = getCommonValues([
      [1, 2],
      [2, 3],
    ] as const)
    expect(res).type.toBe<(1 | 2 | 3)[]>()
  })

  test('general', () => {
    const res = getCommonValues([
      [1, 2],
      [2, 3],
    ])
    expect(res).type.toBe<number[]>()
  })

  test('works with sets', () => {
    const res = getCommonValues([new Set([1, 2]), new Set([2, 3])])
    expect(res).type.toBe<number[]>()
  })
})
