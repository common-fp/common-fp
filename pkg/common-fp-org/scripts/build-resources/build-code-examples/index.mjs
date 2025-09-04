import buildApiDataExamples from './build-api-data-examples.mjs'
import buildMiscExamples from './build-misc-examples.mjs'
import buildPageExamples from './build-page-examples.mjs'
import cleanBuiltDirs from './clean-built-dirs.mjs'

const buildCodeExamples = async () => {
  await cleanBuiltDirs()
  await Promise.all([
    buildApiDataExamples(),
    buildPageExamples(),
    buildMiscExamples(),
  ])
}

export default buildCodeExamples
