import estree from 'prettier/plugins/estree'
import { lineCommentTypes } from './utils.mjs'

const printComment = (...args) => {
  const [commentPath, options] = args
  const comment = commentPath.node

  return lineCommentTypes.has(comment.type) ?
      printFormattedComment(comment, options)
    : estree.printComment(...args)
}

//
//------------------//
// Helper Functions //
//------------------//

function printFormattedComment(node) {
  return '//' + node.value
}

export default printComment
