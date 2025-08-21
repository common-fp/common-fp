const inc = (n: number) => n + 1
const dec = (n: number) => n - 1

const updateFirstTwo = update([inc, dec])
const arr = [1, 5, 3]
const updatedArr = updateFirstTwo(arr)
console.log(updatedArr) // is [2, 4, 3]

const obj = { a: 1 }
updateFirstTwo(obj) // ts requires an array
