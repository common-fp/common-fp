import { describe, expect, test } from 'tstyche'
import getValueAtMapKey from '#src/map/get-value-at-map-key'

describe('map/get-value-at-map-key', () => {
  const getA = getValueAtMapKey('a')

  test('happy path', () => {
    const aMap = new Map([
      ['a', 1],
      ['b', 2],
    ])
    expect(getA).type.toBe<<V>(aMap: ReadonlyMap<string, V>) => V>()

    const a = getA(aMap)
    expect(a).type.toBe<number>()
  })

  test('mismatched type', () => {
    const obj = { a: 1, b: 2 }
    // @ts-expect-error Argument of type '{ a: number; b: number; }' is not assignable to parameter of type 'ReadonlyMap<string, unknown>'
    getA(obj)
  })
})
