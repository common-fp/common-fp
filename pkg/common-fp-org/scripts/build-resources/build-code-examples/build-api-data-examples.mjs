import ensureValidExampleExtensions from './ensure-valid-example-extensions.mjs'
import buildApiIndexFiles from './build-api-index-files.mjs'
import buildExampleSourceFiles from './build-example-source-files.mjs'
import { fromRoot } from '../../utils/index.mjs'

const buildApiDataExamples = async () => {
  const codeExamplesGlob = fromRoot('code-examples/api/*')
  await ensureValidExampleExtensions({ codeExamplesGlob })

  const getBuiltFpath = ({ fname, fpath }) => {
    const utilNameRe = /code-examples\/api\/([^/]+)/
    const utilName = fpath.match(utilNameRe)[1]
    return `app/built/code-examples/api/${utilName}/code/${fname}`
  }

  await Promise.all([
    buildExampleSourceFiles({ codeExamplesGlob, getBuiltFpath }),
    buildApiIndexFiles(),
  ])
}

export default buildApiDataExamples
