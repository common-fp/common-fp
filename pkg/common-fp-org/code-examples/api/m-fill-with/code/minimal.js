const mZeroOut = mFillWith(0)
const arr = [1, 2, 3]
const mutatedArr = mZeroOut(arr)
console.log(mutatedArr === arr) // is true
console.log(arr) // is [0, 0, 0]
