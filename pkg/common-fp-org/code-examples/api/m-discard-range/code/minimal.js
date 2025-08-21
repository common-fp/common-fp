const range = { startIdx: 1, endIdx: 2 }
const mDiscard2ndAnd3rd = mDiscardRange(range)

const arr = [1, 2, 3, 4]
const mutatedArr = mDiscard2ndAnd3rd(arr)
console.log(mutatedArr === arr) // is true
console.log(arr) // is [1, 4]
