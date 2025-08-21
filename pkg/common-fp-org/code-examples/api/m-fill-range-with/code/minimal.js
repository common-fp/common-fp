const range = { startIdx: 1, endIdx: 2 }
const zeroOutRange = mFillRangeWith(0, range)

const arr = [1, 2, 3, 4]
const mutatedArr = zeroOutRange(arr)
console.log(mutatedArr === arr) // is true
console.log(arr) // is [1, 0, 0, 4]
