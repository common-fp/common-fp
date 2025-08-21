import { describe, expect, test } from 'tstyche'
import transpose from '#src/transpose'

describe('transpose', () => {
  test('2 columns', () => {
    const res = transpose([
      ['a', 'b'],
      [1, 2],
    ])
    expect(res).type.toBe<Array<[string, number]>>()
  })

  test('3 columns', () => {
    const res = transpose([
      ['a', 'b'],
      [1, 2],
      [true, false],
    ])
    expect(res).type.toBe<Array<[string, number, boolean]>>()
  })

  test('4 columns', () => {
    const res = transpose([
      ['a', 'b'],
      [1, 2],
      [true, false],
      ['c', 'd'],
    ])
    expect(res).type.toBe<Array<[string, number, boolean, string]>>()
  })

  test('5 columns', () => {
    const res = transpose([
      ['a', 'b'],
      [1, 2],
      [true, false],
      ['c', 'd'],
      [3, 4],
    ])
    expect(res).type.toBe<Array<unknown[]>>()
  })

  test('not tuples', () => {
    const variableArray = [
      ['a', 'b'],
      [1, 2],
    ]
    const res = transpose(variableArray)
    expect(res).type.toBe<Array<unknown[]>>()
  })

  test('array of types', () => {
    const variableArray = [
      ['a', 'b'],
      [1, 2],
    ] as Array<Array<string | number>>
    const res = transpose(variableArray)
    expect(res).type.toBe<Array<Array<string | number>>>()
  })
})
