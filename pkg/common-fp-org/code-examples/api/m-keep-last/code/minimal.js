const mKeepLast2 = mKeepLast(2)

const arr = [1, 2, 3, 4]
const mutatedArr = mKeepLast2(arr)
console.log(mutatedArr === arr) // is true
console.log(arr) // is [3, 4]
