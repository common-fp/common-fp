import { describe, expect, test } from 'tstyche'
import type { UnknownArray } from '@common-fp/shared-types'
import findLastKey from '#src/array/find-last-key'

describe('array/find-last-key', () => {
  test('no params', () => {
    const lastIdx = findLastKey(() => true)
    expect(lastIdx).type.toBe<
      <A2 extends UnknownArray>(anArray: A2) => number | undefined
    >()
  })

  test('value param', () => {
    const findLastA = findLastKey((s: string) => s === 'a')
    expect(findLastA).type.toBe<
      <A2 extends ReadonlyArray<string>>(anArray: A2) => number | undefined
    >()
  })

  test('array param', () => {
    const findLastA = findLastKey(
      (s: string, _idx: number, _anArray: string[]) => s === 'a'
    )
    expect(findLastA).type.toBe<
      <A2 extends string[]>(anArray: A2) => number | undefined
    >()
  })

  test('tuple param', () => {
    const findLastA = findLastKey(
      (s: string, _idx: number, _anArray: [string, string]) => s === 'a'
    )
    expect(findLastA).type.toBe<
      <A2 extends [string, string]>(anArray: A2) => number | undefined
    >()
  })
})
