import {
  assertArgIsType,
  assertArgIsInt,
  eol,
} from '@common-fp/shared-internals'

const truncateToNLines = numLines => {
  assertArgIsInt(numLines, 'numLines', 'truncateToNLines', {
    nonNegative: true,
  })

  return aString => {
    assertArgIsType(aString, 'aString', 'string', 'truncateToNLines')

    const { lines, moreLinesExist } = getFirstNLines(numLines, aString)
    if (moreLinesExist) {
      if (numLines === 1) lines[0] += '...'
      else lines.push('...')
    }

    return lines.join(eol)
  }
}

// helper functions

function getFirstNLines(numberOfLinesToGet, aString) {
  const lines = numberOfLinesToGet > 0 ? [''] : []

  let i = 0
  let numLinesReached = false

  while (!numLinesReached && i < aString.length) {
    const currentCharacter = aString[i]
    const nextCharacter = aString[i + 1]

    if (isNewline(currentCharacter, nextCharacter)) {
      if (currentCharacter === '\r') i += 1

      numLinesReached = lines.length === numberOfLinesToGet
      if (!numLinesReached) lines.push('')
    } else lines[lines.length - 1] += aString[i]

    i += 1
  }

  return {
    lines,
    moreLinesExist: numLinesReached && aString.length !== i,
  }
}

function isNewline(currentCharacter, nextCharacter) {
  return (
    currentCharacter === '\n' ||
    (currentCharacter === '\r' && nextCharacter === '\n')
  )
}

export default truncateToNLines
