import * as chai from 'chai'
import mapTo from './map-to.mjs'

const { Assertion } = chai

const validateGetFnArgs = (actual, expected) => {
  const getFnAssertion = new Assertion()
  getFnAssertion.assert(
    actual.length === expected.length,
    `expected getFn to be called ${expected.length} times but it was called ${actual.length} times`,
    'unused'
  )

  const actualCalls = arrToObjs(actual)
  const expectedCalls = arrToObjs(expected)
  for (let i = 0; i < actualCalls.length; i += 1) {
    const a = actualCalls[i]
    const e = expectedCalls[i]

    getFnAssertion.assert(
      chai.util.eql(a.typeToFnName, e.typeToFnName),
      `getFn call[${i}] was passed an unexpected typeToFn`,
      'unused',
      e.typeToFnName,
      a.typeToFnName
    )

    getFnAssertion.assert(
      chai.util.eql(a.collection, e.collection),
      `getFn call[${i}] was passed an unexpected collection`,
      'unused',
      e.collection,
      a.collection
    )

    getFnAssertion.assert(
      chai.util.eql(a.utilName, e.utilName),
      `getFn call[${i}] was passed an unexpected utilName`,
      'unused',
      e.utilName,
      a.utilName
    )
  }
}

function arrToObjs(calls) {
  return calls.map(([typeToFn, collection, utilName]) => ({
    typeToFnName: mapTo(f => `<function> ${f.name}`, typeToFn),
    collection,
    utilName,
  }))
}

export default validateGetFnArgs
