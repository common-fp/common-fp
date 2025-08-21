import { describe, expect, test } from 'tstyche'
import splitEvery from '#src/split-every'

describe('split-every', () => {
  const splitEvery2 = splitEvery(2)

  test('string', () => {
    const res = splitEvery2('abc')
    expect(res).type.toBe<string[]>()
  })

  test('array', () => {
    const res = splitEvery2([1, 2])
    expect(res).type.toBe<number[][]>()
  })

  test('tuple', () => {
    const res = splitEvery2([1, 2] as const)
    expect(res).type.toBe<(1 | 2)[][]>()
  })
})
