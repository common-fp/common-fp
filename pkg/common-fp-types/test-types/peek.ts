import { expect, test } from 'tstyche'
import peek from '#src/peek'

test('peek', () => {
  const fn = (_str: string) => {}
  const res = peek(fn)
  expect(res).type.toBe<(resultOfPreviousFunction: string) => string>()
})
