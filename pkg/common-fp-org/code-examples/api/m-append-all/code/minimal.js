const arr = ['a']
const appendBC = mAppendAll(['b', 'c'])
const mutatedArr = appendBC(arr)

console.log(mutatedArr === arr) // is true
console.log(arr) // is ['a', 'b', 'c']
