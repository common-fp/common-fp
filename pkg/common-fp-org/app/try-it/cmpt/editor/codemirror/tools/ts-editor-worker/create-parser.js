import defaultParseSettings from './default-parse-settings'

const createParser = ({ tsEnvironment, tsEslintWebUtils }) => {
  const { analyze, astConverter, visitorKeys } = tsEslintWebUtils
  const registeredFiles = new Set()

  return { parseForESLint }

  function parseForESLint(text, options) {
    const filePath = options.filePath ?? 'example.ts'

    // if text is empty use empty line to avoid error
    const code = text || '\n'

    if (registeredFiles.has(filePath)) {
      tsEnvironment.updateFile(filePath, code)
    } else {
      registeredFiles.add(filePath)
      tsEnvironment.createFile(filePath, code)
    }

    const parseSettings = {
      ...defaultParseSettings,
      code,
      codeFullText: code,
      filePath,
    }

    const program = tsEnvironment.languageService.getProgram()
    if (!program) {
      throw new Error('Failed to get program')
    }

    const tsAst = program.getSourceFile(filePath)

    const converted = astConverter(tsAst, parseSettings, true)

    const scopeManager = analyze(converted.estree, {
      globalReturn: options.ecmaFeatures?.globalReturn ?? false,
      sourceType: options.sourceType ?? 'module',
    })

    const checker = program.getTypeChecker()
    const compilerOptions = program.getCompilerOptions()

    return {
      ast: converted.estree,
      scopeManager,
      services: {
        emitDecoratorMetadata: compilerOptions.emitDecoratorMetadata ?? false,
        esTreeNodeToTSNodeMap: converted.astMaps.esTreeNodeToTSNodeMap,
        experimentalDecorators: compilerOptions.experimentalDecorators ?? false,
        getSymbolAtLocation: node =>
          checker.getSymbolAtLocation(
            converted.astMaps.esTreeNodeToTSNodeMap.get(node)
          ),
        getTypeAtLocation: node =>
          checker.getTypeAtLocation(
            converted.astMaps.esTreeNodeToTSNodeMap.get(node)
          ),
        program,
        tsNodeToESTreeNodeMap: converted.astMaps.tsNodeToESTreeNodeMap,
      },
      visitorKeys,
    }
  }
}

export default createParser
