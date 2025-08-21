const ab = { a: 1, b: 2 }
const assignDefaultsAB = mAssignDefaults(ab)
const obj = { a: 2, c: 3 }
const mutatedObj = assignDefaultsAB(obj)

console.log(mutatedObj === obj) // is true
console.log(obj) // is { a: 2, c: 3, b: 2 }
