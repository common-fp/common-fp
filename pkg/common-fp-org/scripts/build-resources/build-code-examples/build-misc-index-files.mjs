import buildExampleIndexJs from './build-example-index-js.mjs'
import { fromRoot } from '../../utils/index.mjs'

const buildMiscIndexFiles = async () => {
  const srcDir = fromRoot(`code-examples/misc/code`)
  const destDir = fromRoot(`app/built/code-examples/misc`)
  await buildExampleIndexJs({ srcDir, destDir })
}

export default buildMiscIndexFiles
