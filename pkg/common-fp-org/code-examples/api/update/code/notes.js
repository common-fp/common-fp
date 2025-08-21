const inc = n => n + 1
const dec = n => n - 1

const updateFirstTwo = update([inc, dec])
const arr = [1, 5, 3]
const updatedArr = updateFirstTwo(arr)
console.log(updatedArr) // is [2, 4, 3]

const obj = { a: 1 }
try {
  updateFirstTwo(obj)
} catch (err) {
  console.log(err)
  /// prints
  // update requires argument 'collection' to be an array since you passed an array for 'mapperFns'
}
