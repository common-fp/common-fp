import { describe, expect, test } from 'tstyche'
import getSize from '#src/get-size'

describe('get-size', () => {
  test('literal array', () => {
    const resArr = getSize(['a', 'b', 'c'] as const)
    expect(resArr).type.toBe<3>()
  })

  test('general array', () => {
    const res = getSize(['a', 'b', 'c'])
    expect(res).type.toBe<number>()
  })

  test('collection', () => {
    const resObj = getSize({ a: 1, b: 2 })
    expect(resObj).type.toBe<number>()
  })
})
