import { assertArgIsType, getRandomInt } from '@common-fp/shared-internals'

const shuffle = anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'shuffle')

  const result = [...anArray]
  const len = result.length
  for (let i = 0; i < len - 1; i += 1) {
    const randomI = getRandomInt(i, len - 1)
    if (randomI === i) continue

    const tmp = result[i]
    result[i] = result[randomI]
    result[randomI] = tmp
  }

  return result
}

export default shuffle
