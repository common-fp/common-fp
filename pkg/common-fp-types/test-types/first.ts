import { describe, expect, test } from 'tstyche'
import first from '#src/first'

describe('find', () => {
  test('string', () => {
    const firstChar = first('abc')
    expect(firstChar).type.toBe<string | undefined>()
  })

  test('array of strings', () => {
    const firstEl = first(['a', 'b', 'c'])
    expect(firstEl).type.toBe<string | undefined>()
  })

  test('array of nums', () => {
    const firstEl = first([1, 2, 3])
    expect(firstEl).type.toBe<number | undefined>()
  })
})
