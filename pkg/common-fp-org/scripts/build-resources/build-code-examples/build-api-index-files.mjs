import fsp from 'node:fs/promises'
import buildExampleIndexJs from './build-example-index-js.mjs'
import { getUtilNames, myCamelCase } from '../utils.mjs'
import { fromRoot } from '../../utils/index.mjs'

const buildApiIndexFiles = async () => {
  const utilNames = await getUtilNames()
  await Promise.all(utilNames.map(buildUtilIndexFile))
  await buildTopLevelIndexFile(utilNames)
}

async function buildUtilIndexFile(utilName) {
  const srcDir = fromRoot(`code-examples/api/${utilName}/code`)
  const destDir = fromRoot(`app/built/code-examples/api/${utilName}`)
  await buildExampleIndexJs({ srcDir, destDir })
}

async function buildTopLevelIndexFile(utilNames) {
  const content = utilNames.reduce((res, name) => {
    const codeName = myCamelCase(name)
    return (
      res + `export { default as ${codeName} } from './${name}/code/index.js'\n`
    )
  }, '')

  await fsp.writeFile(fromRoot('app/built/code-examples/api/index.js'), content)
}

export default buildApiIndexFiles
