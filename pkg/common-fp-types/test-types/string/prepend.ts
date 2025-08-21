import { describe, expect, test } from 'tstyche'
import mapValues from '#src/map-values'
import prepend from '#src/string/prepend'

describe('string/prepend', () => {
  test('happy path', () => {
    const prependDr = prepend('Dr. ')
    const res = prependDr('Mike')
    expect(res).type.toBe('Dr. Mike')
  })

  test('general string', () => {
    const prependDr = prepend('Dr. ' as string)
    const res = prependDr('Mike' as string)
    expect(res).type.toBe<string>()
  })

  test('mixed', () => {
    const prependDr = prepend('Dr. ')
    const res = prependDr('Mike' as string)
    expect(res).type.toBe<`Dr. ${string}`>()
  })

  test('defaults to a string when no generic is bound', () => {
    const prependDr = prepend('Dr. ')
    expect(mapValues(prependDr)).type.not.toRaiseError()
  })
})
