import { describe, expect, test } from 'tstyche'
import type { Falsey } from '@common-fp/shared-types'
import defaultFalseyValTo from '#src/default-falsey-val-to'

describe('default-falsey-val-to', () => {
  const naIfNone = defaultFalseyValTo('n/a')

  test('literal', () => {
    expect(naIfNone).type.toBe<
      <V>(someVal: Falsey | V) => Exclude<V, Falsey> | 'n/a'
    >()

    type Answer = '' | 'yes' | 'no'
    const answer = '' as Answer
    const res = naIfNone(answer)
    expect(res).type.toBe<'n/a' | 'yes' | 'no'>()
  })

  test('general', () => {
    const answer = '' as string
    const res = naIfNone(answer)
    expect(res).type.toBe<string>()
  })
})
