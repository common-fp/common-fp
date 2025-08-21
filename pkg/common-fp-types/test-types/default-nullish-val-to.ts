import { describe, expect, test } from 'tstyche'
import type { Nullish } from '@common-fp/shared-types'
import defaultNullishValTo from '#src/default-nullish-val-to'

describe('default-nullish-val-to', () => {
  const naIfNone = defaultNullishValTo('n/a')

  test('literal', () => {
    expect(naIfNone).type.toBe<
      <V>(someVal: V | Nullish) => Exclude<V, Nullish> | 'n/a'
    >()

    type Answer = undefined | 'yes' | 'no'
    const answer = undefined as Answer
    const res = naIfNone(answer)
    expect(res).type.toBe<'n/a' | 'yes' | 'no'>()
  })

  test('general', () => {
    type Answer = undefined | string
    const answer = undefined as Answer
    const res = naIfNone(answer)
    expect(res).type.toBe<string>()
  })
})
