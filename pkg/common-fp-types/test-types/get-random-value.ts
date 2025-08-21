import { describe, expect, test } from 'tstyche'
import getRandomValue from '#src/get-random-value'

describe('get-random-value', () => {
  test('tuple', () => {
    const res = getRandomValue(['a', 'b', 'c'])
    expect(res).type.toBe<string>()
  })

  test('array', () => {
    const res = getRandomValue(['a', 'b', 'c'] as string[])
    expect(res).type.toBe<string | undefined>()
  })
})
