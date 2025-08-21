import { getTsEnvironment } from './utils'

const transpile = async source => {
  const tsEnvironment = await getTsEnvironment()

  tsEnvironment.updateFile('example.ts', source)
  const { outputFiles } =
    tsEnvironment.languageService.getEmitOutput('example.ts')
  let code = outputFiles.find(({ name }) => name === 'example.js').text
  code = code.slice(0, code.lastIndexOf('//# sourceMappingURL='))
  const sourcemap = JSON.parse(
    outputFiles.find(({ name }) => name === 'example.js.map').text
  )
  sourcemap.file = 'example.mjs'
  sourcemap.sourcesContent = [source]
  return { code, sourcemap }
}

export default transpile
