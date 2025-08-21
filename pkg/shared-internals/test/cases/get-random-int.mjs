import { expect } from 'chai'
import { createStubResource, testWithResources } from '@common-fp/test-utils'
import getRandomInt from '#src/get-random-int'

const randomResource = createStubResource(Math, 'random')

const resources = [randomResource]

testWithResources('get-random-int', resources, () => {
  randomResource.stub.resultPerCall = [0.1, 0.3, 0.5, 0.6, 0.9]
  const actualResults = [
    getRandomInt(1, 5),
    getRandomInt(1, 5),
    getRandomInt(1, 5),
    getRandomInt(1, 5),
    getRandomInt(1, 5),
  ]
  expect(actualResults).to.deep.equal([1, 2, 3, 4, 5])
})
