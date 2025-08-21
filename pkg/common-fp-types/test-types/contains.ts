import { describe, expect, test } from 'tstyche'
import type { Collection } from '@common-fp/shared-types'
import contains from '#src/contains'

describe('contains', () => {
  test('string', () => {
    const containsAB = contains('ab')
    expect(containsAB).type.toBe<
      <C extends Collection<string> | string>(collection: C) => boolean
    >()
  })

  test('other', () => {
    const contains1 = contains(1)
    expect(contains1).type.toBe<
      <C extends Collection<number>>(collection: C) => boolean
    >()
  })
})
