import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import passThrough from '#lib/pass-through'

const inc = n => n + 1
const double = n => n * 2
const dec = n => n - 1

suite('pass-through', () => {
  test('returns the expected result', () => {
    const fnArray = [inc, double, inc, dec]
    expect(passThrough(0, fnArray)).to.equal(2)
  })

  test('functions are called as expected', () => {
    const [incSpy, doubleSpy, decSpy] = [inc, double, dec].map(spy)
    const fnArray = [incSpy, doubleSpy, incSpy, decSpy]
    expect(passThrough(0, fnArray)).to.equal(2)

    expect(incSpy.argsPerCall).to.deep.equal([[0], [2]])
    expect(doubleSpy.argsPerCall).to.deep.equal([[1]])
    expect(decSpy.argsPerCall).to.deep.equal([[3]])
  })

  test('calls shared internals as expected', () => {
    const fnArray = []
    passThrough(0, fnArray)
    expect(si.assertArgIsArrayOfType.argsPerCall).to.deep.equal([
      [fnArray, 'fnArray', 'function', 'passThrough'],
    ])
  })
})
