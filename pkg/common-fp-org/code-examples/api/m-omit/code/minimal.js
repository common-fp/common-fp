const obj = { a: 1, b: 2, c: 3, d: 4 }
const omitAC = mOmit(['a', 'c'])
const mutatedObj = omitAC(obj)
console.log(mutatedObj === obj) // is true
console.log(obj) // is { b: 2, d: 4 }
