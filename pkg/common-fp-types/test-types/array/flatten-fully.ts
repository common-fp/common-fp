import { describe, expect, test } from 'tstyche'
import flattenFully from '#src/array/flatten-fully'

describe('array/flatten-fully', () => {
  test('literal', () => {
    const res = flattenFully(['a', ['b', ['c']]])
    expect(res).type.toBe<('a' | 'b' | 'c')[]>()
  })

  test('nested - infinite', () => {
    type NestedArray<V> = Array<V | NestedArray<V>>
    const arr: NestedArray<string> = ['a', ['b', ['c']]]
    const res = flattenFully(arr)
    expect(res).type.toBe<string[]>()
  })

  test('nested - depth 2', () => {
    type NestedArrayDepth2<V> = Array<V | Array<V> | Array<V | Array<V>>>
    const arr: NestedArrayDepth2<string> = ['a', ['b', ['c']]]
    const res = flattenFully(arr)
    expect(res).type.toBe<string[]>()
  })

  test('nested - with object', () => {
    type Address = { street: string }
    type NestedAddresses = Array<string | Array<Address>>
    const arr: NestedAddresses = [
      'some street',
      [{ street: 'some other street' }],
    ]
    const res = flattenFully(arr)
    expect(res).type.toBe<Array<string | Address>>()
  })
})
