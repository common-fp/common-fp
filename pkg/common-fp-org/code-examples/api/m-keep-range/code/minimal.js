const range = { startIdx: 1, endIdx: 2 }
const mKeep2ndAnd3rd = mKeepRange(range)

const arr = [1, 2, 3, 4]
const mutatedArr = mKeep2ndAnd3rd(arr)
console.log(mutatedArr === arr) // is true
console.log(arr) // is [2, 3]
