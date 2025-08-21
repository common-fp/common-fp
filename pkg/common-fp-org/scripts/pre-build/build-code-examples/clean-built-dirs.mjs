import { deleteAsync } from 'del'
import { makeDirectory } from 'make-dir'
import { getPageNames, getUtilNames } from '../utils.mjs'
import { fromRoot } from '../../utils/index.mjs'

const cleanBuiltDirs = async () => {
  await deleteAsync(fromRoot('app/built/code-examples'))
  const [utilNames, pageNames] = await Promise.all([
    getUtilNames(),
    getPageNames(),
  ])
  const makePageDirs = pageNames.map(name =>
    makeDirectory(fromRoot(`app/built/code-examples/pages/${name}/code`))
  )
  const makeUtilDirs = utilNames.map(name =>
    makeDirectory(fromRoot(`app/built/code-examples/api/${name}/code`))
  )
  const makeMiscDir = makeDirectory(
    fromRoot(`app/built/code-examples/misc/code`)
  )
  await Promise.all([...makePageDirs, ...makeUtilDirs, makeMiscDir])
}

export default cleanBuiltDirs
