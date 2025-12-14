import typescript from 'typescript'
import { Linter } from 'eslint-linter-browserify'
import createEslintConfig from './create-eslint-config'
import { codemirrorTsWorkerApi, getTsEnvironment } from './utils'

// this hack is necessary because typescript-eslint's website bundle expects
// typescript to exist on window.ts
// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/website-eslint/src/mock/typescript.js
let tsEslintWebUtils
initTsEslint()
async function initTsEslint() {
  globalThis.ts = typescript
  tsEslintWebUtils = (
    await import('@/bundles/typescript-eslint-web-utils_v8-39-1')
  ).default
}

let linter
let eslintConfig

const getLints = async () => {
  const tsLints = codemirrorTsWorkerApi
    .getLints({
      path: 'example.ts',
      diagnosticCodesToIgnore: [],
    })
    .map(diagnostic => Object.assign(diagnostic, { source: 'typescript' }))

  const tsEnvironment = await getTsEnvironment()

  const code = tsEnvironment.sys.readFile('example.ts')

  linter ??= new Linter()
  eslintConfig ??= createEslintConfig({ tsEnvironment, tsEslintWebUtils })
  const toCmLintFormat = makeToCmLintFormat(code)
  const removeIgnorableErrors = makeRemoveIgnoreableErrors(code)
  const duplicateErrors = makeDuplicateErrors(tsLints)
  const linterLints = linter
    .verify(code, eslintConfig, 'example.ts')
    .filter(removeIgnorableErrors)
    .map(toCmLintFormat)
    .filter(duplicateErrors)

  return [...tsLints, ...linterLints]
}

function makeDuplicateErrors(tsLints) {
  const messagesByFrom = tsLints.reduce(toMessagesByFrom, {})

  return eslintDiagnostic => {
    const eslintMsg = eslintDiagnostic.message
    const eslintFrom = eslintDiagnostic.from

    const messages = messagesByFrom[eslintFrom] || []
    for (const typescriptMsg of messages) {
      const [largerMessage, smallerMessage] =
        typescriptMsg.length > eslintMsg.length ?
          [typescriptMsg, eslintMsg]
        : [eslintMsg, typescriptMsg]

      if (largerMessage.includes(smallerMessage)) return false
    }

    return true
  }
}

function makeRemoveIgnoreableErrors(code) {
  return eslintDiagnostic => {
    if (
      code === '' &&
      eslintDiagnostic.message ===
        'Parsing error: Did not find a source file for example.ts'
    )
      return false

    return true
  }
}

function toMessagesByFrom(result, tsDiagnostic) {
  if (!result[tsDiagnostic.from]) result[tsDiagnostic.from] = []
  result[tsDiagnostic.from].push(tsDiagnostic.message)
  return result
}

function makeToCmLintFormat(code) {
  return eslintDiagnostic => {
    const { message, ruleId, severity } = eslintDiagnostic
    const eslintToCmSeverity = {
      1: 'warning',
      2: 'error',
    }
    const { from, to } = getFromTo(code, eslintDiagnostic)

    const result = {
      from,
      message,
      severity: eslintToCmSeverity[severity],
      source: ruleId || 'eslint',
      to,
    }

    return result
  }
}

/**
 * This logic for getting the position for each diagnostic is slightly wasteful
 * but negligible for our use-case.
 */
function getFromTo(code, eslintDiagnostic) {
  const {
    line,
    column: eslintColumn,
    endLine,
    endColumn: eslintEndColumn,
    ruleId,
  } = eslintDiagnostic

  /**
   * The conditional column offset is a hack to solve an issue where the column
   * on parsing errors doesn't match that same error from typescript. The goal
   * is to filter eslint errors that are already brought up by typescript. It's
   * possible I can simply filter all diagnostics from eslint that don't have a
   * rule, where we'd assume those are already cought by typescript. But we can
   * figure it out as we encounter more issues.
   */
  let column = eslintColumn
  let endColumn = eslintEndColumn
  if (ruleId) {
    column -= 1
    endColumn -= 1
  }
  const from = getPos(code, line - 1, column)

  return {
    from,
    to:
      Number.isInteger(endLine) && Number.isInteger(endColumn) ?
        getPos(code, endLine - 1, endColumn)
      : from,
  }
}

function getPos(code, zeroIndexedLine, column) {
  let pos = 0
  let curLine = 0
  const lines = code.split('\n')

  while (curLine < zeroIndexedLine) {
    pos += lines[curLine].length + 1
    curLine += 1
  }
  return pos + column
}

export default getLints
