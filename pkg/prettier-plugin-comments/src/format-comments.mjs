import {
  getBeginningSpace,
  getPosStart,
  isFormattable,
  isWholeLineComment,
  lineCommentTypes,
} from './utils.mjs'

// mutates ast
const formatComments = (ast, text, options) => {
  const wholeLineComments = ast.comments.filter(
    node => lineCommentTypes.has(node.type) && isWholeLineComment(node, text)
  )

  wholeLineComments.filter(isFormattable).forEach(node => {
    const beginningSpace = getBeginningSpace(getPosStart(node), text)
    node.value = formatOneComment(node.value, beginningSpace, options)
  })
}

function formatOneComment(str, beginningSpace, options) {
  const { printWidth } = options
  let beginningLength = beginningSpace.length
  let maxWidth = printWidth - beginningSpace.length - '//'.length
  let isFirstLine = true

  let result = ''
  while (str.length > maxWidth) {
    let sliceIndex = str.lastIndexOf(
      ' ',
      str.startsWith('\n') ? maxWidth + 1 : maxWidth
    )

    if (sliceIndex <= beginningLength)
      sliceIndex = str.indexOf(' ', beginningLength + 1)

    if (sliceIndex === -1) sliceIndex = str.length

    result += str.substring(0, sliceIndex)
    str = str.substring(sliceIndex + 1)
    if (str) {
      str = `${beginningSpace}// ${str}`
      str = `\n${str}`
      if (isFirstLine) {
        isFirstLine = false
        // after the first line we no longer need to account for the leading //
        maxWidth = printWidth - beginningSpace.length
        beginningLength = beginningSpace.length + '// '.length
      }
    }
  }

  result += str

  return result
}

export default formatComments
