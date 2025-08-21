const mKeepFirst2 = mKeepFirst(2)

const arr = [1, 2, 3, 4]
const mutatedArr = mKeepFirst2(arr)
console.log(mutatedArr === arr) // is true
console.log(arr) // is [1, 2]
