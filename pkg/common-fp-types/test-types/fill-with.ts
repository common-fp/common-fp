import { describe, expect, test } from 'tstyche'
import fillWith from '#src/fill-with'

describe('fill-with', () => {
  const fillWithA = fillWith('a')

  test('array', () => {
    const res = fillWithA([1, 2] as number[])
    expect(res).type.toBe<'a'[]>()
  })
  test('tuple', () => {
    const res = fillWithA([1, 2] as const)
    expect(res).type.toBe<['a', 'a']>()
  })
  test('object', () => {
    const res = fillWithA({ b: 'B', c: 'C' })
    expect(res).type.toBe<{ b: 'a'; c: 'a' }>()
  })
  test('map', () => {
    const res = fillWithA(
      new Map([
        ['b', 'B'],
        ['c', 'C'],
      ])
    )
    expect(res).type.toBe<Map<string, 'a'>>()
  })
})
