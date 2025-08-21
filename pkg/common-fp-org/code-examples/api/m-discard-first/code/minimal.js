const mDiscardFirst2 = mDiscardFirst(2)
const arr = [1, 2, 3, 4]
const mutatedArr = mDiscardFirst2(arr)
console.log(mutatedArr === arr) // is true
console.log(arr) // is [3, 4]
