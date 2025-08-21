import { describe, expect, test } from 'tstyche'
import mapValues from '#src/map-values'
import sumValues from '#src/sum-values'

describe('sum-values', () => {
  test('defaults to Collection<number> when no generic is bound', () => {
    expect(mapValues(sumValues)).type.not.toRaiseError()
  })
})
