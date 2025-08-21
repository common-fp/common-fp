import dedent from 'dedent'
import { camelCase } from 'change-case'
import getCodeExampleFilePaths from './get-code-example-file-paths.mjs'

let filePaths

const getDoesTsExampleExist = async typeName => {
  filePaths = await getCodeExampleFilePaths()

  return typeName === 'misc' ? doesMiscExampleExist : (
      makeDoesApiOrPagesTsExampleExist(typeName)
    )
}

function doesMiscExampleExist(exampleFileName) {
  const example = filePaths.misc[exampleFileName]
  const exampleName = camelCase(exampleFileName)

  if (!example) {
    const msg = dedent(`
      misc example not found: code-examples/misc/code/${exampleFileName}
      this means the test data declared an example '${exampleName}' which
      doesn't exist.
    `)
    throw new Error(msg)
  }

  return example.has('ts')
}

function makeDoesApiOrPagesTsExampleExist(typeName) {
  return function doesApiOrPagesTsExampleExist(exampleFileName, dirName) {
    const utilDir = filePaths[typeName][dirName]
    const dirNameCamel = camelCase(dirName)
    const utilityOrPage = typeName === 'api' ? 'utility' : 'page'
    if (!utilDir) {
      const msg = dedent(`
        directory not found: code-examples/${typeName}/${dirName}
        this means the test data declared a ${utilityOrPage} '${dirNameCamel}'
        which either doesn't exist or doesn't have example code
      `)
      throw new Error(msg)
    }

    const exampleDir = utilDir[exampleFileName]
    if (!exampleDir) {
      const exampleName = camelCase(exampleFileName)
      const msg = dedent(`
        directory not found: code-examples/${typeName}/${dirName}/code/${exampleFileName}
        this means the test data declared an example '${exampleName}' which
        doesn't exist for ${utilityOrPage} ${dirNameCamel}
      `)
      throw new Error(msg)
    }

    return exampleDir.has('ts')
  }
}

export default getDoesTsExampleExist
