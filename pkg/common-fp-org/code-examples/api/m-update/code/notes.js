const inc = n => n + 1
const dec = n => n - 1

const updateFirstTwo = mUpdate([inc, dec])
const arr = [1, 5, 3]
updateFirstTwo(arr)
console.log(arr) // is [2, 4, 3]

const obj = { a: 1 }
try {
  updateFirstTwo(obj)
} catch (err) {
  console.log(err)
  /// prints
  // mUpdate requires argument 'collection' to be an array since you passed an array for 'mapperFns'
}
