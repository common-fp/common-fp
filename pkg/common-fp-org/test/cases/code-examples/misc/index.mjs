import { expect } from 'chai'
import miscData from '#test/data/misc'
import normalizeTestData from '#test/normalize-test-data'
import makeArgsMatchExpectedResults from '#test/make-args-match-expected-results'
import getDoesTsExampleExist from '#test/get-does-ts-example-exist'

const normalizedData = normalizeTestData(miscData)
const doesTsExampleExist = await getDoesTsExampleExist('misc')

suite('code-examples/misc', () => {
  // misc doesn't have nested structures, so it only has one entry
  const { tests } = normalizedData[0]

  for (const t of tests) {
    const { exampleName, exampleFileName, jsResults, tsResults } = t
    const tsExampleExists = doesTsExampleExist(exampleFileName)

    test(`${exampleName} - js`, async () => {
      await import(
        `#code-examples/misc/code/${exampleFileName}_tablet-and-larger_full.js`
      )
      const argsMatchExpectedResults = makeArgsMatchExpectedResults(jsResults)
      expect(global.show.argsPerCall).to.satisfy(argsMatchExpectedResults)
    })

    // no need to test the typescript output if it's a copy of js
    if (tsExampleExists) {
      test(`${exampleName} - ts`, async () => {
        try {
          await import(
            `#code-examples/misc/code/${exampleFileName}_tablet-and-larger_full.ts`
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
        const argsMatchExpectedResults = makeArgsMatchExpectedResults(tsResults)
        expect(global.show.argsPerCall).to.satisfy(argsMatchExpectedResults)
      })
    }
  }
})
