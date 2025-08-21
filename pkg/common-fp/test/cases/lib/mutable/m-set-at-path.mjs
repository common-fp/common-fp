import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import mSetAtPath from '#lib/mutable/m-set-at-path'

suite('mutable/m-set-at-path', () => {
  test('returns the expected value', () => {
    const obj = { a: 0, b: { key: 'b', value: 0 } }
    const path = ['b', 'value']
    const result = mSetAtPath(path, 1)(obj)
    expect(result).to.deep.equal({ a: 0, b: { key: 'b', value: 1 } })
    expect(result).to.equal(obj)
  })

  suite('error cases', () => {
    test('empty path', () => {
      expect(() => mSetAtPath([], 'any value')).to.throw(
        `mSetAtPath requries 'path' to be a non-empty array`
      )
    })

    test('path not on obj', () => {
      const emptyObj = {}
      const path = ['a', 'b']
      let errorOccurred = false
      try {
        mSetAtPath(path, 'c')(emptyObj)
      } catch (err) {
        errorOccurred = true
        expect(err.message).to.equal(
          "mSetAtPath requires path to exist on 'anything'.  Arguments are assigned to this error to aid in debugging."
        )
        expect(err.arguments).to.deep.equal({
          path,
          value: 'c',
          anything: emptyObj,
        })
      }
      expect(errorOccurred).to.be.true
    })

    test('property at path not assignable', () => {
      const obj = { a: 'some string' }
      const path = ['a', 'b']
      let errorOccurred = false
      try {
        mSetAtPath(path, 'c')(obj)
      } catch (err) {
        errorOccurred = true
        expect(err.message).to.equal(
          'mSetAtPath requires the property at path to be assignable.  See error properties for more info.'
        )
        expect(err.arguments).to.deep.equal({
          path,
          value: 'c',
          anything: obj,
        })
        expect(err.innerError.message).to.equal(
          "Cannot create property 'b' on string 'some string'"
        )
      }
      expect(errorOccurred).to.be.true
    })
  })

  test('shared internals are called as expected', () => {
    const obj = { a: 'b' }
    mSetAtPath(['a'], obj)
    expect(si.assertArgIsArrayOfAcceptedTypes.argsPerCall).to.deep.equal([
      [['a'], 'path', si.commonTypes.propertyKey, 'mSetAtPath'],
    ])
  })
})
