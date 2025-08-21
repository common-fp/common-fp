const arr = ['b', 'c']
const prependA = mPrependOne('a')
const mutatedArr = prependA(arr)

console.log(mutatedArr === arr) // is true
console.log(arr) // is ['a', 'b', 'c']
