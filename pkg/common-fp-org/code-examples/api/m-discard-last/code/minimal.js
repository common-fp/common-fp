const mDiscardLast2 = mDiscardLast(2)
const arr = [1, 2, 3, 4]
const mutatedArr = mDiscardLast2(arr)
console.log(mutatedArr === arr) // is true
console.log(arr) // is [1, 2]
