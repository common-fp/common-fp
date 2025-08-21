import { expect } from 'chai'
import { objToMap } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import assignOverrides from '#lib/assign-overrides'

suite('assign-overrides', () => {
  test('map', () => {
    const ab = objToMap({ a: 1, b: 2 })
    const ac = objToMap({ a: 2, c: 3 })
    const expectedAbc = objToMap({ a: 1, b: 2, c: 3 })
    const result = assignOverrides(ab)(ac)
    expect(result).to.deep.equal(expectedAbc)
  })

  test('object', () => {
    const ab = { a: 1, b: 2 }
    const ac = { a: 2, c: 3 }
    const expectedAbc = { a: 1, b: 2, c: 3 }
    const result = assignOverrides(ab)(ac)
    expect(result).to.deep.equal(expectedAbc)
  })

  test('shared internals are called as expected', () => {
    const ab = { a: 1, b: 2 }
    const ac = { a: 2, c: 3 }
    const assignOverridesAB = assignOverrides(ab)

    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      [
        'object',
        'overrides',
        si.commonTypes.keyedCollection,
        'assignOverrides',
      ],
    ])

    assignOverridesAB(ac)
    expect(si.getType.argsPerCall).to.deep.equal([[ab], [ac]])
    expect(si.assertArgSharesTypeWith.argsPerCall).to.deep.equal([
      [
        {
          argName: 'base',
          argType: 'object',
          sharedArgName: 'overrides',
          sharedArgType: 'object',
          utilName: 'assignOverrides',
        },
      ],
    ])
  })
})
