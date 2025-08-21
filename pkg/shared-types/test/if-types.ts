import { describe, expect, test } from 'tstyche'
import type * as T from '#src/if-types'

describe('if-types', () => {
  test('IfEqual', () => {
    expect<T.IfEqual<boolean, boolean>>().type.toBe<boolean>()
    expect<T.IfEqual<true, boolean>>().type.toBe<never>()
    expect<T.IfEqual<string, boolean>>().type.toBe<never>()
  })

  test('IfUnknownOrAny', () => {
    expect<T.IfUnknownOrAny<unknown>>().type.toBe<unknown>()
    expect<T.IfUnknownOrAny<boolean>>().type.toBe<never>()

    // specifically testing any for consumers
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect<T.IfUnknownOrAny<any>>().type.toBe<any>()
  })
})
