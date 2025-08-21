import { expect } from 'chai'
import { objToMap } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import assignDefaults from '#lib/assign-defaults'

suite('assign-defaults', () => {
  test('map', () => {
    const ab = objToMap({ a: 1, b: 2 })
    const ac = objToMap({ a: 2, c: 3 })
    const expectedAbc = objToMap({ a: 2, b: 2, c: 3 })
    const result = assignDefaults(ab)(ac)
    expect(result).to.deep.equal(expectedAbc)
  })

  test('object', () => {
    const ab = { a: 1, b: 2 }
    const ac = { a: 2, c: 3 }
    const expectedAbc = { a: 2, b: 2, c: 3 }
    const result = assignDefaults(ab)(ac)
    expect(result).to.deep.equal(expectedAbc)
  })

  test('shared internals are called as expected', () => {
    const ab = { a: 1, b: 2 }
    const ac = { a: 2, c: 3 }
    const assignDefaultsAB = assignDefaults(ab)

    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['object', 'defaults', si.commonTypes.keyedCollection, 'assignDefaults'],
    ])

    assignDefaultsAB(ac)
    expect(si.getType.argsPerCall).to.deep.equal([[ab], [ac]])
    expect(si.assertArgSharesTypeWith.argsPerCall).to.deep.equal([
      [
        {
          argName: 'base',
          argType: 'object',
          sharedArgName: 'defaults',
          sharedArgType: 'object',
          utilName: 'assignDefaults',
        },
      ],
    ])
  })
})
