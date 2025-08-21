import cpy from 'cpy'
import { fromRoot } from './utils.mjs'
import createIndexJs from './create-index-js.mjs'

const buildJs = async () => {
  await cpy(fromRoot('src/internal/**/*.mjs'), fromRoot('dist/internal'))

  const allSrcFiles = fromRoot('src/lib/**/*.mjs')
  const allIdxSrcFiles = fromRoot('src/lib/**/index.mjs')
  await cpy([allSrcFiles, `!${allIdxSrcFiles}`], fromRoot('dist'), {
    flat: true,
  })
  await createIndexJs()
}

export default buildJs
