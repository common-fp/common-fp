import { expect } from 'chai'
import apiData from '#test/data/api/index'
import normalizeTestData from '#test/normalize-test-data'
import makeArgsMatchExpectedResults from '#test/make-args-match-expected-results'
import getDoesTsExampleExist from '#test/get-does-ts-example-exist'

const normalizedData = normalizeTestData(apiData)
const doesTsExampleExist = await getDoesTsExampleExist('api')

suite('code-examples/api', () => {
  for (const { dirName, dirFileName, tests } of normalizedData) {
    suite(dirName, () => {
      for (const t of tests) {
        const { exampleName, exampleFileName, jsResults, tsResults } = t
        const tsExampleExists = doesTsExampleExist(exampleFileName, dirFileName)

        test(`${exampleName} - js`, async () => {
          await import(
            `#code-examples/api/${dirFileName}/code/${exampleFileName}_tablet-and-larger_full.js`
          )
          const argsMatchExpectedResults =
            makeArgsMatchExpectedResults(jsResults)
          expect(global.show.argsPerCall).to.satisfy(argsMatchExpectedResults)
        })

        // no need to test the typescript output if it's a copy of js
        if (tsExampleExists) {
          test(`${exampleName} - ts`, async () => {
            try {
              await import(
                `#code-examples/api/${dirFileName}/code/${exampleFileName}_tablet-and-larger_full.ts`
              )
            } catch (err) {
              const expectedMsg = tsResults.at(-1)?.expectErrorWithMessage
              if (expectedMsg) {
                expect(err.message).to.equal(expectedMsg)
                tsResults.pop()
              } else {
                throw err
              }
            }
            const argsMatchExpectedResults =
              makeArgsMatchExpectedResults(tsResults)
            expect(global.show.argsPerCall).to.satisfy(argsMatchExpectedResults)
          })
        }
      }
    })
  }
})
