import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import compareByProp from '#lib/compare/compare-by-prop'

suite('compare/compare-by-prop', () => {
  const asc = (left, right) => left.localeCompare(right)

  test('returns the expected result', () => {
    const byNameAsc = compareByProp('name', asc)

    expect(byNameAsc({ name: 'meg' }, { name: 'tom' })).to.equal(
      'meg'.localeCompare('tom')
    )
    expect(byNameAsc(undefined, undefined)).to.equal(0)
    expect(byNameAsc(undefined, { name: 'meg' })).to.equal(1)
    expect(byNameAsc({ name: 'meg' }, undefined)).to.equal(-1)
  })

  test('compareFn is called as expected', () => {
    const ascSpy = spy(asc)
    const byNameAsc = compareByProp('name', ascSpy)
    byNameAsc({ name: 'meg' }, { name: 'tom' })
    expect(ascSpy.argsPerCall).to.deep.equal([['meg', 'tom']])
  })

  test('shared internals are called as expected', () => {
    compareByProp('name', asc)

    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      ['name', 'key', si.commonTypes.propertyKey, 'compareByProp'],
    ])
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [asc, 'compareFn', 'function', 'compareByProp'],
    ])
  })
})
