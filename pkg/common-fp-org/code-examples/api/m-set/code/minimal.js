const obj = { a: 'b' }
const setAToC = mSet('a', 'c')
const mutatedObj = setAToC(obj)

console.log(mutatedObj === obj) // is true
console.log(obj) // is { a: 'c' }
