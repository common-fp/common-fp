const arr = ['c']
const prependAB = mPrependAll(['a', 'b'])
const mutatedArr = prependAB(arr)

console.log(mutatedArr === arr) // is true
console.log(arr) // is ['a', 'b', 'c']
