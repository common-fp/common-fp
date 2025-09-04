import buildExampleSourceFiles from './build-example-source-files.mjs'
import buildExampleIndexJs from './build-example-index-js.mjs'
import ensureValidExampleExtensions from './ensure-valid-example-extensions.mjs'
import { getPageNames } from '../utils.mjs'
import { fromRoot } from '../../utils/index.mjs'

const buildPageExamples = async () => {
  const codeExamplesGlob = fromRoot('code-examples/pages/*')
  await ensureValidExampleExtensions({ codeExamplesGlob })

  const getBuiltFpath = ({ fname, fpath }) => {
    const page = fpath.match(/code-examples\/pages\/([^/]+)/)[1]
    return fromRoot(`app/built/code-examples/pages/${page}/code/` + fname)
  }

  const pageNames = await getPageNames()
  const builtPageExampleIndexes = pageNames.map(page => {
    const srcDir = fromRoot(`code-examples/pages/${page}/code`)
    const destDir = fromRoot(`app/built/code-examples/pages/${page}`)
    return buildExampleIndexJs({ srcDir, destDir })
  })

  await Promise.all([
    buildExampleSourceFiles({ codeExamplesGlob, getBuiltFpath }),
    ...builtPageExampleIndexes,
  ])
}

export default buildPageExamples
