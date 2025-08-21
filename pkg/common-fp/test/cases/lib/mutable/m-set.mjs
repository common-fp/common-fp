import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mSet from '#lib/mutable/m-set'

suite('mutable/m-set', () => {
  test('returns the expected result', () => {
    const obj = { a: 1 }
    mSet('b', 2)(obj)
    expect(obj).to.deep.equal({ a: 1, b: 2 })
  })

  test('key not assignable', () => {
    let errorOccurred = false
    try {
      mSet('a', 'c')(1)
    } catch (err) {
      errorOccurred = true
      expect(err.message).to.equal(
        'mSet requires key to be assignable.  See error properties for more info.'
      )
      expect(err.innerError.message).to.equal(
        "Cannot create property 'a' on number '1'"
      )
      expect(err.arguments).to.deep.equal({ key: 'a', value: 'c', anything: 1 })
    }
    expect(errorOccurred).to.be.true
  })

  test('shared internals are called as expected', () => {
    mSet('b', 2)
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      ['b', 'key', si.commonTypes.propertyKey, 'mSet'],
    ])
  })
})
