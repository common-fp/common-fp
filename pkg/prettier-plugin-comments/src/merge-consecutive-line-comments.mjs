import {
  getPosEnd,
  getPosStart,
  isFormattable,
  isWholeLineComment,
  lineCommentTypes,
  setPosEnd,
} from './utils.mjs'

// mutates ast
const mergeConsecutiveLineComments = (ast, text) => {
  let mergeStartIdx

  ast.comments = ast.comments.reduce((res, curNode, idx, comments) => {
    const shouldMerge = shouldMergeNext(curNode, idx, comments, text)
    if (!lineCommentTypes.has(curNode.type) || !isFormattable(curNode)) {
      res.push(curNode)
    } else if (!shouldMerge) {
      if (mergeStartIdx === undefined) {
        res.push(curNode)
      } else {
        res.push(mergeLineComments(mergeStartIdx, idx, comments))
        mergeStartIdx = undefined
      }
    } else if (mergeStartIdx === undefined) {
      mergeStartIdx = idx
    }
    return res
  }, [])
}

//
//------------------//
// Helper Functions //
//------------------//

function shouldMergeNext(curNode, idx, comments, text) {
  const nextNode = comments[idx + 1]
  if (
    !nextNode ||
    !lineCommentTypes.has(nextNode.type) ||
    !isWholeLineComment(curNode, text) ||
    !isFormattable(nextNode)
  ) {
    return false
  }

  const curEnd = getPosEnd(curNode)
  const nextStart = getPosStart(nextNode)
  return curEnd === nextStart - 1
}

function mergeLineComments(idxStart, idxEnd, comments) {
  const node = comments[idxStart]
  node.loc.end = comments[idxEnd].loc.end
  setPosEnd(node, getPosEnd(comments[idxEnd]))
  node.value = comments
    .slice(idxStart, idxEnd + 1)
    .map(c => c.value)
    .join('')
  return node
}

export default mergeConsecutiveLineComments
