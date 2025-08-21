import { kebabCase } from 'change-case'

/*
 * This function normalizes data such as ./api-data.mjs such that it's easier to
 * build suites/tests dynamically.
 *
 * Specifically it returns an array of objects with the structure
 * {
 *   dirName,
 *   dirFileName,
 *   tests: [{
 *     exampleName,
 *     exampleFileName,
 *     jsResults,
 *     tsResults,
 *   }]
 * }
 * These can be easily iterated and dynamically tested
 *
 * I know this complexity goes against testing best practice, however I'm afraid
 * the typical copy/paste used elsewhere will create maintenance monsters.
 */

const normalizeTestData = testData => {
  const normalized = []

  for (const [dirName, utilData] of Object.entries(testData)) {
    const tests = []
    const suite = { dirName, dirFileName: kebabCase(dirName), tests }

    for (const [exampleName, exampleData] of Object.entries(utilData)) {
      const exampleFileName = kebabCase(exampleName)

      if (Array.isArray(exampleData)) {
        const expectedResults = exampleData
        tests.push({
          exampleName,
          exampleFileName,
          jsResults: expectedResults,
          tsResults: expectedResults,
        })
      } else {
        const { js, ts } = exampleData
        tests.push({
          exampleName,
          exampleFileName,
          jsResults: js,
          tsResults: ts,
        })
      }
    }

    normalized.push(suite)
  }

  return normalized
}

export default normalizeTestData
