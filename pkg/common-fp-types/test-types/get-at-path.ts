import { describe, expect, test } from 'tstyche'
import type { ValueAtPath } from '@common-fp/shared-types'
import getAtPath from '#src/get-at-path'

describe('get-at-path', () => {
  const objLiteral = { a: { b: { c: 'c val' } } } as const

  test('literal path', () => {
    const getAtAbc = getAtPath(['a', 'b', 'c'] as const)
    expect(getAtAbc).type.toBe<
      <A>(anything: A) => ValueAtPath<A, ['a', 'b', 'c']>
    >()

    const res = getAtAbc(objLiteral)
    expect(res).type.toBe<'c val'>()
  })

  test('general path', () => {
    const getAtAbc = getAtPath(['a', 'b', 'c'] as string[])
    expect(getAtAbc).type.toBe<<C>(anything: C) => unknown>()
  })
})
