import { describe, expect, test } from 'tstyche'
import type { MutableEntryCollection } from '@common-fp/shared-types'
import mMapValues from '#src/mutable/m-map-values'

describe('mutable/m-map-values', () => {
  test('no args', () => {
    const getEmptyStr = () => ''
    const fillWithEmptyStr = mMapValues(getEmptyStr)
    expect(fillWithEmptyStr).type.toBe<
      <C2 extends MutableEntryCollection<unknown, string>>(collection: C2) => C2
    >()
  })

  test('value arg', () => {
    const scream = (s: string) => s.toUpperCase()
    const screamAll = mMapValues(scream)
    expect(screamAll).type.toBe<
      <C2 extends MutableEntryCollection<unknown, string>>(collection: C2) => C2
    >()
  })

  test('value and key args', () => {
    const combineKeyVal = (s: string, n: number) => n + ':' + s
    const combineAll = mMapValues(combineKeyVal)
    expect(combineAll).type.toBe<
      <C2 extends MutableEntryCollection<number, string>>(collection: C2) => C2
    >()
  })

  test('all args', () => {
    const combineKeyVal = (s: string, n: number, _arr: string[]) => {
      return n + ':' + s
    }
    const combineAll = mMapValues(combineKeyVal)
    expect(combineAll).type.toBe<<C2 extends string[]>(collection: C2) => C2>()
  })
})
