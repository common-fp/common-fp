import cpy from 'cpy'
import { fromRoot } from './utils.mjs'
import createIndexJs from './create-index-js.mjs'

const buildJs = async () => {
  await cpy(fromRoot('src/**/*.mjs'), fromRoot('dist'))
  await createIndexJs()
}

export default buildJs
