import traverseAst from './traverse-ast'

/**
 * CharPosition represents the first position of the error, where the error
 * comes from the stack trace and position from its line + column. This method
 * finds the ast node this position corresponds to, and returns the range
 * [start, end] so we can turn that into a lint error.
 */

const getErrorRangeFromCharPosition = async charPosition => {
  const searchIdx = charPosition
  let traversingFurtherAway = false
  let closestDistance = Infinity
  let errorRange

  const onNodeEntered = node => {
    const distance = Math.abs(searchIdx - node.pos)
    traversingFurtherAway = distance > closestDistance
    if (distance < closestDistance) {
      errorRange = [node.pos + 1, node.end]
      closestDistance = distance
    }

    return !traversingFurtherAway
  }

  await traverseAst(onNodeEntered)

  return errorRange
}

export default getErrorRangeFromCharPosition
