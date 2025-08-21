import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import pCompose from '#lib/async/p-compose'

suite('async/p-compose', () => {
  const inc = async n => n + 1
  const double = async n => n * 2
  const dec = async n => n - 1

  test('returns the expected result', async () => {
    expect(await pCompose([])(0, 1)).to.equal(0)

    const fnArray = [inc, double, inc, dec]
    expect(await pCompose(fnArray)(0)).to.equal(2)
  })

  test('functions are called as expected', async () => {
    const [incSpy, doubleSpy, decSpy] = [inc, double, dec].map(spy)
    const fnArray = [incSpy, doubleSpy, incSpy, decSpy]

    await pCompose(fnArray)(0)
    expect(incSpy.argsPerCall).to.deep.equal([[0], [2]])
    expect(doubleSpy.argsPerCall).to.deep.equal([[1]])
    expect(decSpy.argsPerCall).to.deep.equal([[3]])
  })

  test('shared internals are called as expected', () => {
    const fnArray = []
    pCompose(fnArray)
    expect(si.assertArgIsArrayOfType.argsPerCall).to.deep.equal([
      [fnArray, 'fnArray', 'function', 'compose'],
    ])
  })
})
