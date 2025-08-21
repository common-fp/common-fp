import { parse as parseStacktrace } from 'stacktrace-parser'
import { isFalsey, passThrough, reduceWhile } from '@/fp-utils'
import makeFindOriginalPosition from './make-find-original-position'

const findErrorLocation = (stacktrace, sourcemap) => {
  const exampleFileNames = new Set(['example.mjs', 'example.ts'])
  const findOriginalPosition = makeFindOriginalPosition(sourcemap)
  const originalPos = passThrough(stacktrace, [
    parseStacktrace,
    reduceWhile(isFalsey, errorInExample),
  ])

  // make it one-indexed
  const exampleSource = getExampleSource(sourcemap, exampleFileNames)
  const characterIdx = getCharacterIdx(exampleSource, originalPos)
  originalPos.column += 1
  originalPos.characterIdx = characterIdx
  return originalPos

  function errorInExample(_res, { lineNumber, column }) {
    const pos = findOriginalPosition({
      line: lineNumber,
      column,
    })

    return exampleFileNames.has(pos.source) && pos
  }
}

/**
 * the linting tool uses character index ranges rather than line/col pairs, so
 * this function gets the character index from line and column
 */
function getCharacterIdx(source, position) {
  // position.line is one-indexed, we're searching for the zero-indexed line
  const searchLineIdx = position.line - 1
  let found = false
  const sourceLines = source.split('\n')
  let characterIdx = 0
  let lineIdx = 0
  while (!found) {
    const line = sourceLines[lineIdx]
    // add 1 for the newline character
    if (lineIdx < searchLineIdx) {
      characterIdx += line.length + 1
      lineIdx += 1
    } else {
      characterIdx += position.column
      found = true
    }
  }

  return characterIdx
}

function getExampleSource(sourcemap, exampleFileNames) {
  const idx = sourcemap.sources.findIndex(fname => exampleFileNames.has(fname))
  return sourcemap.sourcesContent[idx]
}

export default findErrorLocation
