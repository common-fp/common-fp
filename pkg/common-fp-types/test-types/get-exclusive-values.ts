import { expect, test } from 'tstyche'
import getExclusiveValues from '#src/get-exclusive-values'

test('get-exclusive-values', () => {
  const resNum = getExclusiveValues([
    [1, 2],
    [2, 3],
  ])
  expect(resNum).type.toBe<number[]>()

  // to call getExclusiveValues against various types we can either
  // 1. pass the element type via the generic
  const resNumStr1 = getExclusiveValues<string | number>([
    [1, 2],
    ['2', '3'],
  ])
  expect(resNumStr1).type.toBe<(string | number)[]>()

  // or 2. pass in an array with the type already declared (this will usually
  // be the case)
  const arr: (string | number)[][] = [
    [1, 2],
    ['2', '3'],
  ]
  const resNumStr2 = getExclusiveValues(arr)
  expect(resNumStr2).type.toBe<(string | number)[]>()
})
