import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import pPassThrough from '#lib/async/p-pass-through'

suite('async/p-pass-through', () => {
  const inc = async n => n + 1
  const double = async n => n * 2
  const dec = async n => n - 1

  test('returns the expected result', async () => {
    const fnArray = [inc, double, inc, dec]
    const result = await pPassThrough(0, fnArray)
    expect(result).to.equal(2)
  })

  test('calls the functions as expected', async () => {
    const [incSpy, doubleSpy, decSpy] = [inc, double, dec].map(spy)
    const fnArray = [incSpy, doubleSpy, incSpy, decSpy]
    await pPassThrough(0, fnArray)

    expect(incSpy.argsPerCall).to.deep.equal([[0], [2]])
    expect(doubleSpy.argsPerCall).to.deep.equal([[1]])
    expect(decSpy.argsPerCall).to.deep.equal([[3]])
  })

  test('shared internals are called as expected', async () => {
    const fnArray = []
    await pPassThrough(0, fnArray)
    expect(si.assertArgIsArrayOfType.argsPerCall).to.deep.equal([
      [fnArray, 'fnArray', 'function', 'pPassThrough'],
    ])
  })
})
