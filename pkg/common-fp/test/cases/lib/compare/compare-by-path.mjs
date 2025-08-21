import { expect } from 'chai'
import {
  getAtPath as internalGetAtPath,
  sharedInternals as si,
} from '#test/spies'
import { spy } from '@common-fp/test-utils'
import compareByPath from '#lib/compare/compare-by-path'

suite('compare/compare-by-path', () => {
  const asc = (left, right) => left - right
  const path = ['street', 'number']
  const addr1 = { street: { number: 102 } }
  const addr2 = { street: { number: 100 } }

  test('returns expected result', () => {
    const compareByStreetNumberAsc = compareByPath(path, asc)
    const res = compareByStreetNumberAsc(addr1, addr2)
    expect(res).to.equal(2)

    expect(compareByStreetNumberAsc(undefined, undefined)).to.equal(0)
    expect(compareByStreetNumberAsc(undefined, addr2)).to.equal(1)
    expect(compareByStreetNumberAsc(addr1, undefined)).to.equal(-1)
  })

  test('compareFn is called as expected', () => {
    const ascSpy = spy(asc)
    const compareByStreetNumberAsc = compareByPath(path, ascSpy)

    compareByStreetNumberAsc(addr1, addr2)
    expect(ascSpy.argsPerCall).to.deep.equal([[102, 100]])
  })

  test('internal getPath called as expected', () => {
    const compareByStreetNumberAsc = compareByPath(path, asc)
    compareByStreetNumberAsc(addr1, addr2)

    expect(internalGetAtPath.argsPerCall).to.deep.equal([
      [path, addr1],
      [path, addr2],
    ])
  })

  test('shared internals are called as expected', () => {
    compareByPath(path, asc)

    expect(si.assertArgIsArrayOfAcceptedTypes.argsPerCall).to.deep.equal([
      [path, 'path', si.commonTypes.propertyKey, 'compareByPath'],
    ])
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [asc, 'compareFn', 'function', 'compareByPath'],
    ])
  })
})
