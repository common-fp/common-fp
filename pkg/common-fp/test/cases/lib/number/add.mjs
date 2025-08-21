import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import add from '#lib/number/add'

suite('number/add', () => {
  test('returns the expected result', () => {
    const n1 = 1
    const n2 = 2
    expect(add(n1)(n2)).to.equal(3)
  })

  test('shared internals are called as expected', () => {
    const n1 = 1
    const n2 = 2
    add(n1)(n2)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [n1, 'n1', 'number', 'add'],
      [n2, 'n2', 'number', 'add'],
    ])
  })
})
