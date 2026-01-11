import { describe, expect, test } from 'tstyche'
import flattenToDepth from '#src/array/flatten-to-depth'

describe('array/flatten-to-depth', () => {
  const flattenTwoLevels = flattenToDepth(2)

  test('returned function', () => {
    expect(flattenTwoLevels).type.toBe<
      <const V>(anArray: ReadonlyArray<V>) => FlatArray<V[], 2>[]
    >()
  })

  test('tuple', () => {
    const res = flattenTwoLevels(['a', ['b', ['c', ['d']]]])
    expect(res).type.toBe<('a' | 'b' | 'c' | readonly ['d'])[]>()
  })

  test('nested array - infinite', () => {
    type NestedArray<V> = Array<V | NestedArray<V>>
    const res = flattenTwoLevels([
      'a',
      ['b', ['c', ['d']]],
    ] as NestedArray<string>)
    expect(res).type.toBe<NestedArray<string>>()
  })
})
