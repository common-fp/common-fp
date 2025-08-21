import { describe, expect, test } from 'tstyche'
import containedIn from '#src/contained-in'

describe('contained-in', () => {
  test('string', () => {
    const inAbc = containedIn('abc')
    expect(inAbc).type.toBe<(value: string) => boolean>()
  })

  test('other', () => {
    const in123 = containedIn({ a: 1, b: 2, c: 3 })
    expect(in123).type.toBe<(value: number) => boolean>()
  })
})
