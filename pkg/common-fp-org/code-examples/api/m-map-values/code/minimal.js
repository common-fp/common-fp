const arr = [1, 2, 3]
const inc = n => n + 1
const incrementAll = mMapValues(inc)
const mutatedArr = incrementAll(arr)
console.log(mutatedArr === arr) // is true
console.log(arr) // is [2, 3, 4]
