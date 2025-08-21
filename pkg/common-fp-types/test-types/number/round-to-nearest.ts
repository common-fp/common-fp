import { describe, expect, test } from 'tstyche'
import roundToNearest from '#src/number/round-to-nearest'

describe('number/round-to-nearest', () => {
  test('return function', () => {
    const roundToNearestTenth = roundToNearest('0.1')
    expect(roundToNearestTenth).type.toBe<(aNumber: number) => number>()
  })

  test('valid precisions', () => {
    expect(roundToNearest('0.1')).type.not.toRaiseError()
    expect(roundToNearest('1')).type.not.toRaiseError()
    // 9 zeroes
    expect(roundToNearest('0.0000000001')).type.not.toRaiseError()
    expect(roundToNearest('1000000000')).type.not.toRaiseError()
  })

  test('invalid precisions', () => {
    // @ts-expect-error Argument of type '"0.2"' is not assignable to parameter of type 'Precision'
    roundToNearest('0.2')

    // @ts-expect-error Argument of type '"01"' is not assignable to parameter of type 'Precision'
    roundToNearest('01')

    // 10 zeroes
    // @ts-expect-error Argument of type '"0.00000000001"' is not assignable to parameter of type 'Precision'
    roundToNearest('0.00000000001')

    // @ts-expect-error Argument of type '"10000000000"' is not assignable to parameter of type 'Precision'
    roundToNearest('10000000000')
  })
})
