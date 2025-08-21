import { describe, expect, test } from 'tstyche'
import type { Sequence } from '@common-fp/shared-types'
import findLastKeyWithVal from '#src/find-last-key-with-val'

describe('find-last-key-with-val', () => {
  const findLastIdxWith1 = findLastKeyWithVal(1)
  const findLastIdxWithA = findLastKeyWithVal('a')

  test('returned function for number value', () => {
    expect(findLastIdxWith1).type.toBe<
      <S extends ReadonlyArray<number>>(sequence: S) => number | undefined
    >()
  })

  test('returned function for string value', () => {
    expect(findLastIdxWithA).type.toBe<{
      <S extends Sequence<string>>(sequence: S): number | undefined
    }>()
  })
})
