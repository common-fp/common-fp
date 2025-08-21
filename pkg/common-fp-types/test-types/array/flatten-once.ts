import { describe, expect, test } from 'tstyche'
import flattenOnce from '#src/array/flatten-once'

describe('array/flatten-once', () => {
  test('tuple', () => {
    const res = flattenOnce(['a', ['b', ['c']]])
    expect(res).type.toBe<('a' | 'b' | readonly ['c'])[]>()
  })

  test('nested array - infinite', () => {
    type NestedArray<V> = Array<V | NestedArray<V>>
    const res = flattenOnce(['a', ['b', ['c']]] as NestedArray<string>)
    expect(res).type.toBe<NestedArray<string>>()
  })
})
