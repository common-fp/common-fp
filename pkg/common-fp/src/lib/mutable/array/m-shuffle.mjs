import { assertArgIsType, getRandomInt } from '@common-fp/shared-internals'

const mShuffle = anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'mShuffle')

  const len = anArray.length
  for (let i = 0; i < len - 1; i += 1) {
    const randomI = getRandomInt(i, len - 1)
    if (randomI === i) continue

    const tmp = anArray[i]
    anArray[i] = anArray[randomI]
    anArray[randomI] = tmp
  }

  return anArray
}

export default mShuffle
