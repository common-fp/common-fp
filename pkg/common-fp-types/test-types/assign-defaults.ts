import type { UnknownRecord } from '@common-fp/shared-types'
import { describe, expect, test } from 'tstyche'
import assignDefaults from '#src/assign-defaults'

describe('assign-defaults', () => {
  test('object general', () => {
    type Defaults = Record<string, number | string>
    const defaults: Defaults = {
      retryMs: 500,
      url: 'http://example.com',
    }
    const getOptions = assignDefaults(defaults)

    // @tstyche fixme -- This doesn't work but it should
    expect(getOptions).type.toBe<
      <O extends UnknownRecord>(
        base: O
      ) => {
        [K in keyof Defaults | keyof O]: K extends keyof O ? O[K]
        : K extends keyof Defaults ? Defaults[K]
        : never
      }
    >()

    const options = getOptions({
      retryMs: 1000,
      validateSchema: false,
    } as Record<string, number | boolean>)
    expect(options).type.toBe<{
      [x: string]: number | boolean
    }>()
  })

  test('object literal', () => {
    const defaults = {
      retryMs: 500,
      url: 'http://example.com',
    } as const
    type Defaults = typeof defaults

    const getOptions = assignDefaults(defaults)

    // @tstyche fixme -- This doesn't work but it should
    expect(getOptions).type.toBe<
      <O extends UnknownRecord>(
        base: O
      ) => {
        [K in keyof Defaults | keyof O]: K extends keyof O ? O[K]
        : K extends keyof Defaults ? Defaults[K]
        : never
      }
    >()

    const options = getOptions({ retryMs: 1000 } as const)
    expect(options).type.toBe<{
      retryMs: 1000
      url: 'http://example.com'
    }>()
  })

  test('map', () => {
    const defaults = new Map<string, number | string>([
      ['retryMs', 500],
      ['url', 'http://example.com'],
    ])
    const getOptions = assignDefaults(defaults)
    expect(getOptions).type.toBe<
      <K2, V2>(
        collection: ReadonlyMap<K2, V2>
      ) => Map<string | K2, (string | number) | V2>
    >()

    const options = getOptions(
      new Map<string, number | boolean>([
        ['retryMs', 1000],
        ['validateSchema', false],
      ])
    )
    expect(options).type.toBe<Map<string, string | number | boolean>>()
  })
})
