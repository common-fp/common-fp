/**
 * this implements my narrow use-case for source-map's
 * SourceMapConsumer.prototype.originalPositionFor
 *
 * I'm writing this because bundling source-map takes almost 800Kb
 *
 * note: I did not test test much at all
 */

import * as vlq from 'vlq'

const props = ['sourcesIdx', 'originalLine', 'originalColumn', 'namesIdx']

const makeFindOriginalPosition = sourcemap => {
  const { sources, names } = sourcemap

  /**
   * decodedLines is an array of objects holding the mappings of each line.
   * Each object is keyed on the column and whose value is the source mapping
   * info.  It allows us to quickly find the original source location from a
   * line and column pair, where we step forward and backward in case the
   * exact source mapping doesn't exist
   */
  const decodedLines = buildDecodedLines(sourcemap)

  const toResultByPropIdx = [
    (res, sourcesIdx) => Object.assign(res, { source: sources[sourcesIdx] }),
    (res, originalLine) => Object.assign(res, { line: originalLine + 1 }),
    (res, originalColumn) => Object.assign(res, { column: originalColumn }),
    (res, namesIdx) => Object.assign(res, { name: names[namesIdx] }),
  ]
  const toOriginalPosition = (res, val, idx) => {
    return toResultByPropIdx[idx](res, val)
  }

  return ({ line: lineOneIndexed, column }) => {
    const line = lineOneIndexed - 1
    let decodedPos = decodedLines[line]?.[column]
    if (decodedPos) {
      return decodedPos.reduce(toOriginalPosition, {})
    }

    const maxCol = Math.max(
      ...Object.keys(decodedLines[line]).map(c => Number(c))
    )
    const earlierPos = { line, column, reachedBeginning: false }
    const laterPos = { line, column, maxCol, reachedEnd: false }
    while (!decodedPos) {
      if (!earlierPos.reachedBeginning) {
        stepBack(earlierPos, decodedLines)
        decodedPos = decodedLines[earlierPos.line]?.[earlierPos.column]
        if (decodedPos) break
      }
      if (!laterPos.reachedEnd) {
        stepForward(laterPos, decodedLines)
        decodedPos = decodedLines[laterPos.line]?.[laterPos.column]
        if (decodedPos) break
      }
    }
    return decodedPos.reduce(toOriginalPosition, {})
  }
}

function stepBack(earlierPos, decodedLines) {
  if (earlierPos.column > 0) earlierPos.column -= 1
  else if (earlierPos.line > 1) {
    earlierPos.line -= 1
    const cols = Object.keys(decodedLines[earlierPos.line]).map(c => Number(c))
    earlierPos.column = cols.length ? Math.max(cols) : 0
  } else {
    earlierPos.reachedBeginning = true
  }
}

function stepForward(laterPos, decodedLines) {
  if (laterPos.column < laterPos.maxCol) laterPos.column += 1
  else if (laterPos.line < decodedLines.length) {
    laterPos.line += 1
    const cols = Object.keys(decodedLines[laterPos.line]).map(c => Number(c))
    laterPos.maxCol = cols.length ? Math.max(cols) : 0
    laterPos.column = 0
  } else {
    laterPos.reachedEnd = true
  }
}

function buildDecodedLines(sourcemap) {
  const decodedLines = []
  const encodedLines = sourcemap.mappings.split(';')
  const prev = {
    generatedColumn: 0,
    namesIdx: 0,
    originalColumn: 0,
    originalLine: 0,
    sourcesIdx: 0,
  }

  for (let i = 0; i < encodedLines.length; i += 1) {
    const line = encodedLines[i]
    const encodedSegments = line.split(',')

    const decodedSegmentByColumn = {}
    for (let j = 0; j < encodedSegments.length; j += 1) {
      const decodedSegment = []
      const segment = encodedSegments[j]
      if (!segment) continue

      const s = vlq.decode(segment)
      const [relativeGeneratedColumn, ...variableProps] = s

      const generatedColumn = prev.generatedColumn + relativeGeneratedColumn
      prev.generatedColumn = generatedColumn

      for (let k = 0; k < variableProps.length; k += 1) {
        const name = props[k]
        const relativeProp = variableProps[k]
        const prop = prev[name] + relativeProp
        prev[name] = prop
        decodedSegment.push(prop)
      }

      decodedSegmentByColumn[generatedColumn] = decodedSegment
    }

    prev.generatedColumn = 0
    decodedLines.push(decodedSegmentByColumn)
  }

  return decodedLines
}

export default makeFindOriginalPosition
