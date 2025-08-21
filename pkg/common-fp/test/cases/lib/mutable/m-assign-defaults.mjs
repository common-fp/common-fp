import { expect } from 'chai'
import { objToMap } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import mAssignDefaults from '#lib/mutable/m-assign-defaults'

suite('mutable/m-assign-defaults', () => {
  suite('returns the expected results', () => {
    test('map', () => {
      const ab = objToMap({ a: 1, b: 2 })
      const ac = objToMap({ a: 2, c: 3 })
      const expectedAbc = objToMap({ a: 2, b: 2, c: 3 })
      const result = mAssignDefaults(ab)(ac)
      expect(result).to.deep.equal(expectedAbc)
      expect(result).to.equal(ac)
    })

    test('object', () => {
      const ab = { a: 1, b: 2 }
      const ac = { a: 2, c: 3 }
      const expectedAbc = { a: 2, b: 2, c: 3 }
      const result = mAssignDefaults(ab)(ac)
      expect(result).to.deep.equal(expectedAbc)
      expect(result).to.equal(ac)
    })
  })

  test('shared internals are called as expected', () => {
    const ab = { a: 1, b: 2 }
    const assignDefaultsAB = mAssignDefaults(ab)

    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['object', 'defaults', si.commonTypes.keyedCollection, 'mAssignDefaults'],
    ])

    const ac = { a: 2, c: 3 }
    assignDefaultsAB(ac)
    expect(si.assertArgSharesTypeWith.argsPerCall).to.deep.equal([
      [
        {
          argName: 'base',
          argType: 'object',
          sharedArgName: 'defaults',
          sharedArgType: 'object',
          utilName: 'mAssignDefaults',
        },
      ],
    ])
  })
})
