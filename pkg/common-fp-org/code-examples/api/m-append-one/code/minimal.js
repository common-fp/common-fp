const arr = ['a', 'b']
const pushC = mAppendOne('c')
const mutatedArr = pushC(arr)

console.log(mutatedArr === arr) // is true
console.log(arr) // is ['a', 'b', 'c']
