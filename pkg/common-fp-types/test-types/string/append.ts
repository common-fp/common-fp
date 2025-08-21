import { describe, expect, test } from 'tstyche'
import mapValues from '#src/map-values'
import append from '#src/string/append'

describe('string/append', () => {
  const appendJen = append('Jen')

  test('happy path', () => {
    const res = appendJen('Dr. ')
    expect(res).type.toBe('Dr. Jen')
  })

  test('general string', () => {
    const appendStr = append('Jen' as string)
    const res = appendStr('Dr. ' as string)
    expect(res).type.toBe<string>()
  })

  test('defaults to a string when no generic is bound', () => {
    expect(mapValues(appendJen)).type.not.toRaiseError()
  })
})
