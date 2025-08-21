import ensureValidExampleExtensions from './ensure-valid-example-extensions.mjs'
import buildMiscIndexFiles from './build-misc-index-files.mjs'
import buildExampleSourceFiles from './build-example-source-files.mjs'
import { fromRoot } from '../../utils/index.mjs'

const buildMiscExamples = async () => {
  const codeExamplesGlob = fromRoot('code-examples/misc')
  await ensureValidExampleExtensions({ codeExamplesGlob })

  const getBuiltFpath = ({ fname }) => {
    return `app/built/code-examples/misc/code/${fname}`
  }

  await Promise.all([
    buildExampleSourceFiles({ codeExamplesGlob, getBuiltFpath }),
    buildMiscIndexFiles(),
  ])
}

export default buildMiscExamples
