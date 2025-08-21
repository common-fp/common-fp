import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import compose from '#lib/compose'

const inc = n => n + 1
const double = n => n * 2
const dec = n => n - 1

suite('compose', () => {
  test('returns expected result', () => {
    const fnArray = [inc, double, inc, dec]
    expect(compose(fnArray)(0)).to.equal(2)
    expect(compose([])(0, 1)).to.equal(0)
  })

  test('functions are called as expected', () => {
    const [incSpy, doubleSpy, decSpy] = [inc, double, dec].map(spy)

    const fnArray = [incSpy, doubleSpy, incSpy, decSpy]
    compose(fnArray)(0, 1)

    expect(incSpy.argsPerCall).to.deep.equal([[0, 1], [2]])
    expect(doubleSpy.argsPerCall).to.deep.equal([[1]])
    expect(decSpy.argsPerCall).to.deep.equal([[3]])
  })

  test('shared internals are called as expected', () => {
    const fnArray = [inc, double]

    compose(fnArray)
    expect(si.assertArgIsArrayOfType.argsPerCall).to.deep.equal([
      [fnArray, 'fnArray', 'function', 'compose'],
    ])
  })
})
