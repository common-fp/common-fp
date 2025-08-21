import { describe, expect, test } from 'tstyche'
import type { Collection, CollectionSubset } from '@common-fp/shared-types'
import discard from '#src/discard'

describe('discard', () => {
  const discard12 = discard([1, 2])
  test('general', () => {
    expect(discard12).type.toBe<
      <C extends Collection<number>>(collection: C) => CollectionSubset<C>
    >()
  })

  test('literal', () => {
    const discard12 = discard([1, 2] as const)
    expect(discard12).type.toBe<
      <C extends Collection<1 | 2>>(collection: C) => CollectionSubset<C>
    >()
  })

  test('works with set', () => {
    const discardSetOf12 = discard(new Set([1, 2]))
    expect(discardSetOf12).type.toBe<typeof discard12>()
  })
})
