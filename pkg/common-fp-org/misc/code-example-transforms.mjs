/**
 * This file holds common transforms which turn the code from the displayed
 * example to the full example .i.e. the one seen when clicking 'Try It'
 *
 * We use transforms to avoid copy/paste when possible. If transforms would be
 * too messy then we can still resort to hardcoding the full example with the
 * suffix `_full.<ext>`
 */

import dedent from 'dedent'

const append = codeToAppend => code => code + codeToAppend

/**
 * Sometimes I prefer to convey a result without console.log e.g.
 *
 *     append3([1, 2]) // is [1, 2, 3]
 *
 * This transform turns the above line into
 *
 *     const result = append3([1, 2])
 *     show('append3([1, 2])', result)
 */
const changeIsCommentToShow = code => {
  const process = makeProcess(code)

  const lines = code.split('\n')
  let result = ''
  let prevLineProcessed = false
  for (let i = 0; i < lines.length; i += 1) {
    const curLine = lines[i]
    const nextLine = lines[i + 1] || ''
    const isLastLine = i === lines.length - 1

    if (nextLine.startsWith('// is')) {
      result += process(curLine, prevLineProcessed) + '\n'
      i += 1
      prevLineProcessed = true
    } else if (curLine.includes(' // is')) {
      result += process(removeComment(curLine), prevLineProcessed) + '\n'
      prevLineProcessed = true
    } else if (!isLastLine) {
      result += curLine + '\n'
      prevLineProcessed = false
    }
  }

  return result.replace(/\n{3}$/, '\n\n')
}

function removeComment(line) {
  return line.replace(/ \/\/.*/, '')
}

function makeProcess(code) {
  const firstIdx = code.indexOf('// is')
  const lastIdx = code.lastIndexOf('// is')
  const hasMultipleIsComments = firstIdx >= 0 && lastIdx > firstIdx

  if (hasMultipleIsComments) {
    let curResult = 1
    return (expression, prevLineProcessed) => {
      const breathingRoom = prevLineProcessed ? '\n' : ''
      const result = `result${curResult}`
      curResult += 1
      return (
        breathingRoom +
        dedent(`
        const ${result} = ${expression}
        show("${expression}", ${result})
      `)
      )
    }
  } else {
    return (expression, prevLineProcessed) => {
      const breathingRoom = prevLineProcessed ? '\n' : ''
      return (
        breathingRoom +
        dedent(`
        const result = ${expression}
        show("${expression}", result)
      `)
      )
    }
  }
}

const changeLogToShow = code =>
  code
    .split('\n')
    .map(line => line.replace('console.log', 'show'))
    .join('\n')

const prepend = codeToPrepend => code => codeToPrepend + code

const prependImport = name => code =>
  `import { ${name} } from 'common-fp'\n\n` + code

const removeComments = code =>
  code
    .split('\n')
    .filter(line => !line.trim().startsWith('//'))
    // If this regex starts causing bugs then let's eat the
    // performance/complexity hit and parse an ast
    .map(line => line.replace(/(?<!\S\/?)\/\/.*/, ''))
    .join('\n')

export {
  append,
  changeIsCommentToShow,
  changeLogToShow,
  prepend,
  prependImport,
  removeComments,
}
