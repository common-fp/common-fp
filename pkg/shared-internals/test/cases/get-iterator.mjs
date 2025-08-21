import { expect } from 'chai'
import { createStubResource, testWithResources } from '@common-fp/test-utils'
import getType from '#test/spies/get-type'
import getIterator from '#src/get-iterator'

suite('get-iterator', () => {
  const objValuesResource = createStubResource(Object, 'values')
  testWithResources('object', [objValuesResource], () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(Array.from(getIterator('values', obj))).to.deep.equal([1, 2, 3])
    expect(objValuesResource.stub.argsPerCall).to.deep.equal([[obj]])
  })

  const arr = ['a', 'b', 'c']
  const arrValuesResource = createStubResource(Array.prototype, 'values')
  testWithResources('not object', [arrValuesResource], () => {
    expect(Array.from(getIterator('values', arr))).to.deep.equal([
      'a',
      'b',
      'c',
    ])
    expect(arrValuesResource.stub.argsPerCall).to.deep.equal([[]])
  })

  test('only calls getType as necessary', () => {
    expect(Array.from(getIterator('values', arr))).to.deep.equal([
      'a',
      'b',
      'c',
    ])
    expect(getType.argsPerCall).to.deep.equal([[arr]])

    getType.reset()
    expect(Array.from(getIterator('values', arr, 'array'))).to.deep.equal([
      'a',
      'b',
      'c',
    ])
    expect(getType.argsPerCall).to.deep.equal([])
  })

  test('validate iteratorType', () => {
    expect(() => getIterator('bad')).to.throw(
      "iteratorType must be one of 'values', 'keys' or 'entries'"
    )
  })
})
