import path from 'node:path'
import { globby } from 'globby'

const ensureValidExampleExtensions = async ({ codeExamplesGlob }) => {
  const pathToAllExamples = path.resolve(codeExamplesGlob, 'code/*')
  const pathToValidExamples = pathToAllExamples + '.{js,ts}'
  const invalidExamples = await globby([
    pathToAllExamples,
    `!${pathToValidExamples}`,
  ])
  if (invalidExamples.length) {
    let errMsg = 'code-examples must have *.js or *.ts extensions\n\n'
    errMsg += 'invalid examples: ' + JSON.stringify(invalidExamples, null, 2)
    throw new Error(errMsg)
  }
}

export default ensureValidExampleExtensions
