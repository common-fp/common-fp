import { expect } from 'chai'
import { objToMap, spy, suiteWithResources } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import update from '#lib/update'

suite('update', () => {
  const inc = n => n + 1
  const dec = n => n - 1
  const noMatch = spy(() => {})

  suiteWithResources('returns the expected result', [noMatch], () => {
    test('array mappers', () => {
      const tick = update([inc, dec, noMatch])
      expect(tick([1, 5])).to.deep.equal([2, 4])
      expect(noMatch.calls.length).to.equal(0)
    })

    test('map mappers', () => {
      const tick = update(objToMap({ a: inc, b: dec, c: noMatch }))
      expect(tick(objToMap({ a: 1, b: 5 }))).to.deep.equal(
        objToMap({ a: 2, b: 4 })
      )
      expect(noMatch.calls.length).to.equal(0)
    })

    test('object mappers', () => {
      const tick = update({ 0: inc, 1: dec, 2: noMatch })
      expect(tick([1, 5])).to.deep.equal([2, 4])
      expect(tick({ 0: 1, 1: 5 })).to.deep.equal({ 0: 2, 1: 4 })
      expect(tick(objToMap({ 0: 1, 1: 5 }))).to.deep.equal(
        objToMap({ 0: 2, 1: 4 })
      )
      expect(noMatch.calls.length).to.equal(0)
    })
  })

  test('mappers are called as expected', () => {
    const incSpy = spy(inc)
    const decSpy = spy(dec)
    const tick = update([incSpy, decSpy])
    const coll = [1, 5]
    tick(coll)
    expect(incSpy.argsPerCall).to.deep.equal([[1, 0, coll]])
    expect(decSpy.argsPerCall).to.deep.equal([[5, 1, coll]])
  })

  test('shared internals are called as expected', () => {
    const mapperFns = [inc, dec]

    const tick = update(mapperFns)
    expect(si.assertArgHasValuesOfType.argsPerCall).to.deep.equal([
      [mapperFns, 'mapperFns', 'function', 'update'],
    ])

    const coll = [1, 5]
    tick(coll)
    expect(si.getType.argsPerCall).to.deep.equal([[mapperFns], [coll]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'mapperFns', si.commonTypes.entryCollection, 'update'],
      ['array', 'collection', si.commonTypes.entryCollection, 'update'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['entries', mapperFns, 'array'],
    ])
  })

  test('array and map mappers must match collection', () => {
    const arrMappers = [inc, dec]
    const tickArr = update(arrMappers)
    expect(() => tickArr({})).to.throw(
      `update requires argument 'collection' to be an array since you passed an array for 'mapperFns'`
    )

    const mapMappers = objToMap({ a: inc, b: dec })
    const tickMap = update(mapMappers)
    expect(() => tickMap({})).to.throw(
      `update requires argument 'collection' to be a map since you passed a map for 'mapperFns'`
    )
  })
})
