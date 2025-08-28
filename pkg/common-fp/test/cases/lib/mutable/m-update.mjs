import { expect } from 'chai'
import { objToMap, spy, suiteWithResources } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import mUpdate from '#lib/mutable/m-update'

suite('mutable/m-update', () => {
  const inc = n => n + 1
  const dec = n => n - 1
  const noMatch = spy(() => {})

  suiteWithResources('returns the expected result', [noMatch], () => {
    test('array mappers', () => {
      const tick = mUpdate([inc, dec, noMatch])
      const arr = [1, 5]
      const res = tick(arr)
      expect(res).to.deep.equal([2, 4])
      expect(res).to.equal(arr)
      expect(noMatch.calls.length).to.equal(0)
    })

    test('map mappers', () => {
      const tick = mUpdate(objToMap({ a: inc, b: dec, c: noMatch }))
      const aMap = objToMap({ a: 1, b: 5 })
      const res = tick(aMap)
      expect(res).to.deep.equal(objToMap({ a: 2, b: 4 }))
      expect(res).to.equal(aMap)
      expect(noMatch.calls.length).to.equal(0)
    })

    test('object mappers', () => {
      const tick = mUpdate({ 0: inc, 1: dec, 2: noMatch })
      const arr = [1, 5]
      const resArr = tick(arr)
      expect(resArr).to.deep.equal([2, 4])
      expect(resArr).to.equal(arr)

      const obj = { 0: 1, 1: 5 }
      const resObj = tick(obj)
      expect(resObj).to.deep.equal({ 0: 2, 1: 4 })
      expect(resObj).to.equal(obj)

      const aMap = objToMap({ 0: 1, 1: 5 })
      const resMap = tick(aMap)
      expect(resMap).to.deep.equal(objToMap({ 0: 2, 1: 4 }))
      expect(resMap).to.equal(aMap)
      expect(noMatch.calls.length).to.equal(0)
    })
  })

  test('mappers are called as expected', () => {
    const incSpy = spy(inc)
    const decSpy = spy(dec)

    const tick = mUpdate([incSpy, decSpy])
    const coll = [1, 5]
    tick(coll)
    expect(incSpy.argsPerCall).to.deep.equal([[1, 0, coll]])
    expect(decSpy.argsPerCall).to.deep.equal([[5, 1, coll]])
  })

  test('shared internals are called as expected', () => {
    const mapperFns = [inc, dec]

    const tick = mUpdate(mapperFns)
    expect(si.assertArgHasValuesOfType.argsPerCall).to.deep.equal([
      [mapperFns, 'mapperFns', 'function', 'mUpdate'],
    ])

    const coll = [1, 5]
    tick(coll)
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'mapperFns', si.commonTypes.entryCollection, 'mUpdate'],
      ['array', 'collection', si.commonTypes.entryCollection, 'mUpdate'],
    ])
  })

  test('array and map mappers must match collection', () => {
    const arrMappers = [inc, dec]
    const tickArr = mUpdate(arrMappers)
    expect(() => tickArr({})).to.throw(
      `mUpdate requires argument 'collection' to be an array since you passed an array for 'mapperFns'`
    )

    const mapMappers = objToMap({ a: inc, b: dec })
    const tickMap = mUpdate(mapMappers)
    expect(() => tickMap({})).to.throw(
      `mUpdate requires argument 'collection' to be a map since you passed a map for 'mapperFns'`
    )
  })
})
