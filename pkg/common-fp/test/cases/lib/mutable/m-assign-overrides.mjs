import { expect } from 'chai'
import { objToMap } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import mAssignOverrides from '#lib/mutable/m-assign-overrides'

suite('mutable/m-assign-overrides', () => {
  suite('returns the expected result', () => {
    test('map', () => {
      const overrides = objToMap({ a: 1, b: 2 })
      const base = objToMap({ a: 2, c: 3 })
      const expectedAbc = objToMap({ a: 1, b: 2, c: 3 })
      const result = mAssignOverrides(overrides)(base)

      expect(result).to.deep.equal(expectedAbc)
      expect(result).to.equal(base)
    })

    test('object', () => {
      const overrides = { a: 1, b: 2 }
      const base = { a: 2, c: 3 }
      const expectedAbc = { a: 1, b: 2, c: 3 }
      const result = mAssignOverrides(overrides)(base)

      expect(result).to.deep.equal(expectedAbc)
      expect(result).to.equal(base)
    })
  })

  test('shared internals are called as expected', () => {
    const ab = { a: 1, b: 2 }
    const assignOverridesAB = mAssignOverrides(ab)

    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      [
        'object',
        'overrides',
        si.commonTypes.keyedCollection,
        'mAssignOverrides',
      ],
    ])

    const ac = { a: 2, c: 3 }
    assignOverridesAB(ac)
    expect(si.assertArgSharesTypeWith.argsPerCall).to.deep.equal([
      [
        {
          argName: 'base',
          argType: 'object',
          sharedArgName: 'overrides',
          sharedArgType: 'object',
          utilName: 'mAssignOverrides',
        },
      ],
    ])
  })
})
