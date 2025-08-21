const obj = { a: 1, b: 2, c: 3, d: 4 }
const pickAC = mPick(['a', 'c'])
const mutatedObj = pickAC(obj)
console.log(mutatedObj === obj) // is true
console.log(obj) // is { a: 1, c: 3 }
